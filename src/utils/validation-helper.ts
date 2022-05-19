import { UIConstantsKeys } from "../Constants/application.type";
import { UIConstants } from "../Constants/UIConstants";

export const getMandatoryMessage = (attributeName: UIConstantsKeys): string => {
    return `${UIConstants[attributeName]} ${UIConstants.isRequired}`;
};

export const getMaximumCharacterMessage = (maximumValue: number): string => {
    return `${UIConstants.maxMessage} ${maximumValue} characters`;
};

export const getInvalidMessage = (attributeName: UIConstantsKeys): string => {
    return `${UIConstants[attributeName]} ${UIConstants.isInvalid}`;
};
