import React from "react";
import { StHeaderWrapper } from "./stHeaderWrapper";
import HeaderContainer from "./HeaderContainer";

const HeaderWrapper = () => {
  return (
    <StHeaderWrapper>
      <HeaderContainer />
    </StHeaderWrapper>
  );
};

export default HeaderWrapper;

// Wrapper - Container - Brand - Link - Logo
//                     |_ MenuContainer - MenuNav - MenuUlandLi - MenuLink
