import { styled } from "styled-components";

export const StSlideControl = styled.div`
  /* background-color: pink; */
  position: absolute;
  bottom: 14rem;
  right: 13rem;
  height: 5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  svg {
    width: 5rem;
    height: 5rem;
    fill: #9ca8c8;
    transition: all 0.3s;
    &:hover {
      fill: #0047ff;
    }
  }
  .control-page {
    display: flex;
    align-items: center;
    gap: 3px;
    &__current {
      color: #333333;
      font-size: 2.2rem;
      vertical-align: middle;
      margin-top: 0.2rem;
    }
    &__total {
      color: #868686;
      font-size: 2rem;
      &::before {
        content: "/";
        margin-right: 2px;
      }
      vertical-align: middle;
    }
  }
`;
