let state = {
  count: 0,
  name: "Shreyesh Pachpor",
  age: 21,
};

let prevState = state;

function increment() {
  //mutating state directly
  // state.count = state.count + 1;

  //Not mutating state directly, instead creating a new object with the updated value // Since we are not using the dot notation, we can use the spread operator to copy the existing properties of the state object and then update the count property with the new value.

  state = { ...state, count: state.count + 1 };
}

increment();
console.log(state);

// normal way to update state
