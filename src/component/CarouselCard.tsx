import { Link } from "react-router-dom";

type CarouselCardProps = {
  id: number;
  name: string;
  price: string;
  description: string;
  url: string;
};

const CarouselCard = ({
  id,
  name,
  price,
  description,
  url,
}: CarouselCardProps) => {
  const imgUrl = `../../public/imgs/${url}`;
  const linkUrl = `/product/${id}`;

  return (
    <>
      <Link to={linkUrl}>
        <div className="carousel-card-container">
          <img src={imgUrl} />
          <div className="carousel-card-description">
            <h2 className="fw-semi-bold fs-600">{name}</h2>
            <h3 className="fs-500 fw-semi-bold">${price}</h3>
            <p className="carousel-text-description margin-top">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CarouselCard;
