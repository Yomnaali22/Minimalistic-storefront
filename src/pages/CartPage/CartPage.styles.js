import styled from "styled-components";
import { ProductWrapper } from "../../components/SelectedProduct/SelectedProduct.styles";

export const Wrapper = styled(ProductWrapper)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  position: absolute;
  right: 300px;
  top: 220px;
  left: 0px;
  img {
    left: 79.17%;
    right: 6.94%;
    top: 44.23%;
    bottom: 35.13%;
  }
  .button {
    display: flex;
    flex-direction: column;
    gap: 70px;
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
  position: absolute;
  width: 84px;
  height: 40px;
  left: 30px;
  top: -100px;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 0px;
  gap: 8px;
  width: 198px;
  height: 300px;
  position: relative;
  right: 1670px;
`;

export const Text = styled.div`
  width: 184px;
  height: 28px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
`;

export const Button = styled.button`
  padding: 16px 32px;
  width: 279px;
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
