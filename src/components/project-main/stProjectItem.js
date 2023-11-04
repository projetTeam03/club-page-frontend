import { styled } from "styled-components";

export const StProjectItem = styled.div`
  max-width: 38rem;
  width: 100%;
  /* height: 38rem; */
  border-radius: 12px;
  overflow: hidden;
  background-color: #3da9fc;
  color: #fff;
  position: relative;
  padding-bottom: 1rem;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.3s;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  &:hover {
    transform: scale(1.015);
  }
  img {
    width: 100%;
  }
  .item-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.5rem 0;
    padding: 0 1.5rem;
    box-sizing: border-box;
    svg {
      width: 2rem;
      height: 2rem;
      margin-right: 0.5rem;
    }
    &__title {
      font-size: 2rem;
    }
  }
  .item-desc {
    margin-top: 1.5rem;
    max-height: 10rem;
    height: 10rem;
    padding: 0 1.5rem;
    text-align: start;
    box-sizing: border-box;
    font-size: 1.5rem;
  }
  .item-skill {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 1.5rem;
    box-sizing: border-box;
    &__item {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: #fff;
      img {
        width: 3rem;
        height: 3rem;
      }
    }
  }
  .item-heart {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    color: red;
    cursor: pointer;
  }
`;
