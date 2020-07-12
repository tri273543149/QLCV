import * as types from "../constants/index";

export const listAll = () => {
  return {
    type: types.LIST_ALL,
  };
};

export const initializeTasks = () => {
  return {
    type: types.INITIALIZE_TASKS,
  };
};

export const addNewTask = (newTask) => {
  return {
    type: types.ADD_NEW_TASK,
    newTask,
  };
};

export const editTask = (taskEditing) => {
  return {
    type: types.EDIT_TASK,
    taskEditing,
  };
};

export const updateTask = (taskUpdating) => {
  return {
    type: types.UPDATE_TASK,
    taskUpdating,
  };
};

export const isAddNewTask = () => {
  return {
    type: types.IS_ADD_NEW_TASK,
  };
};

export const isEditTask = () => {
  return {
    type: types.IS_EDIT_TASK,
  };
};

export const clearForm = () => {
  return {
    type: types.CLEAR_FORM,
  };
};

export const changeStatus = (id, status) => {
  return {
    type: types.CHANGE_STATUS,
    id,
    status,
  };
};

export const filter = (filterType, filterValue) => {
  return {
    type: types.FILTER,
    filterType,
    filterValue
  }
}