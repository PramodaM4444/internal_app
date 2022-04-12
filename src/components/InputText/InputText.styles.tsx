import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledInput = styled(TextField)<any>`
    input {
        color: ${(props) => props.textcolor};
    }
`;
