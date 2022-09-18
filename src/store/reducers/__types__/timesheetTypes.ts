import { AxiosRequestConfig } from "axios";
import { timesheetActionTypes } from "../../actionTypes/timesheetActionTypes";

export interface Timesheet {}

export interface timesheetStatus {
    message: "";
}
export interface TimesheetDataTypes {
    timesheets: Timesheet[];
    timesheetStatus: timesheetStatus;
}

export interface TimesheetRequest {
    type: typeof timesheetActionTypes.FETCH_TIMESHEET_REQUEST;
    payload: AxiosRequestConfig;
}

export interface TimesheetResponse {
    type: typeof timesheetActionTypes.FETCH_TIMESHEET_SUCCESS;
    payload: Timesheet[];
}
export interface TimesheetApproveRejectRequest {
    type: typeof timesheetActionTypes.APPROVE_REJECT_TIMESHEET_REQUEST;
    payload: AxiosRequestConfig;
}

export interface TimesheetApproveRejectResponse {
    type: typeof timesheetActionTypes.APPROVE_REJECT_TIMESHEET_SUCCESS;
    payload: timesheetStatus;
}

export type TimesheetActions =
    | TimesheetRequest
    | TimesheetResponse
    | TimesheetApproveRejectRequest
    | TimesheetApproveRejectResponse;
