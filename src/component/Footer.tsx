import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container padding-block-900">
        <div className="footer-container">
          <nav className="footer-navigation ">
            <ul role="list" className="footer-nav-list">
              <li>
                <Link to="/dashboard" className="nav-link">
                  <p>Dashboard</p>
                </Link>
              </li>
              <li>
                <Link to="/product" className="nav-link">
                  <p>Product</p>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h1 className="footer-logo fw-bold fs-600">Furnish</h1>
            <p>© 2024 Christine Do. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
