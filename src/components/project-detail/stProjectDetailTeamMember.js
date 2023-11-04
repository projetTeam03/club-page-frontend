import { styled } from "styled-components";

export const StTeamMember = styled.div`
  max-width: 80%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  label {
    font-size: 2rem;
    font-weight: bold;
  }

  .team {
    display: flex;
    gap: 1rem;
    border: 2px solid #eee;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    border-radius: 8px;
    &-member {
      cursor: default;
    }
  }
`;
