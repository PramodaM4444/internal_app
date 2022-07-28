import { AxiosRequestConfig } from "axios";
import { viewTimesheetActionTypes } from "../../actionTypes/viewTimesheetActionTypes";

export interface ViewTimesheet {}

export interface ViewTimesheetDataTypes {
    viewtimesheet: any;
}

export interface ViewTimesheetRequest {
    type: typeof viewTimesheetActionTypes.FETCH_VIEWTIMESHEET_REQUEST;
    payload: AxiosRequestConfig;
}

export interface ViewTimesheetResponse {
    type: typeof viewTimesheetActionTypes.FETCH_VIEWTIMESHEET_SUCCESS;
    payload: ViewTimesheet[];
}

export type ViewTimesheetActions = ViewTimesheetRequest | ViewTimesheetResponse;
