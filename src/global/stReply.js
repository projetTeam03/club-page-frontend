import styled, { css } from "styled-components";

export const StReply = styled.div`
  width: 100%;
  max-width: 80%;
  display: flex;
  align-items: center;
  margin-left: 2rem;
  gap: 1rem;
  margin-top: 2rem;
  svg {
    ${({ location }) => {
      switch (location) {
        case "project-detail":
          return css`
            width: 4rem;
            height: 4rem;
          `;
        case "recruit-detail":
          return css`
            width: 4rem;
            height: 4rem;
          `;
        default:
          return css`
            width: 1rem;
            height: 1rem;
          `;
      }
    }}
  }
`;
