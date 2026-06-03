import express from "express";
import runGraph from "./services/graph.ai.service.js";

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");

  if (req.method === "OPTIONS") {
    res.sendStatus(204);
    return;
  }

  next();
});

app.get("/use-graph", async (req, res) => {
  const result = await runGraph("Write an code for Factorial function in js");

  res.json(result);
});

app.post("/api/arena", async (req, res) => {
  const problem = req.body?.problem ?? req.body?.input;

  if (!problem || typeof problem !== "string") {
    res.status(400).json({ error: "Problem prompt is required." });
    return;
  }

  try {
    const result = await runGraph(problem);
    res.status(200).json(result);
  } catch (error) {
    console.error("Arena invocation failed:", error);
    res.status(500).json({ error: "Failed to run arena." });
  }
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
