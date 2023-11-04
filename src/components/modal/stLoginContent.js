import { styled } from "styled-components";

export const StModalLogin = styled.div`
  position: fixed;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 42rem;
  height: 32rem;
  background-color: #fff;
  border-radius: 2rem;
  padding: 2rem 2rem 6rem;
  box-sizing: border-box;

  .modal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &_btn_close {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      background-color: transparent;
      border: none;
      svg {
        cursor: pointer;
        width: 4.8rem;
        height: 4.8rem;
        transition: 0.25s ease-in-out;
        opacity: 0.4;
        &:hover {
          opacity: 1;
        }
      }
    }
    &_box {
      flex-wrap: wrap;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4rem;
      h2 {
        font-size: 3.6rem;
        font-weight: 600;
      }
      img {
        width: 80%;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        transform: translateY(2px);
        &:hover {
          transform: translateY(-2px);
        }
      }
    }
  }
`;
