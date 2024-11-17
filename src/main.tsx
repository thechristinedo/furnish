import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "./index.css";
import { ShoppingCartProvider } from "./context/ShoppingCartProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ShoppingCartProvider>
      <RouterProvider router={router} />
    </ShoppingCartProvider>
  </StrictMode>
);
