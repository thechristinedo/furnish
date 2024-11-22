import { useEffect, useState } from "react";
import featured from "../data/items.json";
import CarouselCard from "./CarouselCard";

type CarouselProp = {
  autoSlide?: boolean;
  interval?: number;
};

const Carousel = ({ autoSlide = false, interval = 5000 }: CarouselProp) => {
  const { featured: products } = featured;
  const [index, setIndex] = useState(0);

  const prev = function () {
    setIndex((index) => (index === 0 ? products.length - 1 : index - 1));
  };
  const next = function () {
    setIndex((index) => (index === products.length - 1 ? 0 : index + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, interval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, interval, next]);

  return (
    <>
      <div className="carousel-arrows">
        <button type="button" onClick={prev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 48 48"
          >
            <path d="M 34.470703 2.9863281 A 1.50015 1.50015 0 0 0 33.439453 3.4394531 L 13.939453 22.939453 A 1.50015 1.50015 0 0 0 13.939453 25.060547 L 33.439453 44.560547 A 1.50015 1.50015 0 1 0 35.560547 42.439453 L 17.121094 24 L 35.560547 5.5605469 A 1.50015 1.50015 0 0 0 34.470703 2.9863281 z"></path>
          </svg>
        </button>
        <button type="button" onClick={next}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 48 48"
          >
            <path d="M 18.484375 2.984375 A 1.50015 1.50015 0 0 0 17.439453 5.5605469 L 35.878906 24 L 17.439453 42.439453 A 1.50015 1.50015 0 1 0 19.560547 44.560547 L 39.060547 25.060547 A 1.50015 1.50015 0 0 0 39.060547 22.939453 L 19.560547 3.4394531 A 1.50015 1.50015 0 0 0 18.484375 2.984375 z"></path>
          </svg>
        </button>
      </div>
      
      <div className="carousel-container">
        <div
          className="carousel-items"
          style={{
            transform: `translateX(calc(-${index} * (100% + 2rem)))`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {products.map((product) => (
            <div className="carousel-item" style={{ minWidth: "100%" }}>
              <CarouselCard {...product} />
            </div>
          ))}
        </div>

        <div className="carousel-dots">
          {products.map((_, i) => (
            <button
              type="button"
              className={i == index ? "active-dot" : "inactive-dot"}
              onClick={() => setIndex(i)}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
