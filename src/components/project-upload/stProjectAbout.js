import { styled } from "styled-components";

export const StAboutWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .about-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    .button-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      margin-top: 20px;
    }
  }
  .content-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .current-number {
      width: 100%;
      display: flex;
      justify-content: end;
      color: gray;
      cursor: default;
    }
  }

  .current-number {
    width: 100%;
    display: flex;
    justify-content: end;
    color: gray;
    cursor: default;
  }
  .about-subtitle {
    color: gray;
    white-space: pre-wrap;
    line-height: 200%;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  .valid {
    width: 20%;
    font-size: 1.2rem;
    color: red;
  }
  .about-textarea {
    width: 750px;
    position: relative;
    .textarea {
      width: 100%;
      height: 34rem;
      box-sizing: border-box;
      resize: none;
      padding: 1rem;
      outline: none;
      font-size: 1.8rem;
      font-weight: 800;
      border-radius: 12px;
      color: #333;
      border: 1px solid #ccc;
      &::placeholder {
        font-weight: 500;
        color: #8b8b8b;
        font-size: 1.6rem;
      }
      &:focus {
        border: 2px solid #2563eb;
      }
    }
  }
`;
