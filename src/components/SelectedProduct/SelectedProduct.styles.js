import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
  gap: 5px;
  height: 280px;
  ${(props) =>
    props.className &&
    `gap: 0px;
    height: 250px;
    margin-top: 0px;
  `}

  ${(props) =>
    props.cartPage &&
    `
  height: 500px;
  gap: 0px;
  `}
`;
export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  width: 450px;
  border-top: ${(props) =>
    props.className &&
    `1px solid #E5E5E5;
    width: 1850px;
    `};

  img {
    width: 199px;
    height: 220px;
    ${(props) => props.className && `margin-top: 10px`}
  }
  .button {
    display: flex;
    flex-direction: column;
    gap: 70px;
    .amount {
      ${(props) =>
        props.className &&
        `
      width: 0px;
      position: relative;
      right: 90px;
    `}
    }

    width: 50px;
    button {
      background-color: white;
      border: 1px solid black;
      height: 30px;
      text {
        text-align: center;
      }
    }
    ${(props) =>
      props.className &&
      `
    margin-top: 10px;
 
    `}
  }
`;

export const Text = styled.div`
  ${(props) =>
    props.className
      ? `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  left: 0%;
  .brand,
  .name,
  .price {
    margin-bottom: 10px;
    font-style: normal;
    font-family: 'Raleway';
    margin-top: 10px;
  }
  .brand{
    font-weight: 600;
    font-size: 30px;
    line-height: 27px;
  }
  .name{
font-weight: 400;
font-size: 30px;
line-height: 27px;
  }
  .price{
font-weight: 700;
font-size: 24px;
line-height: 24px;
  }

}
.attributes{
  text-transform: uppercase;
  font-family: 'Roboto Condensed';
font-style: normal;
font-weight: 700;
font-size: 18px;
}
`
      : `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 500px;
  height: 250px;
  .brand,
  .name,
  .price {
    margin-bottom: 10px;
  }
  .attributes {
    display: inline-block;
    text-transform: uppercase;
  }`}
`;
