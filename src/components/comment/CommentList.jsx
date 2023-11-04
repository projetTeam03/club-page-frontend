import React, { useState } from "react";
import { StCommentList } from "./stCommentList";
import Comment from "./Comment";
import ReComment from "./ReComment";
import ReCommentForm from "./ReCommentForm";

const CommentList = () => {
  const appear = (id) => {
    if (id === "1") {
      setAppearReCommentForm(true);
    }
  };

  const [appearReCommentForm, setAppearReCommentForm] = useState(false);

  return (
    <StCommentList>
      <Comment id="1" appear={appear} />
      <ReComment />
      {appearReCommentForm && (
        <ReCommentForm setAppearReCommentForm={setAppearReCommentForm} />
      )}
      <Comment id="2" appear={appear} />
      <Comment id="3" appear={appear} />
    </StCommentList>
  );
};

export default CommentList;
