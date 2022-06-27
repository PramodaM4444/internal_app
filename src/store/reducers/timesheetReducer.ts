import { timesheetActionTypes } from "@store/actionTypes/timesheetActionTypes";
import {
    TimesheetActions,
    TimesheetDataTypes,
} from "./__types__/timesheetTypes";

const initialState: TimesheetDataTypes = {
    timesheets: [],
};

export const timesheetReducer = (
    state = initialState,
    action: TimesheetActions,
) => {
    switch (action.type) {
        case timesheetActionTypes.FETCH_TIMESHEET_SUCCESS:
            return {
                ...state,
                timesheet: action.payload,
            };
        default:
            return state;
    }
};
