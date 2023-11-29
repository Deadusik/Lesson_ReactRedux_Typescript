import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";

// use selector with type (RootState)
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector