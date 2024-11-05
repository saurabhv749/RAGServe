import path from "path";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { HfInference } from "@huggingface/inference";
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import { generationConfig, embeddingConfig, getErrorResponse, systemPrompt } from "./config";
import { createPrompt } from "./utils";

let vectorStore: FaissStore;
/**
 * Prepare vector database
*/
async function createVectorStore() {
  // Prepare documents
  const FileName = path.join(process.cwd(), "data", "doc.txt");
  const loader = new TextLoader(FileName);
  const docs = await loader.load();

  // Split documents
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: embeddingConfig.chunkSize,
    chunkOverlap: embeddingConfig.chunkOverlap,
  });
  const chunkedDocs = await splitter.splitDocuments(docs);

  const embedder = new HuggingFaceInferenceEmbeddings({
    apiKey: process.env.HF_API_TOKEN,
    model: embeddingConfig.model,
  });
  vectorStore = await FaissStore.fromDocuments(chunkedDocs, embedder);
  console.log('vectorStore created');
}

const LLM = new HfInference(process.env.HF_API_TOKEN);


/**
 * Ask the LLM a question and get an answer
 * @param userQuery the question to ask the LLM
 * @returns the answer from the LLM
 */
async function ask(userQuery: string) {
  const relevantDocs = await vectorStore.similaritySearch(userQuery);
  // get relevant context
  const contextText = relevantDocs.reduce(
    (content, doc) => (content += doc.pageContent),
    ""
  );

  try {
    const prompt = createPrompt(userQuery, contextText);
    const messages = [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: prompt,
      },
    ];
    const stream = LLM.chatCompletionStream({
      messages,
      ...generationConfig
    });

    let out = "";
    for await (const chunk of stream) {
      if (chunk.choices && chunk.choices.length > 0) {
        const newContent = chunk.choices[0].delta.content;
        out += newContent;
      }
    }
    return out;
  } catch (error) {
    console.error(error);
    return getErrorResponse();
  }
}

export { ask, createVectorStore };
