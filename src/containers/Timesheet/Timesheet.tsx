import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Container, Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { CustomButton } from "../../components/CustomButton/CustomButton";

export const Timesheet: React.FC = () => (
    <Container maxWidth="md">
        <h4>Upload ILC</h4>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                }}
            >
                <Typography>ILC Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Remarks (if any)</Typography>
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={5}
                    style={{ width: 800 }}
                />
                <Box m={1} display="flex" justifyContent="flex-end">
                    <CustomButton variant="contained">
                        <CloudUploadIcon />
                        Upload
                    </CustomButton>
                </Box>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                }}
            >
                <Typography>View ILC</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Approval/Rejection Remarks</Typography>
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={5}
                    style={{ width: 800 }}
                />
            </AccordionDetails>
        </Accordion>
    </Container>
);
