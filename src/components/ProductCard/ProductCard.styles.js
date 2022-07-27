import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  position: relative;
  width: 386px;
  height: 500px;
  background: var(--primaryWhite);
  text-decoration: none;

  .InCart {
    padding: 5px;
    border-radius: 10px;
    position: absolute;
    left: 25.42%;
    right: 25.71%;
    top: 55.24%;
    bottom: 20.94%;
    font-style: normal;
    font-weight: 520;
    font-size: 20px;
    text-align: center;
    height: 50px;
    text-shadow: 1px 1px 10px #000000;
    color: var(--primaryWhite);
    letter-spacing: 0.4px;
    font-family: "Raleway";
    height: 30px;
  }

  .inCartIcon {
    position: absolute;
    left: 70%;
    right: 0%;
    top: 65%;
    bottom: 0%;
    display: none;
  }

  :hover {
    filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
    .inCartIcon {
      display: inline;
    }
  }

  .outofstock {
    position: absolute;
    left: 25.42%;
    right: 25.71%;
    top: 44.24%;
    bottom: 43.94%;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #8d8f9a;
    align-items: center;
    display: flex;
  }
`;

export const Content = styled.div`
  width: 354px;
  height: 58px;
  color: var(--primaryBlack);
  display: flex;
  flex-direction: column;
  gap: 0px;
  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 160%;
  }
  h2 {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
  }
  .price {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
  }
`;

export const Image = styled.img`
  width: 354px;
  height: 330px;
  opacity: ${(props) => (!props.inStock ? "0.5" : null)};
  margin-top: 15px;
`;
