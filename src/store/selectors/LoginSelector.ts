import { createSelector } from "reselect";
import { RootState } from "..";

const loginData = (state: RootState) => state.loginReducer;

export const selectLoginUserData = createSelector(
    [loginData],
    (data) => data.loginInfo,
);
