import styled from "styled-components";

export const Overlay = styled.div`
  ${(props) =>
    props.isopen &&
    `
   position: fixed;
   display: block;
   background-color: rgba(0, 0, 0, 0.4);
   z-index: 2;
   cursor: 2;`}
  top: 1.5%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 100px;
  width: 100%;
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 16px;
  gap: 32px;
  position: relative;
  max-width: 20%;
  min-width: 20%;
  height: 677px;
  left: 75%;
  top: 0px;
  background-color: var(--primaryWhite);
  .emptyCartText {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    text-align: right;
    color: var(--primaryBlack);
  }

  p {
    position: relative;
    right: 135px;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    .items {
      font-weight: 500;
    }
  }
  .buttons {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
    max-width: 100%;
    min-width: 50%;
    button {
      min-height: 50px;
      background-color: var(--primaryWhite);
      color: var(--primaryBlack);
      max-width: 100%;
      min-width: 50%;
      padding: 16px 32px;
      height: 43px;
      position: relative;
      top: 85%;
      left: 0%;
      border: 1px solid black text;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      text-align: center;
      text-transform: uppercase;
      border: 1px solid black;
    }

    button:focus {
      background: #5ece7b;
      border: none;
    }
  }

  .totalPrice {
    max-width: 100%;
    height: 28px;
    display: flex;
    flex-direction: row;
    gap: 200px;
    text {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
    }
    .total {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
    }
  }
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 40px;
  width: 98%;
  height: 420px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
