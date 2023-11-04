import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Heart from "../../global/Heart";
import { StHeartMark } from "./stHeartMark";

const HeartMark = () => {
  return (
    <StHeartMark>
      <Heart location="recruit-detail">
        <div className="circle">
          <AiOutlineHeart />
        </div>
      </Heart>
      <span>0개</span>
      <div className="share"></div>
    </StHeartMark>
  );
};

export default HeartMark;
