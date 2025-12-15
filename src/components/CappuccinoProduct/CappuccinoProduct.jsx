import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useCart } from "../../context/CartContext";
import "./CappuccinoProduct.css";

export default function CappuccinoProduct() {
  const [activeTab, setActiveTab] = useState("descricao");
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const preparoText = `
Coloque 3 a 4 colheres de sopa de Cappuccino Toffa’s.
Adicione 200mL de água quente.
Misture bem com uma colher ou mixer (recomendado).
Pronto! Agora é só aproveitar um cappuccino cremoso e saboroso.
  `;

  const ingredientesText = `
Açúcar; soro de leite desmineralizado; leite integral em pó; 
café solúvel; cacau em pó; canela em pó; espessante goma guar; 
regulador de acidez bicarbonato de sódio; antiumectante dióxido 
de silício e aromatizante.
ALÉRGICOS: CONTÉM LEITE E DERIVADOS. CONTÉM LACTOSE.
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
    id: "cappuccino",
    nome: "Cappuccino Toffa's",
    categoria: "cap",
    imagem: "/capp.svg",
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
            Cappuccino solúvel com textura cremosa e sabor equilibrado de café,
            cacau e um toque suave de canela. Possui preparo rápido e fácil,
            dissolvendo perfeitamente em água quente, ideal para aquecer seus
            momentos com praticidade e conforto.
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
            O Cappuccino Toffa’s é uma bebida solúvel pensada para quem busca
            praticidade sem abrir mão de sabor e cremosidade. Ideal para o
            consumo diário, proporciona uma experiência aconchegante com
            preparo rápido e aroma marcante.
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
              <tr><td>Valor Energético</td><td>157 kcal</td><td>8%</td></tr>
              <tr><td>Carboidratos</td><td>30,0 g</td><td>10%</td></tr>
              <tr><td>Proteínas</td><td>4,1 g</td><td>6%</td></tr>
              <tr><td>Gorduras Totais</td><td>2,4 g</td><td>4%</td></tr>
              <tr><td>Gorduras Saturadas</td><td>1,1 g</td><td>5%</td></tr>
              <tr><td>Gorduras Trans</td><td>0 g</td><td>—</td></tr>
              <tr><td>Fibra Alimentar</td><td>1,0 g</td><td>4%</td></tr>
              <tr><td>Sódio</td><td>280 mg</td><td>12%</td></tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
