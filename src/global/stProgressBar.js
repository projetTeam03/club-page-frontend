import { styled } from "styled-components";

export const StProgressBg = styled.div`
  width: 100%;
  height: 1rem;
  margin-top: 1rem;
  background-color: #ccc;
  background-color: rgba(127, 219, 255, 0.5);
`;

export const StProgress = styled.div`
  background-color: #0074d9;
  height: 100%;
  width: ${({ width }) => width};
  transition: 1s;
`;
