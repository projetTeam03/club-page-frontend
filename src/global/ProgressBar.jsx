import React, { useEffect, useState } from "react";
import { StProgress, StProgressBg } from "./stProgressBar";

const ProgressBar = ({ step }) => {
  const [progressValue, setProgressValue] = useState(0);

  const getProgressWidth = (step) => {
    return Math.floor((step / 2) * 100);
  };

  useEffect(() => {
    switch (step) {
      case 0:
        setProgressValue(getProgressWidth(0));
        break;
      case 1:
        setProgressValue(getProgressWidth(1));
        break;
      case 2:
        setProgressValue(getProgressWidth(2));
        break;
      default:
        break;
    }
  }, [step]);

  return (
    <StProgressBg>
      <StProgress width={`${progressValue}%`} />
    </StProgressBg>
  );
};

export default ProgressBar;
