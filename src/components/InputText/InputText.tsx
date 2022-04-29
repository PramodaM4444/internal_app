import React from "react";
import { StyledInput } from "./InputText.styles";

const defaultProps = {
    variant: "filled",
    fullWidth: true,
    textcolor: "black",
    label: "inputText",
};

export const InputText: React.FC<any> = React.forwardRef((props, ref) => (
    <StyledInput {...defaultProps} {...props} ref={ref} />
));
