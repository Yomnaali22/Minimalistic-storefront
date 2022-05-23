import styled from "styled-components";

export const Swatch = styled.div`
  display: inline-block;
  position: relative;
  width: ${(props) =>
    props.color.className === "selectedProduct" ? "35px" : "60px"};
  height: ${(props) =>
    props.color.className === "selectedProduct" ? "30px" : "50px"};
  left: -4px;
  top: 2px;
  margin: 0px 3px;
  background-color: ${({ color }) => color.color};
  border: ${(props) => {
    return (
      props.color.selectedAttribute &&
      props.color.type === "swatch" &&
      "1px solid #5ECE7B;"
    );
  }};
  div {
    color: ${(props) =>
      props.color.selectedAttribute && props.color.type === "text" && "white"};
    background-color: ${(props) =>
      props.color.selectedAttribute && props.color.type === "text" && "black"};
    border: ${(props) => props.color.type === "text" && "1px solid black"};
    width: ${(props) =>
      props.color.className === "selectedProduct" ? "24px" : "50px"};
    height: ${(props) =>
      props.color.className === "selectedProduct" ? "20px" : "50px"};
    text-align: center;

    text {
      position: relative;
      font-size: ${(props) =>
        props.color.className === "selectedProduct" ? "14px" : "16px"};
      width: ${(props) =>
        props.color.className === "selectedProduct" ? "0px" : null};
      height: ${(props) =>
        props.color.className === "selectedProduct" ? "0px" : "null"};
      top: ${(props) =>
        props.color.className === "selectedProduct" ? "null" : "15px"};
    }
  }
`;
