import styled from "styled-components";

export const TopNavBgColor = styled.div`
    background-color: ${({ theme: { colors } }) =>
        `1px dashed ${colors.topNavBgColor}`};
`;

export const LeftNavBgColor = styled.div`
    background-color: ${({ theme: { colors } }) =>
        `1px dashed ${colors.leftNavBgColor}`};
`;

export const Width100 = styled.div`
    display: "flex";
    width: 100%;
`;
