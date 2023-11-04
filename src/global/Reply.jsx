import React from "react";
import { StReply } from "./stReply";

const Reply = (props) => {
  return <StReply {...props}>{props.children}</StReply>;
};

export default Reply;
