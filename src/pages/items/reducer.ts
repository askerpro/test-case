import { createReducer } from "@reduxjs/toolkit";
import { State } from "./models";
import { fetch } from "./actions";

const initialState: State = {
  pending: false,
  items: {
    id: "",
    name: "",
    img: "",
    categories: [],
    items: [],
    pagesCount: 0
  },
};

const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(fetch.pending, (state, action) => {
      state.pending = true;
      return state;
    })
    .addCase(fetch.fulfilled, (state, action) => {
      state.pending = false;
      state.items = action.payload
      return state;
    })
    .addCase(fetch.rejected, (state, action) => {
      state.pending = false;
      return state;
    })
);

export default reducer;
