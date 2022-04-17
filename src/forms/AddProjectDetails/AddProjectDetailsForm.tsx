import React from "react";
import { useFormContext } from "react-hook-form";
import MUITextField from "../../mui-components/MUITextField/MUITextField";

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
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <>
            <MUITextField
                label="Project Name"
                name="projectName"
                control={control}
                defaultValue=""
                required
                errors={errors.projectName}
            />
            <br />
        </>
    );
}
