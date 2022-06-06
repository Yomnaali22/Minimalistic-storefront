import styled, { createGlobalStyle } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const GlobalStyle = createGlobalStyle`
:root {
  font-family: 'Raleway', sans-serif;
    --primaryBlack: #1D1F22;
    --primaryWhite: #ffff;
    --linkSize: 16px;
    --fontStyle: normal;
    --primaryGreen: #5ECE7B;
    background-color: var(--primaryWhite);
}
`;
