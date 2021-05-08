import { combineReducers } from "redux";
import toDoReducer from "./to-do";

export default function getRootReducer() {
  return combineReducers({
    toDoReducer,
  });
}
