import {
    fetchLoginResponse,
    handleLoginFailure,
} from "@store/actions/loginAction";
import { loginActionTypes } from "@store/actionTypes/loginActionTypes";
import { LoginAxiosAPI } from "@utils/fetch";
import { all, call, put, takeLatest } from "redux-saga/effects";

function* fetchUserData(_action: any): any {
    const { response, error } = yield call(LoginAxiosAPI, _action.payload);

    if (response) {
        yield put(fetchLoginResponse(response));
    }

    if (error) {
        yield put(handleLoginFailure(error));
    }
}

function* userLoginSaga() {
    yield all([takeLatest(loginActionTypes.LOGIN_REQUEST, fetchUserData)]);
}

export default userLoginSaga;
