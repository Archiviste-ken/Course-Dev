import { createStore } from "redux";

const initialState = {
  post: 0,
  name: "Shreyesh Pachpor",
  age: 21,
};

// let prevState = state;

// function increment() {
//   //mutating state directly
//   // state.count = state.count + 1;

//   //Not mutating state directly, instead creating a new object with the updated value // Since we are not using the dot notation, we can use the spread operator to copy the existing properties of the state object and then update the count property with the new value.

//   state = { ...state, count: state.count + 1 };
// }

// increment();
// console.log(state);

// // normal way to update state

function reducer(state = initialState, action) {
  // action is an object that describes what happened, it has a type property that indicates the type of action being performed. The reducer function takes the current state and the action as arguments and returns a new state based on the action type.

  if (action.type === "post/increment") {
    return { ...state, post: state.post + 1 };
  } else if (action.type === "post/decrement") {
    return { ...state, post: state.post - 1 };
  } else if (action.type === "post/incrementBy") {
    return { ...state, post: state.post + action.payload };
  }

  return state;
}

// What Redux will  Do

// initialState = reducer(initialState, { type: "post/increment" });

// console.log(initialState);

// initialState = reducer(initialState, { type: "post/decrement" });
// console.log(initialState);

// initialState = reducer(initialState, { type: "post/incrementBy", payload: 5 });
// console.log(initialState);

const store = createStore(reducer);

console.log(store.getState());


reducer()