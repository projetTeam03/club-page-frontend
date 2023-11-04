import React from "react";
import { useLocation } from "react-router-dom";
import { StConfirm } from "./stConfirm";
import Button from "./Button";

const Confirm = ({ setOpenConfirm, setStep, setOpenConfirmProject }) => {
  const location = useLocation();
  const clickConfirm = () => {
    setOpenConfirm(true);
    setStep(1);
  };
  const clickConfirmProject = () => {
    setOpenConfirmProject(true);
    setStep(1);
  };
  const clickCancel = () => {
    localStorage.removeItem("saveItem");
    setStep(0);
    setOpenConfirm(false);
  };
  const clickCancelProject = () => {
    localStorage.removeItem("saveItem_project");
    setStep(0);
    setOpenConfirmProject(false);
  };
  return (
    <StConfirm>
      {location.pathname === "/project/upload" ? (
        <>
          <div className="text">전에 입력하셨던 내용들이 있습니다.</div>
          <div className="question">이어서 작성하시겠습니까??</div>
          <div className="btn-box">
            <Button purpose="register" onClick={clickConfirmProject}>
              확인
            </Button>
            <Button purpose="cancel" onClick={clickCancelProject}>
              취소
            </Button>
          </div>{" "}
        </>
      ) : (
        <>
          <div className="text">전에 입력하셨던 내용들이 있습니다.</div>
          <div className="question">이어서 작성하시겠습니까??</div>
          <div className="btn-box">
            <Button purpose="register" onClick={clickConfirm}>
              확인
            </Button>
            <Button purpose="cancel" onClick={clickCancel}>
              취소
            </Button>
          </div>
        </>
      )}
    </StConfirm>
  );
};

export default Confirm;
