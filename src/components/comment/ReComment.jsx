import React from "react";
import { StRecomment } from "./stRecomment";
import Profile from "../../global/Profile";

const ReComment = () => {
  return (
    <StRecomment>
      <div className="profile">
        <Profile className="user-img" location="comment-profile"></Profile>
        <span className="profile__name">조하윤</span>
        <span className="comment__date">몇초 전</span>
      </div>
      <div className="comment">대댓글이 작성되어있어요~!~</div>
    </StRecomment>
  );
};

export default ReComment;
