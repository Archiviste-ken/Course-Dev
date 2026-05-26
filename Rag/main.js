import { PDFParse } from "pdf-parse";
import fs from "fs";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

let dataBuffer = fs.readFileSync("story.pdf");

const parser = new PDFParse({
  data: dataBuffer,
});

const data = await parser.getText();

console.log(data);

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 10,
  chunkOverlap: 0,
});

const chunks = await splitter.splitText(data.text);
console.log(chunks);
