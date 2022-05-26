import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 40px;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  width: 415px;
  img {
    width: 199px;
    height: 220px;
  }
  .button {
    display: flex;
    flex-direction: column;
    gap: 70px;
    margin-right: 2px;
    width: 50px;
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
  height: 200px;
  .brand,
  .name,
  .price {
    margin-bottom: 10px;
  }
  .attributes {
    display: inline-block;
  }
`;
