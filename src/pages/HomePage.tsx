import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import items from "../data/items.json";
import "../index.css";
import Footer from "../component/Footer";
import Button from "../component/Button";

const HomePage = () => {
  const { items: products } = items;

  return (
    <>
      <Navbar />

      <main>
        <section className="home-hero padding-bottom-400">
          <div className="background-img-container">
            <div className="container text-align-center padding-block-700">
              <h1 className="fs-primary-heading fw-bold">
                Carefully Crafted for Comfort
              </h1>
              <h3 className="fs-body">
                because home is where comfort resides at
              </h3>
              <Button className="margin-top">
                <Link to="/product">Shop Now</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="home-about padding-bottom-400">
          <div className="container">
            <div className="grid columns one-third-columns">
              <h2 className="fs-secondary-heading fw-bold">Our Views</h2>
              <p>
                We believe home is not a place— it's a feeling. A feeling of
                comfort and peace. Home is wherever you can relax and have no
                inner conflict, starting one furniture at a time.
              </p>
            </div>
          </div>
        </section>

        <section className="home-featured padding-bottom-400">
          <div className="container">
            <h2 className="fs-secondary-heading fw-bold">
              Some of our delicately crafted works
            </h2>
          </div>
        </section>

        <section className="home-cta text-accent-400">
          <div className="background-img-container">
            <div className="container padding-block-600 text-align-right cta-flex">
              <div>
                <h2 className="fs-secondary-heading fw-bold">
                  Discover What You Need
                </h2>
                <p className="cta-text">
                  We help our customers bring their inspirations into reality.
                  With 24/7 customer support and a dedicated support team, we
                  will gladly provide you with the help you need.
                </p>
              </div>

              <Button>
                <Link to="/dashboard">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
