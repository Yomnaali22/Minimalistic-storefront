import styled from "styled-components";
import { ProductWrapper } from "../../components/SelectedProduct/SelectedProduct.styles";

export const Wrapper = styled(ProductWrapper)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  top: 220px;
  right: 0;
  left: 0;
  img {
    width: 15%;
    height: 300px;
    margin-top: 10px;
  }
  .button {
    margin-top: 10px;
    margin-right: 20px;
    width: 40px;
    right: 200px;
    gap: 119px;
    button {
      background-color: var(--primaryWhite);
      box-sizing: border-box;
      text {
        text-align: center;
      }
    }
  }
`;

export const Headline = styled.h1`
  left: 80px;
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
  justify-content: flex-start;
  padding: 10px;
  gap: 16px;
  position: relative;
  top: 30px;
  right: 38%;
`;

export const Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
`;

export const Button = styled.button`
  width: 279px;
  height: 43px;
  background: var(--primaryGreen);
  border: none;
  span {
    width: 48px;
    height: 17px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: var(--primaryWhite);
  }
`;
