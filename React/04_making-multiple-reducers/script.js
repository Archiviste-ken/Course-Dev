import { createStore } from "redux";
import { productList } from "./products.List";

const initialState = {
  product: productList,
  cartItems: [],
  wishlist: [],
};
function reducer(state = initialState, action) {
  console.log(action);
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store);

store.dispatch({
  type: "card/addItem",
  payload: { productId: 1, quantity: 1 },
});
