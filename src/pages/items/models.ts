import { Data } from "api/items/data";

export interface State {
  items: Data;
  pending: boolean;
}
