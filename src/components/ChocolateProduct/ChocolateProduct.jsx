import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useCart } from "../../context/CartContext";
import "./ChocolateProduct.css";

export default function ChocolateProduct() {
  const [activeTab, setActiveTab] = useState("descricao");
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const preparoText = `
Coloque 3 a 4 colheres de sopa de Chocolate Toffa’s.
Adicione 200mL de água quente.
Misture bem com uma colher ou mixer (recomendado).
Pronto! Agora é só saborear um chocolate cremoso e aconchegante.
  `;

  const ingredientesText = `
Açúcar; leite em pó integral; maltodextrina; cacau em pó; sal; canela; 
antiumectante dióxido de silício; espessantes carboximetilcelulose e 
goma xantana e aromatizantes.
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
    id: "chocolate",
    nome: "Chocolate Toffa's",
    categoria: "hot",
    imagem: "/chocolate1.svg",
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
          <span className="product-tag">BEBIDAS QUENTES</span>
          <h1>{produto.nome}</h1>
          <h2>{precoPorPeso[selectedWeight]}</h2>

          <p className="product-desc">
            Chocolate solúvel com sabor intenso de cacau e textura cremosa.
            Desenvolvido para dissolver facilmente em água quente, entrega uma
            bebida encorpada, reconfortante e perfeita para qualquer momento
            do dia.
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
            O Chocolate Toffa’s é uma bebida solúvel prática e saborosa,
            ideal para quem busca conforto e intensidade de sabor.
            Seu preparo rápido garante cremosidade e aroma marcante
            em poucos segundos.
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
              <tr><td>Valor Energético</td><td>168 kcal</td><td>8%</td></tr>
              <tr><td>Carboidratos</td><td>27 g</td><td>9%</td></tr>
              <tr><td>Proteínas</td><td>4,7 g</td><td>6%</td></tr>
              <tr><td>Gorduras Totais</td><td>4,5 g</td><td>8%</td></tr>
              <tr><td>Gorduras Saturadas</td><td>2,0 g</td><td>9%</td></tr>
              <tr><td>Gorduras Trans</td><td>0 g</td><td>—</td></tr>
              <tr><td>Fibra Alimentar</td><td>1,0 g</td><td>4%</td></tr>
              <tr><td>Sódio</td><td>120 mg</td><td>5%</td></tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
