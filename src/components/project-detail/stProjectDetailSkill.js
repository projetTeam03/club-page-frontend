import { styled } from "styled-components";

export const StSkill = styled.div`
  max-width: 80%;
  width: 100%;
  border-radius: 8px;
  padding: 1rem 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  label {
    font-size: 2rem;
    font-weight: bold;
  }
  .skill-logo {
    display: flex;
    gap: 0.8rem;
    img {
      width: 3.2rem;
      height: 3.2rem;
    }
  }
  hr {
    height: 2px;
  }
`;
