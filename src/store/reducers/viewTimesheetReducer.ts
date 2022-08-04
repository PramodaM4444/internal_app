import { viewTimesheetActionTypes } from "@store/actionTypes/viewTimesheetActionTypes";
import {
    ViewTimesheetActions,
    ViewTimesheetDataTypes,
} from "./__types__/viewTimesheetTypes";

const initialState: ViewTimesheetDataTypes = {
    viewtimesheet: [],
};

export const viewTimesheetReducer = (
    state = initialState,
    action: ViewTimesheetActions,
) => {
    switch (action.type) {
        case viewTimesheetActionTypes.FETCH_VIEWTIMESHEET_SUCCESS:
            return {
                ...state,
                viewtimesheet: action.payload,
            };
        default:
            return state;
    }
};
