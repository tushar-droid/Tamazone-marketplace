import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
const Product = () => {
  const { prodid } = useParams();
  return (
    <>
      <Navbar />
      Product Number: {prodid}
    </>
  );
};

export default Product;
