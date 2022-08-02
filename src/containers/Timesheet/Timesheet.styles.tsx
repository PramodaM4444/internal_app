import styled from "styled-components";

export const Dropzone = styled.div`
    text-align: center;
    padding: 1.25rem;
    border: ${({ theme: { colors } }) =>
        `0.1875rem dashed ${colors.lightGray}`};
    color: ${({ theme: { colors } }) => `${colors.gray}`};
`;

export const DragContainer = styled.aside`
    display: "flex";
    flexdirection: "row";
    flexwrap: "wrap";
`;

export const Drag = styled.div`
    display: "inline-flex";
    width: 100%;
    height: auto;
    boxsizing: "border-box";
`;

export const DragInner = styled.div`
    display: "flex";
    minwidth: 0;
    overflow: "hidden";
`;

export const Image = styled.img`
    display: "block";
    padding: 0.5rem;
    width: 100%;
    height: auto;
`;

export const ViewImage = styled.div`
    text-align: center;
    border: ${({ theme: { colors } }) =>
        `0.1875rem dashed ${colors.lightGray}`};
    color: ${({ theme: { colors } }) => `${colors.gray}`};
    width: 100%;
    height: auto;
`;

export const FlexRow = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
