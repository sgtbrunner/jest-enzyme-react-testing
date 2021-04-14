import React from "react";
import { shallow } from "enzyme";

import { checkProps, findByTestAttr } from "../test/testUtils";

import Input from "./Input";

const defaultProps = {
  secretWord: "test",
};

const setup = (props = {}) => shallow(<Input {...defaultProps} {...props} />);

test("does not throw error with expected props", () => {
  const propWarning = checkProps(Input, defaultProps);
  expect(propWarning).toBeUndefined();
});

test("throws error with unexpected props", () => {
  const propWarning = checkProps(Input, { secretWord: 12345 });
  expect(propWarning).toBeDefined();
});

test("renders withour error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "input-component");
  expect(component.length).toBe(1);
});

describe("state controlled input field", () => {
  test("state updates with value of input box upon change", () => {
    const mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

    const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, "input-box");

    const mockEvent = { target: { value: "party" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("party");
  });
});
