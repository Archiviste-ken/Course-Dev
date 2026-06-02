import express from "express";
import runGraph from  "./services/graph.ai.service.js"

const app = express();

app.use(express.json());

app.post("/use-graph", async (req, res) => {
await runGraph("What is the capital of France?")
})


export default app;
