import { createContext, useContext, useState, useEffect } from "react";
 
const CartContext = createContext();
 
function getCartFromStorage() {
  try {
    const stored = localStorage.getItem("toffas_cart");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {
    // ignore parse errors
  }
  return [];
}
 
export function CartProvider({ children }) {
  const [cart, setCart] = useState(getCartFromStorage);
 
  useEffect(() => {
    localStorage.setItem("toffas_cart", JSON.stringify(cart));
  }, [cart]);
 
  const addToCart = (product, size, price) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.size === size
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, size, price, quantity: 1 }];
      }
    });
  };
 
  const removeFromCart = (productId, size) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === productId && item.size === size))
    );
  };
 
  const updateQuantity = (id, size, newQuantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: Math.max(1, newQuantity) }
          : item
      )
    );
  };
 
  const clearCart = () => setCart([]);
 
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
 
export function useCart() {
  return useContext(CartContext);
}