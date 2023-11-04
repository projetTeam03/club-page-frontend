import { styled } from "styled-components";

export const StReCommentForm = styled.div`
  width: 65%;
  form {
    width: 100%;
    height: 10rem;
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
  .comment-submit {
    padding: 5px 0;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 2rem;
  }
`;
