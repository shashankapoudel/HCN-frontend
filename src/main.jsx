import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import { ProductProvider } from "./context/ProductProvider.jsx";
import { CurrencyProvider } from "./context/CurrencyContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <CurrencyProvider>
        <App />
      </CurrencyProvider>
    </ProductProvider>
  </StrictMode>,
);
