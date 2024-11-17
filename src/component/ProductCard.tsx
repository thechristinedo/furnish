import { Link } from "react-router-dom";
type ProductCardProps = {
  id: number;
  name: string;
  url: string;
  price: string;
};

const ProductCard = ({ id, name, url, price }: ProductCardProps) => {
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
          <div className="homeCardTitle">
            <Link to={linkUrl}>
              <h1 className="homeCardName">{name}</h1>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                  data-name="3-Arrow Right"
                />
              </svg>
            </Link>
          </div>
          <p className="homeCardPrice">${price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
