import React from "react";
import { StMeta } from "./stProjectDetailMeta";
import { Link, useNavigate } from "react-router-dom";

const ProjectDetailMeta = () => {
  return (
    <StMeta className="meta">
      <div className="meta-link">
        <Link
          className="meta-link__github"
          to={"https://github.com/projetTeam03"}
        >
          깃허브
        </Link>
        <div className="meta-link__service">배포사이트</div>
      </div>
      <div className="meta-project">
        <div className="meta-project__date">
          2023년 07월 20일 ~ 2023년 07월 29일
        </div>
        <div className="meta-project__team">말랑카우</div>
      </div>
    </StMeta>
  );
};

export default ProjectDetailMeta;
