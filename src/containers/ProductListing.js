import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";

/**
 * The ProductPage component is a React functional component that represents a page displaying a list of products.
 * It fetches the product data from an external API and stores it in the Redux store using the setProducts action.
 * The component uses Redux to manage the products state and dispatch actions to fetch the products.
 * The ProductComponent is rendered to display the list of products.
 */
const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  /**
   * Fetches the list of products from the external API.
   * Dispatches the setProducts action to store the fetched products in the Redux store.
   */
  const fetchProducts = useCallback(async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  }, [dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("Products :", products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
