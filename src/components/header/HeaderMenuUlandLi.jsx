import React, { useEffect, useState } from "react";
import { StHeaderMenuUl, StHeaderMenuLi } from "./stHeaderMenuUlandLi";
import HeaderMenuLink from "./HeaderMenuLink";
import HeaderMyDrop from "./HeaderMyDrop";
import LoginModal from "./LoginModal";
import { useLocation, useNavigate } from "react-router-dom";

const SUPER_URL = "https://supercoding.net/Course/CourseIntro";

const HeaderMenuUlandLi = () => {
  const [openDrop, setOpenDrop] = useState(false);
  const [token, setToken] = useState("");
  const [showLogin, setShowLogin] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setShowLogin(false);
    } else {
      setShowLogin(true);
    }
  }, []);

  return (
    <StHeaderMenuUl>
      <StHeaderMenuLi>
        <HeaderMenuLink to={SUPER_URL} message="슈퍼코딩" />
      </StHeaderMenuLi>
      <StHeaderMenuLi>
        <HeaderMenuLink to="/" message="프로젝트" />
      </StHeaderMenuLi>
      <StHeaderMenuLi>
        <HeaderMenuLink to="/recruit" message="모집 공고" />
      </StHeaderMenuLi>
      <StHeaderMenuLi>
        {/* <HeaderMenuLink to="/project/upload" message="등록" /> */}
        {location.pathname === "/" ? (
          <HeaderMenuLink to="/project/upload" message="등록" />
        ) : (
          <HeaderMenuLink to="/recruit/create" message="등록" />
        )}
        {/* {showLogin && <LoginModal />} */}
      </StHeaderMenuLi>
      <StHeaderMenuLi
        onMouseOver={() => setOpenDrop(true)}
        onMouseOut={() => setOpenDrop(false)}
      >
        <HeaderMenuLink message="MY" />
        {openDrop && <HeaderMyDrop />}
      </StHeaderMenuLi>
    </StHeaderMenuUl>
  );
};

export default HeaderMenuUlandLi;
