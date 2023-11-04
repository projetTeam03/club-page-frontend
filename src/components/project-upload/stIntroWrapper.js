import { styled } from "styled-components";

export const StIntroWrapper = styled.ul`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 10rem;
    li {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 1rem;
      margin-bottom: 20px;
      label {
        color: #333;
        font-weight: bold;
        .radioLabel {
          font-size: 2rem;
        }
      }

      .li-ssum {
        margin-top: 20px;
      }

      .intro-title {
        font-size: 2.6rem;
      }
      .ssum {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .valid {
        font-size: 1.2rem;
        color: red;
      }

      .div-duration {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 10px;
        gap: 2rem;
      }

      .rmdp-container {
        width: 100%;
        input {
          width: 100%;
          height: 5.6rem;
          padding: 0 0.8rem;
          box-sizing: border-box;
          border-color: #ccc;
          border-radius: 8px;
          color: #333;
          cursor: pointer;
          font-size: 1.6rem;
          /* color: #808080; */
          color: #1f1f1f;
          font-weight: 700;
          &:hover {
            border-color: #0047ff;
          }
          &:focus {
            border: 2px solid #0047ff;
            box-shadow: none;
          }
          &:focus + svg {
            stroke: #666;
          }
        }
        svg {
          width: 2.5rem;
          height: 2.5rem;
          margin-right: 0.8rem;
          stroke: #ccc;
          transition: all 0.5s;
          /* fill: pink; */
        }
      }
    }
  }
  .button-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .file-input {
    display: none;
  }
  .file-label {
    border: none;
    outline: gray solid 1px;
    border-radius: 1rem;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    padding-left: 1.1rem;
    font-size: 15px;
    font-weight: 350;
    margin-top: 10px;
    text-align: center;
    display: flex;
    justify-content: start;
    align-items: center;
    &:hover {
      border-color: #0047ff;
    }
    &:focus {
      border: 2px solid #0047ff;
    }
  }
  .file-link {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .youtube-btn {
      height: 60px;
      margin-top: 10px;
      border-radius: 1rem;
      border: none;
      background-color: #0047ff;
      opacity: 0.8;
      color: white;
    }
  }
`;
