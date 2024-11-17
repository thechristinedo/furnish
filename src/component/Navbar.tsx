import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navContainer">
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
          <li>
            <Link to="/contact" className="navLink">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
