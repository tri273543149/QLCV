import * as types from "../constants/index";

let initialState = {
  filterType: "",
  filterValue: -1,
};

let filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FILTER:
      state = {
        filterType: action.filterType,
        filterValue: action.filterValue,
      };
      return { ...state };
    default:
      return { ...state };
  }
};

export default filterReducer;