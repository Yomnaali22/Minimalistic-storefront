import styled from "styled-components";

export const Swatch = styled.div`
  ${(props) =>
    props.color.type === "swatch" && props.color.className
      ? ` 
  display: inline-block;
  margin: 0px 2px;
  width: 10%; 
  height: 25px;
      `
      : `
      display: inline-block;
  //  position: relative;
  //left: -1px;
  // top: 2px;
  margin: 0px 2px;
  width: 10%;
  height: 50px;
      `}
  ${(props) =>
    props.color.type === "text" &&
    props.color.className &&
    ` 

  width: 20%; 
  max-width: 50%;
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
    `
    width: 18%;
    `}
  ${(props) =>
    props.color.cartPage &&
    props.color.type === "swatch" &&
    `
    width: 10%;
    `}
`;
export const Text = styled.li`
  list-style: none;
  position: relative;
  text-align: center;
  ${(props) =>
    props.color.className
      ? `


  margin: 5px 1px;
  width: 100%; 
  height: 25px;
  font-size: 14px;
  `
      : `
  font-size: 17px;
  top: 15px;
  left: 0px;
  `}
  ${(props) =>
    props.color.cartPage &&
    `
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    `}
`;
