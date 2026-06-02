import { StateGraph, StateSchema, type GraphNode } from "@langchain/langgraph";
import z from "zod";
import { geminiModel, mistralModel, cohereModel } from "./models.service.js";

/**
 * StateSchema => Then StateSchema defines that structure.
 */

/**
 * Zod is a TypeScript-first schema declaration and validation library. It allows you to define the shape of your data and provides powerful validation capabilities. In this code snippet, we are using Zod to define the structure of our state, which includes two string properties: `problem` and `solution_1`, both of which have default values of an empty string.
 */

const state = new StateSchema({  // node mai jo data transfer hoga uska structure define krne ke liye use hota hai, and state ke form main transfer hota hai
  problem: z.string().default(""),
  solution_1: z.string().default(""),
  solution_2: z.string().default(""),
  judge: z.object({
    solution_1_score: z.number().default(0),
    solution_2_score: z.number().default(0),
    solution_1_reasoning: z.string().default(""),
    solution_2_reasoning: z.string().default(""),
  }),
});

const solutionNode: GraphNode<typeof state> = (state) => {

  const [] = await Promise.all([
    mistralModel.invoke(state.problem),
    cohereModel.invoke(state.problem),
  ]);
};
