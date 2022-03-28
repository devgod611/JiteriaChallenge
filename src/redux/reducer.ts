import { combineReducers, Reducer } from "redux";

import userReducer from "./reducer/user";

import { RootState } from "../types";

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  UserState: userReducer,
});

export default rootReducer;
