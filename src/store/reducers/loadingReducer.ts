import { AnyAction } from "@reduxjs/toolkit";
import { Loading } from "./__types__/loadingTypes";

const initialState: Loading = {
    isLoading: false,
};

const loadingReducer = (state: Loading = initialState, action: AnyAction) => {
    const actionType = action.type.split("_").reverse()[0];

    switch (actionType) {
        case "REQUEST":
            return {
                isLoading: true,
            };
        case "SUCCESS":
        case "FAILURE":
            return {
                isLoading: false,
            };
        default:
            return state;
    }
};

export default loadingReducer;
