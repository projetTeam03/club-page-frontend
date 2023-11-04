import React from "react";
import { StProfile } from "./stProfile";
const Profile = (props) => {
  return <StProfile {...props}>{props.children}</StProfile>;
};

export default Profile;
