import { userActionTypes } from "../actionTypes/userActionTypes";
import { UserActions, UserDataTypes } from "./__types__/userTypes";

const initialState: UserDataTypes = {
    users: [],
};

export const userReducer = (state = initialState, action: UserActions) => {
    switch (action.type) {
        case userActionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                users: action.payload,
            };
        default:
            return state;
    }
};
