import { createStore } from "redux";
import { productList } from "./products.List";

const initialState = {
  product: productList,
  cartItems: [],
  wishlists: [],
};

const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_ITEM_INCREASE_QUANTITY = " cart/increaseItemQuantity";
const CART_ITEM_DECREASE_QUANTITY = "cart/decreaseItemQuantity";

const WISHLIST_ADD_ITEM = "wishList/addItem";
const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

function reducer(state = initialState, action) {
  // console.log(action);
  // return state
  console.log(state);

  switch (action.type) {
    case CART_ADD_ITEM:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.productId !== action.payload.productId,
        ),
      };
    case CART_ITEM_INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        }),
      };
    case CART_ITEM_DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (
            cartItem.productId === action.payload.productId 
          )
            if (cartItem.quantity === 0) {
              return {
                ...state,
                cartItems: state.cartItems.filter(
                  (cartItem) => cartItem.productId !== action.payload.productId,
                ),
              };
            } else return { ...cartItem, quantity: cartItem.quantity - 1 };

          return cartItem;
        }),
      };
    case WISHLIST_ADD_ITEM:
      return { ...state, wishlists: [...state.wishlists, action.payload] };
    case WISHLIST_REMOVE_ITEM:
      return {
        ...state,
        wishlists: state.wishlists.filter(
          (wishList) => wishList.productId !== action.payload.productId,
        ),
      };
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store);

store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 1, quantity: 1 },
});

store.dispatch({
  type: CART_ADD_ITEM,
  payload: {
    productId: 12,
    quantity: 1,
  },
});

store.dispatch({
  type: CART_ADD_ITEM,
  payload: {
    productId: 2,
    quantity: 1,
  },
});

store.dispatch({
  type: CART_ADD_ITEM,
  payload: {
    productId: 5,
    quantity: 1,
  },
});

store.dispatch({
  type: CART_REMOVE_ITEM,
  payload: {
    productId: 5,
  },
});

store.dispatch({
  type: CART_ITEM_INCREASE_QUANTITY,
  payload: {
    productId: 12,
  },
});
store.dispatch({
  type: CART_ITEM_INCREASE_QUANTITY,
  payload: {
    productId: 12,
  },
});
store.dispatch({
  type: CART_ITEM_INCREASE_QUANTITY,
  payload: {
    productId: 12,
  },
});
store.dispatch({
  type: CART_ITEM_INCREASE_QUANTITY,
  payload: {
    productId: 2,
  },
});
store.dispatch({
  type: CART_ITEM_DECREASE_QUANTITY,
  payload: {
    productId: 12,
  },
});
store.dispatch({
  type: CART_ITEM_DECREASE_QUANTITY,
  payload: {
    productId: 12,
  },
});
store.dispatch({
  type: CART_ITEM_DECREASE_QUANTITY,
  payload: {
    productId: 12,
  },
});
store.dispatch({
  type: CART_ITEM_DECREASE_QUANTITY,
  payload: {
    productId: 12,
  },
});
store.dispatch({
  type: CART_ITEM_DECREASE_QUANTITY,
  payload: {
    productId: 12,
  },
});

store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: {
    productId: 2,
  },
});
store.dispatch({
  type: WISHLIST_REMOVE_ITEM,
  payload: {
    productId: 2,
  },
});

store.dispatch({
  type: CART_REMOVE_ITEM,
  payload: {
    productId: 5,
  },
});


store.dispatch({
  type: CART_ITEM_INCREASE_QUANTITY,
  payload: {
    productId: 12,
  },
});

store.dispatch({
  type: CART_ITEM_DECREASE_QUANTITY,
  payload: {
    productId: 12,
  },
});