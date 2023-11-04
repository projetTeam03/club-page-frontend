import React, { useState } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { StSlideControl } from "./stSlideControl";

const SlideControl = ({ changeIndex, changeBack }) => {
  const [pages, setPages] = useState(0);
  const [back, setBack] = useState(false);
  const increaseIndex = () => {
    setPages((pages + 1) % 4);
    changeIndex((pages + 1) % 4);
    changeBack(false);
  };
  const decreaseIndex = () => {
    setPages((pages - 1 + 4) % 4);
    changeIndex((pages - 1 + 4) % 4);
    changeBack(true);
  };
  //console.log(pages);
  return (
    <StSlideControl className="control">
      <div className="control-prev">
        <AiFillLeftCircle onClick={decreaseIndex} />
      </div>
      <div className="control-page">
        <div className="control-page__current">0{pages + 1}</div>
        <span className="control-page__total">04</span>
      </div>
      <div className="control-next">
        <AiFillRightCircle onClick={increaseIndex} />
      </div>
    </StSlideControl>
  );
};

export default SlideControl;
