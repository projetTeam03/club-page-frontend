import React from "react";
import Profile from "./../../global/Profile";
import { StComment } from "./stComment";
import { GoReply } from "react-icons/go";
const Comment = ({ id, appear }) => {
  const clickRecomment = (e) => {
    appear(e.target.id);
  };
  return (
    <StComment>
      <div className="profile">
        <Profile className="user-img" location="comment-profile"></Profile>
        <span className="profile__name">심채운</span>
        <span className="comment__date">어제</span>
        <div id={id} className="reply-i" onClick={clickRecomment}>
          <GoReply />
        </div>
      </div>
      <div className="comment">댓글이에요</div>
    </StComment>
  );
};

export default Comment;
