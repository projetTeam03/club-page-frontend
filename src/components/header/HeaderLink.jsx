import React from "react";
import { StHeaderLink } from "./stHeaderLink";
import HeaderLogo from "./HeaderLogo";

const HeaderLink = (props) => {
  return (
    <StHeaderLink to={props.to}>
      <HeaderLogo />
    </StHeaderLink>
  );
};

export default HeaderLink;
