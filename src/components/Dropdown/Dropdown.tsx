import {
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
} from "@mui/material";
import React from "react";
import { DropdownType } from "../../Constants/application.type";
import { SelectInput } from "./Dropdown.styles";

const formControlDefaultProps = {
    fullWidth: true,
};

const selectDefaultProps = {
    variant: "filled",
    fullWidth: true,
    textcolor: "black",
    label: "inputText",
};

export const Dropdown: React.FC<any> = React.forwardRef(
    (props: DropdownType, ref) => (
        <FormControl
            variant="filled"
            {...formControlDefaultProps}
            error={props.helperText}
        >
            <InputLabel id={props.name}>{props.label}</InputLabel>
            <SelectInput {...selectDefaultProps} {...props} ref={ref}>
                <MenuItem value="">
                    <em>Select an option</em>
                </MenuItem>
                {props.options.map((items: any) => (
                    <MenuItem value={items.label}>{items.value}</MenuItem>
                ))}
            </SelectInput>
            <FormHelperText>{props.helperText}</FormHelperText>
        </FormControl>
    ),
);
