import styled from "styled-components";

export const Swatch = styled.div`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 50px;
  left: -4px;
  top: 2px;
  margin: 0px 5px;
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
    position: absolute;
    width: 50px;
    height: 50px;
    font-size: 16px;
    text-align: center;
  }
`;
