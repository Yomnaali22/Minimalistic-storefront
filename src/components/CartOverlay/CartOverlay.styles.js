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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-top: 83px;
  height: 100%;
`;
export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;
  gap: 30px;
  position: absolute;
  width: 450px;
  left: 1300px;
  top: 0px;
  height: 600px;
  background: white;
  .emptyCartText {
    position: absolute;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    top: 50px;
    right: 200px;
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
  div {
    overflow-y: scroll;
  }

  div::-webkit-scrollbar {
    display: none;
  }
  div {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .buttons {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
    width: 292px;
    height: 200px;
    button {
      background-color: var(--primaryWhite);
      width: 140px;
      height: 43px;
      border: 1px solid black text;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      text-align: center;
      text-transform: uppercase;
      color: var(--primaryBlack);
    }

    button:focus {
      background: #5ece7b;
      border: none;
    }
  }

  .totalPrice {
    width: 359px;
    height: 50px;
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
