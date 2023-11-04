import React from "react";
import { StMark } from "./stMark";

const Mark = (props) => {
  return <StMark {...props}>{props.children}</StMark>;
};

export default Mark;
