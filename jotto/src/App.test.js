import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import App from "./App";

const setup = () => shallow(<App />);

test("renders without error", () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, "app-component");
  expect(app).toHaveLength(1);
});
