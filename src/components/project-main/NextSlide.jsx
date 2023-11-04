import React, { useState } from "react";
import { StSubSlide } from "./stNextSlide";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const NextSlide = ({ src }) => {
  const [heart, setHeart] = useState(true);
  const handleHeart = () => {
    setHeart((cur) => !cur);
  };
  return (
    <StSubSlide className="sub-slide">
      <div className="item">
        <img src={src} alt="" />
        {heart ? (
          <AiOutlineHeart className="heart" onClick={handleHeart} />
        ) : (
          <AiFillHeart className="heart" onClick={handleHeart} />
        )}
      </div>
    </StSubSlide>
  );
};

export default NextSlide;
