import styled from "styled-components";

export const Dropzone = styled.div`
    text-align: center;
    padding: 1.25rem;
    border: 0.1875rem dashed #eeeeee;
    background-color: #fafafa;
    color: #bdbdbd;
`;

export const ThumbsContainer = styled.aside`
    display: "flex";
    flexdirection: "row";
    flexwrap: "wrap";
`;

export const Thumb = styled.div`
    display: "inline-flex";
    border: "0.0625rem solid #eaeaea";
    width: 50rem;
    height: 25rem;
    boxsizing: "border-box";
`;

export const ThumbInner = styled.div`
    display: "flex";
    minwidth: 0;
    overflow: "hidden";
`;

export const Image = styled.img`
    display: "block";
    width: 50rem;
    height: 25rem;
`;
