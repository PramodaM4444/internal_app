import { Button } from "@mui/material";
import styled from "styled-components";

export const CustomButton = styled(
    ({ color, variant = "contained", ...otherProps }) => (
        <Button variant={variant} color={color} {...otherProps} />
    ),
)`
    && {
        color: ${(props) => props.color};
    }
`;
