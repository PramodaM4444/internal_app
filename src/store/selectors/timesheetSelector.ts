import { createSelector } from "reselect";
import { TimesheetDataTypes } from "@store/reducers/__types__/timesheetTypes";

export const selectTimesheets = (state: {
    timesheetReducer: TimesheetDataTypes;
}) => state.timesheetReducer;

export const selectTimesheetsData = createSelector(
    [selectTimesheets],
    (timesheets) => timesheets.timesheets,
);
