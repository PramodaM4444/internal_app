import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { UIConstants } from "@constants/UIConstants";
import { Textarea } from "@components/Textarea/Textarea";
import { CustomButton } from "../../components/CustomButton/CustomButton";

export const Timesheet: React.FC = () => (
    <Container maxWidth="md">
        <Typography variant="h5">{UIConstants.ilcDescription}</Typography>
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
                {UIConstants.ilcDetails}
            </AccordionSummary>
            <AccordionDetails>
                <Textarea label={UIConstants.ilcRemarks} />
                <Box m={1} display="flex" justifyContent="flex-end">
                    <CustomButton variant="contained">
                        <CloudUploadIcon />
                        {UIConstants.ilcUpload}
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
                {UIConstants.ilcView}
            </AccordionSummary>
            <AccordionDetails>
                <Textarea label={UIConstants.ilcApprovalRejectionRemarks} />
            </AccordionDetails>
        </Accordion>
    </Container>
);
