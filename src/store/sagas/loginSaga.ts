import {
    fetchLoginResponse,
    handleLoginFailure,
} from "@store/actions/loginAction";
import { loginActionTypes } from "@store/actionTypes/loginActionTypes";
import AxiosAPI from "@utils/fetch";
import { all, call, put, takeLatest } from "redux-saga/effects";

function* fetchUserData(_action: any): any {
    try {
        const response = yield call(AxiosAPI, _action.payload);

        // No token based authentication. Hence storing user details on Redux store.
        // const response = {
        //     message: "Login Successfull",
        //     adminflag: false,
        // };

        const loginData = JSON.parse(_action.payload.data);

        const userData = {
            ...response,
            employeeId: loginData.Employee_Id,
        };

        yield put(fetchLoginResponse(userData));
    } catch (e) {
        yield put(handleLoginFailure(e));
    }
}

function* userLoginSaga() {
    yield all([takeLatest(loginActionTypes.LOGIN_REQUEST, fetchUserData)]);
}

export default userLoginSaga;
