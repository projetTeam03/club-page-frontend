import React from "react";
import { StSkill } from "./stProjectDetailSkill";
import Quarter from "../../global/Quarter";

const ProjectDetailSkill = () => {
  return (
    <>
      <StSkill>
        <label>기술 스택</label>
        <div className="skill-logo">
          <img
            src="https://holaworld.io/images/languages/typescript.svg"
            alt="ts"
          />
          <img
            src="https://holaworld.io/images/languages/reactnative.svg"
            alt="react"
          />
          <img
            src="https://holaworld.io/images/languages/mongodb.svg"
            alt="react"
          />
          <img
            src="https://holaworld.io/images/languages/aws.svg"
            alt="react"
          />
        </div>
      </StSkill>
      <Quarter />
    </>
  );
};

export default ProjectDetailSkill;
