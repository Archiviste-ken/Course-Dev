import { createStore } from "redux";
import { myCreateStore } from "./my-redux";

const postCount = document.querySelector(".post-count");

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

const increment = "post/increment";
const decrement = "post/decrement";
const incrementBy = "post/incrementBy";
const decrementBy = "post/decrementBy";

function reducer(state = initialState, action) {
  // action is an object that describes what happened, it has a type property that indicates the type of action being performed. The reducer function takes the current state and the action as arguments and returns a new state based on the action type.

  switch (action.type) {
    case increment:
      return { ...state, post: state.post + 1 };
    case decrement:
      return { ...state, post: state.post - 1 };
    case incrementBy:
      return { ...state, post: state.post + action.payload };
    case decrementBy:
      return { ...state, post: state.post - action.payload };
    default:
      return state;
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

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());\

const myStore = myCreateStore();

console.log(store);



console.log(store);

store.subscribe(() => {
  console.log("State updated:", store.getState());
  postCount.innerText = store.getState().post;
});

postCount.innerText = store.getState().post;

store.dispatch({ type: decrement }); // dispatch is a method that is used to send an action to the store. The store will then call the reducer function with the current state and the action as arguments, and the reducer will return a new state based on the action type.

store.dispatch({ type: increment });

store.dispatch({ type: incrementBy, payload: 5 });

store.dispatch({ type: decrementBy, payload: 5 });

setTimeout(() => {
  store.dispatch({ type: decrement, payload: 5 });
}, 2000);
