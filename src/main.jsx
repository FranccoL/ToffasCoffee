import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx"; 
import { initMercadoPago } from "@mercadopago/sdk-react";

initMercadoPago("APP_USR-7bad04e6-0440-4b1b-8f04-da8f42df0301");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
