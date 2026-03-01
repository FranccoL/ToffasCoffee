import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { apiPost, apiGet } from "../../services/api";
import "./Checkout.css";

const API_URL = "https://toffas-backend.onrender.com";

export default function Checkout() {
  const { cart, clearCart } = useCart();

  const [cliente, setCliente] = useState({
    nome: "",
    email: "",
    telefone: "",
    cep: "",
    endereco: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const [fretes, setFretes] = useState([]);
  const [freteSelecionado, setFreteSelecionado] = useState(null);
  const [carregandoFrete, setCarregandoFrete] = useState(false);

  const [cupom, setCupom] = useState("");
  const [desconto, setDesconto] = useState(0);

  const totalProdutos = cart.reduce((sum, item) => {
    const valor = Number(
      item.price?.replace(/[^\d,]/g, "").replace(",", ".")
    );
    return sum + valor * (Number(item.quantity) || 1);
  }, 0);

  const freteValor = Number(
    String(freteSelecionado?.valor ?? 0).replace(",", ".")
  ) || 0;

  const totalComFrete = totalProdutos + freteValor;
  const totalFinal = Math.max(totalComFrete - desconto, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 CUPOM
  const aplicarCupom = async () => {
    if (!cupom) return;
    if (!cliente.email) {
      alert("Informe o e-mail antes de aplicar o cupom.");
      return;
    }

    try {
      const response = await apiPost("/cupom/validar", {
        codigo: cupom,
        subtotal: totalProdutos,
        clienteEmail: cliente.email,
        frete: freteValor
      });

      setDesconto(Number(response.desconto) || 0);

      if (response.frete_gratis && freteSelecionado) {
        setFreteSelecionado(prev => ({ ...prev, valor: 0 }));
      }

      alert("Cupom aplicado com sucesso!");
    } catch (err) {
      setDesconto(0);
      alert("Cupom inválido.");
    }
  };

  // 🔹 PAGAMENTO (CORRIGIDO AQUI)
  const iniciarPagamento = async () => {
    if (!cliente.nome || !cliente.email || !cliente.endereco || !cliente.numero) {
      alert("Preencha os dados obrigatórios.");
      return;
    }

    if (!freteSelecionado) {
      alert("Selecione uma opção de frete.");
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/api/pagamento/criar-preferencia`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            produtos: cart,
            cliente,
            frete: freteValor,
            total: totalFinal,
            cupom,
          }),
        }
      );

      const data = await response.json();

      if (data.init_point) {
        window.location.href = data.init_point;
      } else if (data.id) {
        window.location.href = `https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=${data.id}`;
      } else {
        alert("Erro ao iniciar pagamento.");
      }

    } catch (error) {
      console.error("Erro no pagamento:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  // 🔹 FRETE
  const calcularFrete = async () => {
    if (!cliente.cep || cart.length === 0) return;

    setCarregandoFrete(true);

    try {
      const produtosPayload = cart.map((item) => {
        let pesoEmGramas = 250;
        const size = item.size?.toLowerCase();

        if (size?.includes("250")) pesoEmGramas = 250;
        else if (size?.includes("500")) pesoEmGramas = 500;
        else if (size?.includes("1")) pesoEmGramas = 1000;

        return {
          pesoEmGramas,
          quantidade: Number(item.quantity) || 1,
        };
      });

      const resposta = await apiPost("/frete/calcular", {
        cepDestino: cliente.cep.replace(/\D/g, ""),
        produtos: produtosPayload,
      });

      setFretes(resposta.slice(0, 3));
      setFreteSelecionado(resposta[0]);

    } catch (err) {
      console.error(err);
      alert("Erro ao calcular frete.");
    } finally {
      setCarregandoFrete(false);
    }
  };

  return (
    <section className="checkout">
      <h2>Finalizar Compra</h2>

      <div className="checkout-container">
        <div className="checkout-pedido">
          <h3>Seu Pedido</h3>

          <ul>
            {cart.map((item) => (
              <li key={`${item.id}-${item.size}`}>
                <div>
                  <strong>{item.nome}</strong>
                  <br />
                  <small>{item.size}</small>
                </div>
                <span>
                  {item.quantity}x {item.price}
                </span>
              </li>
            ))}
          </ul>

          <div className="resumo-total">
            <span>Subtotal:</span>
            <strong>R$ {totalProdutos.toFixed(2).replace(".", ",")}</strong>
          </div>

          <div className="resumo-total total">
            <span>Total:</span>
            <strong>R$ {totalFinal.toFixed(2).replace(".", ",")}</strong>
          </div>
        </div>

        <div className="checkout-form">
          <h3>Dados do Cliente</h3>

          <input name="nome" placeholder="Nome *" value={cliente.nome} onChange={handleChange} />
          <input name="email" placeholder="E-mail *" value={cliente.email} onChange={handleChange} />
          <input name="telefone" placeholder="Telefone" value={cliente.telefone} onChange={handleChange} />

          <input name="cep" placeholder="CEP *" value={cliente.cep}
            onChange={(e) =>
              setCliente((prev) => ({ ...prev, cep: e.target.value }))
            }
          />

          <button type="button" onClick={calcularFrete}>
            {carregandoFrete ? "Calculando..." : "Calcular Frete"}
          </button>

          <input name="endereco" placeholder="Endereço *" value={cliente.endereco} onChange={handleChange} />
          <input name="numero" placeholder="Número *" value={cliente.numero} onChange={handleChange} />

          <button className="finalizar-btn" onClick={iniciarPagamento}>
            Ir para pagamento
          </button>
        </div>
      </div>
    </section>
  );
}