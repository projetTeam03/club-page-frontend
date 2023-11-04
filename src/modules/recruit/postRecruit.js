import axios from "axios";
import { CreateRecruit } from "../../apis/recruit/recruitApi";

// 액션 이름
// POST 모집 공고 생성
const POST_RECRUIT_REQUEST = "POST_RECRUIT_REQUEST";
const POST_RECRUIT_REQUEST_SUCCESS = "POST_RECRUIT_REQUEST_SUCCESS";
const POST_RECRUIT_REQUEST_FAIL = "POST_RECRUIT_REQUEST_FAIL";

// GET 모집 공고 상세 조회
// const GET_RECRUIT_DETAIL = "GET_RECRUIT_DETAIL";
// const GET_RECRUIT_SUCCESS = "GET_RECRUIT_SUCCESS";
// const GET_RECRUIT_FAIL = "GET_RECRUIT_FAIL";

// 액션 생성함수
// POST 생성 함수
const addRecruitRequest = () => {
  return {
    type: POST_RECRUIT_REQUEST,
  };
};

const addRecruitSuccess = (payload) => {
  // console.log("payload -------- :", payload);
  console.log("성공");
  return {
    type: POST_RECRUIT_REQUEST_SUCCESS,
    payload,
  };
};

const addRecruitFail = (error) => {
  return {
    type: POST_RECRUIT_REQUEST_FAIL,
    error,
  };
};

// 비동기 처리
export const postRecruitData = (payload) => {
  return async (dispatch) => {
    dispatch(addRecruitRequest());
    console.log(payload);

    const progress = payload.progress.id;
    const position = payload.position.map((el) => el.id);
    const duration = payload.duration.value;
    const skill = payload.skill.map((el) => el.id);

    const recruitInfo = {
      progress: progress,
      position,
      duration,
      endDate: payload.endDate,
      skill,
      github: payload.github,
      title: payload.title,
      contents: payload.contents,
      participants: payload.participants,
    };

    console.log(recruitInfo);

    try {
      const { progress, position, duration, endDate, skill, title, contents } =
        recruitInfo;
      if (title !== "" && contents !== "") {
        console.log("다 있어요");
        console.log("서버에 보낼 데이터", recruitInfo);

        // const responseData = await CreateRecruit(recruitInfo);
        const responseData = await axios.post();
        console.log("서버 응답 데이터:", responseData);
        dispatch(addRecruitSuccess(responseData));
      } else {
        console.log("없어요");
      }
    } catch (error) {
      // dispatch(addRecruitFail(error.message)); // 메세지
      dispatch(addRecruitFail(error.response.status)); // status 번호
    }
  };
};

// initial
const initalState = {
  data: {},
  isLoading: false,
  error: null,
};

// reducer (순수함수)
const postRecruit = (state = initalState, action) => {
  switch (action.type) {
    case POST_RECRUIT_REQUEST:
      console.log(action);
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case POST_RECRUIT_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case POST_RECRUIT_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default postRecruit;
