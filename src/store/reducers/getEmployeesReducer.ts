import { getEmployeesActionTypes } from "@store/actionTypes/getEmployeesActionTypes";
import {
    GetEmployeesActions,
    GetEmployeesDataTypes,
} from "./__types__/getEmployeesTypes";

const initialState: GetEmployeesDataTypes = {
    GetEmployees: [],
};

export const getEmployeesReducer = (
    state = initialState,
    action: GetEmployeesActions,
) => {
    switch (action.type) {
        case getEmployeesActionTypes.FETCH_GETEMPLOYEES_SUCCESS:
            return {
                ...state,
                GetEmployees: action.payload,
            };
        default:
            return state;
    }
};
