import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  ${(props) => {
    // Cart page
    return (
      props.className &&
      `gap: 0px;
      height: 350px;
  `
    );
  }}
`;
export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  width: 100%;
  border-top: ${(props) =>
    props.className &&
    `1px solid #E5E5E5;
    width: 1850px;
    `};
  img {
    width: 121px;
    height: 190px;
  }
  .button {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
    width: 10%;
    margin-right: 10px;
    ${(props) =>
      props.cartPage &&
      `
    position: absolute;
width: 45px;
height: 288px;
left: 1071px;
top: 617px;
    
    `}
    .productAmount {
      position: relative;
      left: 10px;
    }
    button {
      border: 0.5px solid black;
      height: 30px;
      text-decoration: none;
      text-align: center;
      font-size: 20px;
      position: relative;
      left: 0;
    }
  }
`;

export const Text = styled.div`
  ${(props) =>
    props.className
      ? `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  width: 75%;
  height: 320px;
  font-family: 'Raleway';
  .brand,
  .name,
  .price {
    margin-bottom: 10px;
    font-style: normal;
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
  width: 20%;
  height: 300px;
    
  .attributeName{
      margin: 3px 0px;
    }
}
`
      : `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 55%;
  gap: 20px;
  .attributes {
    width: 100%;
    display: inline-block;
    align-items: left;
    text-transform: uppercase;
  
    .attributeName{
      margin: 5px 0px;
    }
  }`}
`;
