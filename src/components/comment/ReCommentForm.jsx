import React, { useState } from "react";
import Button from "../../global/Button";
import { StReCommentForm } from "./stReCommentForm";

const ReCommentForm = ({ setAppearReCommentForm }) => {
  const [textAreaValue, setTextAreaValue] = useState("@유저명");
  const changeTextAreaValue = (e) => {
    setTextAreaValue(e.target.value);
  };

  const clickAppearForm = () => {
    setAppearReCommentForm(false);
  };
  return (
    <StReCommentForm>
      <div className="comment-form">
        <form>
          <textarea
            id="comment"
            value={textAreaValue}
            onChange={changeTextAreaValue}
          ></textarea>
        </form>
      </div>
      <div className="comment-submit">
        <Button purpose="recomment-register">저장</Button>
        <Button purpose="cancel" onClick={clickAppearForm}>
          취소
        </Button>
      </div>
    </StReCommentForm>
  );
};

export default ReCommentForm;
