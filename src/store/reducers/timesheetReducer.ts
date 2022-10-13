import { timesheetActionTypes } from "@store/actionTypes/timesheetActionTypes";
import {
    TimesheetActions,
    TimesheetDataTypes,
} from "./__types__/timesheetTypes";

const initialState: TimesheetDataTypes = {
    timesheets: [],
    timesheetStatus: {
        message: "",
    },
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
        case timesheetActionTypes.APPROVE_REJECT_TIMESHEET_SUCCESS:
            return {
                ...state,
                timesheetStatus: action.payload,
            };
        default:
            return state;
    }
};
