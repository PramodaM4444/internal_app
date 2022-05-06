import * as yup from "yup";

export const projectDetailsValidationSchema = yup.object().shape({
    projectName: yup
        .string()
        .required("Project Name is required")
        .defined("Project Name is required")
        .max(20, "Must be equal or less than 20 characters"),
    email: yup
        .string()
        .required("Project Name is required")
        .defined("Project Name is required")
        .max(20, "Must be equal or less than 5 characters"),
});
