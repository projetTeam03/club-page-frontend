import { styled } from "styled-components";

export const StStepWrap = styled.div`
  height: calc(100vh - 8.1rem - 8rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
  h2 {
    font-size: 3rem;
    color: #333;
    font-weight: 800;
    padding: 1.6rem;
    margin-bottom: 2rem;
  }
  .info {
    max-width: 80%;
    width: 100%;
    margin-top: 4.5rem;
  }
`;
