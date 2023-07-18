import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";

/**
 * The App component is the root component of the React application.
 * It sets up the routing for different pages and renders the corresponding components.
 */
function App() {
  return (
    <div className="App">
      {/* Set up the React Router */}
      <Router>
        {/* Render the Header component */}
        <Header />
        {/* Set up the routes */}
        <Switch>
          {/* Route for the product listing page */}
          <Route path="/" exact component={ProductListing} />

          {/* Route for the product details page */}
          <Route path="/product/:productId" component={ProductDetails} />

          {/* Route for handling 404 Not Found */}
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
