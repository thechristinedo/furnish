import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import ShoppingCart from "../component/ShoppingCart";

const CartPage = () => {
  return (
    <>
      <Navbar />

      <section className="cartPage">
        <div className="cartContainer">
          <h1 className="cartTitle">Checkout</h1>
          <ShoppingCart />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CartPage;
