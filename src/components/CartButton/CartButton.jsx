import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import CartModal from "../CartModal/CartModal";
import { useCart } from "../../context/CartContext";
import "./CartButton.css";

export default function CartButton() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      {!open && (
        <button className="cart-button" onClick={() => setOpen(true)}>
          <div className="cart-icon-wrapper">
            <ShoppingCart size={26} />
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
          </div>
          <span className="cart-label">Carrinho</span>
        </button>
      )}
      {open && <CartModal onClose={() => setOpen(false)} />}
    </>
  );
}
