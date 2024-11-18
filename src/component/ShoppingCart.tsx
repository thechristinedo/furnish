import { useShoppingCart } from "../context/ShoppingCartProvider";
import CartCard from "./CartCard";

const ShoppingCart = () => {
  const { cartItems } = useShoppingCart();

  return (
    <>
      <div className="shoppingCartContainer">
        {cartItems.map((item) => {
          return <CartCard {...item} />;
        })}
      </div>
    </>
  );
};

export default ShoppingCart;
