import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useCart } from "../../context/CartContext";
import "./ProductCafePremium.css";

export default function ProductCafePremium() {
  const [activeTab, setActiveTab] = useState("descricao");
  const { addToCart } = useCart(); 
  const navigate = useNavigate();

  const [selectedGrind, setSelectedGrind] = useState(""); // "", "Fina", "Média", "Grossa"
  const grindPrice = 2.5; // Taxa de moagem



  const preparoText = `
Moagem: Moa os grãos na hora para garantir frescor e aroma intenso. Para cafeteira elétrica ou coador, use moagem média; para prensa francesa, moagem mais grossa.

Quantidade: Use aproximadamente 1 a 2 colheres de sopa de café para cada 100 ml de água, ajustando conforme a intensidade desejada.

Água: Prefira água filtrada ou mineral, aquecida a cerca de 90–95°C (não deixe ferver).

Extração: Prepare no método escolhido — coador, prensa francesa, cafeteira italiana ou espresso — para realçar o sabor e aroma característicos do grão.

Serviço: Sirva imediatamente após a extração para apreciar o frescor e a complexidade da bebida.

Dica: Experimente combinar com leite vaporizado, espuma cremosa ou apenas puro, para sentir todas as nuances do café importado.
  `;

  const ingredientesText = `
Grãos de café 100% Arábica (ou blend específico dependendo da importação).
Não contém glúten, lactose ou aditivos
  `;

  const goBack = () => {
    navigate(-1);
  };

  // Pesos disponíveis
  const pesosDisponiveis = ["250g", "500g", "1kg"];
  const [selectedWeight, setSelectedWeight] = useState("250g");

  const precoPorPeso = {
    "250g": "R$ 27.00",
    "500g": "R$ 49.90",
    "1kg": "R$ 95.20",
  };

  const produto = {
    id: "cafePremium",
    nome: "Café Torrado em Grãos - Importado",
    categoria: "cafe",
    imagem: "/premium.svg",
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

          <p className="product-desc">
            Grãos selecionados de alta qualidade, torrados na medida certa para liberar aromas intensos e sabor encorpado. 
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
            <div className="grind-options">
              <span className="grind-label">Deseja que moamos para você? (Taxa R$ 2,50)</span>
              <div className="grind-buttons">
                {["Fina", "Média", "Grossa"].map((grind) => (
              <button
                key={grind}
                type="button"
                className={`grind-btn ${selectedGrind === grind ? "active" : ""}`}
                onClick={() => setSelectedGrind(prev => prev === grind ? "" : grind)} // toggle
              >
                {grind}
              </button>
                ))}
              </div>
            </div>
          {/* Adicionar ao carrinho */}
                <button
                  className="add-cart-btn"
                  onClick={() => {
                    const basePrice = parseFloat(precoPorPeso[selectedWeight].replace("R$ ", "").replace(",", ".")); 
                    const totalPrice = selectedGrind ? basePrice + grindPrice : basePrice;

                    addToCart(
                      { ...produto, peso: selectedWeight, moagem: selectedGrind || "Não" },
                      selectedWeight,
                      totalPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
                      1
                    );
                  }}
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
            Este café importado é composto por grãos selecionados das melhores regiões produtoras do mundo. Torrados cuidadosamente para realçar notas aromáticas únicas, ele oferece um sabor encorpado e equilibrado, com leveza e doçura natural. Cada xícara revela aromas intensos e persistentes, transportando você para uma experiência sensorial completa.
          </p>
        )}

        {activeTab === "preparo" && (
          <ul className="preparo-list">
    <li><strong>Moagem:</strong> Moa os grãos na hora para garantir frescor e aroma intenso. Para cafeteira elétrica ou coador, use moagem média; para prensa francesa, moagem mais grossa.</li>
    <li><strong>Quantidade:</strong> Use aproximadamente 1 a 2 colheres de sopa de café para cada 100 ml de água, ajustando conforme a intensidade desejada.</li>
    <li><strong>Água:</strong> Prefira água filtrada ou mineral, aquecida a cerca de 90–95°C (não deixe ferver).</li>
    <li><strong>Extração:</strong> Prepare no método escolhido — coador, prensa francesa, cafeteira italiana ou espresso — para realçar o sabor e aroma característicos do grão.</li>
    <li><strong>Serviço:</strong> Sirva imediatamente após a extração para apreciar o frescor e a complexidade da bebida.</li>
    <li><strong>Dica:</strong> Experimente combinar com leite vaporizado, espuma cremosa ou apenas puro, para sentir todas as nuances do café importado.</li>
  </ul>
        )}

        {activeTab === "ingredientes" && (
          <ul className="ingredientes-list">
    <li>
      Grãos de café 100% Arábica (ou blend específico dependendo da importação)
    </li>
    <li>
      <strong>Não contém glúten, lactose ou aditivos</strong>
    </li>
  </ul>
        )}
      </div>
    </div>
  );
}
