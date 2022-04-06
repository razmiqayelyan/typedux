import { combineReducers } from "redux";
import { TodoReducer } from "./TodoReducer";

export const reducer = combineReducers({
    todo: TodoReducer
})

export type State = ReturnType<typeof reducer>