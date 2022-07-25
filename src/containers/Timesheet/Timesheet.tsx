import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import moment from "moment";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Container, Box, Typography } from "@mui/material";
import { Dropdown } from "@components/Dropdown/Dropdown";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UIConstants, ViewIlcSelectContributor } from "@constants/UIConstants";
import { Textarea } from "@components/Textarea/Textarea";
import { ImagePreview } from "@components/ImagePreview/ImagePreview";
import { CustomButton } from "@components/CustomButton/CustomButton";
import { fetchTimesheetRequest } from "@store/actions/timesheetAction";
// import { selectTimesheetsData } from "@store/selectors/timesheetSelector";
import { selectViewTimesheetsData } from "@store/selectors/viewTimesheetSelector";
import { fetchViewTimesheetRequest } from "@store/actions/viewTimesheetAction";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { getDate } from "date-fns";
import {
    DragContainer,
    Dropzone,
    FlexRow,
    ViewImage,
} from "./Timesheet.styles";
import { TabPanelProps } from "./Timesheet.types";

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

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

    const formData = new FormData();
    formData.append("files", files[0]);

    const dispatch = useAppDispatch();

    // const timesheets = useAppSelector(selectTimesheetsData);

    const viewTimesheet = useAppSelector(selectViewTimesheetsData);
    console.log("View--", viewTimesheet.fileContent_1);

    const getTimesheetData = () => {
        dispatch(fetchTimesheetRequest(files, formData));
    };
    const [date, setDate] = React.useState<any | null>(null);
    const disableOtherDays = (Date: any) => {
        const day = getDate(Date);
        return day !== 0;
    };

    const handleDatepicker = (newDate: string) => {
        setDate(newDate);
    };
    const getViewTimesheetData = () => {
        const selectedDate = moment(date).format("DD-MM-YYYY");
        dispatch(fetchViewTimesheetRequest(selectedDate));
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleSelect = () => {
        // prop: event: any
    };

    return (
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
                    <Box m={1}>
                        <FlexRow>
                            <FormControl
                                variant="filled"
                                sx={{ m: 1, minWidth: 250 }}
                            >
                                <Dropdown
                                    label={UIConstants.ilcSelectContributor}
                                    onChange={handleSelect}
                                    options={ViewIlcSelectContributor}
                                />
                            </FormControl>
                            <Box m={1} display="flex" justifyContent="flex-end">
                                <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                >
                                    <DatePicker
                                        label="Date"
                                        inputFormat="dd-MM-yyyy"
                                        shouldDisableDate={disableOtherDays}
                                        value={date}
                                        onChange={(e) => handleDatepicker(e)}
                                        renderInput={(params) => (
                                            <TextField {...params} />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Box>
                        </FlexRow>
                    </Box>
                    <Box m={1} display="flex" justifyContent="flex-end">
                        <CustomButton onClick={getViewTimesheetData}>
                            {UIConstants.ilcSearch}
                        </CustomButton>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="basic tabs example"
                            >
                                <Tab label="Image" {...a11yProps(0)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <ViewImage>
                                <Typography variant="h5">
                                    {viewTimesheet.fileContent_1 ? (
                                        <img
                                            src={`data:image/png;base64,${viewTimesheet.fileContent_1}`}
                                            alt="View ILC"
                                            height="auto"
                                            width="100%"
                                        />
                                    ) : (
                                        UIConstants.viewImage
                                    )}
                                </Typography>
                            </ViewImage>
                        </TabPanel>
                        <Textarea
                            label={UIConstants.ilcApprovalRejectionRemarks}
                        />
                        <Box m={1} display="flex" justifyContent="flex-end">
                            <CustomButton>{UIConstants.ilcSubmit}</CustomButton>
                        </Box>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
};
