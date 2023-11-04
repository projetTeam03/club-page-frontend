import React from "react";
import Quarter from "../../global/Quarter";
import { StStepWrap } from "./stUploadStep";
import ProjectAbout from "./ProjectAbout";

const UploadStepTwo = ({ setStep, step, uploadRequest, setUploadRequest }) => {
  return (
    <StStepWrap>
      <h2>2. 프로젝트에 대해 소개해주세요.</h2>
      <Quarter />
      <div className="info">
        <ProjectAbout
          setStep={setStep}
          step={step}
          uploadRequest={uploadRequest}
          setUploadRequest={setUploadRequest}
        />
      </div>
    </StStepWrap>
  );
};

export default UploadStepTwo;
