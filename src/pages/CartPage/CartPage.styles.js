import styled from "styled-components";
import { ProductWrapper } from "../../components/SelectedProduct/SelectedProduct.styles";

export const Wrapper = styled(ProductWrapper)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 95%;
  position: absolute;
  top: 220px;
  img {
    left: 79.17%;
    right: 6.94%;
    top: 44.23%;
    bottom: 35.13%;
    width: 10%;
  }

  .button {
    display: flex;
    flex-direction: column;
    gap: 55px;
    margin-right: -70px;
    width: 35px;
    button {
      box-sizing: border-box;
      position: relative;
      left: -210%;
      top: 0%;
      bottom: 0%;
      text {
        text-align: center;
      }
    }
  }
`;

export const Headline = styled.h1`
  left: 120px;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  text-transform: uppercase;
  position: absolute;
  height: 40px;
  bottom: 100%;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 0px;
  gap: 8px;
  width: 93.5%;
`;

export const Text = styled.div`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
`;

export const Button = styled.button`
  padding: 16px 32px;
  width: 299%;
  height: 43px;
  background: #5ece7b;
  border: none;
  margin-top: 25px;
  span {
    width: 48px;
    height: 17px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #ffffff;
  }
`;
