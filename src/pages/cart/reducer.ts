import { createReducer } from "@reduxjs/toolkit";
import { CartState } from "./models";
import {
  addToCart,
  decrementCount,
  deleteFromCart,
  incrementCount,
  clear,
} from "./actions";

const initialState: CartState = [];

const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(addToCart, (state, action) => {
      const index = state.findIndex(
        (current) => current.item.id === action.payload.id
      );

      if (index === -1) {
        state.push({
          item: action.payload,
          count: 1,
        });
      }

      return state;
    })
    .addCase(deleteFromCart, (state, action) => {
      const index = state.findIndex(
        (current) => current.item.id === action.payload
      );
      console.log("delete from cart", index);
      if (index !== -1) {
        state.splice(index, 1);
      }
      return state;
    })
    .addCase(incrementCount, (state, action) => {
      const index = state.findIndex(
        (current) => current.item.id === action.payload
      );
      if (index !== -1) {
        state[index].count++;
      }

      return state;
    })
    .addCase(decrementCount, (state, action) => {
      const index = state.findIndex(
        (current) => current.item.id === action.payload
      );
      if (index !== -1) {
        state[index].count--;
        if (state[index].count < 1) {
          state[index].count = 1;
        }
      }

      return state;
    })
    .addCase(clear, () => {
      console.log('clear cart');
      return [];
    })
);

export default reducer;
