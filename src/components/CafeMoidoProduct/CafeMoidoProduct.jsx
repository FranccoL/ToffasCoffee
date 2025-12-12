import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useCart } from "../../context/CartContext"; 
import "./CafeMoidoProduct.css";

export default function CafeMoidoProduct() {
  const [activeTab, setActiveTab] = useState("descricao");
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const descricaoText = `
Um café torrado e moído, produzido com grãos 100% Arábica selecionados, oferecendo sabor equilibrado e aroma intenso. 
Ideal para quem aprecia uma xícara aromática, com notas suaves e acabamento aveludado.
`;

  const preparoText = `
Quantidade: use 1 a 2 colheres de sopa de café moído para cada 100 ml de água, ajustando conforme a intensidade desejada.
Água: prefira água filtrada ou mineral, aquecida a cerca de 90–95°C (não deixe ferver).
Método: coador, prensa francesa, cafeteira italiana ou espresso, conforme sua preferência.
Serviço: sirva imediatamente após a preparação para aproveitar aroma e sabor máximos.
Dica: experimente puro ou com leite vaporizado para destacar nuances do café.
`;

  const ingredientesText = `
Café 100% Arábica moído.
Não contém glúten, lactose ou aditivos.
`;

  const goBack = () => navigate(-1);

  // Pesos disponíveis
  const pesosDisponiveis = ["500g"];
  const [selectedWeight, setSelectedWeight] = useState("500g");

  const precoPorPeso = {
    "500g": "R$28.70",
  };

  // Quantidade
  const [quantidade, setQuantidade] = useState(1);

  const produto = {
    id: "cafe-moido",
    nome: "Café Torrado e Moído",
    categoria: "coffee",
    imagem: "/cafemoido.svg",
  };

  return (
    <div className="product-page">

      {/* Voltar */}
      <button className="back-link" onClick={goBack}>
        ← Voltar
      </button>

      <div className="product-content">

        {/* IMG */}
        <div className="product-image-box">
          <img src={produto.imagem} alt={produto.nome} />
        </div>

        {/* INFO */}
        <div className="product-info">
          <span className="product-tag">Café</span>
          <h1>{produto.nome}</h1>
          <h2>{precoPorPeso[selectedWeight]}</h2>

          <p className="product-desc">{descricaoText}</p>

          {/* Seleção de peso */}
          <div className="peso-badges-inline">
            {pesosDisponiveis.map((peso) => (
              <button
                key={peso}
                type="button"
                className={`peso-badge-btn ${selectedWeight === peso ? "active" : ""}`}
                onClick={() => setSelectedWeight(peso)}
              >
                {peso}
              </button>
            ))}
          </div>

          {/* Adicionar ao carrinho */}
          <button
            className="add-cart-btn"
            onClick={() =>
              addToCart(
                { ...produto, peso: selectedWeight },
                selectedWeight,
                precoPorPeso[selectedWeight],
                quantidade
              )
            }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>

      {/* TABS */}
      <div className="tabs">
        <button className={`tab ${activeTab === "descricao" ? "active" : ""}`} onClick={() => setActiveTab("descricao")}>
          Descrição
        </button>
        <button className={`tab ${activeTab === "preparo" ? "active" : ""}`} onClick={() => setActiveTab("preparo")}>
          Modo de preparo
        </button>
        <button className={`tab ${activeTab === "ingredientes" ? "active" : ""}`} onClick={() => setActiveTab("ingredientes")}>
          Ingredientes
        </button>
      </div>

      {/* TEXT CONTENT */}
      <div className="text-section">
        {activeTab === "descricao" && (
          <p className="text-center">{descricaoText}</p>
        )}

        {activeTab === "preparo" && (
          <ul className="preparo-list">
            {preparoText.split("\n").map((linha, idx) => linha.trim() && <li key={idx}>{linha.trim()}</li>)}
          </ul>
        )}

        {activeTab === "ingredientes" && (
          <ul className="ingredientes-list">
            {ingredientesText.split("\n").map((linha, idx) => linha.trim() && <li key={idx}>{linha.trim()}</li>)}
          </ul>
        )}
      </div>
    </div>
  );
}
