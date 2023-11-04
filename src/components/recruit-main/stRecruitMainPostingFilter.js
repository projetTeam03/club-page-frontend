import { styled } from "styled-components";

export const StPostingFilter = styled.div`
  margin: 30px 0 10px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    li {
      color: #b8b8b8;
      cursor: pointer;
      user-select: none;
      font-size: 1.8rem;
      font-weight: 600;
      transition: 0.3s ease-in-out;
      @media (max-width: 1380px) {
        font-size: 1.6rem;
      }
      @media (max-width: 920px) {
        font-size: 1.5rem;
      }
      @media (max-width: 760px) {
        font-size: 1.4rem;
      }
    }
    li:first-child {
      color: #000;
    }
    li:hover {
      color: #000;
    }
  }
  .recruit_checking {
    user-select: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    &_title {
      display: flex;
      font-size: 1.8rem;
      font-weight: 600;
      @media (max-width: 1380px) {
        font-size: 1.6rem;
      }
      @media (max-width: 920px) {
        font-size: 1.5rem;
      }
      @media (max-width: 760px) {
        font-size: 1.4rem;
      }
    }
    @media (max-width: 560px) {
      gap: 6px;
    }
    &_switch {
      margin-bottom: 2px;
    }
  }

  .switch_toggle {
    width: 50px;
    height: 26px;
    display: flex;
    position: relative;
    border-radius: 30px;
    background-color: #fff;
    border: 1px solid #eee;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &_btn {
      width: 22px;
      height: 22px;
      position: absolute;
      top: 50%;
      left: 2px;
      transform: translateY(-50%);
      border-radius: 50%;
      background-color: var(--main-color);
      transition: all 0.2s ease-in;
    }
  }
  #checkbox-recruiting:checked ~ .switch_toggle {
    background-color: var(--main-color);
  }

  #checkbox-recruiting:checked ~ .switch_toggle .switch_toggle_btn {
    left: calc(100% - 24px);
    background: #fff;
  }
`;
