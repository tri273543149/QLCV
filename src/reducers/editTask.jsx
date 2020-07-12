import * as types from "../constants/index";

let initialState = {};

let editReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_TASK:
      state = action.taskEditing;
      return { ...state };
    case types.CLEAR_FORM:
      state = {
        id: "",
        name: "",
        description: "",
        priority: "",
        memberIDArr: [],
        labelArr: [],
      };
      return { ...state };
    default:
      return { ...state };
  }
};

export default editReducer;
