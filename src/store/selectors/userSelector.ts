import { createSelector } from "reselect";
import { UserDataTypes } from "../reducers/__types__/userTypes";

export const selectUsers = (state: { user: UserDataTypes }) => state.user;

export const selectUsersData = createSelector(
    [selectUsers],
    (users) => users.users,
);
