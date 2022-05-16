import { userActionTypes } from "@store/actionTypes/userActionTypes";
import {
    UserRequest,
    UserResponse,
    User,
} from "../reducers/__types__/userTypes";

export const fetchUserRequest = (): UserRequest => ({
    type: userActionTypes.FETCH_USER_REQUEST,
    payload: {
        method: "get",
        url: "https://jsonplaceholder.typicode.com/users",
    },
});

export const fetchUserResponse = (payload: User[]): UserResponse => ({
    type: userActionTypes.FETCH_USER_SUCCESS,
    payload,
});
