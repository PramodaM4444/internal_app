import * as React from "react";
import Paper from "@mui/material/Paper";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AddProjectDetailsForm from "../../forms/AddProjectDetails/AddProjectDetailsForm";

const schema = yup.object().shape({
    projectName: yup
        .string()
        .required("Project Name is required")
        .defined("Project Name is required"),
});

export default function ProjectDetails() {
    const formMethods = useForm({
        resolver: yupResolver(schema),
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
                // height: 240,
            }}
        >
            <b>PROJECT DETAILS AREA</b>
            <br />
            <FormProvider {...formMethods}>
                <form onSubmit={formMethods.handleSubmit(formSubmit)}>
                    <AddProjectDetailsForm />
                    <input type="submit" />
                </form>
            </FormProvider>
        </Paper>
    );
}
