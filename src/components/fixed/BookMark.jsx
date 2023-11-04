import React from "react";
import { BiBookmark } from "react-icons/bi";
import { StBookMark } from "./stBookMark";
import Mark from "../../global/Mark";

const BookMark = () => {
  return (
    <StBookMark>
      <Mark location="recruit-detail">
        <div className="circle">
          <BiBookmark />
        </div>
      </Mark>
      <span>0개</span>
      <div className="share"></div>
    </StBookMark>
  );
};

export default BookMark;
