import { all, fork } from "redux-saga/effects";
import userSaga from "./sagas/userSagas";
import timesheetSaga from "./sagas/timesheetSagas";

export function* rootSaga() {
    yield all([fork(userSaga)]);
    yield all([fork(timesheetSaga)]);
}
