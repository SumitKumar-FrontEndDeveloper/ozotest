import {
  todoListRequest,
  todoListFailure,
  updateToDoRequest,
  updateToDoFailure,
  addToDoRequest,
  addToDoFailure
} from "./to-do";
import API from "../../framework/api";
import { endpoint } from "../../framework/config";

export const fetchToDoList = () => async (dispatch) => {
  try {
    dispatch(todoListRequest({isLoading : true}));
    const headers = {};
    const response = await API.get(endpoint.GET_TODO_LIST, headers, undefined)
    dispatch(todoListRequest({isLoading : false,taskList : response?.data}));
    return response?.data;
  }
    catch(error) {
      dispatch(todoListFailure(error));
      return false;
    }
};
export const updateStatus = (status,taskId) => async (dispatch) => {
  try {
    dispatch(updateToDoRequest({isLoading : true}));
    const headers = {};
    const requestBody ={
      status : status,
      task_id : taskId
    }
    const response = await API.post(endpoint.UPDATE_TODO_TASK, headers, undefined,requestBody)
    dispatch(updateToDoRequest({isLoading : false,updateData : response?.data}));
    return response?.data;
  }
    catch(error) {
      dispatch(updateToDoFailure(error));
      return false;
    }
};

export const addTask = (task) => async (dispatch) => {
  try {
    dispatch(addToDoRequest({isLoading : true}));
    const headers = {};
    const response = await API.post(endpoint.ADD_TODO_TASK, headers, undefined,task)
    dispatch(addToDoRequest({isLoading : false,taskData : response?.data}));
    return response?.data;
  }
    catch(error) {
      dispatch(addToDoFailure(error));
      return false;
    }
};