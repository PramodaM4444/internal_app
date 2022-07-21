import { createSelector } from "reselect";
import { ViewTimesheetDataTypes } from "@store/reducers/__types__/viewTimesheetTypes";

export const selectViewTimesheets = (state: {
    viewTimesheetReducer: ViewTimesheetDataTypes;
}) => state.viewTimesheetReducer;

export const selectViewTimesheetsData = createSelector(
    [selectViewTimesheets],
    (viewtimesheets) => viewtimesheets.viewtimesheet,
);
