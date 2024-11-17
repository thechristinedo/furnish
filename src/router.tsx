import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";
import ProductDisplay from "./component/ProductDisplay";
import CartPage from "./pages/CartPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path: "/product/:productId",
    element: <ProductDisplay />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);
