import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import items from "../data/items.json";
import Footer from "./Footer";
import { useShoppingCart } from "../context/ShoppingCartProvider";

const ProductDisplay = () => {
  const { productId } = useParams() as { productId: string };
  const { items: products } = items;

  const product = products.filter((product) => product.id === +productId)[0];
  if (product == null) {
    console.error("Error");
    return (
      <>
        <Navbar />
        <div>Error!</div>
      </>
    );
  }

  const imgUrl = `../../imgs/${product.url}`;
  const { increaseCartQuantity } = useShoppingCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <section className="product-display padding-block-700">
        <div className="container grid columns center-grid-items">
          <img
            className="product-display-img"
            src={imgUrl}
            alt="Product Image"
          />

          <div className="product-display-content">
            <div>
              <h1 className="fs-secondary-heading fw-bold">{product.name}</h1>
              <h3 className="fs-600 fw-semi-bold">${product.price}</h3>
            </div>

            <p>{product.description}</p>

            <div className="product-button-container">
              <button
                type="button"
                className="product-display-add-btn button"
                onClick={() => {
                  increaseCartQuantity(product.id);
                }}
              >
                Add to Cart
              </button>
              <span className="product-popup">+1</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductDisplay;
