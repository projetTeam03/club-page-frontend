import { styled } from "styled-components";

export const StCommentForm = styled.div`
  width: 100%;
  max-width: 80%;
  .comment-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    form {
      max-width: 90%;
      width: 100%;
      height: 18rem;
      textarea {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        resize: none;
        border-radius: 12px;
        padding: 1rem;
        outline: none;
        &:focus {
          border: 2px solid #2563eb;
        }
      }
    }
  }
  .comment-submit {
    width: 100%;
    display: flex;
    justify-content: end;
    margin-top: 0.5rem;
  }
`;
