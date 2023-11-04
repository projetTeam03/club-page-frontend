import { styled } from "styled-components";

export const StDescWrap = styled.div``;

export const StDesc = styled.div`
  height: 50rem;
  max-width: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  margin-top: 2rem;
  label {
    font-size: 2rem;
    font-weight: bold;
  }
  .desc {
    border: 2px solid #eee;
    border-radius: 12px;
    max-height: 50rem;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
