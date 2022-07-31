import { viewTimesheetActionTypes } from "@store/actionTypes/viewTimesheetActionTypes";
import configData from "../../config.json";
import {
    ViewTimesheetRequest,
    ViewTimesheetResponse,
} from "../reducers/__types__/viewTimesheetTypes";

export const fetchViewTimesheetRequest = (
    date: string,
): ViewTimesheetRequest => ({
    type: viewTimesheetActionTypes.FETCH_VIEWTIMESHEET_REQUEST,
    payload: {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": configData["x-api-key"],
        },
        url: configData.ViewIlcURL,
        data: {
            itemname: "ILC",
            employeeid: "002V2O",
            employeename: "Akshitha R",
            itemuploaddate: date,
        },
    },
});

export const fetchViewTimesheetResponse = (
    payload: any,
): ViewTimesheetResponse => ({
    type: viewTimesheetActionTypes.FETCH_VIEWTIMESHEET_SUCCESS,
    payload,
});
