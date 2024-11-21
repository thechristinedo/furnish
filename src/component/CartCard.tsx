import items from "../data/items.json";
import { useShoppingCart } from "../context/ShoppingCartProvider";

type CardCardProp = {
  id: number;
  quantity: number;
};

const CartCard = ({ id, quantity }: CardCardProp) => {
  const { items: item } = items;
  const product = item.find((i) => i.id === id);

  if (product == null) return;

  const imgUrl = `../../public/imgs/${product.url}`;

  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();

  return (
    <>
      <div className="cart-item ">
        <img src={imgUrl} />

        <div className="cart-item-container">
          <div className="cart-item-info">
            <h2 className="fs-600 fw-bold">{product.name}</h2>
            <button
              type="button"
              className="cart-delete"
              onClick={() => removeFromCart(product.id)}
            >
              &times;
            </button>

            <h3 className="fs-500 fw-semi-bold">${product.price}</h3>
          </div>

          <div className="cart-amount">
            <button
              className="cart-decrement"
              onClick={() => decreaseCartQuantity(product.id)}
            >
              -
            </button>
            <p className="cart-quantity">{quantity}</p>
            <button
              className="cart-increment"
              onClick={() => increaseCartQuantity(product.id)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
