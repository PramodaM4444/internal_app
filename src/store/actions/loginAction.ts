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
        // Check on how backend accepts the login credentials
        data: JSON.stringify(loginCredentials),
    },
});

export const fetchLoginResponse = (payload: any) => ({
    type: loginActionTypes.LOGIN_RESPONSE,
    payload,
});
