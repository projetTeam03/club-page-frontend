import { styled } from "styled-components";

export const StTeamWrapper = styled.ul`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 4.5rem;
    gap: 10rem;

    li {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 1rem;
      margin-bottom: 10px;

      label {
        color: #333;
        font-weight: bold;
        .radioLabel {
          font-size: 2rem;
        }
      }

      div {
        display: flex;
        justify-content: space-between;
        gap: 3rem;
      }
      .team-title {
        font-size: 2.6rem;
        font-weight: bold;
        margin-top: 1rem;
      }
      .team-member {
        border: none;
        outline: gray solid 1px;
        border-radius: 1rem;
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        padding-left: 1.1rem;
        font-weight: bold;
        margin-top: 10px;
        gap: 10px;
        display: flex;
        align-items: center;
        justify-content: start;
        &:focus {
          border: 2px solid #0047ff;
        }
        .team-span {
          font-size: 15px;
          border: 1px solid #3b82f6;
          background-color: #3b82f6;
          color: #fff;
          width: 30%;
          height: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 1rem;
          .delete-span {
            font-size: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 5px;
          }
        }
      }
      .valid {
        font-size: 1.2rem;
        color: red;
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
