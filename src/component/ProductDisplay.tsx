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

  const imgUrl = `../../public/imgs/${product.url}`;
  const { increaseCartQuantity } = useShoppingCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <section className="productDisplay">
        <div className="productDisplayContainer">
          <div>
            <img src={imgUrl} alt="Product Image" />
          </div>
          <div className="productDisplayTextContainer">
            <div className="productTitleContainer">
              <h1>{product.name}</h1>
              <h3>${product.price}</h3>
            </div>
            <div className="productDescriptionContainer">
              <p>{product.description}</p>
            </div>
            <div className="productButtonContainer">
              <button
                type="button"
                className="productAddButton"
                onClick={() => increaseCartQuantity(product.id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductDisplay;
