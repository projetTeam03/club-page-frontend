import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { StInput, StInputMember } from "./stInputForm";
import { StTeamWrapper } from "./stTeamWrapper";
import { useDispatch } from "react-redux";
import { addProject } from "../../modules/upload";
import Button from "../../global/Button";

const ProjectTeam = ({ setStep, step, uploadRequest, setUploadRequest }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState("");
  const [members, setMembers] = useState([]);
  const [spans, setSpans] = useState([]);

  const validate = () => {
    let errors = {};
    if (uploadRequest.teamName.length === 0) {
      errors.teamName = "팀명을 필수입니다.";
    }
    if (uploadRequest.members.length === 0) {
      errors.members = "팀원은 필수입니다.";
    }
    if (uploadRequest.deploy.length === 0) {
      errors.deploy = "배포한 사이트 주소는 필수입니다.";
    }
    return errors;
  };
  const onChangeTeamName = (e) => {
    setUploadRequest({
      ...uploadRequest,
      teamName: e.target.value,
    });
  };
  const onChangeValues = (e) => {
    setValues(e.target.value);
  };
  const onChangeMember = (e) => {
    setMembers([...members, e.target.value]);
    console.log(members);
  };
  const onChangeGithub = (e) => {
    setUploadRequest({
      ...uploadRequest,
      github: e.target.value,
    });
  };
  const onChangeDeploy = (e) => {
    setUploadRequest({
      ...uploadRequest,
      deploy: e.target.value,
    });
  };
  const deleteMembers = (id) => {
    // console.log(id);
    // console.log(members);
    // console.log(spans);
    setMembers(spans.splice(id, 1));
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && values.trim() !== "") {
      setSpans([...spans, values]);
      setValues("");
      setMembers([...members, values]);
      setUploadRequest({
        ...uploadRequest,
        members: [...members, values],
      });
    }
  };
  console.log(uploadRequest.members);
  const submitProject = () => {
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      dispatch(addProject(uploadRequest));
      localStorage.removeItem(
        "saveItem_project",
        JSON.stringify(uploadRequest)
      );
      navigate("/");
    }
    setErrors(errors);
  };
  return (
    <StTeamWrapper>
      <ul>
        <li>
          <div className="team-title">팀명</div>
          <StInput
            type="text"
            placeholder="팀명을 입력해주세요."
            value={uploadRequest.teamName}
            onChange={onChangeTeamName}
          />
          {errors.teamName && <div className="valid">{errors.teamName}</div>}
        </li>
        <li>
          <div className="team-title">팀원</div>
          <div className="team-member">
            {spans.map((e, i) => (
              <span key={i} className="team-span">
                {e}
                <span className="delete-span" onClick={() => deleteMembers(i)}>
                  X
                </span>
              </span>
            ))}
            <StInputMember
              type="text"
              placeholder="팀원을 입력해주세요."
              value={values}
              onChange={onChangeValues}
              onKeyPress={handleKeyPress}
            />
          </div>
          {errors.members && <div className="valid">{errors.members}</div>}
        </li>
      </ul>
      <ul>
        <li>
          <div className="team-title">Github 주소</div>
          <StInput
            type="text"
            placeholder="Github 주소를 입력해주세요."
            value={uploadRequest.github}
            onChange={onChangeGithub}
          />
        </li>
        <li>
          <div className="team-title">사이트 주소</div>
          <StInput
            type="text"
            placeholder="배포한 사이트 주소를 입력해주세요."
            value={uploadRequest.deploy}
            onChange={onChangeDeploy}
          />
          {errors.deploy && <div className="valid">{errors.deploy}</div>}
        </li>
      </ul>
      <div className="button-box">
        <Button purpose="step" onClick={() => setStep(step - 1)}>
          이전
        </Button>
        <Button purpose="step" onClick={submitProject}>
          업로드
        </Button>
      </div>
    </StTeamWrapper>
  );
};

export default ProjectTeam;
