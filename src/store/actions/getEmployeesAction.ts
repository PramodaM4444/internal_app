import { getEmployeesActionTypes } from "@store/actionTypes/getEmployeesActionTypes";
import configData from "../../config.json";
import {
    GetEmployeesRequest,
    GetEmployeesResponse,
} from "../reducers/__types__/getEmployeesTypes";

export const fetchGetEmployeesRequest = (): GetEmployeesRequest => ({
    type: getEmployeesActionTypes.FETCH_GETEMPLOYEES_REQUEST,
    payload: {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": configData["x-api-key"],
        },
        url: configData.getEmployeesURL,
    },
});

export const fetchGetEmployeesResponse = (
    payload: any,
): GetEmployeesResponse => ({
    type: getEmployeesActionTypes.FETCH_GETEMPLOYEES_SUCCESS,
    payload,
});
