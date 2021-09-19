import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "../const";

export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};

export const deleteTask = (payload) => ({
  //payload : id
  type: DELETE_TASK,
  payload,
});

export const completeTask = (payload) => ({
  //payload:id
  type: COMPLETE_TASK,
  payload,
});

export const editTask = (payload) => ({
  //payload = {task,id}
  type: EDIT_TASK,
  payload,
});
