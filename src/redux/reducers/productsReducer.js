import { ActionTypes } from "../constants/action-types";

/**
 * The initial state for the products slice of the Redux store.
 */
const initialState = {
  products: [],
};

/**
 * The productsReducer is a pure function that specifies how the products slice of the Redux store should be updated in response to actions.
 * @param {Object} state - The current state of the products slice.
 * @param {Object} action - The action object that contains a type and a payload.
 * @returns {Object} - The new state of the products slice after applying the action.
 */
export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

/**
 * The selectedProductsReducer is a pure function that specifies how the selected product slice of the Redux store should be updated in response to actions.
 * @param {Object} state - The current state of the selected product slice.
 * @param {Object} action - The action object that contains a type and a payload.
 * @returns {Object} - The new state of the selected product slice after applying the action.
 */
export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
