import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerLeftContainer">
          <div className="footerLogoContainer">
            <h1 className="footerLogo">Furnish</h1>
            <p className="footerSlogan">
              because home is where comfort resides at
            </p>
          </div>
        </div>
        <div className="footerLinksContainer">
          <ul className="footerList">
            <li className="footerLink">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="footerLink">
              <Link to="/product">Product</Link>
            </li>
            <li className="footerLink">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <p>© 2024 Christine Do. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
