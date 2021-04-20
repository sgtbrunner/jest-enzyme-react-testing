import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import { checkProps, findByTestAttr, storeFactory } from "../test/testUtils";

import Input from "./Input";

const defaultProps = {
  secretWord: "test",
};

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return mount(
    <Provider store={store}>
      <Input {...defaultProps} />
    </Provider>
  );
};

describe("props validation", () => {
  test("does not throw error with expected props", () => {
    const propWarning = checkProps(Input, defaultProps);
    expect(propWarning).toBeUndefined();
  });

  test("throws error with unexpected props", () => {
    const propWarning = checkProps(Input, { secretWord: 12345 });
    expect(propWarning).toBeDefined();
  });
});

describe("render", () => {
  describe("success is true", () => {
    let wrapper;
    beforeEach(() => (wrapper = setup({ success: true })));

    test("renders withour error", () => {
      const component = findByTestAttr(wrapper, "input-component");
      expect(component.length).toBe(1);
    });

    test("input box does not show", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(false);
    });

    test("submit button does not show", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(false);
    });
  });

  describe("success is false", () => {
    let wrapper;
    beforeEach(() => (wrapper = setup({ success: false })));

    test("renders withour error", () => {
      const component = findByTestAttr(wrapper, "input-component");
      expect(component.length).toBe(1);
    });

    test("input box shows", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(true);
    });

    test("submit button does not show", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(true);
    });
  });
});

describe("state controlled input field", () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  let originalUseState;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup({ success: false });
  });

  afterEach(() => {
    React.useState = originalUseState;
  });

  test("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "party" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("party");
  });

  test("field is clicked upon submit button click", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
