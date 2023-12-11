import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer
})

//getting type of reducer
export type RootState = ReturnType<typeof rootReducer>