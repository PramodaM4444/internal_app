import { AxiosRequestConfig } from "axios";
import { recognitionActionTypes } from "../../actionTypes/recognitionActionTypes";

export interface Recognition {
    employee_award_name: string;
    employee_award_title: string;
    employee_IBM_Notes_ID: string;
    employee_account: string;
}

export interface RecognitionDataTypes {
    recognition: Recognition[];
}

export interface GetRecognitionRequest {
    type: typeof recognitionActionTypes.FETCH_RECOGINITIONLIST_REQUEST;
    payload: AxiosRequestConfig;
}

export interface GetRecoginitionResponse {
    type: typeof recognitionActionTypes.FETCH_RECOGINITIONLIST_SUCCESS;
    payload: Recognition[];
}

export type RecognitionActions =
    | GetRecognitionRequest
    | GetRecoginitionResponse;
