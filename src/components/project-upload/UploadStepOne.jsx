import React from "react";
import Quarter from "../../global/Quarter";
import { StStepWrap } from "./stUploadStep";
import ProjectIntro from "./ProjectIntro";

const UploadStepOne = ({ setStep, step, uploadRequest, setUploadRequest }) => {
  return (
    <StStepWrap>
      <h2>1. 프로젝트의 기본 정보를 입력해주세요.</h2>
      <Quarter />
      <div className="info">
        <ProjectIntro
          setStep={setStep}
          step={step}
          uploadRequest={uploadRequest}
          setUploadRequest={setUploadRequest}
        />
      </div>
    </StStepWrap>
  );
};

export default UploadStepOne;
