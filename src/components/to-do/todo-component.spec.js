import React, { useState as useStateMock } from "react";

import { mount, shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Card, Accordion, Button, Modal, Form } from "react-bootstrap";

import thunk from "redux-thunk";
import ToDo from "./index";

import * as redux from "react-redux";
const mockStore = configureMockStore([thunk]);
import Enzyme from "enzyme";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
const mockDispatch = jest.fn();

describe("To Do List test", () => {
  let wrapper;
  let useEffect;
  let store;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };
  beforeEach(() => {
    /* mocking store */
   
    store = configureMockStore([thunk])({
      toDoReducer: {
        isError: false,
        isLoading: false,
        response: 
          {"statusCode":200,"data":[{"id":"1","taskName":"sdfsd","taskId":"0","createdAt":"2021-05-07 17:27:30","updatedAt":"2021-05-07 17:27:30","subTasks":[]},{"id":"2","taskName":"saddddddd","taskId":"0","createdAt":"2021-05-07 17:27:34","updatedAt":"2021-05-07 17:27:34","subTasks":[]},{"id":"3","taskName":"ssssss","taskId":"0","createdAt":"2021-05-07 17:27:40","updatedAt":"2021-05-07 17:27:40","subTasks":[{"id":"4","taskName":"sss","taskId":"3","status":"0","updatedAt":"2021-05-07 17:27:46","createdAt":"2021-05-07 17:27:46"}]}]},
        isRequested: "Done",
        error: "",
      },
    });

    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((init) => [init, setState]);
    const setHookState = (newState) =>
      jest.fn().mockImplementation(() => [newState, () => {}]);

    jest
      .spyOn(redux, "useSelector")
      .mockImplementation((state) => store.getState().toDoReducer);
    jest.spyOn(redux, "useDispatch").mockImplementation(() => store.dispatch);
    useEffect = jest.spyOn(React, "useEffect").mockImplementation();
    mockUseEffect(); // 2 times
    wrapper = mount(<ToDo store={store} />);
  });
  it("test if there is access token", () => {
     wrapper.find(Button).at(0).simulate('click')
  });
  
});
