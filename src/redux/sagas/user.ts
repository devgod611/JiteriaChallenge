import { put, takeEvery } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
} from "../constants";
import getUsersFn from "../api";

function* getAllUsers(): SagaIterator {
  try {
    const response = yield getUsersFn();
    yield put({ type: GET_ALL_USERS_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: GET_ALL_USERS_FAILURE });
  }
}

export default function* userSaga(): SagaIterator {
  yield takeEvery(GET_ALL_USERS_REQUEST, getAllUsers);
}
