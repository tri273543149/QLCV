import { combineReducers } from "redux";
import taskReducer from "./task";
import editReducer from "./editTask";
import isAddNewTaskReducer from "./isAddNewTask";
import filterReducer from "./filter";

const rootReducer = combineReducers({
  tasks: taskReducer,
  editTask: editReducer,
  isAddNewTask: isAddNewTaskReducer,
  filter: filterReducer,
});

export default rootReducer;
