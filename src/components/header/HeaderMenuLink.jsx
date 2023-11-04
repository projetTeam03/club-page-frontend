import React from "react";
import { StHeaderMenuLink } from "./stHeaderMenuLink";

const HeaderMenuLink = (data) => {
  // console.log(data);
  return <StHeaderMenuLink to={data.to}>{data.message}</StHeaderMenuLink>;
};

export default HeaderMenuLink;
