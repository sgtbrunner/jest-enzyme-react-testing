import checkPropTypes from "check-prop-types";
import { applyMiddleware, createStore } from "redux";

import rootReducer from "../src/reducers";
import { middlewares } from "../src/configureStore";

export const storeFactory = (initialState) =>
  createStore(rootReducer, initialState, applyMiddleware(...middlewares));

export const findByTestAttr = (wrapper, attribute) =>
  wrapper.find(`[data-test-id="${attribute}"]`);

export const checkProps = (component, conformingProps) =>
  checkPropTypes(component.propTypes, conformingProps, "props", component.name);
