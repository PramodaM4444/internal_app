import * as React from "react";
import Paper from "@mui/material/Paper";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import * as styledComp from "./projectDetails.style";
import { projectDetailsValidationSchema } from "../../validation/projectDetailsValidation";
import AddProjectDetailsForm from "../AddProjectDetails/AddProjectDetailsForm";

export default function ProjectDetails() {
    const formMethods = useForm({
        resolver: yupResolver(projectDetailsValidationSchema),
        mode: "all",
    });

    const formSubmit = (data: any) => {
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
                    <styledComp.submitButtonArea>
                        <Button type="submit" variant="contained">
                            Submit
                        </Button>
                    </styledComp.submitButtonArea>
                </form>
            </FormProvider>
        </Paper>
    );
}
