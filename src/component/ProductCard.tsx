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
      <div className="product-card-container">
        <div className="product-card-img-container">
          <Link to={linkUrl}>
            <img className="product-card-img" src={imgUrl} />
          </Link>
        </div>

        <div>
          <Link to={linkUrl}>
            <div className="product-card-title flex">
              <h1 className="fs-400 fw-semi-bold">{name}</h1>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                  data-name="3-Arrow Right"
                />
              </svg>
            </div>
          </Link>
          <p className="homeCardPrice fs-300 fw-regular">${price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
