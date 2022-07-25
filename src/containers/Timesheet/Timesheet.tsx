import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UIConstants } from "@constants/UIConstants";
import { Textarea } from "@components/Textarea/Textarea";
import { ImagePreview } from "@components/ImagePreview/ImagePreview";
import { CustomButton } from "@components/CustomButton/CustomButton";
import { fetchTimesheetRequest } from "@store/actions/timesheetAction";
// import { selectTimesheetsData } from "@store/selectors/timesheetSelector";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { LoadingIndicator } from "@components/LoadingIndicator/LoadingIndicator";
import { selectIsLoading } from "@store/selectors/loadingSelector";
import { DragContainer, Dropzone } from "./Timesheet.styles";

export const Timesheet: React.FC = () => {
    const isLoading = useAppSelector(selectIsLoading);

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

    const formData = new FormData();
    formData.append("files", files[0]);

    const dispatch = useAppDispatch();

    // const timesheets = useAppSelector(selectTimesheetsData);

    const getTimesheetData = () => {
        dispatch(fetchTimesheetRequest(files, formData));
    };
    const [value, setValue] = React.useState<Date | null>(null);
    console.log(value);

    const [expanded, setExpanded] = useState("panel");

    const handleChange = (panel: any) => (event: any, isExpanded: any) => {
        setExpanded(isExpanded ? panel : "");
    };

    return (
        <>
            {isLoading && <LoadingIndicator />}
            <Typography variant="h5" marginBottom="1rem">
                {UIConstants.ilcDescription}
            </Typography>
            <Accordion
                expanded={expanded === "panel"}
                onChange={handleChange("panel")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                        backgroundColor: "#78909c",
                        color: "#fff",
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
                    <br />
                    <Typography color="red">{UIConstants.ilcNote}</Typography>
                    <Box m={1} display="flex" justifyContent="flex-end">
                        <CustomButton
                            variant="contained"
                            onClick={getTimesheetData}
                        >
                            {UIConstants.ilcSubmit}
                        </CustomButton>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "pane2"}
                onChange={handleChange("pane2")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{
                        backgroundColor: "#78909c",
                        color: "#fff",
                    }}
                >
                    {UIConstants.ilcView}
                </AccordionSummary>
                <AccordionDetails>
                    <Box m={1} display="flex" justifyContent="flex-end">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date"
                                inputFormat="dd-MM-yyyy"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                            />
                        </LocalizationProvider>
                    </Box>
                    <Box m={1} display="flex" justifyContent="flex-end">
                        <CustomButton>{UIConstants.ilcSearch}</CustomButton>
                    </Box>
                    <Textarea label={UIConstants.ilcApprovalRejectionRemarks} />
                </AccordionDetails>
            </Accordion>
        </>
    );
};
