import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../../services/api";
import "./Pedido.css";

export default function Pedido() {
  const { id } = useParams();
  const [pedido, setPedido] = useState(null);
  const [itens, setItens] = useState([]);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function carregarPedido() {
      try {
        const resposta = await apiGet(`/pedidos/${id}`);
        setPedido(resposta.pedido);
        setItens(resposta.itens);
      } catch {
        setErro(true);
      }
    }

    carregarPedido();
  }, [id]);

  if (erro) {
    return <p>Pedido não encontrado.</p>;
  }

  if (!pedido) {
    return <p>Carregando pedido...</p>;
  }

  return (
    <section className="pedido">
      <h2>Pedido realizado 🎉</h2>

      <div className="pedido-box">
        <p><strong>Nº do pedido:</strong> {pedido.id}</p>
        <p><strong>Status:</strong> <span className={`status ${pedido.status}`}>
          {pedido.status.replace("_", " ")}
        </span></p>

        <hr />

        <h3>Itens</h3>
        <ul>
          {itens.map((item, index) => (
            <li key={index}>
              {item.quantidade}x {item.nome_produto}
              {item.tamanho && ` (${item.tamanho})`}
              <span>
                R$ {(item.preco * item.quantidade).toFixed(2).replace(".", ",")}
              </span>
            </li>
          ))}
        </ul>

        <hr />

        <div className="total">
          <p>Subtotal: R$ {pedido.subtotal.toFixed(2).replace(".", ",")}</p>
          <p>Frete: R$ {pedido.frete.toFixed(2).replace(".", ",")}</p>
          <strong>Total: R$ {pedido.total.toFixed(2).replace(".", ",")}</strong>
        </div>

        {pedido.status === "AGUARDANDO_PAGAMENTO" && (
          <div className="aviso">
            ⏳ Aguardando pagamento
          </div>
        )}

        {pedido.status === "PAGO" && (
          <div className="sucesso">
            ✅ Pagamento confirmado
          </div>
        )}
      </div>
    </section>
  );
}
