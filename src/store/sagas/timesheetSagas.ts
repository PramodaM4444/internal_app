import { all, call, put, takeLatest } from "redux-saga/effects";
import AxiosAPI from "@utils/fetch";
import { fetchTimesheetResponse } from "@store/actions/timesheetAction";
import { timesheetActionTypes } from "@store/actionTypes/timesheetActionTypes";
import { TimesheetRequest } from "@store/reducers/__types__/timesheetTypes";

function* fetchTimesheetWorkerSaga(_action: TimesheetRequest): any {
    try {
        const response = yield call(AxiosAPI, _action.payload);
        yield put(fetchTimesheetResponse(response));
    } catch (e) {
        console.log("error-----", e);
    }
}

function* timesheetSaga() {
    yield all([
        takeLatest(
            timesheetActionTypes.FETCH_TIMESHEET_REQUEST,
            fetchTimesheetWorkerSaga,
        ),
    ]);
}

export default timesheetSaga;
