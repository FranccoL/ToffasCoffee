import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import adminApi from "../services/adminApi";
import "./Pedidos.css";

export default function Pedidos() {
  const navigate = useNavigate();

  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  async function carregarPedidos() {
    try {
      const response = await adminApi.get("/pedidos");
      setPedidos(response.data);
    } catch (err) {
      setErro("Erro ao carregar pedidos");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function atualizarStatus(id, status) {
    try {
      await adminApi.patch(`/admin/pedidos/${id}/status`, { status });
      carregarPedidos();
    } catch (err) {
      alert("Erro ao atualizar status");
      console.error(err);
    }
  }

  useEffect(() => {
    carregarPedidos();
  }, []);

  if (loading) return <p className="admin-loading">Carregando pedidos...</p>;
  if (erro) return <p className="admin-error">{erro}</p>;

  return (
    <div className="admin-pedidos-container">
      <h1>Pedidos</h1>

      <table className="admin-pedidos-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Cliente</th>
            <th>Total</th>
            <th>Status</th>
            <th>Envio</th>
            <th>Entrega</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {pedidos.map(pedido => (
            <tr key={pedido.id}>
              <td>
                <button
                  className="link-id"
                  onClick={() => navigate(`/admin/pedidos/${pedido.id}`)}
                >
                  #{pedido.id}
                </button>
              </td>

              <td>{pedido.nome_cliente}</td>

              <td>R$ {Number(pedido.total).toFixed(2)}</td>

              <td>
                <span className={`status ${pedido.status.toLowerCase()}`}>
                  {pedido.status}
                </span>
              </td>

              <td>{pedido.data_envio || "-"}</td>
              <td>{pedido.data_entrega || "-"}</td>

              <td className="acoes">
                {pedido.status === "PENDENTE" && (
                  <button
                    className="btn enviar"
                    onClick={() => atualizarStatus(pedido.id, "ENVIADO")}
                  >
                    Enviar
                  </button>
                )}

                {pedido.status === "ENVIADO" && (
                  <button
                    className="btn entregar"
                    onClick={() => atualizarStatus(pedido.id, "ENTREGUE")}
                  >
                    Entregue
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
