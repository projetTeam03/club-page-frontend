import { styled } from "styled-components";
import Select from "react-select";

export const StSelect = styled(Select)`
  width: 100%;
  .react-select__control {
    /* background-color: skyblue; */
    color: #1f1f1f;
    font-weight: 700;
    border-radius: 8px;
    cursor: pointer;
    height: 5.6rem;

    .react-select__value-container {
      /* background-color: yellowgreen; */
      .react-select__placeholder {
        text-align: start;
      }
      .react-select__single-value {
        text-align: start;
        /* background-color: pink; */
      }
    }
    .react-select__multi-value {
      border-radius: 8px;
      padding: 0.6rem;
      background-color: #0074d9;
      color: #fff;
      .react-select__multi-value__label {
        color: #fff;
      }
      .react-select__multi-value__remove {
        border-radius: 50%;
        &:hover {
          background-color: rgba(127, 219, 255, 0.5);
        }
        &:hover svg {
          color: #fff;
        }
        svg {
          &:hover {
            fill: #fff;
          }
        }
      }
    }
    .react-select__indicators {
      /* background-color: tomato; */
    }
    &:hover {
      border: 1px solid #0047ff;
    }
  }

  .react-select__menu {
    /* background-color: aqua; */
    .react-select__menu-list {
      padding: 0;

      .react-select__option {
        padding-bottom: 1rem;
      }
    }
  }
`;
