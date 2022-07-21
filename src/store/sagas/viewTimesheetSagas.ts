import { all, call, put, takeLatest } from "redux-saga/effects";
import AxiosAPI from "@utils/fetch";
import { fetchViewTimesheetResponse } from "@store/actions/viewTimesheetAction";
import { viewTimesheetActionTypes } from "@store/actionTypes/viewTimesheetActionTypes";
import { ViewTimesheetRequest } from "@store/reducers/__types__/viewTimesheetTypes";

function* fetchViewTimesheetWorkerSaga(_action: ViewTimesheetRequest): any {
    try {
        const response = yield call(AxiosAPI, _action.payload);
        yield put(fetchViewTimesheetResponse(response));
    } catch (e) {
        console.log("error-----", e);
    }
}

function* viewTimesheetSaga() {
    yield all([
        takeLatest(
            viewTimesheetActionTypes.FETCH_VIEWTIMESHEET_REQUEST,
            fetchViewTimesheetWorkerSaga,
        ),
    ]);
}

export default viewTimesheetSaga;
