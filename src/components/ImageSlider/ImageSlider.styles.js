import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
  position: absolute;
  box-sizing: border-box;
  width: 56px;
  height: 24px;
  left: 1715px;
`;

export const Button = styled.button`
  position: relative;
  top: 260px;
  border: none;
  width: 24px;
  height: 24px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

export const Img = styled.img`
  width: 400%;
`;
