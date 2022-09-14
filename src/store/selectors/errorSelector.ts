import { RootState } from "..";

export const selectErr = (state: RootState) => state.errors.errors;
