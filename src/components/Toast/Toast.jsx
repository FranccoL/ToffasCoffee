import { useState, useEffect } from "react";
import "./Toast.css";
 
export default function Toast({ message, visible, onClose }) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);
 
  if (!visible) return null;
 
  return (
    <div className="toast-container">
      <div className="toast-message">{message}</div>
    </div>
  );
}