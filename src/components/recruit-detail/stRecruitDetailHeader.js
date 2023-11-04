import { styled } from "styled-components";

export const StHeader = styled.div`
  /* background-color: pink; */
  max-width: 80%;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  background-color: #eee;
  padding: 0 1.5rem;
  box-sizing: border-box;
  border-radius: 12px;
  color: #333;

  .recruit-state {
    /* background-color: skyblue; */
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    &::after {
      content: "";
      display: block;
      width: 2px;
      height: 20px;
      margin: 0 2rem;
      background-color: #000;
    }
  }
  .recruit-title {
    font-size: 1.8rem;
  }
`;
