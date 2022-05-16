import * as yup from "yup";
import {
    getMandatoryMessage,
    getMaximumCharacterMessage,
} from "@utils/validation-helper";

export const projectDetailsValidationSchema = yup.object().shape({
    projectName: yup
        .string()
        .required(getMandatoryMessage("projectName"))
        .defined(getMandatoryMessage("projectName"))
        .max(20, getMaximumCharacterMessage(20)),
    projectCode: yup
        .string()
        .required(getMandatoryMessage("projectCode"))
        .defined(getMandatoryMessage("projectCode"))
        .max(20, getMaximumCharacterMessage(20)),
    projectChannelOwner: yup
        .string()
        .required(getMandatoryMessage("projectChannelOwner")),
    projectActivitiesLastWeek: yup
        .string()
        .required(getMandatoryMessage("projectActivitiesLastWeek"))
        .defined(getMandatoryMessage("projectActivitiesLastWeek")),
    projectActivitiesNextWeek: yup
        .string()
        .required(getMandatoryMessage("projectActivitiesNextWeek"))
        .defined(getMandatoryMessage("projectActivitiesNextWeek")),
    projectAccomplishment: yup
        .string()
        .required(getMandatoryMessage("projectAccomplishment"))
        .defined(getMandatoryMessage("projectAccomplishment")),

    projectStatus: yup.string().required(getMandatoryMessage("projectStatus")),

    // TODO: NEED TO IMPLEMENT DATE PICKER
    // projectCompletionDate: yup
    //     .string()
    //     .required(getMandatoryMessage("projectCompletionDate")),

    projectBandwidthAvailble: yup
        .string()
        .required(getMandatoryMessage("projectBandwidthAvailble")),
});
