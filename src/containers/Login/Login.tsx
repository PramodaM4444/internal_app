import React from "react";
import { Box, Container, Grid, TextField } from "@mui/material";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { useForm } from "react-hook-form";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
    style={{ minHeight: '100vh' }}
  >
  
      <Container maxWidth="xs">
        <h1>Login Page</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={3}>
          <TextField
            variant="outlined"
            label="email"
            fullWidth
            autoFocus
            {...register("email", {
              required: "Email Id is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            error={!!errors?.email}
            helperText={errors.email ? errors?.email.message: null}
          />
        </Box>
        <Box mb={3}>
            <TextField 
            variant="outlined"
            label="password"
            type="password"
            fullWidth
            inputProps={{ maxLength: 16 }}
            {...register("password", {
                required: "Password is required",
                pattern: {
                    value: /[^]{8,16}/i,
                    message: "Password must be 8 charactor long"
                }
            })}
            
            error={!!errors?.password}
            helperText={errors.password ? errors?.password.message : null}
            />
        </Box>

        <CustomButton type="submit" variant="contained" fullWidth>
          Sign In
        </CustomButton>
    </form>
      </Container>
      </Grid>
  );
};
