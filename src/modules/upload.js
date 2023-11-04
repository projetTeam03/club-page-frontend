// 액션 이름
const ADD_PROJECT = "ADD_PROJECT";

// 액션 생성함수
export const addProject = (payload) => {
  return {
    type: ADD_PROJECT,
    payload,
  };
};

// initial
const initialState = {
  title: "",
  startDate: new Date(),
  endDate: new Date(),
  pic: "",
  youtube: "",
  contents: "",
  skills: [],
  categories: [],
  members: [],
  github: "",
  deploy: "",
};

// reducer (순수함수)
const upload = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      const title = action.payload.title;
      const skills = action.payload.skills.map((e) => e.id);
      const categories = action.payload.categories.map((e) => e.id);
      return {
        ...state,
        title,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        pic: action.payload.pic,
        youtube: action.payload.pic,
        contents: action.payload.contents,
        skills,
        categories,
        members: action.payload.members,
        github: action.payload.github,
        deploy: action.payload.deploy,
      };
    default:
      return state;
  }
};

export default upload;
