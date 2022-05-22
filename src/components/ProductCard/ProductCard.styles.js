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
    left: 25.42%;
    right: 25.71%;
    top: 44.24%;
    bottom: 43.94%;
    font-style: normal;
    font-family: "Raleway";
    font-weight: 400;
    font-size: 24px;
    color: #8d8f9a;
  }
`;

export const Content = styled.div`
  width: 460px;
  height: 550px;

  h1 {
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    color: var(--primaryBlack);
  }
  .price {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    text-align: left;
    color: var(--primaryBlack);
  }
`;

export const Image = styled.img`
  width: 468px;
  height: 550px;
  opacity: ${(props) => (props.inStock === false ? "0.5" : null)};
`;
