import React from "react";
import { StMeta } from "./stRecruitDetailMeta";
import Profile from "./../../global/Profile";
import View from "./../../global/View";
import { AiOutlineHeart, AiFillEye } from "react-icons/ai";

const RecruitDetailMeta = () => {
  return (
    <StMeta>
      <Profile location="recruit-detail" />
      <div className="meta-name">조하윤</div>
      <div className="meta-detail">
        <div className="meta-detail_date">작성일 : 2023-07-22</div>
        <div className="meta-detail_view">
          <View location="recruit-detail">
            <AiFillEye />
            <span> 1회</span>
          </View>
        </div>
      </div>
    </StMeta>
  );
};

export default RecruitDetailMeta;
