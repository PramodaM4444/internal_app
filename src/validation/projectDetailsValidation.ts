import * as yup from "yup";
import { alphaNumeric, alphaNumericSpecialCharacter } from "../utils/util";
import {
    getInvalidMessage,
    getMandatoryMessage,
    getMaximumCharacterMessage,
} from "../utils/validation-helper";

export const projectDetailsValidationSchema = yup.object().shape({
    projectName: yup
        .string()
        .required(getMandatoryMessage("projectName"))
        .defined(getMandatoryMessage("projectName"))
        .max(30, getMaximumCharacterMessage(30))
        .matches(alphaNumeric, getInvalidMessage("projectName")),
    projectCode: yup
        .string()
        .required(getMandatoryMessage("projectCode"))
        .defined(getMandatoryMessage("projectCode"))
        .max(20, getMaximumCharacterMessage(20))
        .matches(alphaNumeric, getInvalidMessage("projectCode")),
    projectChannelOwner: yup
        .string()
        .required(getMandatoryMessage("projectChannelOwner")),
    projectActivitiesLastWeek: yup
        .string()
        .required(getMandatoryMessage("projectActivitiesLastWeek"))
        .defined(getMandatoryMessage("projectActivitiesLastWeek"))
        .max(500, getMaximumCharacterMessage(500))
        .matches(
            alphaNumericSpecialCharacter,
            getInvalidMessage("projectActivitiesLastWeek"),
        ),
    projectActivitiesNextWeek: yup
        .string()
        .required(getMandatoryMessage("projectActivitiesNextWeek"))
        .defined(getMandatoryMessage("projectActivitiesNextWeek"))
        .max(500, getMaximumCharacterMessage(500))
        .matches(
            alphaNumericSpecialCharacter,
            getInvalidMessage("projectActivitiesNextWeek"),
        ),
    projectAccomplishment: yup
        .string()
        .required(getMandatoryMessage("projectAccomplishment"))
        .defined(getMandatoryMessage("projectAccomplishment"))
        .max(500, getMaximumCharacterMessage(500))
        .matches(
            alphaNumericSpecialCharacter,
            getInvalidMessage("projectAccomplishment"),
        ),

    projectStatus: yup.string().required(getMandatoryMessage("projectStatus")),

    // TODO: NEED TO IMPLEMENT DATE PICKER
    // projectCompletionDate: yup
    //     .string()
    //     .required(getMandatoryMessage("projectCompletionDate")),

    projectBandwidthAvailble: yup
        .string()
        .required(getMandatoryMessage("projectBandwidthAvailble")),
});
