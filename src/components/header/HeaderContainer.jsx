import React from "react";
import HeaderBrand from "./HeaderBrand";
import { StHeaderContainer } from "./stHeaderContainer";
import HeaderMenuContainer from "./HeaderMenuContainer";

const HeaderContainer = () => {
  return (
    <StHeaderContainer>
      <HeaderBrand />
      <HeaderMenuContainer />
    </StHeaderContainer>
  );
};

export default HeaderContainer;
