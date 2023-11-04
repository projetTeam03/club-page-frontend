import React, { useState, useEffect } from "react";
import { StIntro } from "./stCreateIntro";
import Button from "../global/Button";
import { useLocation } from "react-router-dom";
import Confirm from "../global/Confirm";

const CreateIntro = ({ setStep }) => {
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openConfirmProject, setOpenConfirmProject] = useState(false);

  const location = useLocation();

  const recruitIntro = [
    {
      id: 1,
      label: "모집 공고의 기본 정보를 입력해주세요.",
      text: `모집할 인원, 기술 스택, 포지션, 마감일, 진행 기간, \n 진행 방식 등을 알려주세요.`,
      subText: "참고로 GitHub ID도 입력해주시면 잔디를 볼 수 있습니다.",
      // labelNumber: url,
    },
    {
      id: 2,
      label: "프로젝트에 대해 소개해주세요.",
      text: `진행하실 프로젝트의 제목과 기획을 작성해주세요.`,
      subText: "바로 등록하지 않아도 기존 작성 내용이 임시로 저장됩니다.",
    },
  ];

  const uploadIntro = [
    {
      id: 1,
      label: "프로젝트의 기본 정보를 입력해주세요.",
      text: "프로젝트 명, 프로젝트의 이미지나 영상, 진행 기간을 알려주세요.",
      subText: "이미지나 영상 중 하나만 등록하시면 됩니다.",
    },
    {
      id: 2,
      label: "프로젝트에 대해 소개해주세요.",
      text: `프로젝트를 만들게 된 계기, 프로젝트의 목적과 기능을 알려주세요.`,
      subText: "페이지를 이동해도 기존 작성 내용이 임시로 저장됩니다.",
    },
    {
      id: 3,
      label: "프로젝트에 사용된 기술 스택에 대해 소개해주세요.",
      text: `프로젝트에 사용된 주요한 기술 스택을 우선적으로 선택해주세요.`,
      subText: "",
    },
    {
      id: 4,
      label: "프로젝트의 카테고리를 선택해주세요.",
      text: `프로젝트와 부합한 카테고리를 선택해주세요.`,
      subText: "최대 2개까지 선택할 수 있습니다.",
    },
    {
      id: 5,
      label: `함께 진행한 팀원들과 \n Github 주소를 입력해주세요.`,
      text: "Github 주소는 옵션이지만, 배포한 페이지 주소는 필수입니다.",
      subText: "",
    },
  ];

  // 프로젝트 인지 공고인지 나누는 함수. 추후 매개변수 추가
  const divideRecruit = (props) => {
    return props.map((desc) => (
      <div className="intro_desc_order_item" key={desc.id}>
        <label>
          {desc.id}. {desc.label}
        </label>
        <div className="intro_desc_order_item-desc">{desc.text}</div>
        <div className="intro_desc_order_item-sub">{desc.subText}</div>
      </div>
    ));
  };

  const goNextStep = () => {
    setStep(1);
  };

  // 임시 저장이 있는지 없는지 확인하는 함수
  const checkConfirm = () => {
    if (openConfirm) {
      return <Confirm setStep={setStep} setOpenConfirm={setOpenConfirm} />;
    } else {
      return (
        <div className="intro_desc">
          <h2>공고문을 등록해봅시다!</h2>
          <div className="intro_desc_order">{divideRecruit(recruitIntro)}</div>
          <Button purpose="recruit-register" onClick={goNextStep}>
            등록하기
          </Button>
        </div>
      );
    }
  };

  const checkConfirmProject = () => {
    if (openConfirmProject) {
      return (
        <Confirm
          setStep={setStep}
          setOpenConfirmProject={setOpenConfirmProject}
        />
      );
    } else {
      return (
        <div className="intro_desc">
          <h2>프로젝트를 등록해봅시다!</h2>
          <div className="intro_desc_order">{divideRecruit(uploadIntro)}</div>
          <Button
            className="hi"
            purpose="project-register"
            onClick={goNextStep}
          >
            등록하기
          </Button>
        </div>
      );
    }
  };

  useEffect(() => {
    const savedItem = localStorage.getItem("saveItem");
    const savedItem_project = localStorage.getItem("saveItem_project");
    if (savedItem) {
      setOpenConfirm(true);
    }
    if (savedItem_project) {
      setOpenConfirmProject(true);
    }
  }, []);

  return (
    <StIntro>
      {location.pathname === "/project/upload" ? (
        <>{checkConfirmProject()}</>
      ) : (
        <>{checkConfirm()}</>
      )}
    </StIntro>
  );
};

export default CreateIntro;
