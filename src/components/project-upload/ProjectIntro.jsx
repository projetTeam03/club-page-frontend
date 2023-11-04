import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { StIntroWrapper } from "./stIntroWrapper";
import { StInput, StInputLink } from "./stInputForm";
import { StPreview, StImg } from "./stPreviewImg";
import { useDispatch } from "react-redux";
import Button from "../../global/Button";
import DatePick from "../../global/DatePick";
import { addProject } from "../../modules/upload";

// title, startDate, endDate, pic, youtube

const ProjectIntro = ({ setStep, step, uploadRequest, setUploadRequest }) => {
  const imgRef = useRef();
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const [imgFile, setImgFile] = useState("");
  const [tempUrl, setTempUrl] = useState("");
  const [moveUrl, setMoveUrl] = useState(false);
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

  const validate = () => {
    const today = now();
    let errors = {};
    if (uploadRequest.title.length === 0) {
      errors.title = "프로젝트 명을 입력해주세요.";
    }
    if (uploadRequest.pic.length === 0 && uploadRequest.youtube.length === 0) {
      errors.pic = "사진이나 영상을 넣어주세요.";
    }
    if (uploadRequest.startDate === "") {
      errors.startDate = "시작일을 지정해주세요.";
    } else if (uploadRequest.startDate > today) {
      errors.startDate = "오늘보다 전 날이어야 합니다.";
    }
    if (uploadRequest.endDate === "") {
      errors.endDate = "종료일을 지정해주세요.";
    } else if (uploadRequest.endDate > today) {
      errors.endDate = "종료일은 오늘 이후일 수 없습니다.";
    }
    return errors;
  };

  const readImg = () => {
    if (imgRef.current !== undefined) {
      const file = imgRef.current.files[0];
      uploadRequest.pic = file.name;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgFile(reader?.result);
      };
    } else return;
  };

  const handleImg = () => {
    setShow(true);
  };
  const handleVideo = () => {
    setShow(false);
  };
  const handleOnChange = (event) => {
    setTempUrl(event.target.value);
  };
  const handleSubmit = () => {
    setMoveUrl(true);
    setTempUrl(tempUrl.slice(-11));
  };
  const onChangeTitle = (event) => {
    setUploadRequest({
      ...uploadRequest,
      title: event.target.value,
    });
  };

  const onClickNext = () => {
    const errors = validate();
    console.log(errors);
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
  console.log(imgFile);
  return (
    <StIntroWrapper>
      <ul className="introduction">
        <li>
          <div className="intro-title">프로젝트 이름</div>
          <StInput
            type="text"
            value={uploadRequest.title}
            placeholder="프로젝트 이름을 입력해주세요."
            onChange={onChangeTitle}
          />
          {errors.title && <div className="valid">{errors.title}</div>}
        </li>
        <li>
          <div className="intro-title ssum">
            썸네일 선택
            <div>
              <input
                type="radio"
                name="ssum"
                onChange={handleImg}
                value="picture"
                defaultChecked
              />
              <label for="picture">사진</label>
              <input
                type="radio"
                value="video"
                name="ssum"
                onChange={handleVideo}
              />
              <label for="video">영상</label>
            </div>
          </div>
          {show ? (
            <>
              <label className="file-label" htmlFor="filePicture">
                {!uploadRequest.pic
                  ? "사진 선택하기(.jpeg, .png, .gif)"
                  : uploadRequest.pic}
              </label>
              <input
                type="file"
                placeholder="사진을 선택해주세요."
                accept="image/*"
                onChange={readImg}
                ref={imgRef}
                className="file-input"
                id="filePicture"
              />
            </>
          ) : (
            <div className="file-link">
              <StInputLink
                type="text"
                placeholder="영상의 링크를 입력해주세요."
                accept="image/*"
                onChange={handleOnChange}
                ref={imgRef}
                id="fileVideo"
              />
              <button className="youtube-btn" onClick={handleSubmit}>
                등록
              </button>
            </div>
          )}
        </li>
      </ul>
      <ul>
        <li>
          <div className="li-ssum"></div>
          <div className="intro-title">진행 기간</div>
          <div className="div-duration">
            <DatePick
              start={"start"}
              uploadRequest={uploadRequest}
              setUploadRequest={setUploadRequest}
            />
            <DatePick
              end={"end"}
              uploadRequest={uploadRequest}
              setUploadRequest={setUploadRequest}
            />
          </div>
          {errors.startDate && <div className="valid">{errors.startDate}</div>}
          {errors.endDate && <div className="valid">{errors.endDate}</div>}
        </li>
        <li>
          <StPreview>
            {show ? (
              <StImg
                src={
                  imgFile
                    ? imgFile
                    : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                }
              />
            ) : tempUrl && moveUrl ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${tempUrl}`}
                title="Project Video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            ) : (
              <StImg src="data:image/png;base64,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" />
            )}
          </StPreview>
          {errors.pic && <div className="valid">{errors.pic}</div>}
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
    </StIntroWrapper>
  );
};

export default ProjectIntro;
