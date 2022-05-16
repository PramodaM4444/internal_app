import { all, call, put, takeLatest } from "redux-saga/effects";
import AxiosAPI from "@utils/fetch";
import { fetchUserResponse } from "@store/actions/userAction";
import { userActionTypes } from "@store/actionTypes/userActionTypes";
import { UserRequest } from "@store/reducers/__types__/userTypes";

function* fetchUserWorkerSaga(_action: UserRequest): any {
    try {
        const response = yield call(AxiosAPI, _action.payload);
        yield put(fetchUserResponse(response));
    } catch (e) {
        console.log("error-----", e);
    }
}

function* userSaga() {
    yield all([
        takeLatest(userActionTypes.FETCH_USER_REQUEST, fetchUserWorkerSaga),
    ]);
}

export default userSaga;
