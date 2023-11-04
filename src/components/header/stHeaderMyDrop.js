import { styled } from "styled-components";

export const StDrop = styled.div`
  position: absolute;
  top: 120%;
  right: 0;
  background-color: pink;
  background: #fff;
  border: 0.5px solid rgba(37, 53, 98, 0.1);
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  .item {
    width: 16rem;
    padding: 1.2rem 1.6rem;
    text-align: center;
    transition: all 0.4s;
    background-color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #eee;
    }
  }
`;
