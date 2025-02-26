import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartProvider";
import { useState } from "react";
import useWindowDimensions from "../hook/useWindowDimensions";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useWindowDimensions();
  const { cartQuantity } = useShoppingCart();

  const handleMenuToggle = function (e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLElement;
    const button = target.closest(".nav-menu-toggle") as HTMLButtonElement;
    const links = target
      .closest(".nav-container")
      ?.querySelector(".primary-navigation");
    const header = target.closest(".primary-header") as HTMLElement;

    links?.classList.toggle("nav-menu-open");
    header.classList.toggle("overlay");

    button.innerHTML =
      isMenuOpen === false
        ? `<svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="25"
          height="25"
          viewBox="0 0 50 50"
        >
          <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
        </svg>`
        : `<svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 30 30"
          >
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
          </svg>`;

    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="primary-header">
      <div className="container padding-block-400">
        <div className="nav-container flex">
          <Link to="/" className="nav-link">
            <h1 className="nav-logo fw-bold fs-600">Furnish</h1>
          </Link>

          <button
            className="nav-menu-toggle"
            type="button"
            onClick={handleMenuToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25px"
              height="25px"
              viewBox="0 0 30 30"
            >
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
            </svg>
          </button>

          <nav className="primary-navigation">
            <ul role="list" className="nav-list">
              <li>
                <a
                  href="https://www.github.com/thechristinedo"
                  target="_blank"
                  className="nav-link"
                >
                  Dashboard
                </a>
                {/* <Link to="/dashboard" className="nav-link">
                  <p>Dashboard</p>
                </Link> */}
              </li>
              <li>
                <Link to="/product" className="nav-link">
                  <p>Product</p>
                </Link>
              </li>
              <li className="nav-cart">
                <Link to="/cart" className="nav-link ">
                  {isMenuOpen && width <= 800 ? (
                    <p>Cart</p>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="25"
                        height="25"
                        viewBox="0 0 48 48"
                      >
                        <path d="M 3.5 6 A 1.50015 1.50015 0 1 0 3.5 9 L 6.2558594 9 C 6.9837923 9 7.5905865 9.5029243 7.7285156 10.21875 L 8.0273438 11.78125 L 11.251953 28.716797 C 11.835068 31.772321 14.527135 34 17.638672 34 L 36.361328 34 C 39.472865 34 42.166064 31.773177 42.748047 28.716797 L 45.972656 11.78125 A 1.50015 1.50015 0 0 0 44.5 10 L 10.740234 10 L 10.675781 9.6582031 C 10.272657 7.5455321 8.4069705 6 6.2558594 6 L 3.5 6 z M 11.3125 13 L 42.6875 13 L 39.800781 28.15625 C 39.484764 29.81587 38.051791 31 36.361328 31 L 17.638672 31 C 15.948808 31 14.516781 29.8158 14.199219 28.15625 L 14.199219 28.154297 L 11.3125 13 z M 20 36 A 3 3 0 0 0 20 42 A 3 3 0 0 0 20 36 z M 34 36 A 3 3 0 0 0 34 42 A 3 3 0 0 0 34 36 z"></path>
                      </svg>
                      {cartQuantity > 0 && (
                        <div className="nav-cart-alert"></div>
                      )}
                    </>
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
