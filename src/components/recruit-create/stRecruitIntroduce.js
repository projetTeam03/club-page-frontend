import { styled } from "styled-components";

export const StIntroduce = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 6rem 2rem;
  justify-content: center;
  position: relative;
  font-size: 1.7rem;
  gap: 1.2rem;
  label {
    width: 90%;
    display: flex;
    color: #333;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
  }
  input {
    width: 90%;
    padding: 0 1rem;
    box-sizing: border-box;
    height: 5.6rem;
    border: 1px solid #ccc;
    border-radius: 12px;
    font-size: 1.7rem;
    font-weight: 600;
    outline: none;
    color: #333;
    &::placeholder {
      font-weight: 500;
      color: #8b8b8b;
      font-size: 1.6rem;
    }
    &:focus {
      border: 2px solid #0047ff;
    }
  }
  .valid {
    font-size: 1.2rem;
    color: red;
    display: flex;
    width: 90%;
  }
  .title-box {
    /* background-color: pink; */
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: start;
    .sub {
      margin-top: 1rem;
      width: 90%;
      color: gray;
      display: flex;
      text-align: start;
      font-size: 1.6rem;
      cursor: default;
    }
  }

  textarea {
    width: 90%;
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
  .content-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    .current-number {
      width: 90%;
      display: flex;
      justify-content: end;
      color: gray;
      cursor: default;
    }
  }

  .button-box {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
