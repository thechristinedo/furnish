import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div
        className="errorPageContainer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          gap: "2rem",
        }}
      >
        <h1>404 Error -- Page not found</h1>
        <button>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Go back home!
          </Link>
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
