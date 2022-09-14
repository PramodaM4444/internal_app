import { AxiosRequestConfig } from "axios";
import { getEmployeesActionTypes } from "../../actionTypes/getEmployeesActionTypes";

export interface GetEmployees {}

export interface GetEmployeesDataTypes {
    GetEmployees: any;
}

export interface GetEmployeesRequest {
    type: typeof getEmployeesActionTypes.FETCH_GETEMPLOYEES_REQUEST;
    payload: AxiosRequestConfig;
}

export interface GetEmployeesResponse {
    type: typeof getEmployeesActionTypes.FETCH_GETEMPLOYEES_SUCCESS;
    payload: GetEmployees[];
}

export type GetEmployeesActions = GetEmployeesRequest | GetEmployeesResponse;
