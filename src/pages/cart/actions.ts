import { Item } from "api/items/data";
import { createAction } from "@reduxjs/toolkit";

enum ActionTypes {
  ADD_TO_CART = "cart/ADD_TO_CART",
  DELETE_FROM_CART = "cart/DELETE_FROM_CART",
  INCREMENT_COUNT = "cart/INCREMENT_COUNT",
  DECREMENT_COUNT = "cart/DECREMENT_COUNT",
  CLEAR = "cart/ClEAR",
}

export const addToCart = createAction<Item, ActionTypes.ADD_TO_CART>(
  ActionTypes.ADD_TO_CART
);

export const deleteFromCart = createAction<
  string,
  ActionTypes.DELETE_FROM_CART
>(ActionTypes.DELETE_FROM_CART);

export const incrementCount = createAction<string, ActionTypes.INCREMENT_COUNT>(
  ActionTypes.INCREMENT_COUNT
);

export const decrementCount = createAction<string, ActionTypes.DECREMENT_COUNT>(
  ActionTypes.DECREMENT_COUNT
);

export const clear = createAction(ActionTypes.CLEAR);
