import styled from "styled-components";

export const Header = styled.div`
  position: absolute;
  left: 1.5%;
  right: 1%;
  top: 0%;
  bottom: 92%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  height: 56px;
  .nav-link {
    text-transform: uppercase;
  }
`;
const handleColor = (props) => {
  return props.categoriesNames[props.index].name === props.category_name
    ? "#5ECE7B" || true
    : false;
};

export const Content = styled.div`
  .nav-link {
    font-size: var(--linkSize);
    font-weight: 400;
    line-height: 120%;
    height: 20px;
    text-decoration: none;
    color: var(--primaryBlack);
    color: ${(props) => handleColor(props)};
    border-bottom: ${(props) =>
      handleColor(props) ? "2px solid #5ECE7B" : null};
    font-weight: ${(props) => (handleColor(props) ? "600" : null)};
    transition: all 0.1s ease-in-out;
    padding: 28px;
  }
  :first-child {
    margin-left: 110px;
  }
`;
export const LogoIcon = styled.img`
  position: relative;
  width: 41px;
  height: 41px;
  left: 900px;
  top: 20px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 30px;
  left: 90%;
  gap: 30px;
  .greenIcon {
    position: absolute;
    right: 750px;
    top: 9px;
  }

  .cartlogo {
    background: rgb(29, 31, 34, 0.9);
    border-radius: 60px;
    width: 25px;
    height: 25px;
    text-align: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    color: #ffffff;
    line-height: 25px;
    position: absolute;
    left: 65px;
    top: 10px;
  }
  button {
    background-color: white;
    border: none;
    font-size: 20px;
    text-decoration: none;
    color: black;
  }
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  right: 0%;
  top: 62%;
  right: 250%;
  z-index: 1;
  background-color: white;
  .victorIcon {
    position: absolute;
    left: 140px;
    width: 10px;
    top: -10px;
    transform: ${(props) =>
      props.dropdown === true ? "matrix(1, 0, 0, -1, 0, 0)" : null};
  }
`;
