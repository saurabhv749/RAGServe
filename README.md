# RAGServe

A simple chatbot API for your website using [RAG](https://js.langchain.com/docs/tutorials/rag/#what-is-rag) and [langchain](https://www.langchain.com/).

## Usage

1. Clone the repository
2. Add your additional information in `data/doc.txt` arranged in different sections so that chunking does not effect RAG performance much 
3. Create a `.env` file with `HF_API_TOKEN` inside
4. Run `npm install`
5. Run `npm run build`
6. Run `npm start`

## Options

You can change `system prompt`, `generation` and `embedding` configurations can be changed in `/assistant/config.ts`.