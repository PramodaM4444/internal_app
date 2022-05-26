import { Loading } from "@store/reducers/__types__/loadingTypes";
import { createSelector } from "reselect";

export const selectLoading = (state: { loadingReducer: Loading }) =>
    state.loadingReducer;

export const selectIsLoading = createSelector(
    [selectLoading],
    (loading) => loading.isLoading,
);
