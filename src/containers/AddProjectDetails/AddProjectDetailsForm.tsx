import { Box } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { InputText } from "../../components/InputText/InputText";
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
            </styledComp.flexRow>
        </Box>
    );
}
