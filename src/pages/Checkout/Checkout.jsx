import { useState } from "react";
import { useCart } from "../../context/CartContext";
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

  const totalProdutos = cart.reduce((sum, item) => {
    const valor = Number(item.price.replace(/[^\d,]/g, "").replace(",", "."));
    return sum + valor * item.quantity;
  }, 0);

  const totalFinal = frete ? totalProdutos + frete.valor : totalProdutos;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente((prev) => ({ ...prev, [name]: value }));
  };

  const calcularFrete = () => {
    if (!cliente.cep) {
      alert("Digite um CEP para calcular o frete.");
      return;
    }

    setCarregandoFrete(true);
    setTimeout(() => {
      setFrete({
        tipo: "Entrega Padrão",
        valor: 19.9,
        prazo: "3 a 5 dias úteis",
      });
      setCarregandoFrete(false);
    }, 1500);
  };

  const finalizarCompra = () => {
    if (!cliente.nome || !cliente.email || !cliente.endereco) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    alert(
      `✅ Pedido confirmado!\n\nCliente: ${cliente.nome}\nTotal: R$ ${totalFinal.toFixed(
        2
      )}`
    );
    clearCart();
  };

  return (
    <section className="checkout">
      <h2>Finalizar Compra</h2>

      <div className="checkout-container">
        {/* 🧾 Resumo do Pedido */}
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

        {/* 👤 Dados do Cliente */}
        <div className="checkout-form">
          <h3>Dados do Cliente</h3>
          <form>
            <input
              type="text"
              name="nome"
              placeholder="Nome completo *"
              value={cliente.nome}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail *"
              value={cliente.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="telefone"
              placeholder="Telefone"
              value={cliente.telefone}
              onChange={handleChange}
            />

            <div className="cep-container">
              <input
                type="text"
                name="cep"
                placeholder="CEP *"
                value={cliente.cep}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={calcularFrete}
                disabled={carregandoFrete}
              >
                {carregandoFrete ? "Calculando..." : "Calcular Frete"}
              </button>
            </div>

            <input
              type="text"
              name="endereco"
              placeholder="Endereço *"
              value={cliente.endereco}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="numero"
              placeholder="Número *"
              value={cliente.numero}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="bairro"
              placeholder="Bairro"
              value={cliente.bairro}
              onChange={handleChange}
            />
            <input
              type="text"
              name="cidade"
              placeholder="Cidade"
              value={cliente.cidade}
              onChange={handleChange}
            />
            <input
              type="text"
              name="estado"
              placeholder="Estado"
              value={cliente.estado}
              onChange={handleChange}
            />

            <button
              type="button"
              className="finalizar-btn"
              onClick={finalizarCompra}
            >
              Finalizar Pedido
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
