import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const loginValidationSchema = yup.object().shape({
    Employee_Id: yup.string().min(4).required(),
    Password: yup.string().min(8).max(15).required(),
});

export const loginFormOptions = {
    resolver: yupResolver(loginValidationSchema),
};
