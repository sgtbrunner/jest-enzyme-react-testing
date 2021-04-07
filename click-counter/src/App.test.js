import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, value) =>
  wrapper.find(`[data-test-id='${value}']`);

const COUNTER = "counter";
const INCREMENT_BUTTON = "increment-button";
const DECREMENT_BUTTON = "decrement-button";
const RESET_BUTTON = "reset-button";
const ERROR_MESSAGE = "error-message";
const HIDDEN = "hidden";
const CLICK = "click";

let wrapper;

describe("App component rendering", () => {
  beforeEach(() => {
    wrapper = setup();
  });

  it("renders App without crashing", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without error", () => {
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.length).toBe(1);
  });

  it("renders counter display", () => {
    const counterDisplay = findByTestAttr(wrapper, "counter-display");
    expect(counterDisplay.length).toBe(1);
  });

  it("counter starts at 0", () => {
    const count = findByTestAttr(wrapper, COUNTER).text();
    expect(count).toEqual("0");
  });

  it("renders increment button", () => {
    const incrementButton = findByTestAttr(wrapper, INCREMENT_BUTTON);
    expect(incrementButton.length).toBe(1);
  });

  it("renders decrement button", () => {
    const decrementButton = findByTestAttr(wrapper, DECREMENT_BUTTON);
    expect(decrementButton.length).toBe(1);
  });

  it("renders reset button", () => {
    const resetButton = findByTestAttr(wrapper, RESET_BUTTON);
    expect(resetButton.length).toBe(1);
  });
});

describe("Increment button action", () => {
  it("clicking increment button increments counter accordingly", () => {
    const incrementButton = findByTestAttr(wrapper, INCREMENT_BUTTON);
    incrementButton.simulate(CLICK);

    const count = findByTestAttr(wrapper, COUNTER).text();
    expect(count).toEqual("1");
  });
});

describe("Decrement button action", () => {
  it(`clicking decrement button decrements counter accordingly if counter
    is greater than 0`, () => {
    const wrapper = setup();
    const incrementButton = findByTestAttr(wrapper, INCREMENT_BUTTON);
    incrementButton.simulate(CLICK);

    const decrementButton = findByTestAttr(wrapper, DECREMENT_BUTTON);
    decrementButton.simulate(CLICK);

    const count = findByTestAttr(wrapper, COUNTER).text();
    expect(count).toEqual("0");
  });
});

describe("Reset button action", () => {
  it(`clicking reset button resets counter accordingly if counter
    is greater than 0`, () => {
    const incrementButton = findByTestAttr(wrapper, INCREMENT_BUTTON);
    incrementButton.simulate(CLICK);

    const resetButton = findByTestAttr(wrapper, RESET_BUTTON);
    resetButton.simulate(CLICK);

    const count = findByTestAttr(wrapper, COUNTER).text();
    expect(count).toEqual("0");
  });
});

describe(`counter is 0 and decrement is clicked`, () => {
  beforeEach(() => {
    const button = findByTestAttr(wrapper, DECREMENT_BUTTON);
    button.simulate(CLICK);
  });

  it(`clicking decrement button decrements doesn't update counter if current
  count is 0`, () => {
    const count = findByTestAttr(wrapper, COUNTER).text();
    expect(count).toEqual("0");
  });

  it("error message shows", () => {
    const error = findByTestAttr(wrapper, ERROR_MESSAGE);
    const errorHasHiddenClass = error.hasClass(HIDDEN);
    expect(errorHasHiddenClass).toBe(false);
  });

  it("clicking increment button clears error", () => {
    const incrementButton = findByTestAttr(wrapper, INCREMENT_BUTTON);
    incrementButton.simulate(CLICK);

    const error = findByTestAttr(wrapper, ERROR_MESSAGE);
    const errorHasHiddenClass = error.hasClass(HIDDEN);
    expect(errorHasHiddenClass).toBe(true);
  });

  it("clicking reset button clears error", () => {
    const resetButton = findByTestAttr(wrapper, RESET_BUTTON);
    resetButton.simulate(CLICK);

    const error = findByTestAttr(wrapper, ERROR_MESSAGE);
    const errorHasHiddenClass = error.hasClass(HIDDEN);
    expect(errorHasHiddenClass).toBe(true);
  });
});
