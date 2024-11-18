import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";

import items from "../data/items.json";
import "../index.css";
import ProductCard from "../component/ProductCard";
import Footer from "../component/Footer";

const HomePage = () => {
  const { items: products } = items;

  return (
    <>
      <Navbar />

      <section className="homeHero">
        <div className="heroContainer">
          <div className="heroTextContainer">
            <h1 className="heroTitle">Carefully Crafted for Comfort</h1>
            <h3 className="heroDescription">
              because home is where comfort resides at
            </h3>
          </div>
          <div className="heroButtonContainer">
            <button className="heroButton">
              <Link to="/product">Shop Now</Link>
            </button>
          </div>
        </div>
      </section>

      <section className="homeAbout">
        <div className="aboutTextContainer">
          <div className="aboutTitle">
            <h3>About Us</h3>
            <h2>Our Views</h2>
          </div>
          <div className="aboutContent">
            <p>
              We believe home is not a place— it's a feeling. A feeling of
              comfort and peace. Home is wherever you can relax and have no
              inner conflict, starting one furniture at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="homeProducts">
        <div className="homeProductsText">
          <h2>Some of our delicately crafted works</h2>
        </div>
        <div className="homeProductsContainer">
          {/* {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))} */}
        </div>
      </section>

      <section className="homeFooter">
        <div className="homeFooterContainer">
          <div className="homeFooterText">
            <h2>Discover What You Need</h2>
            <p>
              We help our customers bring their inspirations into reality. With
              24/7 customer support and a dedicated support team, we will gladly
              provide you with the help you need.
            </p>
          </div>
          <button>
            <Link to="/dashboard">Learn More</Link>
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
