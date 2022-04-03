import { Button } from "@mui/material";
import styled from "styled-components";

export const CustomButton = styled(({ color, ...otherProps }) => <Button {...otherProps} />)`
&& {
    color: ${props => props.color};
}
`;

