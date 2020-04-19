import { combineReducers } from "@reduxjs/toolkit";
import itemsReducer from "pages/items/reducer";
import cartReducer from "pages/cart/reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  items: itemsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
