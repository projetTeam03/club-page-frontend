import { CreateRecruit } from "../../apis/recruit/recruitApi";

// 액션 이름
const POST_RECRUIT_REQUEST = "POST_RECRUIT_REQUEST";
const POST_RECRUIT_REQUEST_SUCCESS = "POST_RECRUIT_REQUEST_SUCCESS";
const POST_RECRUIT_REQUEST_FAIL = "POST_RECRUIT_REQUEST_FAIL";

// 액션 생성함수
const addRecruitRequest = () => {
  return {
    type: POST_RECRUIT_REQUEST,
  };
};

const addRecruitSuccess = (payload) => {
  console.log("성공");
  return {
    type: POST_RECRUIT_REQUEST_SUCCESS,
    payload,
  };
};

const addRecruitFail = (error) => {
  console.log("실패");
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
    };

    console.log(recruitInfo);

    try {
      const { title, contents } = recruitInfo;
      if (title !== "" && contents !== "") {
        // console.log("다 있어요");
        console.log("서버에 보낼 데이터", recruitInfo);

        const responseData = await CreateRecruit(recruitInfo);
        console.log("서버 응답 데이터:", responseData);
        dispatch(addRecruitSuccess(responseData));
      } else {
        return;
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
