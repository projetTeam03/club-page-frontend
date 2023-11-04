import React, { useState, useEffect } from "react";
import { StCategoryWrap } from "./stCategoryWrap";
import { StSelect } from "../recruit-create/stSelect";
import { useDispatch } from "react-redux";
import { addProject } from "../../modules/upload";
import { categoryOption } from "./data/uploadOption";
import Button from "../../global/Button";

const ProjectCategory = ({
  setStep,
  step,
  uploadRequest,
  setUploadRequest,
}) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [cates, setCates] = useState([]);
  const [cat2, setCat2] = useState([]);
  const copy = [...categoryOption];
  const validate = () => {
    let errors = {};
    if (uploadRequest.categories.length === 0) {
      errors.categories = "카테고리는 필수로 선택해야합니다.";
    }
    return errors;
  };
  const onChangeCategory = (e) => {
    setCates([...e]);
    setUploadRequest({
      ...uploadRequest,
      categories: [...e],
    });
  };
  const onChangeCategorySecond = (e) => {
    setCat2([...e]);
    setUploadRequest({
      ...uploadRequest,
      categories: [...cates, ...e],
    });
    //console.log(e);
  };
  console.log(uploadRequest.categories);
  const arr = copy.filter((e) => !cates.includes(e));
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
    <StCategoryWrap>
      <ul className="skill">
        <li>
          <label>카테고리 *</label>
          <StSelect
            className="react-select-container"
            classNamePrefix="react-select"
            options={categoryOption}
            isMulti
            placeholder="프로젝트 카테고리"
            noOptionsMessage={() => "옵션이 더 이상 없어요."}
            onChange={onChangeCategory}
            value={cates}
          />
          {errors.categories && (
            <div className="valid">{errors.categories}</div>
          )}
        </li>
        <li>
          <label>카테고리 (선택)</label>
          <StSelect
            className="react-select-container"
            classNamePrefix="react-select"
            options={arr}
            isMulti
            placeholder="프로젝트 카테고리"
            noOptionsMessage={() => "옵션이 더 이상 없어요."}
            onChange={onChangeCategorySecond}
            value={cat2}
          />
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
    </StCategoryWrap>
  );
};

export default ProjectCategory;
