import styled, { css } from "styled-components";

export const StProfile = styled.div`
  background-color: #eee;
  border-radius: 50%;
  cursor: pointer;
  ${({ location }) => {
    switch (location) {
      case "comment":
        return css`
          width: 8rem;
          height: 8rem;
        `;
      case "comment-profile":
        return css`
          width: 4.5rem;
          height: 4.5rem;
        `;
      case "recruit-detail":
        return css`
          width: 5rem;
          height: 5rem;
        `;

      default:
        return css`
          width: 2rem;
          height: 2rem;
        `;
    }
  }}
`;
