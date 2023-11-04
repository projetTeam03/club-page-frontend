import React, { useState, useEffect } from "react";
import { StDropWrap } from "../recruit-create/stRecruitInfoList";
import { StSelect } from "../recruit-create/stSelect";
import { skillOption } from "./data/uploadOption";
import Button from "../../global/Button";
import { useDispatch } from "react-redux";
import { addProject } from "../../modules/upload";

const ProjectTechStack = ({
  setStep,
  step,
  uploadRequest,
  setUploadRequest,
}) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (uploadRequest.skills.length === 0) {
      errors.skills = "최소 하나는 선택해주세요.";
    }
    return errors;
  };

  const onChangeSkill = (e) => {
    setUploadRequest({
      ...uploadRequest,
      skills: [...e],
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
    <StDropWrap>
      <ul className="skill">
        <li>
          <label>기술 스택 *</label>
          <StSelect
            className="react-select-container"
            classNamePrefix="react-select"
            options={skillOption}
            isMulti
            placeholder="프로젝트 사용 스택"
            noOptionsMessage={() => "옵션이 더 이상 없어요."}
            onChange={onChangeSkill}
            value={uploadRequest.skill}
          />
          {errors.skills && <div className="valid">{errors.skills}</div>}
        </li>
      </ul>
      <div className="button-box">
        <Button purpose="step" onClick={() => setStep(step - 1)}>
          이전
        </Button>
        <Button purpose="step" onClick={onClickNext}>
          다음
        </Button>
      </div>
    </StDropWrap>
  );
};

export default ProjectTechStack;
