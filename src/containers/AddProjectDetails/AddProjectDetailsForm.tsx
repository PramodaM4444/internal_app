import { Box } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";
import { InputText } from "../../components/InputText/InputText";
// import MUITextField from "../../mui-components/MUITextField/MUITextField";

export default function AddProjectDetailsForm() {
    // const {
    //     register,
    //     handleSubmit,
    //     control,
    //     reset,
    //     setValue,
    //     getValues,
    //     setError,
    //     formState: { errors },
    //     formState,
    // } = useFormContext();

    const {
        register,
        // control,
        formState: { errors },
    } = useFormContext();

    return (
        <>
            {/* TODO: NEED TO REMOVE AND FOLLOW THE SECOND PATTERN  */}
            {/* <MUITextField
                label="Project Name"
                name="projectName"
                control={control}
                defaultValue=""
                required
                errors={errors.projectName}
            /> */}

            <Box mb={3}>
                <InputText
                    label="Project Name"
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
            </Box>
        </>
    );
}
