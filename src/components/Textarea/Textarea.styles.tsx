import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TextareaInput = styled(TextField)<any>`
    input {
        color: ${(props) => props.textcolor};
    }
`;
