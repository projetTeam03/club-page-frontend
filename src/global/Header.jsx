import React from "react";
import { useLocation } from "react-router-dom";
import HeaderWrapper from "../components/header/HeaderWrapper";

const Header = () => {
  const location = useLocation();
  // console.log(location.pathname);
  return <HeaderWrapper />;
};

export default Header;
