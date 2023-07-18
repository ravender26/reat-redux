import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * The ProductComponent is a React functional component that represents a list of products.
 * It retrieves the products from the Redux store using the useSelector hook and renders them in a grid layout.
 * Each product is displayed as a card with its title, image, price, and category.
 * Clicking on a product card navigates to the individual product page using React Router.
 */
const ProductComponent = () => {
  // Retrieve products from the Redux store
  const products = useSelector((state) => state.allProducts.products);

  // Render each product in a grid layout
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <div className="four wide column" key={id}>
        {/* Link to the individual product page */}
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  // Render the list of products
  return <>{renderList}</>;
};

export default ProductComponent;
