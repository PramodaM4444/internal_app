import React from "react";
import { TextareaType } from "../../Constants/application.type";
import { TextareaInput } from "./Textarea.styles";

const defaultProps = {
    variant: "filled",
    fullWidth: true,
    textcolor: "black",
    label: "inputText",
};

export const Textarea: React.FC<any> = React.forwardRef(
    (props: TextareaType, ref) => (
        <TextareaInput
            {...defaultProps}
            {...props}
            ref={ref}
            multiline
            rows={2}
            maxRows={4}
        />
    ),
);
