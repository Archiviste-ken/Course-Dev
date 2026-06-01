import { HumanMessage } from "@langchain/core/messages";
import {
  StateSchema,
  MessagesValue,
  StateGraph,
  START,
  END,
  ReducedValue,
  type GraphNode,
} from "@langchain/langgraph";
import { createAgent, providerStrategy } from "langchain";
import { z } from "zod";
import { mistralModel, cohereModel, geminiModel } from "./models.service.js";

// type JUDGEMENT = {
//   winner: "solution_1" | "solution_2";
//   solution_1_score: number;
//   solution_2_score: number;
// };

// type AIBATTLESTATE = {
//   messages: typeof MessagesValue;
//   solution_1: string;
//   solution_2: string;
//   judgment: JUDGEMENT;
// };

// const state: AIBATTLESTATE = {
//   messages: MessagesValue,
//   solution_1: "",
//   solution_2: "",
//   judgment: {
//     winner: "solution_1",
//     solution_1_score: 0,
//     solution_2_score: 0,
//   },
// };

//StateSchema is a way to define the structure of the state that will be used in the graph. It allows you to define the shape of the state and how it can be updated. In this example, we have defined a state schema that includes messages, two solutions, and a judge recommendation. The solutions and judge recommendation are defined as ReducedValues, which means that they will be updated based on the output of the nodes in the graph. The reducer function for each ReducedValue simply replaces the current value with the next value, which means that the state will always reflect the latest output from the nodes.


// zod is used for schema validation. In this example, we are using zod to define the shape of the judge recommendation, which includes the scores for each solution and the winner. This ensures that the data we receive from the judge node is in the expected format and can be safely used in our application.

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
    z.object().default({
      solution_1_score: 0,
      solution_2_score: 0,
      winner: "solution_1",
    }),
    {
      reducer: (current, next) => {
        return next;
      },
    },
  ),
});

//state is like an object that holds the current state of the graph. It can be updated and accessed by the nodes in the graph.

const solutionNode: GraphNode<typeof State> = async (state: typeof State) => {
  // This is where you would implement the logic for generating a solution based on the current state.
  // You can access the current state using the `state` variable and update it as needed.

  console.log(state);

  const [mistral_solution, cohere_solution, gemini_solution] =
    await Promise.all([
      mistralModel.invoke(state.messages[0].text),
      cohereModel.invoke(state.messages[0].text),
      geminiModel.invoke(state.messages[0].text),
    ]);

  return {
    solution_1: mistral_solution.text,
    solution_2: cohere_solution.text,
    solution_3: gemini_solution.text,
  };
};

const judgeNode: GraphNode<typeof State> = async (state: typeof State) => {
  // This is where you would implement the logic for judging the solutions based on the current state.
  // You can access the current state using the `state` variable and update it as needed.
  const { solution_1, solution_2 } = state;

  const judge = createAgent({
    model: geminiModel,
    tools: [],
    responseFormat: providerStrategy(
      z.object({
        solution_1_score: z.number().min(0).max(10),
        solution_2_score: z.number().min(0).max(10),
      }),
    ),
  });

  const judgeResponse = await judge.invoke({
    messages: [
      new HumanMessage(
        `Judge the following two solutions and provide a score between 0 and 10 for each solution. The higher the score, the better the solution. Solution 1: ${solution_1}. Solution 2: ${solution_2}. Also, declare which solution is better based on the scores.`,
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
  .addEdge(START, "solution") // START is by default the entry point of the graph, and END is the exit point. You can add edges between nodes to define the flow of the graph.
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
