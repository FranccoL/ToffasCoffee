import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="admin-sidebar">
      <h2>Toffa's Coffee ☕</h2>

      <nav>
        <NavLink to="/admin/dashboard">Dashboard</NavLink>
        <NavLink to="/admin/pedidos">Pedidos</NavLink>
      </nav>
    </aside>
  );
}
