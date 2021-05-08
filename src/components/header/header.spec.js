import React, { useState as useStateMock } from "react";

import { mount } from "enzyme";
import Header from "./index";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("Article List test", () => {
  let wrapper;
  let store;

  beforeEach(() => {
    /* mocking store */
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((init) => [init, setState]);
    const setHookState = (newState) =>
      jest.fn().mockImplementation(() => [newState, () => {}]);
    const addMainTask = jest.fn();
    wrapper = mount(<Header addMainTask={addMainTask}  />);
  });
  it("test if there is change in input field", () => {
    const otpWrap = wrapper.find("input");
    otpWrap.simulate("change");
  });
  it("test click on the button", () => {
    const otpWrap = wrapper.find("button");
    otpWrap.simulate("click");
  });
});
