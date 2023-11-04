import React, { useState, useEffect } from "react";
import { StIntroduce } from "./stRecruitIntroduce";
import Button from "../../global/Button";
import { useNavigate } from "react-router-dom";
import { postRecruitData } from "../../modules/recruit/postRecruit";
import { useDispatch } from "react-redux";

const RecruitIntroduce = ({
  setStep,
  step,
  recruitRequest,
  setRecruitRequest,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (recruitRequest.title.length === 0) {
      errors.title = "필수로 입력하셔야 합니다.";
    } else if (recruitRequest.title.length <= 5) {
      errors.title = "최소 5글자 이상은 작성해야 합니다.";
    }
    if (recruitRequest.contents.length === 0) {
      errors.contents = "필수로 입력하셔야 합니다.";
    } else if (recruitRequest.contents.length <= 10) {
      errors.contents = "최소 10글자 이상은 작성해야 합니다.";
    }
    return errors;
  };

  const submitRecruit = () => {
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      dispatch(postRecruitData(recruitRequest));
      localStorage.removeItem("saveItem");
      navigate("/recruit");
    } else {
      setErrors(errors);
    }
    // dispatch(postRecruitData(recruitRequest));
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setRecruitRequest({ ...recruitRequest, [name]: value });
  };
  return (
    <StIntroduce>
      <label htmlFor="title">제목 *</label>
      <input
        id="title"
        type="text"
        name="title"
        placeholder="프로젝트 제목을 입력해주세요"
        onChange={onChangeHandler}
        value={recruitRequest.title}
      />
      {errors.title && <div className="valid">{errors.title}</div>}

      <div className="title-box">
        <label htmlFor="desc">프로젝트 소개글 *</label>
        <div className="sub">프로젝트의 소개가 자세할수록 좋아요.</div>
      </div>

      <textarea
        id="desc"
        name="contents"
        placeholder="프로젝트의 소개 내용을 10자 이상 작성해주세요."
        onChange={onChangeHandler}
        value={recruitRequest.contents}
      />
      <div className="content-bottom">
        {errors.contents && <div className="valid">{errors.contents}</div>}
        <div className="current-number">
          {recruitRequest.contents.length}/1500
        </div>
      </div>
      <div className="button-box">
        <Button purpose="step" onClick={() => setStep(step - 1)}>
          이전
        </Button>
        <Button purpose="step" onClick={submitRecruit}>
          완료
        </Button>
      </div>
    </StIntroduce>
  );
};

export default RecruitIntroduce;
