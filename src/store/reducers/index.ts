import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
})

//getting type of reducer
export type RootState = ReturnType<typeof rootReducer>