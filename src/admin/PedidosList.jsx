import { useEffect, useState } from "react";
import { apiGet } from "../services/api";

export default function PedidosList() {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      window.location.href = "/admin/login";
      return;
    }

    apiGet("/admin/pedidos", token)
      .then((data) => setPedidos(data))
      .catch((err) => {
        console.error(err);
        alert("Erro ao carregar pedidos. Faça login novamente.");
        localStorage.removeItem("admin_token");
        window.location.href = "/admin/login";
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Pedidos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th><th>Cliente</th><th>Total</th><th>Status</th><th>Data</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.cliente_nome} ({p.cliente_email})</td>
              <td>R$ {Number(p.total).toFixed(2)}</td>
              <td>{p.status}</td>
              <td>{new Date(p.criado_em).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
