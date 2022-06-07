import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 150px;
  right: 100px;
  width: 100%;
`;

export const Img = styled.img`
  position: relative;

  width: ${({ productId }) => {
    return productId === "jacket-canada-goosee" ||
      productId === "huarache-x-stussy-le"
      ? "32%"
      : "47%";
  }};

  height: ${(props) => {
    return props.productId === "jacket-canada-goosee" ||
      props.productId === "huarache-x-stussy-le"
      ? "880px"
      : "900px";
  }};
`;

export const Gallery = styled.div`
  position: relative;
  left: 22%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 34%;

  img {
    width: 20%;
    height: ${(props) => {
      return props.productId === "jacket-canada-goosee" ||
        props.productId === "huarache-x-stussy-le"
        ? "129px"
        : "150px";
    }};
  }
`;

export const Content = styled.div`
  width: 25%;
  margin-left: 50px;
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
    width: 90%;
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
