import { RootState } from "store/root-reducer";
import { createSelector } from "reselect";

export const getItems = (state: RootState) => state.cart;

export const getTotalCost = createSelector(
  getItems,
  (cart) =>
    cart.reduce(
      (total, current) => total + current.item.price * current.count,
      0
    )
);
