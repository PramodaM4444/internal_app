import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Container, Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import Toolbar from "@mui/material/Toolbar";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UIConstants } from "@constants/UIConstants";
import { Textarea } from "@components/Textarea/Textarea";
import { Dashboard } from "@containers/dashboard/dashboard";
import { ImagePreview } from "@components/ImagePreview/ImagePreview";
import { CustomButton } from "@components/CustomButton/CustomButton";
import { DragContainer, Dropzone } from "./Timesheet.styles";

export const Timesheet: React.FC = () => {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            "image/*": [],
        },
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    }),
                ),
            );
        },
    });

    return (
        <Dashboard>
            <Toolbar />
            <Container maxWidth="md">
                <Typography variant="h5">
                    {UIConstants.ilcDescription}
                </Typography>
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
                        <Dropzone {...getRootProps({})}>
                            <input {...getInputProps()} />
                            <Typography variant="h5">
                                {UIConstants.ilcDragAndDrop}
                            </Typography>
                        </Dropzone>
                        <DragContainer>
                            <ImagePreview files={files} />
                        </DragContainer>
                        <br />
                        <Textarea label={UIConstants.ilcRemarks} />
                        <Box m={1} display="flex" justifyContent="flex-end">
                            <CustomButton variant="contained">
                                {UIConstants.ilcSubmit}
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
                        <Textarea
                            label={UIConstants.ilcApprovalRejectionRemarks}
                        />
                    </AccordionDetails>
                </Accordion>
            </Container>
        </Dashboard>
    );
};
