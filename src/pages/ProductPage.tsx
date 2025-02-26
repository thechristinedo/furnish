import { useState } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import ProductCard from "../component/ProductCard";
import Tag from "../component/Tag";
import items from "../data/items.json";

const ProductPage = () => {
  const [activeTag, setActiveTag] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const { items: products } = items;

  const uniqueTags = Array.from(
    new Set(products.map((product) => product.tag))
  );

  const handleClick = function (e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;

    if (target.innerText === activeTag) {
      target.classList.toggle("activeTag");
      setActiveTag("");
    } else {
      setActiveTag(target.innerText);
    }
  };

  const handleInputChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    setSearchInput(target.value);
    console.log(target.value);
  };

  return (
    <>
      <Navbar />

      <section className="product-page padding-block-700">
        <div className="container grid center-grid-items">
          <div className="product-page-search">
            <input
              className="product-page-input"
              type="text"
              placeholder="Search..."
              onChange={handleInputChange}
            />
            <svg
              className="product-page-search-icon"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 50 50"
            >
              <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
            </svg>
          </div>

          <div className="tag-container">
            {uniqueTags.map((tag) => (
              <Tag
                key={tag}
                tag={tag}
                handleClick={handleClick}
                isActive={activeTag === tag}
              />
            ))}
          </div>

          <div className="product-page-grid">
            {activeTag.length > 0
              ? products
                  .filter((product) => product.tag === activeTag)
                  .map((filteredProduct) => {
                    if (
                      filteredProduct.name
                        .toLowerCase()
                        .includes(searchInput.toLowerCase())
                    ) {
                      return (
                        <ProductCard
                          key={filteredProduct.name}
                          {...filteredProduct}
                        />
                      );
                    }
                  })
              : products.map((product) => {
                  if (
                    product.name
                      .toLowerCase()
                      .includes(searchInput.toLowerCase())
                  ) {
                    return <ProductCard key={product.name} {...product} />;
                  }
                })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductPage;
