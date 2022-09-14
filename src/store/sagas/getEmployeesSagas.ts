import { all, call, put, takeLatest } from "redux-saga/effects";
import AxiosAPI from "@utils/fetch";
import { fetchGetEmployeesResponse } from "@store/actions/getEmployeesAction";
import { getEmployeesActionTypes } from "@store/actionTypes/getEmployeesActionTypes";
import { GetEmployeesRequest } from "@store/reducers/__types__/getEmployeesTypes";

function* fetchGetEmployeesWorkerSaga(_action: GetEmployeesRequest): any {
    try {
        const response = yield call(AxiosAPI, _action.payload);
        yield put(fetchGetEmployeesResponse(response));
    } catch (e) {
        console.log("error-----", e);
    }
}

function* getEmployeesSaga() {
    yield all([
        takeLatest(
            getEmployeesActionTypes.FETCH_GETEMPLOYEES_REQUEST,
            fetchGetEmployeesWorkerSaga,
        ),
    ]);
}

export default getEmployeesSaga;
