import { styled } from "styled-components";

export const StGithub = styled.div`
  max-width: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 16px;
  padding-top: 2rem;
  box-sizing: border-box;
  margin-bottom: 4rem;
  /* background-color: pink; */
  article {
    width: 100%;
    max-width: 100%;
    svg {
      width: 100%;
      height: 100%;
    }
    footer {
      position: relative;
      top: -21rem;
    }
  }
`;
