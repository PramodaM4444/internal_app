import * as React from "react";
import Paper from "@mui/material/Paper";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { projectDetailsValidationSchema } from "@validation/projectDetailsValidation";
import AddProjectDetailsForm from "@containers/AddProjectDetails/AddProjectDetailsForm";
import { UIConstants } from "@constants/UIConstants";
import { SubmitButtonArea } from "./projectDetails.style";

/**
 * Shows each cart item
 * @param no_prop not applicable
 * @returns displays the Project Details (yupResolver and submit button) screen: parent: ProjectInformation, child: AddProjectDetailsForm
 */
export default function ProjectDetails() {
    const formMethods = useForm({
        resolver: yupResolver(projectDetailsValidationSchema),
        mode: "all",
    });
    const formSubmit = (data: any) => {
        // prop:  data: any
        console.log(data);
    };

    return (
        <Paper
            sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                boxShadow: "none",
                // height: 240,
            }}
        >
            <FormProvider {...formMethods}>
                <form onSubmit={formMethods.handleSubmit(formSubmit)}>
                    <AddProjectDetailsForm />
                    <SubmitButtonArea>
                        <Button type="submit" variant="contained">
                            {UIConstants.projectDetailsSubmit}
                        </Button>
                    </SubmitButtonArea>
                </form>
            </FormProvider>
        </Paper>
    );
}
