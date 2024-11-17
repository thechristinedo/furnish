import { useShoppingCart } from "../context/ShoppingCartProvider";
import CartCard from "./CartCard";

const ShoppingCart = () => {
  const { cartItems } = useShoppingCart();
  console.log(cartItems);

  cartItems.forEach((item) => console.log(item.id, item.quantity));

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
