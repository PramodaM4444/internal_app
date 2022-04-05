import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(15).required(),
})

export const loginFormOptions = { resolver: yupResolver(loginValidationSchema) };
