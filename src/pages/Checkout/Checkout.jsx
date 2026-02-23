import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { apiPost, apiGet } from "../../services/api";
import "./Checkout.css";

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
  const [preferenceId, setPreferenceId] = useState(null);

  // 🔹 CUPOM
  const [cupom, setCupom] = useState("");
  const [desconto, setDesconto] = useState(0);

  // 🔹 TOTAL PRODUTOS
  const totalProdutos = cart.reduce((sum, item) => {
    const valor = Number(
      item.price?.replace(/[^\d,]/g, "").replace(",", ".")
    );
    return sum + valor * (Number(item.quantity) || 1);
  }, 0);

  const freteValor = Number(
  String(freteSelecionado?.valor ?? 0).replace(",", ".")
) || 0;

const descontoValor = Number(desconto) || 0;

const totalComFrete = totalProdutos + freteValor;

const totalFinal = Math.max(totalComFrete - descontoValor, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 APLICAR CUPOM
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
      frete: freteSelecionado?.valor || 0
    });

    setDesconto(Number(response.desconto) || 0);

    // Se for frete grátis
    if (response.frete_gratis) {
      setFreteSelecionado(prev => ({
        ...prev,
        valor: 0
      }));
    }

    alert("Cupom aplicado com sucesso!");
  } catch (err) {
    setDesconto(0);
    alert(err.response?.data?.error || "Cupom inválido.");
  }
};

  // 🔹 CRIAR PREFERÊNCIA
  const criarPreferencia = async () => {
    const response = await fetch(
      "http://localhost:4000/api/pagamento/criar-preferencia",
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
    return data.id;
  };

  const iniciarPagamento = async () => {
    if (!cliente.nome || !cliente.email || !cliente.endereco || !cliente.numero) {
      alert("Preencha os dados obrigatórios.");
      return;
    }

    if (!freteSelecionado) {
      alert("Selecione uma opção de frete.");
      return;
    }

    const id = await criarPreferencia();
    window.location.href = `https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=${id}`;
  };

  // 🔹 BUSCAR CLIENTE
  const buscarClientePorEmail = async (email) => {
    if (!email) return;
    try {
      const clienteExistente = await apiGet(`/clientes/email/${email}`);
      if (clienteExistente) {
        setCliente((prev) => ({ ...prev, ...clienteExistente }));
      }
    } catch {}
  };

  // 🔹 CEP
  const buscarEnderecoPorCep = async (cep) => {
    const cepLimpo = cep.replace(/\D/g, "");
    if (cepLimpo.length !== 8) return;

    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${cepLimpo}/json/`
      );
      const data = await response.json();

      if (data.erro) return;

      setCliente((prev) => ({
        ...prev,
        endereco: data.logradouro || "",
        bairro: data.bairro || "",
        cidade: data.localidade || "",
        estado: data.uf || "",
      }));
    } catch {}
  };

  const formatarCep = (value) => {
    const apenasNumeros = value.replace(/\D/g, "").slice(0, 8);
    if (apenasNumeros.length <= 5) return apenasNumeros;
    return `${apenasNumeros.slice(0, 5)}-${apenasNumeros.slice(5)}`;
  };

  // 🔹 CALCULAR FRETE
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
    } finally {
      setCarregandoFrete(false);
    }
  };

  return (
    <section className="checkout">
      <h2>Finalizar Compra</h2>

      <div className="checkout-container">
        {/* RESUMO */}
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
            <strong>
              R$ {totalProdutos.toFixed(2).replace(".", ",")}
            </strong>
          </div>

          {/* CUPOM */}
          <div className="cupom-area">
            <input
              type="text"
              placeholder="Cupom de desconto"
              value={cupom}
              onChange={(e) => setCupom(e.target.value.toUpperCase())}
            />
            <button type="button" onClick={aplicarCupom}>
              Aplicar
            </button>
          </div>

          {desconto > 0 && (
            <div className="resumo-total">
              <span>Desconto:</span>
              <strong>
                - R$ {desconto.toFixed(2).replace(".", ",")}
              </strong>
            </div>
          )}

          {fretes.length > 0 && (
            <div className="frete-opcoes">
              <h4>Escolha o envio</h4>
              {fretes.map((f) => (
                <label key={f.id} className="frete-opcao">
                  <input
                    type="radio"
                    checked={freteSelecionado?.id === f.id}
                    onChange={() => setFreteSelecionado(f)}
                  />
                  <span>{f.metodo} • {f.prazo}</span>
                  <strong>
                    R$ {(f.valor ?? 0).toFixed(2).replace(".", ",")}
                  </strong>
                </label>
              ))}
            </div>
          )}

          <div className="resumo-total total">
            <span>Total:</span>
            <strong>
              R$ {totalFinal.toFixed(2).replace(".", ",")}
            </strong>
          </div>
        </div>

        {/* FORM */}
        <div className="checkout-form">
          <h3>Dados do Cliente</h3>

          <input name="nome" placeholder="Nome *" value={cliente.nome} onChange={handleChange} />
          <input name="email" placeholder="E-mail *" value={cliente.email} onChange={handleChange} onBlur={(e) => buscarClientePorEmail(e.target.value)} />
          <input name="telefone" placeholder="Telefone" value={cliente.telefone} onChange={handleChange} />

          <div className="cep-container">
            <input
              name="cep"
              placeholder="CEP *"
              value={cliente.cep}
              onChange={(e) => {
                const cepFormatado = formatarCep(e.target.value);
                setCliente((prev) => ({ ...prev, cep: cepFormatado }));

                if (cepFormatado.replace(/\D/g, "").length === 8) {
                  buscarEnderecoPorCep(cepFormatado);
                }
              }}
            />
            <button type="button" onClick={calcularFrete}>
              {carregandoFrete ? "Calculando..." : "Frete"}
            </button>
          </div>

          <input name="endereco" placeholder="Endereço *" value={cliente.endereco} onChange={handleChange} />
          <input name="numero" placeholder="Número *" value={cliente.numero} onChange={handleChange} />
          <input name="bairro" placeholder="Bairro" value={cliente.bairro} onChange={handleChange} />
          <input name="cidade" placeholder="Cidade" value={cliente.cidade} onChange={handleChange} />
          <input name="estado" placeholder="Estado" value={cliente.estado} onChange={handleChange} />

          <button className="finalizar-btn" onClick={iniciarPagamento}>
            Ir para pagamento
          </button>
        </div>
      </div>
    </section>
  );
}