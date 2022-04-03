import styled from "styled-components";

export const CartItemWrapper = styled.div`
    border: ${({ theme: { colors } }) => `1px dashed ${colors.black}`};
    margin: 1rem;
    padding: 1rem;
`;
