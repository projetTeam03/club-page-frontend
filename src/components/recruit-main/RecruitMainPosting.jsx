import React, { useEffect, useState } from "react";
// import useInfiniteScroll from "react-infinite-scroll-hook";
import { StPosting } from "./stRecruitMainPosting";
import RecruitMainPostingBox from "./RecruitMainPostingBox";
// import axios from "axios";

// const url = "https://medrum.herokuapp.com/articles";
// const [data, setData] = useState([]);
// useEffect(() => {
//   axios.get(url).then((res) => {
//     setData(res.data);
//   });
// }, []);

// if (!data) {
//   return <div>Loading...</div>;
// }

const RecruitMainPosting = () => {
  return (
    <StPosting>
      <RecruitMainPostingBox />
    </StPosting>
  );
};

export default RecruitMainPosting;
