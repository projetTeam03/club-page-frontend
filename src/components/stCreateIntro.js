import { styled } from "styled-components";

export const StIntro = styled.div`
  height: calc(100vh - 8.1rem - 8rem);
  display: flex;
  align-items: center;
  justify-content: center;
  .intro_desc {
    width: 80%;
    height: 93%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    h2 {
      font-size: 2.4rem;
      font-weight: bold;
      margin-left: 7rem;
    }
    &_order {
      width: 40%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      &_item {
        width: 46rem;
        height: 12rem;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap: 2rem;
        padding: 1rem;
        label {
          font-size: 2rem;
          font-weight: bold;
        }
        &-desc {
          text-align: start;
          font-size: 1.6rem;
          color: #808080;
        }
        &-sub {
          text-align: start;
          font-size: 1.6rem;
          color: #808080;
        }
      }
    }
  }
`;
