import React, { useEffect, useRef, useState } from "react";
import View from "../../global/View";
import { AiOutlineHeart, AiFillEye, AiFillHeart } from "react-icons/ai";
import { StCurrent } from "./stCurrentSlide";

const CurrentSlide = ({ data }) => {
  const [heart, setHeart] = useState(true);
  const handleHeart = () => {
    setHeart((cur) => !cur);
  };
  return (
    <StCurrent className="first-slide">
      <div className="item">
        <img src={data.src} alt="" />
        <div className="item-meta">
          <div className="item-meta__title">{data.title}</div>
          <View className="item-meta__view">
            <AiFillEye />
            <span> {data.views}</span>
          </View>
        </div>
        <div className="item-desc">{data.desc}</div>
        <div className="item-skill">
          <div className="item-skill__item">
            <img
              src={process.env.PUBLIC_URL + "icon__tech-stack--nextjs.svg"}
            />
          </div>
          <div className="item-skill__item">
            <img
              src={process.env.PUBLIC_URL + "icon__tech-stack--spring.svg"}
            />
          </div>
          <div className="item-skill__item">
            <img src={process.env.PUBLIC_URL + "icon__tech-stack--swift.svg"} />
          </div>
          <div className="item-skill__item">
            <img src={process.env.PUBLIC_URL + "icon__tech-stack--mysql.svg"} />
          </div>
          <div className="item-skill__item">
            <img
              src={process.env.PUBLIC_URL + "icon__tech-stack--graphql.svg"}
            />
          </div>
        </div>
        {heart ? (
          <AiOutlineHeart className="item-heart" onClick={handleHeart} />
        ) : (
          <AiFillHeart className="item-heart" onClick={handleHeart} />
        )}
      </div>
    </StCurrent>
  );
};

export default CurrentSlide;
