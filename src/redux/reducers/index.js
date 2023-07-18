import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";

/**
 * The `reducers` object is created using the `combineReducers` function from Redux.
 * It combines multiple reducers into a single root reducer, allowing different parts of the state to be managed by separate reducer functions.
 * In this case, it combines the `productsReducer` and `selectedProductsReducer` to manage different parts of the products state in the Redux store.
 * The combined reducers are assigned to their respective state slices in the Redux store.
 */
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});

export default reducers;
