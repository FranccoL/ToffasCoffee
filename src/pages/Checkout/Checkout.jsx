import { useState, useRef } from "react";
import { useCart } from "../../context/CartContext";
import { apiPost, apiGet } from "../../services/api";
import "./Checkout.css";

const BACKEND_URL = "https://toffas-backend.onrender.com";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [cliente, setCliente] = useState({
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const [fretes, setFretes] = useState([]);
  const [freteSelecionado, setFreteSelecionado] = useState(null);
  const [carregandoFrete, setCarregandoFrete] = useState(false);
  const freteOpcoesRef = useRef(null);

  const [cupom, setCupom] = useState("");
  const [desconto, setDesconto] = useState(0);

  const totalProdutos = cart.reduce((sum, item) => {
    const valor = Number(
      item.price?.replace(/[^\d,]/g, "").replace(",", ".")
    );
    return sum + valor * (Number(item.quantity) || 1);
  }, 0);

  const freteValor =
    Number(String(freteSelecionado?.valor ?? 0).replace(",", ".")) || 0;

  const totalFinal = Math.max(totalProdutos + freteValor - desconto, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente((prev) => ({ ...prev, [name]: value }));
  };

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
        frete: freteValor,
      });

      setDesconto(Number(response.desconto) || 0);

      if (response.frete_gratis && freteSelecionado) {
        setFreteSelecionado({ ...freteSelecionado, valor: 0 });
      }

      alert("Cupom aplicado com sucesso!");
    } catch {
      setDesconto(0);
      alert("Cupom inválido.");
    }
  };

  const criarPedido = async () => {
  const response = await fetch(
    `${BACKEND_URL}/pedidos`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cliente,
        itens: cart.map(item => ({
          id: item.id,
          quantidade: item.quantity,
          tamanho: item.size
        })),
        frete: {
          id: freteSelecionado.id,
          metodo: freteSelecionado.metodo,
          prazo: freteSelecionado.prazo,
          valor: freteSelecionado.valor
        },
        cupom: cupom || null
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao criar pedido");
  }

  const data = await response.json();
  return data.pagamento.redirect_url;
};

const formatarTelefone = (value) => {
    const numeros = value.replace(/\D/g, "").slice(0, 11);
    if (numeros.length <= 2) return numeros;
    if (numeros.length <= 7)
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
  };

  const iniciarPagamento = async () => {
    if (!cliente.nome || !cliente.email || !cliente.cpf || !cliente.endereco || !cliente.numero) {
      alert("Preencha os dados obrigatórios.");
      return;
    }
    if (!validarCpf(cliente.cpf)) {
      alert("CPF inválido. Verifique e tente novamente.");
      return;
    }

    if (!freteSelecionado) {
      alert("Selecione uma opção de frete.");
      return;
    }

    try {
    const redirectUrl = await criarPedido();
    window.location.href = redirectUrl;
  } catch (error) {
    console.error(error);
    alert("Erro ao iniciar pagamento.");
  }
}

  const buscarClientePorEmail = async (email) => {
    if (!email) return;
    try {
      const clienteExistente = await apiGet(`/clientes/email/${email}`);
      if (clienteExistente) {
        setCliente((prev) => ({
  ...prev,
  ...Object.fromEntries(
    Object.entries(clienteExistente).map(([k, v]) => [k, v ?? ""])
  ),
}));
      }
    } catch {}
  };

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
  // =============================
// MÁSCARA CPF
// =============================
const formatarCpf = (value) => {
  const numeros = value.replace(/\D/g, "").slice(0, 11);

  if (numeros.length <= 3) return numeros;
  if (numeros.length <= 6)
    return `${numeros.slice(0, 3)}.${numeros.slice(3)}`;
  if (numeros.length <= 9)
    return `${numeros.slice(0, 3)}.${numeros.slice(3, 6)}.${numeros.slice(6)}`;

  return `${numeros.slice(0, 3)}.${numeros.slice(3, 6)}.${numeros.slice(6, 9)}-${numeros.slice(9)}`;
};

// =============================
// VALIDAÇÃO CPF
// =============================
const validarCpf = (cpf) => {
  const cpfLimpo = cpf.replace(/\D/g, "");

  if (cpfLimpo.length !== 11) return false;
  if (/^(\d)\1+$/.test(cpfLimpo)) return false;

  let soma = 0;
  let resto;

  for (let i = 1; i <= 9; i++)
    soma += parseInt(cpfLimpo.substring(i - 1, i)) * (11 - i);

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpfLimpo.substring(9, 10))) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++)
    soma += parseInt(cpfLimpo.substring(i - 1, i)) * (12 - i);

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;

  return resto === parseInt(cpfLimpo.substring(10, 11));
};

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
      
       setTimeout(() => {
        if (window.innerWidth <= 900 && freteOpcoesRef.current) {
          freteOpcoesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);

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
            <div className="frete-opcoes" ref={freteOpcoesRef}>
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

        <div className="checkout-form">
          <h3>Dados do Cliente</h3>

          <input name="nome" placeholder="Nome Completo *" value={cliente.nome} onChange={handleChange} />
          <input name="email" placeholder="E-mail *" value={cliente.email} onChange={handleChange} onBlur={(e) => buscarClientePorEmail(e.target.value)} />
          <input name="cpf" placeholder="CPF *"value={cliente.cpf} onChange={(e) =>setCliente((prev) => ({...prev,cpf: formatarCpf(e.target.value),}))}/>
          <input name="telefone" placeholder="Telefone/Celular" value={cliente.telefone} onChange={(e) => setCliente((prev) => ({ ...prev, telefone: formatarTelefone(e.target.value) }))} />
          

              {cliente.cpf && !validarCpf(cliente.cpf) && (<small style={{ color: "red" }}>CPF inválido</small>)}
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
          <input name="complemento" placeholder="Complemento (apto, bloco, etc.)" value={cliente.complemento} onChange={handleChange} />
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