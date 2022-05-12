import React from "react";
import { Box, Grid } from "@mui/material";
import { InputText } from "@components/InputText/InputText";
import { useFormContext } from "react-hook-form";
import { Dropdown } from "@components/Dropdown/Dropdown";
import { Textarea } from "@components/Textarea/Textarea";
import {
    channelOwnerLabelValues,
    projectBandwidthAvailbleLabelValues,
    projectStatusLabelValues,
    UIConstants,
} from "@constants/UIConstants";
import { FlexRow } from "./AddProjectDetailsForm.style";

/**
 * Shows Project Details Form
 * @param no_prop not applicable
 * @returns displays the Project Details Form attributes: parent: ProjectDetails, child: NA
 */
export default function AddProjectDetailsForm() {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const handleChange = () => {
        // prop: event: any
    };

    return (
        <Box mb={3}>
            <FlexRow>
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
            </FlexRow>
            <FlexRow>
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
            </FlexRow>
            <FlexRow>
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
            </FlexRow>
            <FlexRow>
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
            </FlexRow>
            <FlexRow>
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
            </FlexRow>
            <FlexRow>
                <Grid item md={6} sm={6} xs={12}>
                    <Dropdown
                        label={UIConstants.projectStatus}
                        {...register("projectStatus")}
                        error={!!errors?.projectStatus}
                        onChange={handleChange}
                        options={projectStatusLabelValues}
                        helperText={
                            errors.projectStatus
                                ? errors?.projectStatus.message
                                : null
                        }
                    />
                </Grid>
            </FlexRow>
            <FlexRow>
                <Grid item md={6} sm={6} xs={12}>
                    <Dropdown
                        label={UIConstants.projectBandwidthAvailble}
                        {...register("projectBandwidthAvailble")}
                        error={!!errors?.projectBandwidthAvailble}
                        onChange={handleChange}
                        options={projectBandwidthAvailbleLabelValues}
                        helperText={
                            errors.projectBandwidthAvailble
                                ? errors?.projectBandwidthAvailble.message
                                : null
                        }
                    />
                </Grid>
            </FlexRow>
        </Box>
    );
}
