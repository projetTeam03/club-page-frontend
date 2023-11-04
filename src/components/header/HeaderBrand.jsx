import React from "react";
import { StHeaderBrand } from "./stHeaderBrand";
import HeaderLink from "./HeaderLink";
import { useLocation } from "react-router-dom";

const HeaderBrand = () => {
  const location = useLocation();
  return (
    <StHeaderBrand>
      {/* <HeaderLink to="/"></HeaderLink> */}
      {location.pathname === "/" ? (
        <HeaderLink to="/"></HeaderLink>
      ) : (
        <HeaderLink to="/recruit"></HeaderLink>
      )}
    </StHeaderBrand>
  );
};

export default HeaderBrand;
