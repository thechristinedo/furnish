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
      <div className="cartCardContainer">
        <div className="cartCardImgContainer">
          <img className="cartCardImg" src={imgUrl} />
        </div>

        <div className="cartCardInfo">
          <div className="cartCardMain">
            <h2 className="cartCardName">{product.name}</h2>
            <h3 className="cartCardPrice">${product.price}</h3>
          </div>

          <div className="cartCardAmount">
            <button
              className="cartCardSubtract"
              onClick={() => decreaseCartQuantity(product.id)}
            >
              -
            </button>
            <p className="cartCardQuantity">{quantity}</p>
            <button
              className="cartCardAdd"
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
