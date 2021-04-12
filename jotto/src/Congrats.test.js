import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../test/testUtils";
import Congrats from "./Congrats";

const defaultProps = { success: false };

const setup = (props) => shallow(<Congrats {...defaultProps} {...props} />);

test("renders without error", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders no text when `success` prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("renders non-empty congrats message when `success` prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});

test("does not throw warning with expected props", () => {
  const expectedProps = { success: true };
  const propWarning = checkProps(Congrats, expectedProps);
  expect(propWarning).toBeUndefined();
});

test("throws warning with unexpected props", () => {
  const expectedProps = { success: 123 };
  const propWarning = checkProps(Congrats, expectedProps)
  expect(propWarning).toBeDefined();
});
