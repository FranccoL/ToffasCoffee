import "./CartModal.css";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartModal({ onClose }) {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cart.reduce((sum, item) => {
    const numeric = Number(item.price.replace(/[^\d,]/g, "").replace(",", "."));
    return sum + numeric * item.quantity;
  }, 0);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Seu Carrinho</h2>
          <button className="close-cart" onClick={onClose}>
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="empty-cart">O carrinho está vazio.</p>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map((item) => (
                <li key={`${item.id}-${item.size}`} className="cart-item">
                  <div className="item-info">
                    <strong>{item.nome}</strong>
                    <span>{item.size}</span>
                  </div>

                  <div className="item-quantity">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.size, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                    >
                      –
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.size, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  <div className="item-price">
                    <span>{item.price}</span>
                    <button
                      className="remove-item"
                      onClick={() => removeFromCart(item.id, item.size)}
                    >
                      Remover
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <strong>R$ {total.toFixed(2).replace(".", ",")}</strong>
              </div>

              <div className="cart-actions">
                <button className="clear" onClick={clearCart}>
                  Esvaziar
                </button>
                <button
                  className="checkout"
                  onClick={() => {
                    onClose();
                    navigate("/checkout");
                  }}
                >
                  Finalizar Compra
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
