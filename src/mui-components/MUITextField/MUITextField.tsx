import * as React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { MUITextFieldProps } from "../../Constants/application.type";

export default function MUITextField({
    label,
    name,
    control,
    defaultValue = "",
    required,
    errors,
}: MUITextFieldProps) {
    const requiredLabel = `${label} *`;
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field }) => (
                <TextField
                    {...field}
                    type="text"
                    label={required ? requiredLabel : label}
                    variant="outlined"
                    error={!!errors}
                    helperText={errors ? errors?.message : ""}
                />
            )}
        />
    );
}
