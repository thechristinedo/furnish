import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import ShoppingCart from "../component/ShoppingCart";
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

      <section className="cartPage">
        <div className="cartPageContainer container">
          <div className="cartPageTextContainer">
            <h2 className="cartPageTitle">Shopping Cart</h2>
          </div>

          <div className="cartPageContentContainer">
            <div className="cartPageItemsContainer">
              <ShoppingCart />
            </div>
            <div className="cartPageCheckoutContainer">
              {/* checkout */}
              <h3>Order Summary</h3>
              <div className="cartPageSummary">
                <div className="cartPageSection">
                  <p>Subtotal:</p>
                  <p>${total}</p>
                </div>
                <div className="cartPageSection">
                  <p>Standard Shipping:</p>
                  <p>Free</p>
                </div>
                <div className="cartPageSection" style={{ fontWeight: "600" }}>
                  <p>Estimated Total:</p>
                  <p>${total}</p>
                </div>
                <button className="cartPageCheckoutButton" type="button">
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
