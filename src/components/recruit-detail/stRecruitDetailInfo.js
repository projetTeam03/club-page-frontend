import { styled } from "styled-components";

export const StInfo = styled.div`
  max-width: 80%;
  width: 100%;
  /* background-color: pink; */
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  ul {
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4.5rem;
    /* background-color: pink; */
    li {
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 1rem;
      label {
        color: #333;
        font-size: 2rem;
        font-weight: bold;
      }
      .result {
        /* background-color: skyblue; */
        width: 100%;
        text-align: start;
        font-size: 1.8rem;
        padding: 1rem 0;
        border-bottom: 3px solid #eee;
      }
    }
    .skill {
      width: 100%;
      display: flex;
      /* flex-direction: row; */
      .skill-box {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        &_result {
          cursor: pointer;
          background-color: rgba(127, 219, 255, 0.5);
          font-size: 1.6rem;
          padding: 1rem 1.5rem;
          border-radius: 25px;
          transition: all 0.5s;
          &:hover {
            background-color: #0047ff;
            color: #fff;
            transform: scale(1.125);
          }
        }
      }
    }
  }
`;
