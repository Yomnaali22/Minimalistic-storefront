import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 400px;
  height: 350px;
  img {
    width: 121px;
    height: 200px;
  }
  .button {
    display: flex;
    flex-direction: column;
    gap: 70px;
    margin-right: 2px;
    width: 50px;
    background-color: red;
    button {
      background-color: white;
      border: 1px solid black;
      height: 30px;

      text {
        text-align: center;
      }
    }
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 340px;
  height: 350px;
  background-color: green;
  .brand,
  .name,
  .price {
    margin-bottom: 10px;
  }
  .attributes {
    display: inline-block;
  }
`;
