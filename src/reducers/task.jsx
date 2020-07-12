import * as types from "../constants/index";
import taskList from "../models/GetData";

let tasksJSON = JSON.parse(localStorage.getItem("tasks"));

let initialState = tasksJSON ? tasksJSON : [];

let taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return [...state];
    case types.INITIALIZE_TASKS:
      localStorage.setItem("tasks", JSON.stringify(taskList.List));
      window.location.reload();
      return [...state];
    case types.ADD_NEW_TASK:
      tasksJSON = [...tasksJSON, action.newTask];
      localStorage.setItem("tasks", JSON.stringify(tasksJSON));
      state = tasksJSON;
      return [...state];
    case types.UPDATE_TASK:
      for (let index in tasksJSON) {
        if (tasksJSON[index].id === action.taskUpdating.id) {
          tasksJSON[index] = action.taskUpdating;
        }
        localStorage.setItem("tasks", JSON.stringify(tasksJSON));
        state = tasksJSON;
      }
      return [...state];
    case types.CHANGE_STATUS:
      for (let index in tasksJSON) {
        if (tasksJSON[index].id === action.id) {
          tasksJSON[index].status = parseInt(action.status);
        }
      }
      localStorage.setItem("tasks", JSON.stringify(tasksJSON));
      state = tasksJSON;
      return [...state];
    default:
      return [...state];
  }
};

export default taskReducer;
