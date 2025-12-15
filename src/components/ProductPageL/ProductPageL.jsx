import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useCart } from "../../context/CartContext";
import "./ProductPageL.css";

export default function ProductPageL() {
  const [activeTab, setActiveTab] = useState("descricao");
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const preparoText = `
Coloque 3 a 4 colheres de sopa de Toffa’s Chá Mate de Limão.
Adicione 300mL de água fria com gelo ou quente.
Misture bem com uma colher ou mixer (recomendado).
Pronto! Agora é só saborear seu chá refrescante e cheio de sabor. 
  `;

  const ingredientesText = `
Açúcar; extrato de mate; suco desidratado de limão; 
vitamina C (ácido ascórbico); acidulante ácido cítrico; 
antiumectante dióxido de silício e aromatizante.
NÃO CONTÉM GLÚTEN.
  `;

  const goBack = () => navigate(-1);

  const pesosDisponiveis = ["250g", "500g", "1kg"];
  const [selectedWeight, setSelectedWeight] = useState("250g");

  const precoPorPeso = {
    "250g": "R$ 12,50",
    "500g": "R$ 22,50",
    "1kg": "R$ 42,50",
  };

  const produto = {
    id: "cha-limao",
    nome: "Chá Mate de Limão",
    categoria: "tea",
    imagem: "/limao.svg",
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
            Blend refrescante de chá mate solúvel com sabor cítrico de limão.
            Possui preparo rápido e fácil, dissolvendo perfeitamente em água
            quente ou fria, mantendo aroma e frescor. Ideal para quem busca
            praticidade, leveza e um sabor equilibrado no dia a dia.
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
            A Toffa’s traz para você uma linha de chás mate solúveis com sabores
            refrescantes e preparo prático. O Chá Mate de Limão combina a
            intensidade do mate com a acidez equilibrada do limão, resultando
            em uma bebida leve, aromática e versátil.
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
              <tr><td>Valor Energético</td><td>391 kcal</td><td>—</td></tr>
              <tr><td>Carboidratos</td><td>97 g</td><td>—</td></tr>
              <tr><td>Açúcares Totais</td><td>83 g</td><td>—</td></tr>
              <tr><td>Açúcares Adicionados</td><td>83 g</td><td>—</td></tr>
              <tr><td>Proteínas</td><td>0,1 g</td><td>—</td></tr>
              <tr><td>Gorduras Totais</td><td>0,0 g</td><td>—</td></tr>
              <tr><td>Gorduras Saturadas</td><td>0,0 g</td><td>—</td></tr>
              <tr><td>Gorduras Trans</td><td>0,0 g</td><td>—</td></tr>
              <tr><td>Fibra Alimentar</td><td>0,0 g</td><td>—</td></tr>
              <tr><td>Sódio</td><td>5,1 mg</td><td>—</td></tr>
              <tr><td>Vitamina C</td><td>150 mg</td><td>—</td></tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
