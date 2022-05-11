import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { CustomButton } from "@components/CustomButton/CustomButton";
import { loginFormOptions } from "@validation/loginValidation";
import { InputText } from "@components/InputText/InputText";

export function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(loginFormOptions);

    const onSubmit = (data: any) => {
        console.log("Data--------", data);
    };

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "100vh" }}
        >
            <Container maxWidth="xs">
                <h1>Login Page</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box mb={3}>
                        <InputText
                            label="email"
                            autoFocus
                            {...register("email")}
                            error={!!errors?.email}
                            helperText={
                                errors.email ? errors?.email.message : null
                            }
                        />
                        <InputText
                            label="password"
                            type="password"
                            inputProps={{ maxLength: 15 }}
                            {...register("password")}
                            error={!!errors?.password}
                            helperText={
                                errors.password
                                    ? errors?.password.message
                                    : null
                            }
                        />
                    </Box>

                    <CustomButton type="submit" variant="contained" fullWidth>
                        Sign In
                    </CustomButton>
                </form>
            </Container>
        </Grid>
    );
}
