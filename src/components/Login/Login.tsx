import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { UIConstants } from "@constants/UIConstants";
import { InputText } from "@components/InputText/InputText";
import { loginFormOptions } from "@validation/loginValidation";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { handleLoginAction } from "@store/actions/loginAction";
import { selectLoginUserData } from "@store/selectors/LoginSelector";
import { useEffect } from "react";
import CodingConstants from "@constants/CodingConstants";

const theme = createTheme();

export const Login = () => {
    const history = useHistory();
    const dispatch = useAppDispatch();
    const userInfo = useAppSelector(selectLoginUserData);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(loginFormOptions);

    const onSubmit = (loginCredentials: any) => {
        dispatch(handleLoginAction(loginCredentials));
    };

    useEffect(() => {
        if (userInfo && userInfo.message === CodingConstants.loginSuccess) {
            history.push("/");
        }
    }, [userInfo]);

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: "url(IBM_Logo.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            {UIConstants.login}
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <InputText
                                margin="normal"
                                required
                                fullWidth
                                label="Employee_Id"
                                name="empId"
                                autoFocus
                                {...register("Employee_Id")}
                                error={!!errors?.Employee_Id}
                                helperText={
                                    errors.Employee_Id
                                        ? errors?.Employee_Id.message
                                        : null
                                }
                            />
                            <InputText
                                margin="normal"
                                required
                                fullWidth
                                name="Password"
                                label="Password"
                                type="password"
                                inputProps={{ maxLength: 15 }}
                                {...register("Password")}
                                error={!!errors?.Password}
                                helperText={
                                    errors.Password
                                        ? errors?.Password.message
                                        : null
                                }
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="remember"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                {UIConstants.login}
                            </Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};
