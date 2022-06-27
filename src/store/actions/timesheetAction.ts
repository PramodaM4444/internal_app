import { timesheetActionTypes } from "@store/actionTypes/timesheetActionTypes";
import {
    TimesheetRequest,
    TimesheetResponse,
    Timesheet,
} from "../reducers/__types__/timesheetTypes";

export const fetchTimesheetRequest = (
    files: any,
    formData: any,
): TimesheetRequest => ({
    type: timesheetActionTypes.FETCH_TIMESHEET_REQUEST,
    payload: {
        method: "PUT",
        headers: {
            "Content-Type": "image/jpeg,image/png,image/bmp",
            "x-api-key": "OXXf84Uw2k8RcbTP8GL2C8XlgxrNbp0N2OHC1mvb",
        },
        url: `https://bcyykkddm9.execute-api.ap-south-1.amazonaws.com/dev/ilc-timesheet-upload-dev/${files[0].name}`,
        data: formData,
    },
});

export const fetchTimesheetResponse = (
    payload: Timesheet[],
): TimesheetResponse => ({
    type: timesheetActionTypes.FETCH_TIMESHEET_SUCCESS,
    payload,
});
