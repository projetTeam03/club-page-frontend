import { css, styled } from "styled-components";

export const StCategory = styled.div`
  width: 100%;
  margin: 60px 0 10px;
  display: flex;
  flex-direction: column;
  ul.position_tab_menu {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    gap: 15px;
    &:first-child {
      border-bottom: 1px solid #eee;
    }
    li {
      position: relative;
      color: #b8b8b8;
      cursor: pointer;
      user-select: none;
      font-size: 2.2rem;
      font-weight: 600;
      height: 56px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      padding: 0 1rem;
      transition: 0.3s ease-in-out;
      @media (max-width: 1380px) {
        font-size: 2rem;
      }
      @media (max-width: 920px) {
        font-size: 1.8rem;
      }
      @media (max-width: 760px) {
        font-size: 1.6rem;
        height: 36px;
      }
    }
  }
  div.position_tech_stack_wrapper {
    width: 100%;
    padding: 10px 0px;
    ul {
      flex-wrap: wrap;
      display: flex;
      justify-content: flex-start;
      gap: 15px;
      @media (max-width: 760px) {
        gap: 10px;
      }
      li {
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #eee;
        border-radius: 30px;
        padding: 5px 10px 5px 8px;
        gap: 5px;
        transition: 0.25s ease-in-out;
        span {
          @media (max-width: 920px) {
            font-size: 1.4rem;
          }
          @media (max-width: 760px) {
            font-size: 1.2rem;
          }
        }
        img {
          width: 3.6rem;
          @media (max-width: 760px) {
            width: 2.8rem;
          }
        }
        &:hover {
          color: var(--main-color);
          border: 1px solid var(--main-color);
        }
      }
    }
  }
`;
