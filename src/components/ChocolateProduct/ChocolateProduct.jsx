import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useCart } from "../../context/CartContext"; // ✅ Importar useCart
import "./ChocolateProduct.css";

export default function ChocolateProduct() {
  const [activeTab, setActiveTab] = useState("descricao");
  const { addToCart } = useCart(); // função do contexto
  const navigate = useNavigate();

  const preparoText = `
Coloque 3 a 4 colheres de sopa de Toffa’s Chá de Limão.
Adicione 300mL de água quente.
Misture bem com uma colher ou mixer (recomendado).
Pronto! Agora é só saborear seu chá refrescante e cheio de sabor. 
  `;

  const ingredientesText = `
Folhas de chá mate selecionado, limão desidratado,
erva-cidreira, aroma natural de limão.
  `;

  const goBack = () => {
    navigate(-1);
  };

  // Pesos disponíveis
  const pesosDisponiveis = ["250g", "500g", "1kg"];
  const [selectedWeight, setSelectedWeight] = useState("250g");

  const precoPorPeso = {
    "250g": "R$ 12.50",
    "500g": "R$ 22.50",
    "1kg": "R$ 42.50",
  };

  const produto = {
    id: "cappuccino",
    nome: "Cappuccino Toffa's",
    categoria: "cap",
    imagem: "/chocolate1.svg",
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
          <span className="product-tag">Bebidas Quentes</span>
          <h1>{produto.nome}</h1>
          <h2>{precoPorPeso[selectedWeight]}</h2>

          <p className="product-desc">
            Blend refrescante com notas suaves e adocicadas. Uma bebida leve,
            saborosa e perfeita para qualquer momento do dia.
          </p>

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
                1 // quantidade padrão = 1
              )
            }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>

      {/* TABS */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === "descricao" ? "active" : ""}`}
          onClick={() => setActiveTab("descricao")}
        >
          Descrição
        </button>

        <button
          className={`tab ${activeTab === "preparo" ? "active" : ""}`}
          onClick={() => setActiveTab("preparo")}
        >
          Modo de preparo
        </button>

        <button
          className={`tab ${activeTab === "ingredientes" ? "active" : ""}`}
          onClick={() => setActiveTab("ingredientes")}
        >
          Ingredientes
        </button>
      </div>

      {/* TEXT CONTENT */}
      <div className="text-section">
        {activeTab === "descricao" && (
          <p>
            A Toffa’s traz para você uma seleção de Mates com blends de flores
            e frutas. O chá preparado com mate é naturalmente doce, aromático e
            perfeito para quem busca uma bebida leve e saborosa.
          </p>
        )}

        {activeTab === "preparo" && (
          <p className="formatted-text">{preparoText}</p>
        )}

        {activeTab === "ingredientes" && (
          <p className="formatted-text">{ingredientesText}</p>
        )}
      </div>
    </div>
  );
}
