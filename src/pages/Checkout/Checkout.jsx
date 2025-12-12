import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { apiPost } from "../../services/api";
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

  const [frete, setFrete] = useState(null);
  const [carregandoFrete, setCarregandoFrete] = useState(false);

  // Soma total dos produtos
  const totalProdutos = cart.reduce((sum, item) => {
    const valor = Number(item.price.replace(/[^\d,]/g, "").replace(",", "."));
    return sum + valor * item.quantity;
  }, 0);

  const totalFinal = frete ? totalProdutos + frete.valor : totalProdutos;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente((prev) => ({ ...prev, [name]: value }));
  };

  // CALCULA MEDIDAS AUTOMATICAMENTE
  const calcularMedidas = () => {
    let pesoTotal = 0;
    let altura = 0;
    let largura = 0;
    let comprimento = 0;

    cart.forEach((item) => {
      const qtd = item.quantity;

      pesoTotal += (item.weight || 0.3) * qtd; // Peso mínimo
      altura += item.height || 10;
      largura = Math.max(largura, item.width || 20);
      comprimento = Math.max(comprimento, item.length || 20);
    });

    return { pesoTotal, altura, largura, comprimento };
  };

  // CALCULAR FRETE VIA BACKEND
  const calcularFrete = async () => {
    if (!cliente.cep) {
      alert("Digite um CEP para calcular o frete.");
      return;
    }

    setCarregandoFrete(true);
    const medidas = calcularMedidas();

    try {
      const resposta = await apiPost("/frete/calcular", {
        cepDestino: cliente.cep,
        peso: medidas.pesoTotal,
        altura: medidas.altura,
        largura: medidas.largura,
        comprimento: medidas.comprimento,
      });

      if (!resposta) {
        alert("Erro ao calcular frete.");
        setCarregandoFrete(false);
        return;
      }

      // Simples (com MelhorEnvio será diferente)
      setFrete({
        tipo: resposta.tipo,
        valor: resposta.valor,
        prazo: resposta.prazo,
      });

    } catch (err) {
      console.error("Erro frete:", err);
      alert("Erro ao calcular frete.");
    }

    setCarregandoFrete(false);
  };

  // FINALIZAR PEDIDO
  const finalizarCompra = async () => {
    if (!cliente.nome || !cliente.email || !cliente.endereco) {
      alert("Preencha os campos obrigatórios!");
      return;
    }

    if (cart.length === 0) {
      alert("O carrinho está vazio!");
      return;
    }

    const medidas = calcularMedidas();

    try {
      const pedido = {
        cliente,
        itens: cart.map((item) => ({
          id: item.id,
          nome: item.nome,
          tamanho: item.size,
          quantidade: item.quantity,
          preco: Number(item.price.replace(/[^\d,]/g, "").replace(",", ".")),
          peso: item.weight,
        })),
        subtotal: totalProdutos,
        frete: frete ? frete.valor : 0,
        total: totalFinal,
        medidas,
      };

      const resposta = await apiPost("/pedidos", pedido);

      alert(`Pedido realizado com sucesso! 🧾\nID: ${resposta.pedidoId}`);
      clearCart();

    } catch (err) {
      console.error("Erro ao finalizar pedido:", err);
      alert("Erro ao finalizar pedido!");
    }
  };

  return (
    <section className="checkout">
      <h2>Finalizar Compra</h2>

      <div className="checkout-container">

        {/* RESUMO */}
        <div className="checkout-pedido">
          <h3>Seu Pedido</h3>

          {cart.length === 0 ? (
            <p>O carrinho está vazio.</p>
          ) : (
            <>
              <ul>
                {cart.map((item) => (
                  <li key={`${item.id}-${item.size}`}>
                    <div>
                      <strong>{item.nome}</strong> <br />
                      <small>{item.size}</small>
                    </div>
                    <span>{item.quantity}x {item.price}</span>
                  </li>
                ))}
              </ul>

              <div className="resumo-total">
                <span>Subtotal:</span>
                <strong>R$ {totalProdutos.toFixed(2).replace(".", ",")}</strong>
              </div>

              {frete && (
                <div className="resumo-total">
                  <span>Frete ({frete.tipo}):</span>
                  <strong>R$ {frete.valor.toFixed(2).replace(".", ",")}</strong>
                </div>
              )}

              <hr />

              <div className="resumo-total total">
                <span>Total:</span>
                <strong>R$ {totalFinal.toFixed(2).replace(".", ",")}</strong>
              </div>
            </>
          )}
        </div>

        {/* DADOS DO CLIENTE */}
        <div className="checkout-form">
          <h3>Dados do Cliente</h3>

          <form>
            <input type="text" name="nome" placeholder="Nome *"
              value={cliente.nome} onChange={handleChange} required />

            <input type="email" name="email" placeholder="E-mail *"
              value={cliente.email} onChange={handleChange} required />

            <input type="tel" name="telefone" placeholder="Telefone"
              value={cliente.telefone} onChange={handleChange} />

            <div className="cep-container">
              <input type="text" name="cep" placeholder="CEP *"
                value={cliente.cep} onChange={handleChange} required />

              <button type="button" onClick={calcularFrete} disabled={carregandoFrete}>
                {carregandoFrete ? "Calculando..." : "Frete"}
              </button>
            </div>

            <input type="text" name="endereco" placeholder="Endereço *"
              value={cliente.endereco} onChange={handleChange} required />

            <input type="text" name="numero" placeholder="Número *"
              value={cliente.numero} onChange={handleChange} required />

            <input type="text" name="bairro" placeholder="Bairro"
              value={cliente.bairro} onChange={handleChange} />

            <input type="text" name="cidade" placeholder="Cidade"
              value={cliente.cidade} onChange={handleChange} />

            <input type="text" name="estado" placeholder="Estado"
              value={cliente.estado} onChange={handleChange} />

            <button type="button" className="finalizar-btn" onClick={finalizarCompra}>
              Finalizar Pedido
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
