import React from "react";
import { StButton } from "./stButton";

const Button = (props) => {
  return <StButton {...props}>{props.children}</StButton>;
};

export default Button;
