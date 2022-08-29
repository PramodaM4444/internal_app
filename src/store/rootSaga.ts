import { all, fork } from "redux-saga/effects";
import userSaga from "./sagas/userSagas";
import timesheetSaga from "./sagas/timesheetSagas";
import viewTimesheetSaga from "./sagas/viewTimesheetSagas";
import getEmployeesSaga from "./sagas/getEmployeesSagas";

export function* rootSaga() {
    yield all([fork(userSaga)]);
    yield all([fork(timesheetSaga)]);
    yield all([fork(viewTimesheetSaga)]);
    yield all([fork(getEmployeesSaga)]);
}
