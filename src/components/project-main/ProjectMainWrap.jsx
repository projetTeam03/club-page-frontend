import React from "react";
import { StWrap } from "./stProjectMainWrap";
import { useNavigate } from "react-router-dom";
import TopTen from "./TopTen";
import Quarter from "./../../global/Quarter";
import ProjectList from "./ProjectList";
import Footer from "../../global/Footer";

const ProjectMainWrap = () => {
  // const navigate = useNavigate();
  // const navigateToUpload = () => {
  //   navigate("/project/upload");
  // };
  return (
    <StWrap>
      <TopTen />
      <div className="line"></div>
      {/* <Quarter /> */}
      {/* 아이템 리스트 */}
      <h2>프로젝트</h2>
      <ProjectList />
      <Footer />
      {/* <Button onClick={navigateToUpload}>Upload</Button> */}
    </StWrap>
  );
};

export default ProjectMainWrap;
