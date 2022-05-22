import styled from "styled-components";

export const Overlay = styled.div`
  position: ${(props) => props.isOpen && "fixed"};
  display: ${(props) => props.isOpen && "block"};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-top: 83px;
  background-color: ${(props) => props.isOpen && "rgba(0, 0, 0, 0.4)"};
  z-index: ${(props) => props.isOpen && "2"};
  cursor: ${(props) => props.isOpen && "2"};
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;
  gap: 32px;
  position: absolute;
  width: 325px;
  height: 677px;
  left: 1479px;
  top: 0px;
  background: #ffffff;

  p {
    position: absolute;
    top: 6px;
    left: 10px;
    width: 118px;
    height: 26px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    text-align: right;
  }
`;
