import { styled } from "styled-components";

export const StMeta = styled.div`
  /* background-color: pink; */
  max-width: 80%;
  width: 100%;
  padding: 1rem 1rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
  .meta-name {
  }
  .meta-detail {
    display: flex;
    align-items: center;
    &_date {
      display: flex;
      align-items: center;
      margin-left: 1rem;
      &::after {
        content: "";
        display: block;
        width: 2px;
        height: 20px;
        background-color: #ccc;
        margin: 0 1rem;
      }
    }
    &_view {
    }
  }
  /* height: 5rem; */
`;
