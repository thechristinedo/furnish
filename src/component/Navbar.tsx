import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartProvider";

const Navbar = () => {
  const { cartQuantity } = useShoppingCart();
  return (
    <nav>
      <div className="navContainer container">
        <Link to="/" className="navLogo">
          <h1>Furnish</h1>
        </Link>
        <ul className="navList">
          <li>
            <Link to="/dashboard" className="navLink">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/product" className="navLink">
              Products
            </Link>
          </li>
          <li className="navCart">
            <Link to="/cart" className="navLink">
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
                <div className="navCartAlert">
                  <p>{cartQuantity}</p>
                </div>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
