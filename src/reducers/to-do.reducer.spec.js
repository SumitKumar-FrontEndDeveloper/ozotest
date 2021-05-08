import toDoReducer from "./to-do";
import * as types from "../actions/to-do/types";

describe("Cutomer Profile OTP reducers", () => {
  it("should return the initial state", () => {
    expect(toDoReducer(undefined, {})).toEqual({
      isLoading: false,
      error: "",
    });
  });

  it("should handle TODO_LIST_FETCH_REQUEST", () => {
    let action = {
      type: types.TODO_LIST_FETCH_REQUEST,
    };
    const expected = {
      error: "",
      isLoading : false,
      type : types.TODO_LIST_FETCH_REQUEST,
    };
    expect(toDoReducer({}, action)).toEqual(expected);
  });

  it("should handle TODO_LIST_FETCH_FAILURE", () => {
    let action = {
      type: types.TODO_LIST_FETCH_FAILURE,
    };
    const expected = {
      error : "Something went wrong",
      isLoading : false
    };
    expect(toDoReducer({}, action)).toEqual(expected);
  });

  it("should handle TODO_ADD_REQUEST", () => {
    let action = {
      type: types.TODO_ADD_REQUEST,
    };
    const expected = {
      error: "",
      isLoading : false,
      type : types.TODO_ADD_REQUEST,
    };
    expect(toDoReducer({}, action)).toEqual(expected);
  });

  it("should handle TODO_ADD_FAILURE", () => {
    let action = {
      type: types.TODO_ADD_FAILURE,
    };
    const expected = {
      error : "Something went wrong",
      isLoading : false
    };
    expect(toDoReducer({}, action)).toEqual(expected);
  });
  it("should handle TODO_UPDATE_REQUEST", () => {
    let action = {
      type: types.TODO_UPDATE_REQUEST,
    };
    const expected = {
      error: "",
      isLoading : false,
      type : types.TODO_UPDATE_REQUEST,
    };
    expect(toDoReducer({}, action)).toEqual(expected);
  });

  it("should handle TODO_UPDATE_FAILURE", () => {
    let action = {
      type: types.TODO_UPDATE_FAILURE,
    };
    const expected = {
      error : "Something went wrong",
      isLoading : false
    };
    expect(toDoReducer({}, action)).toEqual(expected);
  });
});
