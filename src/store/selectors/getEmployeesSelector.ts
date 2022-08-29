import { createSelector } from "reselect";
import { GetEmployeesDataTypes } from "@store/reducers/__types__/getEmployeesTypes";

export const selectGetEmployees = (state: {
    getEmployeesReducer: GetEmployeesDataTypes;
}) => state.getEmployeesReducer;

export const selectGetEmployeesData = createSelector(
    [selectGetEmployees],
    (getemployees) => getemployees.GetEmployees,
);
