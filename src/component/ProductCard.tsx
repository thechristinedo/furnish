import { Link } from "react-router-dom";

type ProductCardProps = {
  id: number;
  name: string;
  price: string;
  url: string;
};

const ProductCard = ({ id, name, price, url }: ProductCardProps) => {
  const imgUrl = `../../public/imgs/${url}`;
  const linkUrl = `/product/${id}`;

  return (
    <>
      <div className="homeCardContainer">
        <div className="homeCardImgContainer">
          <Link to={linkUrl}>
            <img className="homeCardImg" src={imgUrl} />
          </Link>
        </div>
        <div className="homeCardDescription">
          <Link to={linkUrl}>
            <h1 className="homeCardName">{name}</h1>
          </Link>
          <p className="homeCardPrice">${price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
