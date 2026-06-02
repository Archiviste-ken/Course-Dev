import {
  END,
  START,
  StateGraph,
  StateSchema,
  type GraphNode,
  type CompiledStateGraph,
} from "@langchain/langgraph";
import z from "zod";
import { geminiModel, mistralModel, cohereModel } from "./models.service.js";
import { createAgent, HumanMessage, providerStrategy } from "langchain";

/**
 * StateSchema => Then StateSchema defines that structure.
 */

/**
 * Zod is a TypeScript-first schema declaration and validation library. It allows you to define the shape of your data and provides powerful validation capabilities. In this code snippet, we are using Zod to define the structure of our state, which includes two string properties: `problem` and `solution_1`, both of which have default values of an empty string.
 */

const state = new StateSchema({
  // node mai jo data transfer hoga uska structure define krne ke liye use hota hai, and state ke form main transfer hota hai
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

const solutionNode: GraphNode<typeof state> = async (state) => {
  // graph node is a type and typeof state is the input the graph node will receive and ask for.

  const [mistralResponse, cohereResponse] = await Promise.all([
    mistralModel.invoke(state.problem),
    cohereModel.invoke(state.problem),
  ]);

  return {
    solution_1: mistralResponse.text,
    solution_2: cohereResponse.text,
  };
};

const judgeNode: GraphNode<typeof state> = async (state) => {
  const { problem, solution_1, solution_2 } = state;

  /**
   * judge response => "the score of the solution 1 is 7 because it provides a clear and concise answer to the problem, while the score of solution 2 is 5 because it is less detailed and lacks specific examples."
   */

  // above one is not structured.

  /**
   * judge response = {
   * solution_1_score: 7,
   * solution_2_score: 3,
   * solution_1_reasoning: "the score of the solution 1 is 7 because it provides a clear and concise answer to the problem",
   * solution_2_reasoning: "the score of solution 2 is 3 because it is less detailed and lacks specific examples."
   * }
   */

  // above one is structured and we can easily parse it.

  // so we create an agent that will give us the structured response.

  const judge = createAgent({
    model: geminiModel,
    responseFormat: providerStrategy(
      z.object({
        solution_1_score: z.number().min(0).max(10),
        solution_2_score: z.number().min(0).max(10),
        solution_1_reasoning: z.string(),
        solution_2_reasoning: z.string(),
      }),
    ),

    systemPrompt: `You are a judge that evaluates two solutions to a given problem. You will be provided with a problem and two solutions. Your task is to score each solution on a scale of 0 to 10, where 0 means the solution is completely ineffective and 10 means the solution is perfect. Additionally, you must provide reasoning for the scores you assign to each solution.`,
  });
  const judgeResponse = await judge.invoke({
    messages: [
      new HumanMessage(`
        
        Problem: ${problem},
        Solution 1: ${solution_1},
        Solution 2: ${solution_2}
        Please evaluate the two solutions and provide scores and reasoning for each solution.
        
      `),
    ],
  });

  const {
    solution_1_score,
    solution_2_score,
    solution_1_reasoning,
    solution_2_reasoning,
  } = judgeResponse.structuredResponse;

  return {
    judge: {
      solution_1_score,
      solution_2_score,
      solution_1_reasoning,
      solution_2_reasoning,
    },
  };
};

const graph = new StateGraph(state)
  .addNode("solution", solutionNode)
  .addNode("judge_node", judgeNode)
  .addEdge(START, "solution")
  .addEdge("solution", "judge_node")
  .addEdge("judge_node", END)
  .compile();

export default async function runGraph(problem: string) {
  const result = await graph.invoke({
    problem: problem,
  });
  return result;
}
