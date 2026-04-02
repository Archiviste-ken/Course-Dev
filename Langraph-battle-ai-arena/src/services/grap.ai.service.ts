import { HumanMessage } from "@langchain/core/messages";
import {
  StateSchema,
  MessagesValue,
  ReducedValue,
  StateGraph,
  START,
  END,
  type GraphNode,
} from "@langchain/langgraph";

import { mistralModel, cohereModel, geminiModel } from "./models.service.js";
import { createAgent, providerStrategy } from "langchain";
import { z } from "zod";

const scoreSchema = z.object({
  solution_1_score: z.number().min(0).max(10),
  solution_2_score: z.number().min(0).max(10),
});

function getMessageText(message: { content: unknown }): string {
  const content = message.content;

  if (typeof content === "string") {
    return content;
  }

  if (!Array.isArray(content)) {
    return "";
  }

  return content
    .map((part: unknown) => {
      if (typeof part === "string") {
        return part;
      }

      if (
        part &&
        typeof part === "object" &&
        "text" in part &&
        typeof (part as { text?: unknown }).text === "string"
      ) {
        return (part as { text: string }).text;
      }

      return "";
    })
    .join("\n");
}

function getModelText(response: { content: unknown }): string {
  const content = response.content;

  if (typeof content === "string") {
    return content;
  }

  if (Array.isArray(content)) {
    return content
      .map((part) => {
        if (typeof part === "string") {
          return part;
        }

        if (
          part &&
          typeof part === "object" &&
          "text" in part &&
          typeof (part as { text?: unknown }).text === "string"
        ) {
          return (part as { text: string }).text;
        }

        return "";
      })
      .join("\n");
  }

  return "";
}

const State = new StateSchema({
  messages: MessagesValue,
  solution_1: new ReducedValue(z.string().default(""), {
    reducer: (current, next) => {
      return next;
    },
  }),
  solution_2: new ReducedValue(z.string().default(""), {
    reducer: (current, next) => {
      return next;
    },
  }),
  judge_recommendation: new ReducedValue(
    scoreSchema.default({
      solution_1_score: 0,
      solution_2_score: 0,
    }),
    {
      reducer: (current, next) => {
        return next;
      },
    },
  ),
});

type GraphState = typeof State.State;

const solutionNode: GraphNode<typeof State> = async (state: GraphState) => {
  console.log(state);

  const userPrompt =
    state.messages.length > 0
      ? getMessageText(state.messages[0] as HumanMessage)
      : "";

  const [mistral_solution, cohere_solution] = await Promise.all([
    mistralModel.invoke(userPrompt),
    cohereModel.invoke(userPrompt),
  ]);

  return {
    solution_1: getModelText(mistral_solution),
    solution_2: getModelText(cohere_solution),
  };
};

const judgeNode: GraphNode<typeof State> = async (state: GraphState) => {
  console.log("invoking judge with state", state);

  const { solution_1, solution_2 } = state;

  const judge = createAgent({
    model: geminiModel,
    tools: [],
    responseFormat: providerStrategy(scoreSchema),
  });

  const promptText =
    state.messages.length > 0
      ? getMessageText(state.messages[0] as HumanMessage)
      : "";

  const judgeResponse = await judge.invoke({
    messages: [
      new HumanMessage(
        `You are a judge tasked with evaluating the quality of two solutions to a problem. The problem is: ${promptText}. The first solution is: ${solution_1}. The second solution is: ${solution_2}. Please provide a score between 0 and 10 for each solution, where 0 means the solution is completely incorrect or irrelevant, and 10 means the solution is perfect and fully addresses the problem.`,
      ),
    ],
  });

  const result = judgeResponse.structuredResponse;

  return {
    judge_recommendation: result,
  };
};

const graph = new StateGraph(State)
  .addNode("solution", solutionNode)
  .addNode("judge", judgeNode)
  .addEdge(START, "solution")
  .addEdge("solution", "judge")
  .addEdge("judge", END)
  .compile();

export default async function (userMessage: string) {
  const result = await graph.invoke({
    messages: [new HumanMessage(userMessage)],
  });

  console.log(result);

  return result;
}
