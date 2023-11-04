import React, { useState, useEffect } from "react";
import { StDropWrap } from "./stRecruitInfoList";
import { StSelect } from "./stSelect";
import Button from "../../global/Button";
import {
  positionOption,
  durationOption,
  methodOption,
  skillOption,
} from "./data/recruitOption";
import { useDispatch, useSelector } from "react-redux";
import DatePick from "../../global/DatePick";
import { addRecruit, postRecruitData } from "../../modules/recruit/postRecruit";

const RecruitInfoList = ({
  setStep,
  recruitRequest,
  setRecruitRequest,
  step,
}) => {
  // addRecruit
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});

  // 날짜 포맷 맞추는 함수 YYYY-MM-DD
  let now = () => {
    let now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    const formatDate = `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;

    return formatDate;
  };

  // 유효성 검사
  const validate = () => {
    const today = now();

    let errors = {};
    if (recruitRequest.progress.length === 0) {
      errors.progress = "진행방식을 선택해주세요.";
    }
    if (recruitRequest.duration.length === 0) {
      errors.duration = "진행기간을 선택해주세요.";
    }
    if (recruitRequest.position.length === 0) {
      errors.position = "최소 하나는 선택해주세요.";
    }
    if (recruitRequest.endDate === "") {
      errors.endDate = "최소 하루 다음날로 지정하셔야해요.";
    } else if (recruitRequest.endDate < today) {
      errors.endDate = "오늘 보다 전날은 안돼요.";
    }
    if (recruitRequest.skill.length === 0) {
      errors.skill = "최소 하나는 선택해주세요.";
    } else if (recruitRequest.skill.length > 10) {
      errors.skill = "최대 10개 선택이 가능해요.";
    }
    if (recruitRequest.participants === 0) {
      errors.participants = "최소 한명 이상은 모집해야해요.";
    }
    return errors;
  };

  const onChangeProgress = (e) => {
    setRecruitRequest({ ...recruitRequest, progress: e });
  };

  const onChangeDuration = (e) => {
    const { name } = e;
    setRecruitRequest({ ...recruitRequest, [name]: e });
  };

  const onChangePosition = (e) => {
    setRecruitRequest({
      ...recruitRequest,
      position: [...e],
    });
  };

  const onChangeEndDate = (newDate) => {
    setRecruitRequest({
      ...recruitRequest,
      endDate: newDate,
    });
    // console.log(newDate);
  };

  const onChangeSkill = (e) => {
    setRecruitRequest({
      ...recruitRequest,
      skill: [...e],
    });
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    if (name === "participants") {
      setRecruitRequest({
        ...recruitRequest,
        [name]: Number(value),
      });
    } else {
      setRecruitRequest({
        ...recruitRequest,
        [name]: value,
      });
    }
  };

  const onClickNext = () => {
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      localStorage.setItem("saveItem", JSON.stringify(recruitRequest));
      dispatch(postRecruitData(recruitRequest));
      setStep(step + 1);
    } else {
      setErrors(errors);
    }

    // dispatch(postRecruitData(recruitRequest));
    // setStep(step + 1);
  };

  useEffect(() => {
    const savedData = localStorage.getItem("saveItem");
    if (savedData) {
      setRecruitRequest(JSON.parse(savedData));
    } else {
      setRecruitRequest({
        ...recruitRequest,
        progress: "",
        position: [],
        skill: [],
        github: "",
        title: "",
        contents: "",
        duration: "",
        participants: 0,
      });
    }
  }, []);

  // console.log(recruitRequest);

  return (
    <StDropWrap>
      <ul className="test">
        <li>
          <label>진행 방식 *</label>
          <StSelect
            className="react-select-container"
            classNamePrefix="react-select"
            options={methodOption}
            name="progress"
            placeholder="온라인/오프라인"
            value={recruitRequest.progress}
            onChange={onChangeProgress}
          />
          {errors.progress && <div className="valid">{errors.progress}</div>}
        </li>
        <li>
          <label>진행 기간 *</label>
          <StSelect
            className="react-select-container"
            classNamePrefix="react-select"
            options={durationOption}
            name="duration"
            placeholder="기간미정 ~ 6개월 이상"
            value={recruitRequest.duration}
            onChange={onChangeDuration}
          />
          {errors.duration && <div className="valid">{errors.duration}</div>}
        </li>
      </ul>
      <ul>
        <li>
          <label>모집 포지션 *</label>
          <StSelect
            className="react-select-container"
            classNamePrefix="react-select"
            options={positionOption}
            isMulti
            placeholder="프론트엔드/백엔드/디자이너"
            noOptionsMessage={() => "옵션이 더 이상 없어요."}
            onChange={onChangePosition}
            value={recruitRequest.position}
          />
          {errors.position && <div className="valid">{errors.position}</div>}
        </li>
        <li>
          <label>모집 마감일 *</label>
          <DatePick
            onChangeEndDate={onChangeEndDate}
            end={"end-recruit"}
            // setRecruitRequest={setRecruitRequest}
            // recruitRequest={recruitRequest}
          />
          {errors.endDate && <div className="valid">{errors.endDate}</div>}
        </li>
      </ul>
      <ul>
        <li className="github">
          <label>GitHub ID</label>
          <input
            type="text"
            placeholder="Github ID를 작성하면 잔디를 보실 수 있습니다."
            name="github"
            value={recruitRequest.github}
            onChange={onChangeInput}
          />
        </li>
        <li className="participants">
          <label>모집 인원 *</label>
          <input
            type="number"
            placeholder="모집 인원의 명수를 적어주세요"
            name="participants"
            value={recruitRequest.participants}
            onChange={onChangeInput}
            max={10}
          />
          {errors.participants && (
            <div className="valid">{errors.participants}</div>
          )}
        </li>
      </ul>
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
            value={recruitRequest.skill}
          />
          {errors.skill && <div className="valid">{errors.skill}</div>}
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

export default RecruitInfoList;
