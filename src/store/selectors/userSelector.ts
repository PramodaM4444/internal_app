import { createSelector } from "reselect";
import { UserDataTypes } from "@store/reducers/__types__/userTypes";

export const selectUsers = (state: { userReducer: UserDataTypes }) =>
    state.userReducer;

export const selectUsersData = createSelector(
    [selectUsers],
    (users) => users.users,
);
