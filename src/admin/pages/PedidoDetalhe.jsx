import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import adminApi from "../services/adminApi";
import "./PedidoDetalhe.css";

export default function PedidoDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pedido, setPedido] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  async function carregarPedido() {
    try {
      const response = await adminApi.get(`/pedidos/${id}`);
      setPedido(response.data);
    } catch (err) {
      setErro("Erro ao carregar pedido");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarPedido();
  }, [id]);

  if (loading) return <p className="admin-loading">Carregando pedido...</p>;
  if (erro) return <p className="admin-error">{erro}</p>;
  if (!pedido) return null;

  return (
    <div className="pedido-detalhe-container">
      <button className="voltar" onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <h1>Pedido #{pedido.id}</h1>

      <section className="bloco">
        <h2>Cliente</h2>
        <p><strong>Nome:</strong> {pedido.cliente.nome}</p>
        <p><strong>Email:</strong> {pedido.cliente.email}</p>
      </section>

      <section className="bloco">
        <h2>Status</h2>
        <p>
          <span className={`status ${pedido.status.toLowerCase()}`}>
            {pedido.status}
          </span>
        </p>
        <p><strong>Envio:</strong> {pedido.data_envio || "-"}</p>
        <p><strong>Entrega:</strong> {pedido.data_entrega || "-"}</p>
      </section>

      <section className="bloco">
        <h2>Itens</h2>

        <table className="itens-table">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Qtd</th>
              <th>Preço</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {pedido.itens.map((item, index) => (
              <tr key={index}>
                <td>{item.nome}</td>
                <td>{item.quantidade}</td>
                <td>R$ {item.preco.toFixed(2)}</td>
                <td>
                  R$ {(item.preco * item.quantidade).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="total">
          Total: <strong>R$ {pedido.total.toFixed(2)}</strong>
        </div>
      </section>
    </div>
  );
}
