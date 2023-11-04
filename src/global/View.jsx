import React from "react";
import { StView } from "./StView";

const View = (props) => {
  return <StView {...props}>{props.children}</StView>;
};

export default View;
