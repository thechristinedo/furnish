type ProductCardProps = {
  id: number;
  name: string;
  price: string;
  url: string;
};

import image from "../../public/imgs/heroimg.jpg";

const ProductCard = ({ id, name, price, url }: ProductCardProps) => {
  const imgUrl = `../../public/imgs/${url}`;
  return (
    <>
      <div>
        <img style={{ width: "100%", height: "auto" }} src={imgUrl}></img>
        <h1>{name}</h1>
        <p>${price}</p>
      </div>
    </>
  );
};

export default ProductCard;
