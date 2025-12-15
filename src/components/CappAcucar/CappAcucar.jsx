import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useCart } from "../../context/CartContext"; 
import "./CappAcucar.css";

export default function CappAcucar() {
  const [activeTab, setActiveTab] = useState("descricao");
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const preparoText = `
Coloque 2 colheres de sopa de Cappuccino Zero Açúcar Toffa’s.
Adicione 100mL de água quente.
Misture bem com uma colher ou mixer (recomendado).
Pronto! Agora é só aproveitar um cappuccino cremoso e equilibrado.
  `;

  const ingredientesText = `
Composto lácteo (leite integral e/ou leite integral reconstituído, 
soro de leite e/ou soro de leite reconstituído, leitelho, creme de leite, 
creme de soro de leite, mix de vitaminas e minerais – vitaminas A, C, D e ferro); 
soro de leite em pó parcialmente desmineralizado; café solúvel; leite em pó integral; 
cacau em pó alcalino; canela em pó; sal; regulador de acidez bicarbonato de sódio; 
antiumectantes dióxido de silício e fosfato tricálcico; espessante carboximetilcelulose sódica; 
emulsificante lecitina de soja; edulcorantes acessulfame de potássio e aspartame.
CONTÉM LACTOSE. ALÉRGICOS: CONTÉM LEITE E DERIVADOS DE LEITE E SOJA.
NÃO CONTÉM GLÚTEN.
  `;

  const goBack = () => navigate(-1);

  const pesosDisponiveis = ["250g", "500g", "1kg"];
  const [selectedWeight, setSelectedWeight] = useState("250g");

  const precoPorPeso = {
    "250g": "R$ 27,50",
    "500g": "R$ 50,00",
    "1kg": "R$ 99,95",
  };

  const produto = {
    id: "cappuccino-zero",
    nome: "Cappuccino Zero Açúcar Toffa's",
    categoria: "cap",
    imagem: "/cappA.svg",
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
            Cappuccino solúvel zero açúcar, desenvolvido para oferecer sabor
            equilibrado, cremosidade e praticidade. Ideal para quem busca uma
            bebida quente com menos açúcar, sem abrir mão do aroma do café
            e da suavidade do leite.
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
            O Cappuccino Zero Açúcar Toffa’s é uma bebida solúvel prática
            e saborosa, ideal para o dia a dia. Sua fórmula garante
            cremosidade e equilíbrio nutricional em um preparo rápido
            e simples.
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
                <th>Quantidade (20g)</th>
                <th>%VD</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Valor Energético</td><td>77 kcal</td><td>4%</td></tr>
              <tr><td>Carboidratos</td><td>11 g</td><td>4%</td></tr>
              <tr><td>Açúcares Totais</td><td>10 g</td><td>—</td></tr>
              <tr><td>Açúcares Adicionados</td><td>0 g</td><td>0%</td></tr>
              <tr><td>Proteínas</td><td>3 g</td><td>6%</td></tr>
              <tr><td>Gorduras Totais</td><td>2,2 g</td><td>3%</td></tr>
              <tr><td>Gorduras Saturadas</td><td>1,4 g</td><td>7%</td></tr>
              <tr><td>Gorduras Trans</td><td>0 g</td><td>0%</td></tr>
              <tr><td>Fibra Alimentar</td><td>0 g</td><td>0%</td></tr>
              <tr><td>Sódio</td><td>199 mg</td><td>10%</td></tr>
              <tr><td>Cálcio</td><td>200 mg</td><td>20%</td></tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
