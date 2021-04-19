import { mount } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import App from "./App";
import { getSecretWord as mockGetSecretWord } from './actions';

jest.mock('./actions');

const setup = () => mount(<App />);

test("renders without error", () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, "app-component");
  expect(app).toHaveLength(1);
});

describe("get secret word", () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  });

  test('getSecretWord on app mount', () => {
    setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  test('getSecretWord does not run on app update', () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  })
});
