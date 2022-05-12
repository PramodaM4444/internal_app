import { TextareaAutosize } from "@mui/base";
import styled from "styled-components";

export const DescriptionContainer = styled.div`
    display: flex;
    width: 50%;

    button {
        margin-left: 20px;
        max-height: 64px;
        align-self: center;
    }
`;

export const ConversationContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`;

export const MainContainer = styled.div`
    margin-left: 20px;
    margin-right: 20px;
`;

export const Reply = styled.div`
    margin-left: 50px;
`;

export const TextArea = styled(TextareaAutosize)`
    width: 200px;
    height: 100px;
`;
