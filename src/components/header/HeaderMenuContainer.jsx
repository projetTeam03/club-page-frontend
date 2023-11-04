import React from "react";
import HeaderMenuNav from "./HeaderMenuNav";
import { StHeaderMenuContainer } from "./stHeaderMenuContainer";

const HeaderMenuContainer = () => {
  return (
    <StHeaderMenuContainer>
      <HeaderMenuNav />
    </StHeaderMenuContainer>
  );
};

export default HeaderMenuContainer;
