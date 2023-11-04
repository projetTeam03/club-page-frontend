import React, { useState } from "react";
import View from "../../global/View";
import { AiFillEye, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { StProjectItem } from "./stProjectItem";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ items }) => {
  const navigate = useNavigate();
  const [heart, setHeart] = useState(true);
  const handleHeart = () => {
    setHeart((cur) => !cur);
  };
  const onClickDetail = (e) => {
    console.log(e);
    navigate(`/project/detail/:${e.target.id}`);
  };
  return (
    <StProjectItem onClick={onClickDetail}>
      <img src={items.src} alt="" />
      <div className="item-meta">
        <div className="item-meta__title">{items.title}</div>
        <View className="item-meta__view">
          <AiFillEye />
          <span> {items.view}</span>
        </View>
      </div>
      <div className="item-desc">{items.description}</div>
      <div className="item-skill">
        <div className="item-skill__item">
          <img src={process.env.PUBLIC_URL + items.skills[0]} />
        </div>
        <div className="item-skill__item">
          <img src={process.env.PUBLIC_URL + items.skills[1]} />
        </div>
        <div className="item-skill__item">
          <img src={process.env.PUBLIC_URL + items.skills[2]} />
        </div>
        <div className="item-skill__item">
          <img src={process.env.PUBLIC_URL + items.skills[3]} />
        </div>
        <div className="item-skill__item">
          <img src={process.env.PUBLIC_URL + items.skills[4]} />
        </div>
      </div>
      {heart ? (
        <AiOutlineHeart className="item-heart" onClick={handleHeart} />
      ) : (
        <AiFillHeart className="item-heart" onClick={handleHeart} />
      )}
    </StProjectItem>
  );
};

export default ProjectItem;
