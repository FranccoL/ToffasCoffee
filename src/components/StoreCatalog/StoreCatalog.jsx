import React, { useState } from "react";
import "./StoreCatalog.css";
import { ShoppingBag } from "lucide-react";
import { useCart } from "./../../context/CartContext";

const produtos = [
  {
    id: 1,
    nome: "Café Toffa's torrado em grãos",
    descricao: "Blend 100% arábica.",
    imagem: "/grao 1.svg",
    precos: {
      "250g": "R$ 24,90",
      "500g": "R$ 44,90",
      "1kg": "R$ 79,90",
    },
  },
  {
    id: 2,
    nome: "Café Toffa's Torrado e moído",
    descricao: "Blend 100% arábica.",
    imagem: "/torraEscura 1.svg",
    precos: {
      "250g": "R$ 28,90",
      "500g": "R$ 49,90",
      "1kg": "R$ 88,90",
    },
  },
  {
    id: 3,
    nome: "Café Toffa's Premium",
    descricao: "Seleção especial de grãos de altitude com sabor marcante.",
    imagem: "/torraMedia 1.svg",
    precos: {
      "250g": "R$ 26,90",
      "500g": "R$ 47,90",
      "1kg": "R$ 84,90",
    },
  },
  {
    id: 4,
    nome: "Chocolate Toffa's Coffee",
    descricao: "Produto solúvel.",
    imagem: "/chocolate1.svg",
    precos: {
      "250g": "R$ 16,90",
      "500g": "R$ 29,90",
      "1kg": "R$ 52,90",
    },
  },
  {
    id: 5,
    nome: "Cappuccino Toffa's Coffee",
    descricao: "Produto solúvel.",
    imagem: "/cappuccino 1.svg",
    precos: {
      "250g": "R$ 15,90",
      "500g": "R$ 27,90",
      "1kg": "R$ 49,90",
    },
  },
  {
    id: 6,
    nome: "Chá Especial Toffa's",
    descricao: "Blend aromático e revigorante.",
    imagem: "/cha1.svg",
    precos: {
      "250g": "R$ 18,90",
      "500g": "R$ 32,90",
      "1kg": "R$ 56,90",
    },
  },
];

export default function StoreCatalog() {
  const [tamanhos, setTamanhos] = useState({});
  const { addToCart } = useCart(); // ✅ integração com o carrinho

  const handleChange = (id, valor) => {
    setTamanhos((prev) => ({ ...prev, [id]: valor }));
  };

  const handleBuy = (produto) => {
    const tamanhoSelecionado = tamanhos[produto.id] || "250g";
    const preco = produto.precos[tamanhoSelecionado];
    addToCart(produto, tamanhoSelecionado, preco); 
  };

  return (
    <section id="catalogo" className="store-catalog">
      <div className="catalog-grid">
        {produtos.map((item) => {
          const tamanhoSelecionado = tamanhos[item.id] || "250g";
          const precoAtual = item.precos[tamanhoSelecionado];

          return (
            <div key={item.id} className="produto-card">
              <img src={item.imagem} alt={item.nome} />
              <div className="produto-info">
                <h3>{item.nome}</h3>
                <p>{item.descricao}</p>

                <div className="produto-opcoes">
                  <label htmlFor={`tamanho-${item.id}`}>Tamanho:</label>
                  <select
                    id={`tamanho-${item.id}`}
                    value={tamanhoSelecionado}
                    onChange={(e) => handleChange(item.id, e.target.value)}
                  >
                    <option value="250g">250g</option>
                    <option value="500g">500g</option>
                    <option value="1kg">1kg</option>
                  </select>
                </div>

                <div className="produto-footer">
                  <span>{precoAtual}</span>
                  <button onClick={() => handleBuy(item)}>
                    <ShoppingBag size={18} /> Adicionar ao carrinho
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
