import { styled } from "styled-components";

export const StDetail = styled.div`
  /* background-color: pink; */
  width: 100%;
  max-width: 80%;
  margin: 3rem 0 5rem 0;
  label {
    display: flex;
    color: #333;
    font-size: 2rem;
    font-weight: bold;
  }
  div {
    margin-top: 1rem;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 12px;
    max-height: 40rem;
    height: 40rem;
    /* height: 100%; */
    padding: 1rem;
    box-sizing: border-box;
    text-align: start;
  }
`;
