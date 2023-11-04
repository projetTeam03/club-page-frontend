import styled, { css } from "styled-components";

export const StView = styled.div`
  /* background-color: pink; */
  position: relative;
  display: flex;
  align-items: center;
  ${({ location }) => {
    switch (location) {
      case "project-detail":
        return css`
          width: 100%;
          max-width: 80%;
          margin-bottom: 5rem;
        `;
      default:
        return css`
          width: auto;
          height: auto;
        `;
    }
  }}
  .view-flex {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    ${({ location }) => {
      switch (location) {
        case "project-detail":
          return css`
            position: absolute;
            right: 0;
            top: 5px;
          `;

        default:
          return css`
            position: static;
          `;
      }
    }}
  }
  svg {
    width: 3rem;
    height: 3rem;
  }
`;
