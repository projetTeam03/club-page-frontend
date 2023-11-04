import React from "react";
import { StGithub } from "./stRecruitDetailGithub";
import GitHubCalendar from "react-github-calendar";

const RecruitDetailGithub = () => {
  return (
    <StGithub>
      <GitHubCalendar
        username="sim0321"
        style={{
          height: "20rem",
          width: "100%",
          maxWidth: "100%",
          fontWeight: "400",
        }}
        fontSize={12}
        showWeekdayLabels
        // hideTotalCount={true}
        labels={{
          totalCount: "Sim0321님의 잔디입니다.",
        }}
      />
    </StGithub>
  );
};

export default RecruitDetailGithub;
