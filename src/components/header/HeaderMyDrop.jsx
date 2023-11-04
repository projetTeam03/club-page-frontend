import React from "react";
import { StDrop } from "./stHeaderMyDrop";
import { useNavigate } from "react-router-dom";

const HeaderMyDrop = ({ handleLogout }) => {
  const navigate = useNavigate();
  return (
    <StDrop>
      <div className="item" onClick={() => navigate("/mypost")}>
        내 등록
      </div>
      <div className="item" onClick={() => navigate("/mylikes")}>
        내 관심
      </div>
      <div className="item" onClick={handleLogout}>
        로그아웃
      </div>
    </StDrop>
  );
};

export default HeaderMyDrop;
