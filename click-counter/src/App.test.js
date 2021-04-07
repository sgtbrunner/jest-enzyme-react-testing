import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, value) =>
  wrapper.find(`[data-test-id='${value}']`);

describe("App component", () => {
  it("renders App without crashing", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without error", () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.length).toBe(1);
  });

  it("renders counter display", () => {
    const wrapper = setup();
    const counterDisplay = findByTestAttr(wrapper, "counter-display");
    expect(counterDisplay.length).toBe(1);
  });

  it("counter starts at 0", () => {
    const wrapper = setup();
    const count = findByTestAttr(wrapper, "counter").text();
    expect(count).toEqual("0");
  });

  it("renders increment button", () => {
    const wrapper = setup();
    const incrementButton = findByTestAttr(wrapper, "increment-button");
    expect(incrementButton.length).toBe(1);
  });

  it("renders decrement button", () => {
    const wrapper = setup();
    const decrementButton = findByTestAttr(wrapper, "decrement-button");
    expect(decrementButton.length).toBe(1);
  });

  it("renders reset button", () => {
    const wrapper = setup();
    const resetButton = findByTestAttr(wrapper, "reset-button");
    expect(resetButton.length).toBe(1);
  });

  it("clicking increment button increments counter accordingly", () => {
    const wrapper = setup();
    const incrementButton = findByTestAttr(wrapper, "increment-button");

    incrementButton.simulate("click");
    const count = findByTestAttr(wrapper, "counter").text();
    expect(count).toEqual("1");
  });

  it("clicking decrement button decrements counter accordingly", () => {
    const wrapper = setup();
    const decrementButton = findByTestAttr(wrapper, "decrement-button");

    decrementButton.simulate("click");
    const count = findByTestAttr(wrapper, "counter").text();
    expect(count).toEqual("-1");
  });

  it("clicking reset button resets counter accordingly", () => {
    const wrapper = setup();
    const incrementButton = findByTestAttr(wrapper, "increment-button");
    const resetButton = findByTestAttr(wrapper, "reset-button");

    incrementButton.simulate("click");
    resetButton.simulate("click");
    const count = findByTestAttr(wrapper, "counter").text();
    expect(count).toEqual("0");
  });
});
