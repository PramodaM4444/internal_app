import { AxiosRequestConfig } from "axios";
import { userActionTypes } from "../../actionTypes/userActionTypes";

export interface User {
    id: number;
    name: string;
}

export interface UserDataTypes {
    users: User[];
}

export interface UserRequest {
    type: typeof userActionTypes.FETCH_USER_REQUEST;
    payload: AxiosRequestConfig;
}

export interface UserResponse {
    type: typeof userActionTypes.FETCH_USER_SUCCESS;
    payload: User[];
}

export type UserActions = UserRequest | UserResponse;
