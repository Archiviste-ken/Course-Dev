import express from "express";
import fs from "node:fs";
import path from "node:path";
import runGraph from "./services/graph.ai.js";

const app = express();
const publicDir = path.resolve(process.cwd(), "public");
const defaultJudge = {
  solution_1_score: 0,
  solution_2_score: 0,
  solution_1_reasoning: "",
  solution_2_reasoning: "",
};

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/arena", async (req, res) => {
  const problem = String(req.body?.problem ?? "").trim();

  if (!problem) {
    res.status(400).json({ error: "Problem is required." });
    return;
  }

  try {
    const result = await runGraph(problem);

    res.json({
      problem,
      "solution 1": result.solution_1 ?? "",
      "solution 2": result.solution_2 ?? "",
      judge: result.judge ?? defaultJudge,
    });
  } catch (error) {
    console.error("Arena generation failed:", error);
    res.status(500).json({ error: "Failed to generate arena result." });
  }
});

app.use(express.static(publicDir));

app.get(/^\/(?!api).*/, (_req, res) => {
  const indexPath = path.join(publicDir, "index.html");

  if (!fs.existsSync(indexPath)) {
    res.status(404).json({
      error:
        "Frontend build not found. Run `npm run build` in backend to copy frontend dist into backend/public.",
    });
    return;
  }

  res.sendFile(indexPath);
});

export default app;
