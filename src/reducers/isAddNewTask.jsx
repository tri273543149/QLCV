import * as types from "../constants/index";

let initialState = true;

let isAddNewTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IS_ADD_NEW_TASK:
      state = true;
      return state;
    case types.IS_EDIT_TASK:
      state = false;
      return state;
    default:
      return state;
  }
};
export default isAddNewTaskReducer;
