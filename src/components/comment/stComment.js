import { styled } from "styled-components";

export const StComment = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border: 2px solid #eee;
  .profile {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    gap: 0.5rem;
    &__name {
      margin-left: 1rem;
      color: #4b5563;
      font-weight: 600;
      font-size: 1.6rem;
      &::after {
        content: "";
        display: inline-block;
        width: 0.1rem;
        height: 1.4rem;
        margin-left: 1rem;
        background-color: #000;
      }
    }
    .comment__date {
      font-size: 1.2rem;
      font-weight: 300;
    }
    .reply-i {
      width: 2.8rem;
      height: 2.8rem;
      position: absolute;
      right: 1.5rem;
      top: 1rem;
      cursor: pointer;
      svg {
        width: 100%;
        height: 100%;
        pointer-events: none;
      }
    }
  }
  .comment {
    border: 1px solid #ccc;
    border-radius: 12px;
    width: 100%;
    display: flex;
    padding: 1rem;
    box-sizing: border-box;
    color: #575757;
  }
`;
