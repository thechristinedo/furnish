import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>404 Error -- Page not found</h1>
      <button>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Go back home!
        </Link>
      </button>
    </>
  );
};

export default ErrorPage;
