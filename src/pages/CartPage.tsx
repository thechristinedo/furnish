import CartCard from "../component/CartCard";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { useShoppingCart } from "../context/ShoppingCartProvider";
import items from "../data/items.json";

const CartPage = () => {
  const { items: products } = items;
  const { cartItems } = useShoppingCart();

  const total = (
    Math.floor(
      cartItems.reduce((total, cartItem) => {
        const item = products.find((product) => product.id === cartItem.id);
        if (item == null) return 0;
        return total + (+item.price || 0) * cartItem.quantity;
      }, 0) * 100
    ) / 100
  ).toFixed(2);

  return (
    <>
      <Navbar />

      <section className="cart-page">
        <div className="container padding-block-700">
          <h2 className="fs-secondary-heading fw-bold">Shopping Cart</h2>

          <div className="cart-content">
            <div className="cart-items-container margin-top">
              {cartItems.map((item) => {
                return <CartCard {...item} />;
              })}
            </div>

            <div className="cart-checkout-container">
              <h3 className="fs-600 fw-bold">Order Summary</h3>

              <div className="cart-summary">
                <div className="cart-fee-row">
                  <p>Subtotal:</p>
                  <p>${total}</p>
                </div>
                <div className="cart-fee-row">
                  <p>Standard Shipping:</p>
                  <p>Free</p>
                </div>
                <div className="cart-fee-row">
                  <p className="fw-bold">Estimated Total:</p>
                  <p className="fw-bold">${total}</p>
                </div>
                <button className="cart-checkout-btn" type="button">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CartPage;
