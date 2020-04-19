import { Item } from "api/items/data";

export interface CartItem {
  item: Item;
  count: number;
}

export type CartState = CartItem[];
