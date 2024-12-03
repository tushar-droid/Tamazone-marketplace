import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./Styles/homeStyles.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="left">
          <img src="../assets/home-screen.jpg" alt="home-screen-image" />
        </div>
        <div className="right">
          <h1 className="hero-title">
            Discover Quality and Innovation in Every Product
          </h1>
          <Link to="/products">
            <button className="call-to-action">Shop Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
