import React from "react";
import { StBanner } from "./stRecruitMainBanner";
import { register } from "swiper/element/bundle";
register();

const RecruitMainBanner = () => {
  return (
    <StBanner>
      <swiper-container
        css-mode="true"
        navigation="true"
        pagination="true"
        scrollbar="true"
        speed="300"
        autoplay="true"
        loop="true"
        slides-per-view="1"
      >
        <swiper-slide>
          <div className="swiper-slide_item banner_community">
            <div className="swiper-slide_item_txt">
              <h3>개발 커뮤니티 형성</h3>
              <p>개발 커뮤니티를 형성할 수 있어요</p>
            </div>
            <div className="swiper-slide_item_img">
              <img src="banner_community.png" alt="개발 커뮤니티 배너 이미지" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="swiper-slide_item banner_project">
            <div className="swiper-slide_item_txt">
              <h3>다양한 프로젝트 경험</h3>
              <p>슈퍼클럽에서 다양한 프로젝트 경험을 쌓으세요</p>
            </div>
            <div className="swiper-slide_item_img">
              <img src="banner_project.png" alt="개발 커뮤니티 배너 이미지" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="swiper-slide_item banner_levelup">
            <div className="swiper-slide_item_txt">
              <h3>협업 기회 제공 및 협업 경험 증가</h3>
              <p>협업하며 경험을 쌓아가요</p>
            </div>
            <div className="swiper-slide_item_img">
              <img src="banner_levelup.png" alt="개발 커뮤니티 배너 이미지" />
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </StBanner>
  );
};

export default RecruitMainBanner;
