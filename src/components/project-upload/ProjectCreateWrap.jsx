import React, { useState } from "react";
import { StUploadWrapper } from "./stUploadWrapper";
import ProgressBarMain from "../../global/ProgressBarMain";
import UploadStepOne from "./UploadStepOne";
import UploadStepTwo from "./UploadStepTwo";
import UploadStepThree from "./UploadStepThree";
import UploadStepFour from "./UploadStepFour";
import UploadStepFive from "./UploadStepFive";
import CreateIntro from "../CreateIntro";

const ProjectCreateWrap = () => {
  const [step, setStep] = useState(0);

  const [uploadRequest, setUploadRequest] = useState({
    title: "",
    startDate: "",
    endDate: "",
    pic: "",
    youtube: "",
    contents: "",
    skills: [],
    categories: [],
    teamName: "",
    members: "",
    github: "",
    deploy: "",
  });

  const stepPage = {
    0: <CreateIntro setStep={setStep} step={step} />,
    1: (
      <UploadStepOne
        setStep={setStep}
        step={step}
        uploadRequest={uploadRequest}
        setUploadRequest={setUploadRequest}
      />
    ),
    2: (
      <UploadStepTwo
        setStep={setStep}
        step={step}
        uploadRequest={uploadRequest}
        setUploadRequest={setUploadRequest}
      />
    ),
    3: (
      <UploadStepThree
        setStep={setStep}
        step={step}
        uploadRequest={uploadRequest}
        setUploadRequest={setUploadRequest}
      />
    ),
    4: (
      <UploadStepFour
        setStep={setStep}
        step={step}
        uploadRequest={uploadRequest}
        setUploadRequest={setUploadRequest}
      />
    ),
    5: (
      <UploadStepFive
        setStep={setStep}
        step={step}
        uploadRequest={uploadRequest}
        setUploadRequest={setUploadRequest}
      />
    ),
  };
  return (
    <>
      <ProgressBarMain step={step} />
      <StUploadWrapper>{stepPage[step]}</StUploadWrapper>
    </>
  );
};

export default ProjectCreateWrap;
