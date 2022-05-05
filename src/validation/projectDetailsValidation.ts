import * as yup from "yup";
import { UIConstants } from "../Constants/UIConstants";

export const projectDetailsValidationSchema = yup.object().shape({
    projectName: yup
        .string()
        .required(`${UIConstants.projectName}${UIConstants.isRequired}`)
        .defined(`${UIConstants.projectName}${UIConstants.isRequired}`)
        .max(20, "Must be equal or less than 20 characters"),
    projectCode: yup
        .string()
        .required(`${UIConstants.projectCode}${UIConstants.isRequired}`)
        .defined(`${UIConstants.projectCode}${UIConstants.isRequired}`)
        .max(20, "Must be equal or less than 5 characters"),
    projectChannelOwner: yup
        .string()
        .required(
            `${UIConstants.projectChannelOwner}${UIConstants.isRequired}`,
        ),
    projectActivitiesLastWeek: yup
        .string()
        .required(
            `${UIConstants.projectActivitiesLastWeek}${UIConstants.isRequired}`,
        )
        .defined(
            `${UIConstants.projectActivitiesLastWeek}${UIConstants.isRequired}`,
        ),
    projectActivitiesNextWeek: yup
        .string()
        .required(
            `${UIConstants.projectActivitiesNextWeek}${UIConstants.isRequired}`,
        )
        .defined(
            `${UIConstants.projectActivitiesNextWeek}${UIConstants.isRequired}`,
        ),
    projectAccomplishment: yup
        .string()
        .required(
            `${UIConstants.projectAccomplishment}${UIConstants.isRequired}`,
        )
        .defined(
            `${UIConstants.projectAccomplishment}${UIConstants.isRequired}`,
        ),
});
