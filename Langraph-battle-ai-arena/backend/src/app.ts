import express from "express";
import runGraph from "./services/graph.ai.service.js";

const app = express();
app.use(express.json());

app.get("/use-graph", async (req, res) => {
  const result = await runGraph("Write an code for Factorial function in js");

  res.json(result);
});

app.post("/invoke", async (req, res) => {
  const { input } = req.body;
  const result = await runGraph(input);

  res.status(200).json({
    message: "Graph executed successfully",
    success: true,
    result,
  });
});

export default app;
