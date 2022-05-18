import { all, fork } from "redux-saga/effects";
import userSaga from "./sagas/userSagas";

export function* rootSaga() {
    yield all([fork(userSaga)]);
}
