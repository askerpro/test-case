import getItems from "api/items";
import { createAsyncThunk } from "@reduxjs/toolkit";

enum ActionTypes {
  FETCH = "items/FETCH",
}

export const fetch = createAsyncThunk(ActionTypes.FETCH, async () => {
  return await getItems(window.location.href);
});
