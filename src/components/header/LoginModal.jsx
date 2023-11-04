import React, { useState } from "react";
import { createPortal } from "react-dom";

import { StLogin } from "./stLoginModal";
import LoginContent from "../modal/LoginContent";

const LoginModal = () => {
  const [showModal, setShowModal] = useState(false);
  const closeHandler = () => {
    if (showModal === true) {
      setShowModal(false);
    }
  };

  return (
    <StLogin>
      <div onClick={() => setShowModal(true)}>로그인</div>
      {showModal &&
        createPortal(
          <>
            <div className="modal_bg" onClick={closeHandler} />
            <LoginContent
              className="login"
              onClose={() => setShowModal(false)}
            />
          </>,
          document.body
        )}
    </StLogin>
  );
};

export default LoginModal;
