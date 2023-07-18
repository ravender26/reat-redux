import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";

/**
 * The ProductDetails component is a React functional component that displays the details of a specific product.
 * It retrieves the product details from an external API using the product ID provided in the URL params.
 * The component uses Redux to manage the selected product state and dispatch actions to fetch and remove the product.
 * The product details, including image, title, price, category, and description, are displayed in a grid layout.
 * If the product data is still being fetched, a loading message is shown.
 */
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  /**
   * Fetches the details of the product with the given ID from the external API.
   * Dispatches the selectedProduct action to store the retrieved product in Redux state.
   * @param {string} id - The ID of the product to fetch.
   */
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    // Fetch the product details when the component mounts or the productId changes
    if (productId && productId !== "") {
      fetchProductDetail(productId);
    }

    // Clean up the selected product state when the component unmounts
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
