import { styled } from "styled-components";

export const StCurrent = styled.div`
  height: 100%;
  width: 80%;
  position: absolute;
  top: 0;
  left: 0;
  width: 65%;
  height: 100%;
  .item {
    width: 100%;
    border-radius: 20px;
    /* padding: 1rem;
    box-sizing: border-box; */

    img {
      width: 100%;
      height: 42rem;
      border-radius: 20px;
    }
    &-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 2rem;
      margin: 1rem 0;
      padding: 1rem;
      box-sizing: border-box;
      &__title {
        font-size: 2.4rem;
      }
      &__view {
      }
    }
    &-desc {
      padding: 1rem;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      height: 12rem;
    }
    &-skill {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      box-sizing: border-box;
      &__item {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        img {
          width: 3.8rem;
          height: 3.8rem;
        }
      }
    }
    &-heart {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      width: 4rem;
      height: 4rem;
      fill: red;
    }
  }
`;
