import { useNavigate } from "react-router-dom";
import "./Topbar.css";

export default function Topbar() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  }

  return (
    <header className="admin-topbar">
      <span>Administração</span>
      <button onClick={logout}>Sair</button>
    </header>
  );
}
