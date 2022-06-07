import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 470px;
  height: 650px;
  padding: 25px;
  margin-right: 50px;
  left: 2%;
  right: 0%;
  margin-bottom: 50px;
  background: var(--primaryWhite);
  text-decoration: none;
  :hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    padding: 16px;
    filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.15));
  }
  .outofstock {
    position: absolute;
    left: 33.42%;
    right: 25.71%;
    top: 48.24%;
    bottom: 43.94%;
    font-style: normal;
    font-family: "Raleway";
    font-weight: 400;
    font-size: 24px;
    color: #8d8f9a;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 550px;
  position: relative;
  color: var(--primaryBlack);
  h1 {
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
  }
  .price {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    text-align: left;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 540px;
  opacity: ${(props) => (!props.inStock ? "0.5" : null)};
`;

export const InCartLogo = styled.img`
  position: absolute;
  left: 80%;
  right: 0%;
  top: -10%;
`;
