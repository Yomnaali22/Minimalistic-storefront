import styled from "styled-components";

export const Wrapper = styled.div`
  .dropdown {
    display: block;
  }
  ul {
    position: absolute;
    width: 130px;
    list-style-type: none;
    li {
      padding-bottom: 10px;
      margin-bottom: 10px;
      text-align: center;
      font-size: 18px;
      padding-bottom: 10px;
      a {
        text-decoration: none;
        color: black;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
      }
      a:hover {
        width: 200px;
        height: 100px;
        padding: 17px;
        background: #eeeeee;
      }
    }
  }
`;
