import { styled } from "styled-components";

export const StMyPageWrap = styled.div`
  width: 100%;
  max-width: 80%;
  margin-top: 15rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 15rem auto 0;
  .section {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    margin-bottom: 2rem;
    h2 {
      font-size: 3rem;
    }
    svg {
      width: 4rem;
      height: 4rem;
      fill: red;
    }
  }

  .category {
    width: 100%;
    display: flex;
    /* background-color: skyblue; */
    gap: 2rem;
    &__item {
      cursor: pointer;
      padding: 0.5rem 1rem;
      font-size: 2rem;

      border-radius: 12px;
      transform: scale(1);
      transition: all 0.3s;
    }
    &__item-active {
      cursor: pointer;
      padding: 0.5rem 1rem;
      font-size: 2.3rem;
      color: #0047ff;
      font-weight: bold;
      .line {
        width: 100%;
        height: 3px;
        /* background-color: rgba(127, 219, 255, 1); */
        background-color: #0047ff;
        margin-top: 1rem;
        animation: lineWidth 0.3s ease-in-out;
      }
    }
    margin-bottom: 10rem;
  }

  .itemList {
    margin-top: 3.2rem;
    display: flex;
    background-color: pink;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  @keyframes lineWidth {
    from {
      width: 0;
    }

    to {
      width: 100%;
    }
  }

  /* .pracGrid {
    width: 100%;
    display: grid;
    padding: 2rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-columns: repeat(auto-fill, minmax(20%, auto));
    grid-template-rows: repeat(3, minmax(10rem, auto));
    row-gap: 2rem;
    column-gap: 2rem;
    border: 1px solid;
    &__item {
      background-color: skyblue;
      border: 1px solid;
    }
  } */
`;
