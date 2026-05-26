import { PDFParse } from "pdf-parse";
import fs from "fs";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import "dotenv/config";
import { MistralAIEmbeddings } from "@langchain/mistralai";
import { Pinecone } from "@pinecone-database/pinecone";
import { log } from "console";

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});

const index = pc.index("rag-learn");

let dataBuffer = fs.readFileSync("story.pdf");

const parser = new PDFParse({
  data: dataBuffer,
});

const data = await parser.getText();

const embeddings = new MistralAIEmbeddings({
  apiKey: process.env.MISTRALAI_API_KEY,
  Model: "mistral-embed",
});

console.log(data);

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 500,
  chunkOverlap: 0,
});

const chunks = await splitter.splitText(data.text);

const docs = await Promise.all(
  chunks.map(async (chunk) => {
    const embedding = await embeddings.embedQuery(chunk);
    return {
      text: chunk,
      embedding: embedding,
    };
  }),
);

const result = await index.upsert({
  records: docs.map((doc, i) => ({
    id: `doc-${i}`,
    values: doc.embedding,
    metadata: {
      text: doc.text,
    },
  })),
});

console.log(result);
