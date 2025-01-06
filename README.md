# RAGServe

A simple chatbot API for your website using [RAG](https://js.langchain.com/docs/tutorials/rag/#what-is-rag) and [langchain](https://www.langchain.com/).

## Features

**LLM-Powered Conversations**: Uses advanced models like Llama-3.2 and BAAI's embedding model for intelligent and contextual responses.
**Vector-Based Contextual Search**: Enhances relevance using FAISS to search similar contexts in preprocessed documents.
**Customizable Personality**: Embodies the personality of Gargi, a wise and knowledgeable assistant with a touch of humor.
**Modular Design**: Easy-to-understand codebase with clear separation of concerns.

## Prerequisites

Node.js (v16 or later)
TypeScript
Hugging Face API key (for accessing models)
FAISS for vector-based similarity search

## Usage

1. Clone the repository
2. Add your additional information in `data/doc.txt` arranged in different sections so that chunking does not effect RAG performance much 
3. Create a `.env` file with `HF_API_TOKEN` inside
4. Run `npm install`
5. Run `npm run build`
6. Run `npm start` to start the node.js server

## Customization
- **Change the Assistant's Personality**: Modify the systemPrompt in `assistant/config.ts` to customize Gargi's character.
- **Switch Models**: Update the model field in embeddingConfig and generationConfig in `assistant/config.ts` to use different Hugging Face models.
- **Add More Data**: Add additional documents to the `data/` folder and update `doc.txt` as needed.

## How It Works
1. **Document Processing**:
  The application reads doc.txt and preprocesses it into smaller chunks for efficient similarity search using FAISS.
2. **User Query Handling**:
  When a query is sent to /assistant/ask, the server:
  Searches the vector store for relevant context.
  Combines the query and context into a prompt.
  Sends the prompt to Hugging Face's language model for response generation.
3. **Error Handling**:
  If any issue occurs, the server returns a witty and friendly error message.
