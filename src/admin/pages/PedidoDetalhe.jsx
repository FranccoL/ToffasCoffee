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
    } catch {
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

  const cliente = pedido.cliente ?? pedido;
  const valor = (preco) => Number(preco || 0).toFixed(2).replace(".", ",");

  return (
    <div className="pedido-detalhe-container">
      <button className="voltar" onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <h1>Pedido #{pedido.id}</h1>

      <section className="bloco">
        <h2>Cliente</h2>
        <p><strong>Nome:</strong> {cliente.nome ?? pedido.nome_cliente ?? "-"}</p>
        <p><strong>E-mail:</strong> {cliente.email ?? pedido.email_cliente ?? "-"}</p>
        <p><strong>CPF:</strong> {cliente.cpf ?? pedido.cpf ?? "-"}</p>
        <p><strong>Telefone:</strong> {cliente.telefone ?? pedido.telefone ?? "-"}</p>
        <p><strong>CEP:</strong> {cliente.cep ?? pedido.cep ?? "-"}</p>
        <p><strong>Endereço:</strong> {cliente.endereco ?? pedido.endereco ?? "-"}</p>
        <p><strong>Número:</strong> {cliente.numero ?? pedido.numero ?? "-"}</p>
        <p><strong>Complemento:</strong> {cliente.complemento ?? pedido.complemento ?? "-"}</p>
        <p><strong>Bairro:</strong> {cliente.bairro ?? pedido.bairro ?? "-"}</p>
        <p><strong>Cidade:</strong> {cliente.cidade ?? pedido.cidade ?? "-"}</p>
        <p><strong>Estado:</strong> {cliente.estado ?? pedido.estado ?? "-"}</p>
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
                <td>R$ {valor(item.preco)}</td>
                <td>
                  R$ {valor(Number(item.preco) * Number(item.quantidade))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="total">
          Total: <strong>R$ {valor(pedido.total)}</strong>
        </div>
      </section>
    </div>
  );
}
