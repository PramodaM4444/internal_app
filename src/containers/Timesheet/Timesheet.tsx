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
import { Box, Typography } from "@mui/material";
import { Dropdown } from "@components/Dropdown/Dropdown";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UIConstants } from "@constants/UIConstants";
import { Textarea } from "@components/Textarea/Textarea";
import { ImagePreview } from "@components/ImagePreview/ImagePreview";
import { CustomButton } from "@components/CustomButton/CustomButton";
import {
    fetchTimesheetRequest,
    handleApproveReject,
} from "@store/actions/timesheetAction";
// import { selectTimesheetsData } from "@store/selectors/timesheetSelector";
import { selectViewTimesheetsData } from "@store/selectors/viewTimesheetSelector";
import { fetchViewTimesheetRequest } from "@store/actions/viewTimesheetAction";
import { fetchGetEmployeesRequest } from "@store/actions/getEmployeesAction";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { selectGetEmployeesData } from "@store/selectors/getEmployeesSelector";
import { LoadingIndicator } from "@components/LoadingIndicator/LoadingIndicator";
import { selectIsLoading } from "@store/selectors/loadingSelector";
import { timesheetRejectRemarks } from "@validation/timesheetRejectValidation";
import { useForm } from "react-hook-form";
import { selectLoginUserData } from "@store/selectors/LoginSelector";
import {
    DragContainer,
    Dropzone,
    FlexRow,
    ViewImage,
    ButtonGap,
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
    const dispatch = useAppDispatch();

    const isLoading = useAppSelector(selectIsLoading);
    const viewTimesheet = useAppSelector(selectViewTimesheetsData);
    const getEmployees = useAppSelector(selectGetEmployeesData);
    const userInfo = useAppSelector(selectLoginUserData);

    // const timesheets = useAppSelector(selectTimesheetsData);

    const [files, setFiles] = useState([]);
    const [employees, setEmployees] = useState({});
    const [date, setDate] = useState<string | null>(null);
    const [value, setValue] = useState(0);
    const [expanded, setExpanded] = useState("panel1");

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

    const getTimesheetData = () => {
        dispatch(fetchTimesheetRequest(files, formData));
    };

    const handleDatepicker = (newDate: string) => {
        setDate(newDate);
    };

    const getViewTimesheetData = () => {
        const selectedDate = moment(date).format("DD-MM-YYYY");
        const data = {
            itemType: "ILC",
            uploadTime: selectedDate,
            ...employees,
        };

        dispatch(fetchViewTimesheetRequest(data));
    };

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleSelect = (event: any) => {
        const { employeeId, employeeName } = event.target.value;
        setEmployees({ employeeId, employeeName });
    };

    const handleAccordianChange =
        (panel: string) => (event: any, isExpanded: boolean) => {
            if (
                panel === "panel2" &&
                isExpanded &&
                getEmployees?.length === 0
            ) {
                dispatch(fetchGetEmployeesRequest());
            }
            setExpanded(isExpanded ? panel : "");
        };

    const disabledDate = (current: any) => {
        const disable = new Date(current).getDay();
        if (disable === 0 || 2 || 3 || 4 || 5 || 6) return disable !== 1;
        return null;
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(timesheetRejectRemarks);

    const handleReject = (reason: any) => {
        const payload = {
            ...employees,
            itemUploadedDateTime: moment(date).format("DD-MM-YYYY"),
            itemType: "ILC",
            itemRejectReason: reason.RejectionRemarks,
            itemFlag: false,
            approvedRejectBy: userInfo?.employeeId,
        };
        dispatch(handleApproveReject(payload));
    };

    const handleApprove = () => {
        const payload = {
            ...employees,
            itemUploadedDateTime: moment(date).format("DD-MM-YYYY"),
            itemType: "ILC",
            itemRejectReason: "",
            itemFlag: true,
            approvedRejectBy: userInfo?.employeeId,
        };
        dispatch(handleApproveReject(payload));
    };

    return (
        <>
            {console.log(getEmployees)}
            {isLoading && <LoadingIndicator />}
            <Typography variant="h5" marginBottom="1rem">
                {UIConstants.ilcDescription}
            </Typography>
            <Accordion
                expanded={expanded === "panel1"}
                onChange={handleAccordianChange("panel1")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    sx={{
                        backgroundColor: "lightgray",
                        color: "black",
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
                expanded={expanded === "panel2"}
                onChange={handleAccordianChange("panel2")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    sx={{
                        backgroundColor: "lightgray",
                        color: "black",
                    }}
                >
                    {UIConstants.ilcView}
                </AccordionSummary>
                <AccordionDetails>
                    <Box m={1}>
                        <FlexRow>
                            <FormControl
                                variant="filled"
                                sx={{ m: 1, minWidth: 200 }}
                            >
                                <Dropdown
                                    label={UIConstants.ilcSelectContributor}
                                    onChange={handleSelect}
                                    options={getEmployees}
                                />
                            </FormControl>
                            <Box m={1}>
                                <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                >
                                    <DatePicker
                                        label="Date"
                                        inputFormat="dd-MM-yyyy"
                                        shouldDisableDate={disabledDate}
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
                        <CustomButton
                            onClick={getViewTimesheetData}
                            disabled={!date}
                        >
                            {UIConstants.ilcSearch}
                        </CustomButton>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <Tabs
                                value={value}
                                onChange={handleTabChange}
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
                        <form onSubmit={handleSubmit(handleReject)}>
                            <Textarea
                                label={UIConstants.ilcApprovalRejectionRemarks}
                                {...register("RejectionRemarks")}
                                error={!!errors?.RejectionRemarks}
                                helperText={
                                    errors.RejectionRemarks
                                        ? errors?.RejectionRemarks.message
                                        : null
                                }
                            />
                            <Box m={1} display="flex" justifyContent="flex-end">
                                <CustomButton
                                    variant="contained"
                                    color="error"
                                    type="submit"
                                >
                                    {UIConstants.ilcReject}
                                </CustomButton>
                                <ButtonGap>
                                    <CustomButton
                                        variant="contained"
                                        color="success"
                                        onClick={handleApprove}
                                    >
                                        {UIConstants.ilcApprove}
                                    </CustomButton>
                                </ButtonGap>
                            </Box>
                        </form>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </>
    );
};
