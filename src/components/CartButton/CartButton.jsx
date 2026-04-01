import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import CartModal from "../CartModal/CartModal";
import { useCart } from "../../context/CartContext";
import "./CartButton.css";

export default function CartButton() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  // Calcula o total de itens
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      {!open && (
        <button className="cart-button" onClick={() => setOpen(true)}>
          <div className="cart-content-wrapper">
            {/* Lógica Mobile: Troca ícone por número se houver itens */}
            {itemCount > 0 ? (
              <span key={itemCount} className="cart-count animate-pop">
                {itemCount}
              </span>
            ) : (
              <ShoppingCart className="cart-icon-svg" size={26} />
            )}
            
            {/* Ícone fixo para o Desktop */}
            <ShoppingCart className="cart-icon-desktop" size={26} />
          </div>
          <span className="cart-label">Carrinho</span>
        </button>
      )}
      {open && <CartModal onClose={() => setOpen(false)} />}
    </>
  );
}