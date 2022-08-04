import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import commentsReducer from "./coments";
import productsReducer from "./products";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  comments: commentsReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
