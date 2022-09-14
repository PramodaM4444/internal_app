import { loginActionTypes } from "@store/actionTypes/loginActionTypes";

const InitialState: any = {
    loginInfo: null,
};

export const loginReducer = (state = InitialState, action: any) => {
    switch (action.type) {
        case loginActionTypes.LOGIN_SUCCESS:
            return {
                loginInfo: action.payload,
            };
        default:
            return state;
    }
};
