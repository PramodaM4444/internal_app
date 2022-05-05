import {
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
} from "@mui/material";
import React from "react";
import { DropdownType } from "../../Constants/application.type";
import { SelectInput } from "./Dropdown.styles";

const defaultProps = {
    variant: "filled",
    fullWidth: true,
    textcolor: "black",
    label: "inputText",
};

export const Dropdown: React.FC<any> = React.forwardRef(
    (props: DropdownType, ref) => (
        <FormControl
            variant="filled"
            sx={{ minWidth: 120 }}
            error={props.helperText}
        >
            <InputLabel id={props.name}>{props.label}</InputLabel>
            <SelectInput {...defaultProps} {...props} ref={ref}>
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
