import { recognitionActionTypes } from "@store/actionTypes/recognitionActionTypes";
import {
    GetRecoginitionResponse,
    GetRecognitionRequest,
    Recognition,
} from "@store/reducers/__types__/recognitionTypes";
import configData from "../../config.json";

export const fetchGetRecognitionRequest = (): GetRecognitionRequest => ({
    type: recognitionActionTypes.FETCH_RECOGINITIONLIST_REQUEST,
    payload: {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": configData["x-api-key"],
        },
        url: configData.RecognitionURL,
    },
});

export const fetchRecognitionResponse = (
    payload: Recognition[],
): GetRecoginitionResponse => ({
    type: recognitionActionTypes.FETCH_RECOGINITIONLIST_SUCCESS,
    payload,
});
