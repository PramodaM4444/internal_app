import { UIConstantsType } from "../Constants/application.type";
import { UIConstants } from "../Constants/UIConstants";

export const getMandatoryMessage = (
    attributeName: keyof UIConstantsType,
): string => {
    return `${UIConstants[attributeName]} ${UIConstants.isRequired}`;
};

export const getMaximumCharacterMessage = (maximumValue: number): string => {
    return `${UIConstants.maxMessage} ${maximumValue} characters`;
};
