import React, { useState } from "react";
import { StRecruitMainPostingBox } from "./stRecruitMainPostingBox";
import { StPostingFilter } from "./stRecruitMainPostingFilter";
import { HiOutlineEye, HiUserCircle } from "react-icons/hi";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const RecruitMainPostingBox = () => {
  const [recuiting, setRecuiting] = useState(false);
  // const [deadline, setDeadline] = useState(false);
  const navigate = useNavigate();

  // const recuitingHandler = (e) => {
  //   e.target.checked ? setRecuiting(true) : setRecuiting(false);
  //   setRecuiting(e.target.checked);
  // };

  const clickId = (e) => {
    console.log("눌림");
    console.log(e.target.id);
    navigate(`/recruit/detail/:${e.target.id}`);
  };

  return (
    <>
      <StPostingFilter>
        <ul>
          {/* <li>최신순</li>
          <li>스크랩 순</li>
          <li>조회수 순</li> */}
        </ul>
        <div className="recruit_checking">
          <div className="recruit_checking_title">모집중만 보기</div>
          <div className="recruit_checking_switch">
            <input
              type="checkbox"
              id="checkbox-recruiting"
              hidden
              onClick={() => {
                setRecuiting(!recuiting);
              }}
            />
            {recuiting === true ? "" : ""}
            <label htmlFor="checkbox-recruiting" className="switch_toggle">
              <span className="switch_toggle_btn"></span>
            </label>
          </div>
        </div>
      </StPostingFilter>

      <StRecruitMainPostingBox>
        <article className="recruit_wrap">
          <div className="recruit_d_day">🔥 D-3</div>
          <div className="recruit_view">
            <div className="recruit_view_deadline">마감일 | 2023-08-02</div>
            <div className="recruit_view_icons">
              <div className="recruit_view_icons_box">
                <HiOutlineEye />
                <span className="recruit_view_icons_box_desc">108</span>
              </div>
              <div className="recruit_view_icons_box">
                <HiOutlineChatBubbleLeft />
                <span className="recruit_view_icons_box_desc">0</span>
              </div>
            </div>
          </div>
          <div className="recruit_title">같이 공부할 스터디 구합니다</div>
          <div className="recruit_tech_stack">
            <ul>
              <li>
                <img src="icon__tech-stack--javascript.svg" alt="javascript" />
              </li>
              <li>
                <img src="icon__tech-stack--typescript.svg" alt="typescript" />
              </li>
              <li>
                <img src="icon__tech-stack--java.svg" alt="java" />
              </li>
              <li>
                <img src="icon__tech-stack--spring.svg" alt="spring" />
              </li>
              <li>
                <img src="icon__tech-stack--aws.svg" alt="aws" />
              </li>
            </ul>
          </div>
          <div className="recruit_job_position">
            <ul>
              <li>#프론트엔드</li>
              <li>#백엔드</li>
            </ul>
          </div>
          <div className="recruit_profile">
            <HiUserCircle />
            <span className="recruit_profile_nickname">굴러갑시다</span>
          </div>
        </article>

        <article className="recruit_wrap">
          <div className="recruit_d_day">🔥 D-2</div>
          <div className="recruit_view">
            <div className="recruit_view_deadline">마감일 | 2023-08-01</div>
            <div className="recruit_view_icons">
              <div className="recruit_view_icons_box">
                <HiOutlineEye />
                <span className="recruit_view_icons_box_desc">48</span>
              </div>
              <div className="recruit_view_icons_box">
                <HiOutlineChatBubbleLeft />
                <span className="recruit_view_icons_box_desc">0</span>
              </div>
            </div>
          </div>
          <div className="recruit_title">
            프론튼데요 모집 공고 사이트 만들어서 배포까지 함께가실 백 분
            구합니다.
          </div>
          <div className="recruit_tech_stack">
            <ul>
              <li>
                <img src="icon__tech-stack--java.svg" alt="java" />
              </li>
              <li>
                <img src="icon__tech-stack--spring.svg" alt="spring" />
              </li>
              <li>
                <img src="icon__tech-stack--graphql.svg" alt="graphql" />
              </li>
              <li>
                <img src="icon__tech-stack--docker.svg" alt="docker" />
              </li>
              <li>
                <img src="icon__tech-stack--c.svg" alt="c" />
              </li>
            </ul>
          </div>
          <div className="recruit_job_position">
            <ul>
              <li>#백엔드</li>
            </ul>
          </div>
          <div className="recruit_profile">
            <HiUserCircle />
            <span className="recruit_profile_nickname">김용만</span>
          </div>
        </article>

        <article className="recruit_wrap">
          <div className="recruit_d_day">🔥 D-2</div>
          <div className="recruit_view">
            <div className="recruit_view_deadline">마감일 | 2023-08-01</div>
            <div className="recruit_view_icons">
              <div className="recruit_view_icons_box">
                <HiOutlineEye />
                <span className="recruit_view_icons_box_desc">23</span>
              </div>
              <div className="recruit_view_icons_box">
                <HiOutlineChatBubbleLeft />
                <span className="recruit_view_icons_box_desc">0</span>
              </div>
            </div>
          </div>
          <div className="recruit_title">
            기획 디자인 마크업 리액트까지 책임져주실 만능 프엔 구해요
          </div>
          <div className="recruit_tech_stack">
            <ul>
              <li>
                <img src="icon__tech-stack--javascript.svg" alt="javascript" />
              </li>
              <li>
                <img src="icon__tech-stack--typescript.svg" alt="typescript" />
              </li>
              <li>
                <img src="icon__tech-stack--react.svg" alt="react" />
              </li>
              <li>
                <img src="icon__tech-stack--nextjs.svg" alt="nextjs" />
              </li>
              <li>
                <img src="icon__tech-stack--figma.svg" alt="figma" />
              </li>
            </ul>
          </div>
          <div className="recruit_job_position">
            <ul>
              <li>#프론트엔드</li>
              <li>#디자이너</li>
            </ul>
          </div>
          <div className="recruit_profile">
            <HiUserCircle />
            <span className="recruit_profile_nickname">심해수</span>
          </div>
        </article>

        <article className="recruit_wrap">
          <div className="recruit_d_day">🔥 D-1</div>
          <div className="recruit_view">
            <div className="recruit_view_deadline">마감일 | 2023-07-31</div>
            <div className="recruit_view_icons">
              <div className="recruit_view_icons_box">
                <HiOutlineEye />
                <span className="recruit_view_icons_box_desc">6</span>
              </div>
              <div className="recruit_view_icons_box">
                <HiOutlineChatBubbleLeft />
                <span className="recruit_view_icons_box_desc">0</span>
              </div>
            </div>
          </div>
          <div className="recruit_title">
            [팀원 모집] 기깔나게 기획이랑 디자인(및 퍼블리싱)이랑 마케팅까지
            해주실 능력자 모십니다~
          </div>
          <div className="recruit_tech_stack">
            <ul>
              <li>
                <img src="icon__tech-stack--javascript.svg" alt="javascript" />
              </li>
              <li>
                <img src="icon__tech-stack--figma.svg" alt="figma" />
              </li>
            </ul>
          </div>
          <div className="recruit_job_position">
            <ul>
              <li>#프론트엔드</li>
              <li>#디자이너</li>
            </ul>
          </div>
          <div className="recruit_profile">
            <HiUserCircle />
            <span className="recruit_profile_nickname">넥스트레블</span>
          </div>
        </article>

        <article className="recruit_wrap">
          <div className="recruit_d_day">🔥 D-1</div>
          <div className="recruit_view">
            <div className="recruit_view_deadline">마감일 | 2023-07-31</div>
            <div className="recruit_view_icons">
              <div className="recruit_view_icons_box">
                <HiOutlineEye />
                <span className="recruit_view_icons_box_desc">31</span>
              </div>
              <div className="recruit_view_icons_box">
                <HiOutlineChatBubbleLeft />
                <span className="recruit_view_icons_box_desc">2</span>
              </div>
            </div>
          </div>
          <div className="recruit_title">
            자바스크립트 딥하게 다이브 하실 분 모집 (준비물: 모던자바스크립트
            책)
          </div>
          <div className="recruit_tech_stack">
            <ul>
              <li>
                <img src="icon__tech-stack--javascript.svg" alt="javascript" />
              </li>
              <li>
                <img src="icon__tech-stack--typescript.svg" alt="typescript" />
              </li>
            </ul>
          </div>
          <div className="recruit_job_position">
            <ul>
              <li>#프론트엔드</li>
            </ul>
          </div>
          <div className="recruit_profile">
            <HiUserCircle />
            <span className="recruit_profile_nickname">딥바닐라</span>
          </div>
        </article>

        {!recuiting && (
          <>
            <article className="recruit_wrap">
              <div className="recruit_d_day">🚫 모집 종료</div>
              <div className="recruit_view">
                <div className="recruit_view_deadline">마감일 | 2023-06-23</div>
                <div className="recruit_view_icons">
                  <div className="recruit_view_icons_box">
                    <HiOutlineEye />
                    <span className="recruit_view_icons_box_desc">67</span>
                  </div>
                  <div className="recruit_view_icons_box">
                    <HiOutlineChatBubbleLeft />
                    <span className="recruit_view_icons_box_desc">0</span>
                  </div>
                </div>
              </div>
              <div className="recruit_title">
                토이프로젝트(운동 관련 앱) 배포까지 함께하실 디자이너님을
                구합니다
              </div>
              <div className="recruit_tech_stack">
                <ul>
                  <li>
                    <img src="icon__tech-stack--figma.svg" alt="figma" />
                  </li>
                </ul>
              </div>
              <div className="recruit_job_position">
                <ul>
                  <li>#디자이너</li>
                </ul>
              </div>
              <div className="recruit_profile">
                <HiUserCircle />
                <span className="recruit_profile_nickname">사장님</span>
              </div>
            </article>
            <article className="recruit_wrap">
              <div className="recruit_d_day">🚫 모집 종료</div>
              <div className="recruit_view">
                <div className="recruit_view_deadline">마감일 | 2023-05-28</div>
                <div className="recruit_view_icons">
                  <div className="recruit_view_icons_box">
                    <HiOutlineEye />
                    <span className="recruit_view_icons_box_desc">53</span>
                  </div>
                  <div className="recruit_view_icons_box">
                    <HiOutlineChatBubbleLeft />
                    <span className="recruit_view_icons_box_desc">1</span>
                  </div>
                </div>
              </div>
              <div className="recruit_title">
                백엔드 당신, 내 동료가 되어라.
              </div>
              <div className="recruit_tech_stack">
                <ul>
                  <li>
                    <img src="icon__tech-stack--python.svg" alt="python" />
                  </li>
                  <li>
                    <img src="icon__tech-stack--php.svg" alt="php" />
                  </li>
                  <li>
                    <img src="icon__tech-stack--firebase.svg" alt="firebase" />
                  </li>
                </ul>
              </div>
              <div className="recruit_job_position">
                <ul>
                  <li>#백엔드</li>
                </ul>
              </div>
              <div className="recruit_profile">
                <HiUserCircle />
                <span className="recruit_profile_nickname">나눈야프롱트</span>
              </div>
            </article>
          </>
        )}
      </StRecruitMainPostingBox>
    </>
  );
};

export default RecruitMainPostingBox;
