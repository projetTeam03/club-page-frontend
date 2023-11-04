import { styled } from "styled-components";

export const StWraper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 0;
  position: relative;
  .flex-colum {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .comment-flex {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bookmark {
    width: 6.5rem;
    min-height: 200rem;
    margin-top: 8rem;
  }
`;
