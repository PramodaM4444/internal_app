import { Box } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";
import { InputText } from "../../components/InputText/InputText";
import UIConstants from "../../constants/UIConstants";
import * as styledComp from "./AddProjectDetailsForm.style";

/**
 * Shows each cart item
 * @param no_prop not applicable
 * @returns displays the Project Details Form attributes: parent: ProjectDetails, child: NA
 */
export default function AddProjectDetailsForm() {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <Box mb={3}>
            <styledComp.flexRow>
                <InputText
                    label={UIConstants.projectName}
                    autoFocus
                    {...register("projectName")}
                    error={!!errors?.projectName}
                    helperText={
                        errors.projectName ? errors?.projectName.message : null
                    }
                />
                <InputText
                    label="Lorem Ipsum"
                    autoFocus
                    {...register("email")}
                    error={!!errors?.email}
                    helperText={errors.email ? errors?.email.message : null}
                />
            </styledComp.flexRow>
        </Box>
    );
}
