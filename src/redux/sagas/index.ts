import { all } from "redux-saga/effects";
import userSaga from "./user";

export default function* rootSaga(): Generator {
  yield all([userSaga()]);
}
