import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StLogin = styled(Link)`
  text-decoration: none;
  color: black;

  div {
    border-radius: 12px;
    padding: 0.5rem 1rem;
    transition: all 0.3s;
    &:hover {
      background-color: #eee;
    }
  }
`;
