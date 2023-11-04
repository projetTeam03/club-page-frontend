import React from "react";
import { StWraper } from "./stProjectDetailWrap";
import ProjectDetailHeader from "./ProjectDetailHeader.jsx";
import ProjectDetailMeta from "./ProjectDetailMeta";
import ProjectDetailCategory from "./ProjectDetailCategory";
import ProjectDetailVideo from "./ProjectDetailVideo";
import ProjectDetailSkill from "./ProjectDetailSkill";
import ProjectDetailDesc from "./ProjectDetailDesc";
import ProjectDetailTeamMember from "./ProjectDetailTeamMember";
import Heart from "../../global/Heart";
import { AiOutlineHeart, AiFillEye } from "react-icons/ai";
import View from "../../global/View";
import CommentList from "../comment/CommentList";
import CommentForm from "../comment/CommentForm";
import Reply from "../../global/Reply";
import { SlBubble } from "react-icons/sl";
import HeartMark from "./../fixed/HeartMark";
import Quarter from "../../global/Quarter";

const ProjectDetailWrap = () => {
  return (
    <StWraper>
      <div className="heartmark">
        <HeartMark />
      </div>
      <div className="flex-colum">
        <ProjectDetailHeader />
        <ProjectDetailMeta />
        <ProjectDetailCategory />
        <ProjectDetailVideo />
        <ProjectDetailSkill />
        <ProjectDetailDesc />
        <ProjectDetailTeamMember />

        <View location="project-detail">
          <div className="view-flex">
            <AiFillEye />
            <span>0회</span>
          </div>
        </View>
        <Quarter />

        {/* 댓글 */}
        <Reply location="project-detail">
          <SlBubble />
          <span>30 개</span>
        </Reply>

        <CommentForm />
        <div className="comment-flex">
          <CommentList />
        </div>
      </div>
    </StWraper>
  );
};

export default ProjectDetailWrap;
