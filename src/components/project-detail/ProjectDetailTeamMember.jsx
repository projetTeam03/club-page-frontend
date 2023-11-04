import React from "react";
import { StTeamMember } from "./stProjectDetailTeamMember";

const ProjectDetailTeamMember = () => {
  return (
    <StTeamMember>
      <label>팀원</label>
      <div className="team">
        <div className="team-member">조하윤</div>
        <div className="team-member">염승준</div>
        <div className="team-member">심채운</div>
      </div>
    </StTeamMember>
  );
};

export default ProjectDetailTeamMember;
