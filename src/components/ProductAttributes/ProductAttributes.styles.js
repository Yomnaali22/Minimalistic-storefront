import styled from "styled-components";

export const Swatch = styled.div`
  ${(props) =>
    props.color.type === "swatch" && props.color.className
      ? ` 
  display: inline-block;
  margin: 0px 2px;
  max-width: 20%;
  min-width: 12%;
  height: 25px;

      `
      : `

  display: inline-block;
  margin: 0px 3px;
  max-width: 54%;
  min-width: 15%;
  min-height: 50px;
  max-height: 55px;

      `}
  ${(props) =>
    props.color.type === "text" &&
    props.color.className &&
    ` 
  min-width: 20%;
  max-width: 25%; 
  min-height: 20px;
  max-height: 25px;
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

  ${(props) => {
    return (
      props.color.cartPage &&
      props.color.type === "text" &&
      `
    width: 20%;
    display: inline-block;
    margin: 0px 3px;
    max-width: 50%;
    min-width: 20%;
    min-height: 50px;
    max-height: 55px;
    `
    );
  }}
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
  font-size: 12px;
  `
      : `
  font-size: 16px;
  top: 15px;
  left: 0px;
  font-weight: 400;
  `}
  ${(props) =>
    props.color.cartPage &&
    `
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    position: relative;
    top: 10px;
    `}
`;
