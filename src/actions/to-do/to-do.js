import {
  TODO_LIST_FETCH_REQUEST,
  TODO_LIST_FETCH_FAILURE,
  TODO_UPDATE_REQUEST,
  TODO_UPDATE_FAILURE,
  TODO_ADD_REQUEST,
  TODO_ADD_FAILURE
} from "./types";

export const todoListRequest = (data) => {
  return {
    type: TODO_LIST_FETCH_REQUEST,
    ...data
  };
};

export const todoListFailure = (error) => {
  return {
    type: TODO_LIST_FETCH_FAILURE,
    error,
  };
};

export const updateToDoRequest = (data) => {
  return {
    type: TODO_UPDATE_REQUEST,
    ...data
  };
};

export const updateToDoFailure = (error) => {
  return {
    type: TODO_UPDATE_FAILURE,
    error,
  };
};

export const addToDoRequest = (data) => {
  return {
    type: TODO_ADD_REQUEST,
    ...data
  };
};

export const addToDoFailure = (error) => {
  return {
    type: TODO_ADD_FAILURE,
    error,
  };
};