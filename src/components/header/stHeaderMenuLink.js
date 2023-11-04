import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const StHeaderMenuLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  &:hover {
    background-color: #eee;
  }
`;
