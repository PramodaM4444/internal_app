import { createSelector } from "reselect";
import { RecognitionDataTypes } from "@store/reducers/__types__/recognitionTypes";

export const selectRecognition = (state: {
    recognitionReducer: RecognitionDataTypes;
}) => state.recognitionReducer;

export const selectRecognitionData = createSelector(
    [selectRecognition],
    (recognition) => recognition.recognition,
);
