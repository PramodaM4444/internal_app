import { Box, Grid } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { InputText } from "../../components/InputText/InputText";
import { Textarea } from "../../components/Textarea/Textarea";
import {
    channelOwnerLabelValues,
    UIConstants,
} from "../../Constants/UIConstants";
import * as styledComp from "./AddProjectDetailsForm.style";

/**
 * Shows each cart item
 * @param no_prop not applicable
 * @returns displays the Project Details Form attributes: parent: ProjectDetails, child: NA
 */
export default function AddProjectDetailsForm() {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    // const [age, setAge] = React.useState("");

    const handleChange = () => {
        // prop: event: any
        // setAge(event.target.value);
    };

    return (
        <Box mb={3}>
            <styledComp.flexRow>
                <InputText
                    label={UIConstants.projectName}
                    autoFocus
                    {...register("projectName")}
                    error={!!errors?.projectName}
                    helperText={
                        errors.projectName ? errors?.projectName.message : null
                    }
                />
                <InputText
                    label={UIConstants.projectCode}
                    {...register("projectCode")}
                    error={!!errors?.projectCode}
                    helperText={
                        errors.projectCode ? errors?.projectCode.message : null
                    }
                />
            </styledComp.flexRow>
            <styledComp.flexRow>
                <Grid item md={6} sm={6} xs={12}>
                    <Dropdown
                        label={UIConstants.projectChannelOwner}
                        {...register("projectChannelOwner")}
                        error={!!errors?.projectChannelOwner}
                        onChange={handleChange}
                        options={channelOwnerLabelValues}
                        helperText={
                            errors.projectChannelOwner
                                ? errors?.projectChannelOwner.message
                                : null
                        }
                    />
                </Grid>
            </styledComp.flexRow>
            <styledComp.flexRow>
                <Textarea
                    label={UIConstants.projectActivitiesLastWeek}
                    {...register("projectActivitiesLastWeek")}
                    error={!!errors?.projectActivitiesLastWeek}
                    helperText={
                        errors.projectActivitiesLastWeek
                            ? errors?.projectActivitiesLastWeek.message
                            : null
                    }
                />
            </styledComp.flexRow>
            <styledComp.flexRow>
                <Textarea
                    label={UIConstants.projectActivitiesNextWeek}
                    {...register("projectActivitiesNextWeek")}
                    error={!!errors?.projectActivitiesNextWeek}
                    helperText={
                        errors.projectActivitiesNextWeek
                            ? errors?.projectActivitiesNextWeek.message
                            : null
                    }
                />
            </styledComp.flexRow>
            <styledComp.flexRow>
                <Textarea
                    label={UIConstants.projectAccomplishment}
                    {...register("projectAccomplishment")}
                    error={!!errors?.projectAccomplishment}
                    helperText={
                        errors.projectAccomplishment
                            ? errors?.projectAccomplishment.message
                            : null
                    }
                />
            </styledComp.flexRow>
            <styledComp.flexRow>
                <Grid item md={6} sm={6} xs={12}>
                    <Dropdown
                        label={UIConstants.projectStatus}
                        {...register("projectStatus")}
                        error={!!errors?.projectStatus}
                        onChange={handleChange}
                        options={channelOwnerLabelValues}
                        helperText={
                            errors.projectStatus
                                ? errors?.projectStatus.message
                                : null
                        }
                    />
                </Grid>

                {/* <Grid item md={6} sm={6} xs={12}>
                     <Dropdown
                        label={UIConstants.projectCompletionDate}
                        {...register("projectCompletionDate")}
                        error={!!errors?.projectCompletionDate}
                        onChange={handleChange}
                        options={channelOwnerLabelValues}
                        helperText={
                            errors.projectCompletionDate
                                ? errors?.projectCompletionDate.message
                                : null
                        }
                    /> 
                </Grid> */}
            </styledComp.flexRow>
            <styledComp.flexRow>
                <Grid item md={6} sm={6} xs={12}>
                    <Dropdown
                        label={UIConstants.projectBandwidthAvailble}
                        {...register("projectBandwidthAvailble")}
                        error={!!errors?.projectBandwidthAvailble}
                        onChange={handleChange}
                        options={channelOwnerLabelValues}
                        helperText={
                            errors.projectBandwidthAvailble
                                ? errors?.projectBandwidthAvailble.message
                                : null
                        }
                    />
                </Grid>
            </styledComp.flexRow>
        </Box>
    );
}
