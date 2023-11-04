import React from "react";
import { StCommentForm } from "./stCommentForm";
import Button from "../../global/Button";
import Profile from "../../global/Profile";

const CommentForm = () => {
  return (
    <StCommentForm>
      <div className="comment-form">
        <Profile className="user-img" location="comment"></Profile>
        <form>
          <textarea id="comment" placeholder="댓글을 입력하세요"></textarea>
        </form>
      </div>
      <div className="comment-submit">
        <Button purpose="register">저장</Button>
      </div>
    </StCommentForm>
  );
};

export default CommentForm;
