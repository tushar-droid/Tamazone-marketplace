import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
const Product = () => {
  const { prodid } = useParams();
  return (
    <div>
      <Navbar />
      Product Number: {prodid}
    </div>
  );
};

export default Product;
