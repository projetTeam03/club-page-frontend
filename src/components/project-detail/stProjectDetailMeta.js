import { styled } from "styled-components";

export const StMeta = styled.div`
  max-width: 80%;
  width: 100%;
  border: 2px solid #eee;
  border-radius: 8px;
  padding: 0 2rem;
  box-sizing: border-box;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  .meta-link {
    display: flex;
    gap: 2rem;
    &__github {
      padding: 0.5rem 2rem;
      background-color: #eee;
      border-radius: 8px;
      cursor: pointer;
    }
    &__service {
      padding: 0.5rem 2rem;
      background-color: #eee;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  .meta-project {
    display: flex;
    &__date {
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: default;
    }
    &__team {
      padding: 0.5rem 2rem;
      margin-left: 3rem;
      border-radius: 8px;
      cursor: default;
    }
  }
`;
