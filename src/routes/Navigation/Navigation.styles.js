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
  gap: 26px;
  .greenIcon {
    position: absolute;
    right: 750px;
    top: 9px;
  }
  p {
    font-size: 20px;

    .victorIcon {
      margin-left: 7px;
      width: 13px;
      transform: ${(props) =>
        props.isOpen === true && props.dropdown === true
          ? "matrix(1, 0, 0, -1, 0, 0)"
          : null};
    }
  }

  .dropdown {
    position: absolute;
    right: 0%;
    top: 85%;
  }
`;
