import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Button from "../../global/Button";
import { StAboutWrapper } from "./stProjectAbout";
import { useDispatch } from "react-redux";
import { addProject } from "../../modules/upload";

// contents
const ProjectAbout = ({ setStep, step, uploadRequest, setUploadRequest }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [saveValue, setSaveValue] = useState({
    description: "",
  });
  const validate = () => {
    let errors = {};
    if (uploadRequest.contents.length === 0) {
      errors.contents = "필수로 입력하셔야 합니다.";
    } else if (uploadRequest.contents.length < 10) {
      errors.contents = "최소 10자 이상 입력하셔야 합니다.";
    }
    return errors;
  };
  const onChangeHandler = (event) => {
    setUploadRequest({
      ...uploadRequest,
      contents: event.target.value,
    });
  };
  const onClickNext = () => {
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      localStorage.setItem("saveItem_project", JSON.stringify(uploadRequest));
      dispatch(addProject(uploadRequest));
      setStep(step + 1);
    } else {
      setErrors(errors);
    }
  };
  useEffect(() => {
    const savedData = localStorage.getItem("saveItem_project");
    if (savedData) {
      setUploadRequest(JSON.parse(savedData));
    } else {
      setUploadRequest({
        ...uploadRequest,
        title: "",
        startDate: "",
        endDate: "",
        pic: "",
        youtube: "",
        contents: "",
        skills: [],
        categories: [],
        teamName: "",
        members: [],
        github: "",
        deploy: "",
      });
    }
  }, []);
  return (
    <StAboutWrapper>
      <div className="about-container">
        <div className="about-subtitle">
          프로젝트의 목적과 기능을 기반으로 간단하게 작성해주세요.
        </div>
        <div className="about-textarea">
          <textarea
            maxLength="1500"
            placeholder="프로젝트에 대한 소개글을 10자 이상 작성해주세요."
            className="textarea"
            onChange={onChangeHandler}
            value={uploadRequest.contents}
          ></textarea>
          <div className="content-bottom">
            {errors.contents && <div className="valid">{errors.contents}</div>}
            <div className="current-number">
              {uploadRequest.contents.length}/1500
            </div>
          </div>
        </div>
        <div className="button-box">
          <Button purpose="step" onClick={() => setStep(step - 1)}>
            이전
          </Button>
          <Button purpose="step" onClick={onClickNext}>
            다음
          </Button>
        </div>
      </div>
    </StAboutWrapper>
  );
};

export default ProjectAbout;
