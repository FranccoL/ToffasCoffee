import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useCart } from "../../context/CartContext";
import "./ProductPagePZ.css";

export default function ProductPagePZ() {
  const [activeTab, setActiveTab] = useState("descricao");
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const preparoText = `
Coloque 3 a 4 colheres de sopa de Toffa’s Chá Mate de Pêssego Zero Açúcar.
Adicione 300mL de água fria com gelo ou quente.
Misture bem com uma colher ou mixer (recomendado).
Pronto! Agora é só saborear seu chá refrescante e cheio de sabor. 
  `;

  const ingredientesText = `
Maltodextrina, mate solúvel (Ilex paraguariensis), aroma idêntico ao natural de pêssego, acidulante ácido cítrico, antiumectante dióxido de silício e fosfato tricálcico.
*ZERO AÇÚCAR ADICIONADO.
  `;

  const goBack = () => navigate(-1);

  const pesosDisponiveis = ["250g", "500g", "1kg"];
  const [selectedWeight, setSelectedWeight] = useState("250g");

  const precoPorPeso = {
    "250g": "R$ 24,00",
    "500g": "R$ 42,00",
    "1kg": "R$ 77,00",
  };

  const produto = {
    id: "cha-pessego-zero",
    nome: "Chá Mate de Pêssego Zero Açúcar*",
    categoria: "tea",
    imagem: "/pessegozero.svg",
  };

  return (
    <div className="product-page">
      <button className="back-link" onClick={goBack}>
        ← Voltar
      </button>

      <div className="product-content">
        <div className="product-image-box">
          <img src={produto.imagem} alt={produto.nome} />
        </div>

        <div className="product-info">
          <span className="product-tag">CHÁ</span>
          <h1>{produto.nome}</h1>
          <h2>{precoPorPeso[selectedWeight]}</h2>

          <p className="product-desc">
            Blend refrescante com notas suaves e adocicadas. Uma bebida leve,
            saborosa e perfeita para qualquer momento do dia.
          </p>

          <div className="peso-badges-inline">
            {pesosDisponiveis.map((peso) => (
              <button
                key={peso}
                className={`peso-badge-btn ${
                  selectedWeight === peso ? "active" : ""
                }`}
                onClick={() => setSelectedWeight(peso)}
              >
                {peso}
              </button>
            ))}
          </div>

          <button
            className="add-cart-btn"
            onClick={() =>
              addToCart(
                { ...produto, peso: selectedWeight },
                selectedWeight,
                precoPorPeso[selectedWeight]
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

        <button
          className={`tab ${activeTab === "tabela" ? "active" : ""}`}
          onClick={() => setActiveTab("tabela")}
        >
          Tabela Nutricional
        </button>
      </div>

      {/* CONTEÚDO */}
      <div className="text-section">
        {activeTab === "descricao" && (
          <p>
            A Toffa’s traz para você uma seleção de Mates com blends de flores
            e frutas. O chá preparado com mate é naturalmente doce,
            aromático e perfeito para quem busca uma bebida leve e saborosa.
          </p>
        )}

        {activeTab === "preparo" && (
          <p className="formatted-text">{preparoText}</p>
        )}

        {activeTab === "ingredientes" && (
          <p className="formatted-text">{ingredientesText}</p>
        )}

        {activeTab === "tabela" && (
          <table className="nutrition-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantidade</th>
                <th>%VD</th>
              </tr>
            </thead>
            <tbody>
                <tr><td>Valor Energético</td><td>75 kcal</td><td>4%</td></tr>
                <tr><td>Carboidratos</td><td>19 g</td><td>6%</td></tr>
                <tr><td>Açúcares Totais</td><td>1,1 g</td><td>—</td></tr>
                <tr><td>Açúcares Adicionados</td><td>0 g</td><td>0%</td></tr>
                <tr><td>Proteínas</td><td>0 g</td><td>0%</td></tr>
                <tr><td>Gorduras Totais</td><td>0 g</td><td>0%</td></tr>
                <tr><td>Gorduras Saturadas</td><td>0 g</td><td>0%</td></tr>
                <tr><td>Gorduras Trans</td><td>0 g</td><td>0%</td></tr>
                <tr><td>Fibras Alimentares</td><td>0 g</td><td>0%</td></tr>
                <tr><td>Sódio</td><td>5,6 mg</td><td>0%</td></tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
