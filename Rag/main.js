import {PDFParse} from "pdf-parse";
import fs from "fs";

let dataBuffer = fs.readFileSync("story.pdf");

const data = await pdf.parse(dataBuffer);

console.log(data.text);
