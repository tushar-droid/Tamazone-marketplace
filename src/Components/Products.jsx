import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div>
      <Navbar />
      <Link to=":product1">
        <button>Product 1</button>
      </Link>
      <Link to=":product1324234">
        <button>Product 142343</button>
      </Link>
      <Link to=":product1423423">
        <button>Product 143234</button>
      </Link>
      <Link to=":product143242432">
        <button>Product 1543534</button>
      </Link>
    </div>
  );
};

export default Products;
