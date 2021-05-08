import {
  TODO_LIST_FETCH_REQUEST,
  TODO_LIST_FETCH_FAILURE,
  TODO_UPDATE_REQUEST,
  TODO_UPDATE_FAILURE,
  TODO_ADD_REQUEST,
  TODO_ADD_FAILURE
} from "../actions/to-do/types";

const toDoReducer = (state, action) => {

  const defaultState = {
    isLoading: false,
    error: "",
    ...state
  }
  switch (action.type) {
    case TODO_LIST_FETCH_REQUEST:
      return {
        ...defaultState,
        error: '',
        ...action
      };
    
    case TODO_LIST_FETCH_FAILURE:
      return {
        ...defaultState,
        error: "Something went wrong",
      };
      case TODO_ADD_REQUEST:
        return {
          ...defaultState,
          error: '',
          ...action
      };
    case TODO_ADD_FAILURE:
      return {
        ...defaultState,
        error: "Something went wrong",
    };
    case TODO_UPDATE_REQUEST:
        return {
          ...defaultState,
          error: '',
          ...action
      };
    case TODO_UPDATE_FAILURE:
      return {
        ...defaultState,
        error: "Something went wrong",
    };
    default:
      return defaultState;
  }
};
export default toDoReducer;
