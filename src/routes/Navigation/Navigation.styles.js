import styled from "styled-components";

const handleColor = (props) =>
  props.categoriesNames[props.index].name === props.category_name && "#5ECE7B";

export const Header = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  .nav-link {
    text-decoration: none;
  }
  .victorIcon {
    position: absolute;
    left: 95.47%;
    right: 20.59%;
    top: 77.75%;
    bottom: 38.75%;
    margin-left: 10px;
    transform: ${(props) =>
      props.dropdown ? "matrix(1, 0, 0, -1, 0, 0)" : null};
  }
`;

export const Nav = styled.div`
  position: absolute;
  width: 50%;
  height: 56px;
  left: 5%;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const Content = styled.li`
  text-transform: uppercase;
  font-size: var(--linkSize);
  font-weight: 400;
  line-height: 120%;
  color: var(--primaryBlack);
  color: ${(props) => handleColor(props)};
  ${(props) => {
    return handleColor(props)
      ? `
      border-bottom: 2px solid #5ECE7B;
      font-weight: 600;
      `
      : null;
  }}
  transition: all 0.1s ease-in-out;
  padding: 25px;
`;

export const LogoIcon = styled.img`
  position: absolute;
  width: 30%;
  height: 41px;
  left: 35%;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 22px;
  position: absolute;
  width: 50%;
  height: 40px;
  right: 5%;
  top: 50%;

  .cartlogo {
    background: rgb(29, 31, 34, 0.9);
    border-radius: 60px;
    text-align: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    color: #ffffff;
    line-height: 25px;
    position: absolute;
    width: 90%;
    height: 25px;
    left: 85px;
    top: 0px;
  }
  .cart {
    position: absolute;
    left: 70px;
    top: 10px;
    bottom: 4.16%;
  }
  button {
    background-color: white;
    border: none;
    position: absolute;
    height: 29px;
    left: 92%;
    top: 5.84%;
    p {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 0%;
    }
  }
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  width: 15%;
  height: 255px;
  left: 86%;
  top: 35px;
  z-index: 1;
`;
