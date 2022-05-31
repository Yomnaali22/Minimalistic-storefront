import styled from "styled-components";

export const Swatch = styled.div`
  ${(props) =>
    props.color.type === "swatch" &&
    props.color.className &&
    ` 
  width: 25px; 
  height: 20px;
      `}
  ${(props) =>
    props.color.type === "text" &&
    props.color.className &&
    ` 
  width: 50px; 
  height: 30px;
      `}
  background-color: ${({ color }) => color.color};
  border: ${(props) => {
    return (
      props.color.selectedAttribute &&
      props.color.type === "swatch" &&
      "1px solid #5ECE7B;"
    );
  }};
  color: ${(props) =>
    props.color.selectedAttribute && props.color.type === "text" && "white"};
  background-color: ${(props) =>
    props.color.selectedAttribute && props.color.type === "text" && "black"};
  border: ${(props) => props.color.type === "text" && "1px solid black"};
  ${(props) =>
    props.color.cartPage &&
    `width: 70px;
    height: 45px;
    box-sizing: border-box;
  `}
  display: inline-block;
  position: relative;
  left: -1px;
  top: 2px;
  margin: 0px 2px;
  width: 50px;
  height: 50px;
`;
export const Text = styled.li`
  list-style: none;
  position: relative;
  text-align: center;
  ${(props) =>
    props.color.className
      ? `
      font-size: 14px;
      width: 0px;
      height: 0px;
      top: 2px;
      left: 5px;
  `
      : `
  font-size: 17px;
  top: 15px;
  left: 0px;
  `}
  ${(props) =>
    props.color.cartPage &&
    `
    position: absolute;
    width: 12px;
    height: 18px;
    left: 20px;
    top: 12px;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    `}
`;
