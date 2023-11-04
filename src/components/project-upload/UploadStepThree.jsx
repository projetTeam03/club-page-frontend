import React from "react";
import Quarter from "../../global/Quarter";
import { StStepWrap } from "./stUploadStep";
import ProjectTechStack from "./ProjectTechStack";

const UploadStepThree = ({
  setStep,
  step,
  uploadRequest,
  setUploadRequest,
}) => {
  return (
    <StStepWrap>
      <h2>3. 프로젝트에 사용된 기술 스택에 대해 소개해주세요.</h2>
      <Quarter />
      <div className="info">
        <ProjectTechStack
          setStep={setStep}
          step={step}
          uploadRequest={uploadRequest}
          setUploadRequest={setUploadRequest}
        />
      </div>
    </StStepWrap>
  );
};

export default UploadStepThree;
