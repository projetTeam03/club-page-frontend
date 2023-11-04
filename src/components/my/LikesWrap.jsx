import React, { useState } from "react";
import { StMyPageWrap } from "./stMypage";
import { AiOutlineHeart } from "react-icons/ai";

const LikesWrap = () => {
  const categoryItem = ["프로젝트", "모집 공고"];
  const [category, setCategory] = useState("프로젝트");

  const clickCategory = (e) => {
    setCategory(e.target.innerText);
  };

  const categoryMap = () => {
    return categoryItem.map((el, i) =>
      category === el ? (
        <div className="category__item-active " key={i} onClick={clickCategory}>
          {el}
          <div className="line"></div>
        </div>
      ) : (
        <div className="category__item " key={i} onClick={clickCategory}>
          {el}
        </div>
      )
    );
  };

  return (
    <StMyPageWrap>
      <div className="section">
        <AiOutlineHeart />
        <h2>관심목록</h2>
      </div>
      <div className="category">{categoryMap()}</div>
      {category === "프로젝트" ? (
        // <ProjectList>
        //   프로젝트
        //   <ProjectItem />
        // </ProjectList>
        <div>프로젝트</div>
      ) : (
        // <ProjectList>
        //   모집 공고
        //   <ProjectItem />
        // </ProjectList>
        <div>모집 공고</div>
      )}
    </StMyPageWrap>
  );
};

export default LikesWrap;
