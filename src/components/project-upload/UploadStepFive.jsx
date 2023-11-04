import React from "react";
import Quarter from "../../global/Quarter";
import { StStepWrap } from "./stUploadStep";
import ProjectTeam from "./ProjectTeam";

const UploadStepFive = ({ setStep, step, uploadRequest, setUploadRequest }) => {
  return (
    <StStepWrap>
      <h2>5. 프로젝트를 함께 진행한 팀원들과 Github 주소를 입력해주세요.</h2>
      <Quarter />
      <div className="info">
        <ProjectTeam
          setStep={setStep}
          step={step}
          uploadRequest={uploadRequest}
          setUploadRequest={setUploadRequest}
        />
      </div>
    </StStepWrap>
  );
};

export default UploadStepFive;
