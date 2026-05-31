import { HumanMessage } from "@langchain/core/messages";
import {
  StateSchema,
  MessagesValue,
  StateGraph,
  START,
  END,
  ReducedValue,
} from "@langchain/langgraph";
import type { GraphNode } from "@langchain/langgraph";
import {z} from "zod";

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

const State = new StateSchema({
  messages: MessagesValue,
  solution_1: new ReducedValue(z.string().default("")),
  solution_2: new ReducedValue(),
});

//state is like an object that holds the current state of the graph. It can be updated and accessed by the nodes in the graph.

const solutionNode: GraphNode<typeof State> = (state: typeof State) => {
  // This is where you would implement the logic for generating a solution based on the current state.
  // You can access the current state using the `state` variable and update it as needed.

  console.log(state.messages);
  return {
    messages: state.messages[0],
  };
};

const graph = new StateGraph(State)
  .addNode("solution", solutionNode)
  .addEdge(START, "solution") // START is by default the entry point of the graph, and END is the exit point. You can add edges between nodes to define the flow of the graph.
  .compile();

export default async function (userMessage: string) {
  const result = await graph.invoke({
    messages: [new HumanMessage(userMessage)],
  });
  return result;
}
