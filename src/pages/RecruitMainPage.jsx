import React from "react";
import { useLocation } from "react-router-dom";
import { RecruitMain } from "../components";

const RecruitMainPage = () => {
  const location = useLocation();
  return <RecruitMain>Recruit</RecruitMain>;
};

export default RecruitMainPage;
