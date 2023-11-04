import { styled } from "styled-components";

export const StListWrap = styled.div`
  /* background-color: pink; */
  width: 100%;
  padding-bottom: 15rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  grid-template-rows: repeat(auto-fill, minmax(10rem, auto));
  row-gap: 2rem;
  column-gap: 2rem;
`;
