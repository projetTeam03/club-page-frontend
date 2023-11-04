import React from "react";
import { StHeaderLogo } from "./stHeaderLogo";

const HeaderLogo = () => {
  return <StHeaderLogo src={process.env.PUBLIC_URL + "logo.svg"} />;
};

export default HeaderLogo;
