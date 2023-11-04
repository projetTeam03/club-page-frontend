import React from "react";
import { StHeart } from "./stHeart";

const Heart = (props) => {
  return <StHeart {...props}>{props.children}</StHeart>;
};

export default Heart;
