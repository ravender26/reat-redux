import { ActionTypes } from "../constants/action-types";

/**
 * Action creator function that creates an action to set the products in the Redux store.
 * @param {Array} products - The array of products to be stored in the Redux store.
 * @returns {Object} - The action object with a type of SET_PRODUCTS and a payload of the products array.
 */
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

/**
 * Action creator function that creates an action to set the selected product in the Redux store.
 * @param {Object} product - The product object to be stored in the Redux store as the selected product.
 * @returns {Object} - The action object with a type of SELECTED_PRODUCT and a payload of the product object.
 */
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

/**
 * Action creator function that creates an action to remove the selected product from the Redux store.
 * @returns {Object} - The action object with a type of REMOVE_SELECTED_PRODUCT and no payload.
 */
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
