import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Container } from "@mui/material";
import { CustomButton } from "../../components/CustomButton/CustomButton";

export const Timesheet: React.FC = () => (
    <Container maxWidth="xs">
        <h3>ILC Details</h3>
        <p>Provide your comments if any:</p>
        <TextareaAutosize
            aria-label="minimum height"
            minRows={10}
            style={{ width: 500 }}
        />
        <br />
        <CustomButton variant="contained">Submit</CustomButton>
        &nbsp;&nbsp;
        <CustomButton variant="contained">Cancel</CustomButton>
    </Container>
);
