import { Loading } from "./__types__/loadingTypes";

const initialState: Loading = {
    isLoading: false,
};

const loadingReducer = (state: Loading = initialState, action: any) => {
    const actionAry = action.type.split("_");
    const actionType = actionAry[actionAry.length - 1];

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
