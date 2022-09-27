import { recognitionActionTypes } from "@store/actionTypes/recognitionActionTypes";
import {
    RecognitionActions,
    RecognitionDataTypes,
} from "./__types__/recognitionTypes";

const initialState: RecognitionDataTypes = {
    recognition: [],
};

export const recognitionReducer = (
    state = initialState,
    action: RecognitionActions,
) => {
    switch (action.type) {
        case recognitionActionTypes.FETCH_RECOGINITIONLIST_SUCCESS:
            return {
                ...state,
                recognition: action.payload,
            };
        default:
            return state;
    }
};
