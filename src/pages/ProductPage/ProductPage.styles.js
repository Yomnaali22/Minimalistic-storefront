import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  left: 50px;
  top: -10px;
`;

export const Img = styled.img`
  position: absolute;
  left: 300px;
  right: 0px;
  top: 200px;
  bottom: 0px;
  width: ${(props) => {
    return props.productId === "jacket-canada-goosee" ||
      props.productId === "huarache-x-stussy-le"
      ? "550px"
      : "800px";
  }};
`;

export const Gallery = styled.div`
  position: absolute;
  width: 79px;
  height: 100px;
  left: 130px;
  top: 120px;
  img {
    position: relative;
    width: 120px;
    height: 139px;
    top: 80px;
  }
`;

export const Content = styled.div`
  position: absolute;
  width: 550px;
  height: 595px;
  top: 200px;
  left: ${(props) =>
    props.productId === "jacket-canada-goosee" ||
    props.productId === "huarache-x-stussy-le"
      ? "970px"
      : "1100px"};
  .brandName {
    font-family: "Raleway";
    font-style: normal;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    color: var(--primaryBlack);
  }

  .productName {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 27px;
  }
  p,
  .attributeName {
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
  }
  .attributeName {
    text-transform: uppercase;
  }
  button {
    background-color: #5ece7b;
    align-items: center;
    color: var(--primaryWhite);
    padding: 16px 32px;
    width: 292px;
    height: 52px;
    left: 0px;
    font-size: 17px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    margin-top: 30px;
    border: none;
  }
  .description {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-top: 50px;
  }
`;
