import TextareaAutosize from "@mui/material/TextareaAutosize";
import styled from "styled-components";

export const DescriptionContainer = styled.div`
    display: flex;
    width: 50%;

    button {
        margin-left: 1.25rem;
        max-height: 4rem;
        align-self: center;
    }
`;

export const ConversationContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`;

export const MainContainer = styled.div`
    margin-left: 1.25rem;
    margin-right: 1.25rem;
`;

export const Reply = styled.div`
    margin-left: 3.125rem;
`;

export const TextArea = styled(TextareaAutosize)`
    width: 12.5rem;
    height: 6.25rem;
`;
