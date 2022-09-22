import { all, call, put, takeLatest } from "redux-saga/effects";
import AxiosAPI from "@utils/fetch";
import { GetRecognitionRequest } from "@store/reducers/__types__/recognitionTypes";
import { recognitionActionTypes } from "@store/actionTypes/recognitionActionTypes";
import { fetchRecognitionResponse } from "@store/actions/recoginitionAction";

function* fetchRecognitionWorkerSaga(_action: GetRecognitionRequest): any {
    try {
        const response = yield call(AxiosAPI, _action.payload);
        yield put(fetchRecognitionResponse(response));
    } catch (e) {
        console.log("error-----", e);
    }
}

function* recognitionSaga() {
    yield all([
        takeLatest(
            recognitionActionTypes.FETCH_RECOGINITIONLIST_REQUEST,
            fetchRecognitionWorkerSaga,
        ),
    ]);
}

export default recognitionSaga;
