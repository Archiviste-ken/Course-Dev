import { createStore } from "redux";
import { myCreateStore } from "./my-redux";

// 🎯 Selecting the HTML element where we will display the post count
const postCount = document.querySelector(".post-count");

// 📦 Initial State
// This is the starting data of our application
const initialState = {
  post: 0,
  name: "Shreyesh Pachpor",
  age: 21,
};

// ======================================================
// 🎬 ACTION TYPES
// ======================================================
// Actions describe WHAT happened.
//
// Think:
// 👆 User clicked increment button
// 👇 User clicked decrement button
//
// We store them in constants to avoid typos.

const increment = "post/increment";
const decrement = "post/decrement";
const incrementBy = "post/incrementBy";
const decrementBy = "post/decrementBy";

// ======================================================
// 🧠 REDUCER
// ======================================================
// Reducer is a pure function.
//
// Input:
// 📥 Current State
// 📥 Action
//
// Output:
// 📤 New State
//
// Reducers NEVER modify the old state directly.

function reducer(state = initialState, action) {
  switch (action.type) {
    // ➕ Increment post by 1
    case increment:
      return {
        ...state, // 📋 Copy all existing properties
        post: state.post + 1, // ➕ Update only post
      };

    // ➖ Decrement post by 1
    case decrement:
      return {
        ...state,
        post: state.post - 1,
      };

    // 🚀 Increment post by custom value
    case incrementBy:
      return {
        ...state,
        post: state.post + action.payload,
      };

    // 🔻 Decrement post by custom value
    case decrementBy:
      return {
        ...state,
        post: state.post - action.payload,
      };

    // 🛡️ If action doesn't match anything
    // return current state unchanged
    default:
      return state;
  }
}

// ======================================================
// 🏪 REDUX STORE
// ======================================================
// Store = Central place that keeps our state
//
// Store provides:
// 📖 getState()
// 📢 subscribe()
// 🚚 dispatch()

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

// ======================================================
// 🏗️ CUSTOM STORE
// ======================================================
// Your custom Redux implementation.
//
// Ideally it should receive reducer:
//
// const myStore = myCreateStore(reducer);

const myStore = myCreateStore(reducer);

console.log("🏪 Redux Store:", store);
console.log("🏗️ Custom Store:", myStore);

// ======================================================
// 📢 STORE SUBSCRIPTION
// ======================================================
// Runs EVERY TIME state changes.
//
// Flow:
// dispatch()
//      ↓
// reducer()
//      ↓
// state updated
//      ↓
// subscribers called

store.subscribe(() => {
  console.log("🔄 Redux State Updated:");

  console.log(store.getState());

  // 🖥️ Update UI
  postCount.innerText = store.getState().post;
});

// ======================================================
// 🎨 Initial UI Render
// ======================================================

postCount.innerText = store.getState().post;

// ======================================================
// 📢 CUSTOM STORE SUBSCRIPTION
// ======================================================

myStore.subscribe(() => {
  console.log("🔄 Custom Store State Updated:");

  console.log(myStore.getState());

  // 🖥️ Update UI
  postCount.innerText = myStore.getState().post;
});

// ======================================================
// 🚚 DISPATCHING ACTIONS
// ======================================================
//
// Dispatch sends an action to the reducer.
//
// Flow:
//
// dispatch(action)
//        ↓
// reducer(state, action)
//        ↓
// new state returned
//        ↓
// subscribers run

// ➖ post = post - 1
myStore.dispatch({
  type: decrement,
});

// ➕ post = post + 1
myStore.dispatch({
  type: increment,
});

// 🚀 post = post + 5
myStore.dispatch({
  type: incrementBy,
  payload: 5,
});

// 🔻 post = post - 5
myStore.dispatch({
  type: decrementBy,
  payload: 5,
});

// ======================================================
// ⏰ DELAYED ACTION
// ======================================================
// After 2 seconds:
//
// dispatch({
//   type: decrement
// })
//
// Reducer ignores payload here because
// decrement only subtracts 1.

setTimeout(() => {
  myStore.dispatch({
    type: decrement,
    payload: 5, // ⚠️ Ignored by reducer
  });
}, 2000);

/*
======================================================

🧠 COMPLETE REDUX FLOW

1️⃣ dispatch({
      type: incrementBy,
      payload: 5
    })

                ↓

2️⃣ reducer(currentState, action)

                ↓

3️⃣ returns NEW state

{
  post: oldPost + 5,
  name: "Shreyesh Pachpor",
  age: 21
}

                ↓

4️⃣ Store saves new state

                ↓

5️⃣ Subscribers run

                ↓

6️⃣ UI updates

======================================================

📌 IMPORTANT RULE

❌ NEVER

state.post++;

return state;

Because that mutates the existing state.

✅ ALWAYS

return {
  ...state,
  post: state.post + 1
};

This creates a NEW state object.

======================================================
*/