import styled from "styled-components";

export const List = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  align-items: center;
  background-color: var(--primaryWhite);
`;

export const ListItems = styled.li`
  font-size: 1.2rem;
  padding: 10px;
  width: 100%;
`;

export const Item = styled.a`
  text-decoration: none;
  color: black;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  :hover {
    padding: 15px 10px;
    background: #eeeeee;
  }
`;
