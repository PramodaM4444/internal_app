import { AxiosRequestConfig } from "axios";
import { timesheetActionTypes } from "../../actionTypes/timesheetActionTypes";

export interface Timesheet {}

export interface TimesheetDataTypes {
    timesheets: Timesheet[];
}

export interface TimesheetRequest {
    type: typeof timesheetActionTypes.FETCH_TIMESHEET_REQUEST;
    payload: AxiosRequestConfig;
}

export interface TimesheetResponse {
    type: typeof timesheetActionTypes.FETCH_TIMESHEET_SUCCESS;
    payload: Timesheet[];
}

export type TimesheetActions = TimesheetRequest | TimesheetResponse;
