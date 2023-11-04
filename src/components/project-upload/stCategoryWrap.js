import { styled } from "styled-components";

export const StCategoryWrap = styled.ul`
  /* background-color: pink; */
  ul {
    margin-bottom: 2rem;
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    align-items: start;
    gap: 5rem;
    li {
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 1rem;

      /* background-color: pink; */

      label {
        color: #333;
        font-size: 2rem;
        font-weight: bold;
      }

      /* datePicker */
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
      .valid {
        font-size: 1.2rem;
        color: red;
      }
    }
  }

  .skill {
    width: 100%;
    /* background-color: pink; */
    li {
      width: 100%;
      /* background-color: pink; */
    }
  }

  .github {
    width: 45%;
    input {
      width: 100%;
      padding: 0 0.8rem;
      box-sizing: border-box;
      border: 1px solid #ccc;
      height: 5.6rem;
      border-radius: 8px;
      font-size: 1.6rem;
      outline: none;
      color: #1f1f1f;
      font-weight: 700;
      &:hover {
        border-color: #0047ff;
      }
      &:focus {
        border: 2px solid #0047ff;
      }
    }
  }

  .button-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
  }
`;
