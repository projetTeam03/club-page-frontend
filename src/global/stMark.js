import styled, { css } from "styled-components";

export const StMark = styled.div`
  ${({ location }) => {
    switch (location) {
      case "recruit-detail":
        return css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          /* background-color: skyblue; */
        `;
      default:
        return css`
          width: 2rem;
          height: 2rem;
        `;
    }
  }}

  .circle {
    background-color: #fff;
    border-radius: 50%;
    padding: 0.3rem;
    margin-bottom: 1rem;
    border: 1px solid #dee2e6;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    cursor: pointer;
    ${({ location }) => {
      switch (location) {
        case "recruit-detail":
          return css`
            width: 4rem;
            height: 4rem;
          `;
        default:
          return css`
            width: 2rem;
            height: 2rem;
          `;
      }
    }}
  }
  span {
    cursor: default;
  }
`;
