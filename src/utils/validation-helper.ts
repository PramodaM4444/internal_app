import { UIConstantsKeys } from "@constants/application.type";
import { UIConstants } from "@constants/UIConstants";

export const getMandatoryMessage = (attributeName: UIConstantsKeys): string => {
    return `${UIConstants[attributeName]} ${UIConstants.isRequired}`;
};

export const getMaximumCharacterMessage = (maximumValue: number): string => {
    return `${UIConstants.maxMessage} ${maximumValue} characters`;
};
