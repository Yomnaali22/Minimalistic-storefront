import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 0px;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 293px;
  height: 190px;
  img {
    width: 121px;
    height: 160px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 164px;
  height: 190px;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 120px;
  button {
    background-color: white;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 160%;
    color: #1d1f22;
  }
`;
