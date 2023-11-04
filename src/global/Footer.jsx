import React from "react";
import { StFooter } from "./stFooter";
import { AiFillGithub } from "react-icons/ai";
import { BsFillImageFill } from "react-icons/bs";

const Footer = () => {
  return (

    <StFooter>
      <footer>
        <div className="footer_box column">
          <img src="logo.svg" alt="로고" />
          <a
            href="https://github.com/orgs/projetTeam03/repositories"
            target="_blank"
          >
            <AiFillGithub />
            projectTeam03's github address
          </a>
          <a href="https://kr.freepik.com/" target="_blank">
            <BsFillImageFill />
            Images source from prefix
          </a>
        </div>
        <div className="footer_box">
          <div className="footer_box_part">
            <b>Backend</b>
            <ul>
              <li>노원호</li>
              <li>김종렬</li>
              <li>선민승</li>
            </ul>
          </div>
          <div className="footer_box_part">
            <b>Frontend</b>
            <ul>
              <li>심채운</li>
              <li>염승준</li>
              <li>조하윤</li>
            </ul>
          </div>
        </div>
      </footer>
    </StFooter>

  );
};

export default Footer;
