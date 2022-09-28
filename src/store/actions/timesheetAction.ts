import { timesheetActionTypes } from "@store/actionTypes/timesheetActionTypes";
import configData from "../../config.json";
import {
    TimesheetRequest,
    TimesheetResponse,
    Timesheet,
    TimesheetApproveRejectResponse,
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
            "x-api-key": configData["x-api-key"],
        },
        url: configData.URL + files[0].name,
        data: formData,
    },
});

export const fetchTimesheetResponse = (
    payload: Timesheet[],
): TimesheetResponse => ({
    type: timesheetActionTypes.FETCH_TIMESHEET_SUCCESS,
    payload,
});

export const handleApproveReject = (data: any) => ({
    type: timesheetActionTypes.APPROVE_REJECT_TIMESHEET_REQUEST,
    payload: {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": configData["x-api-key"],
        },
        url: `${configData.approveRejectUrl}`,
        data,
    },
});

export const fetchApproveRejectSuccess = (
    payload: TimesheetApproveRejectResponse,
) => ({
    type: timesheetActionTypes.APPROVE_REJECT_TIMESHEET_SUCCESS,
    payload,
});

export const fetchApproveRejectErr = (payload: any) => ({
    type: timesheetActionTypes.APPROVE_REJECT_TIMESHEET_FAILURE,
    payload,
});
