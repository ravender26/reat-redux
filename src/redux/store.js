import { createStore } from "redux";
import reducers from "./reducers/index";

/**
 * The `store` object is created using the `createStore` function from Redux.
 * It creates a Redux store that holds the complete state tree of the application.
 * The `reducers` object, which combines multiple reducers, is passed as an argument to the `createStore` function.
 * The store is initialized with an empty object as the initial state and an optional Redux DevTools extension for debugging purposes.
 */
const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
