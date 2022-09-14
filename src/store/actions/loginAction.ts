import { loginActionTypes } from "@store/actionTypes/loginActionTypes";
import configData from "../../config.json";

export const handleLoginAction = (loginCredentials: any) => ({
    type: loginActionTypes.LOGIN_REQUEST,
    payload: {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": configData["x-api-key"],
        },
        url: configData.loginUrl,
        data: loginCredentials,
    },
});

export const fetchLoginResponse = (payload: any) => ({
    type: loginActionTypes.LOGIN_SUCCESS,
    payload,
});

export const handleLoginFailure = (payload: any) => ({
    type: loginActionTypes.LOGIN_FAILURE,
    payload,
});
