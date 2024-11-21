type CarouselCardProps = {
  id: number;
  name: string;
  price: string;
  description: string;
  tag: string;
  url: string;
};

const CarouselCard = ({
  id,
  name,
  price,
  description,
  tag,
  url,
}: CarouselCardProps) => {
  const imgUrl = "../../public/imgs/";

  return (
    <>
      <div className="carousel-card-container">
        <img src={`${imgUrl}${url}`} />
        <div>{name}</div>
        <div>{price}</div>
        <div>{description}</div>
      </div>
    </>
  );
};

export default CarouselCard;
