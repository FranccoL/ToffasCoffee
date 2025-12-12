import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useCart } from "../../context/CartContext"; 
import "./CafeGraoProduct.css";

export default function CafeGraoProduct() {
  const [activeTab, setActiveTab] = useState("descricao");
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Texto ajustado
  const descricaoText = `
Um café torrado em grãos cuidadosamente selecionado para oferecer um sabor encorpado e aroma marcante. 

`;

  const preparoText = `
Moagem: moa os grãos na hora para garantir frescor e aroma intenso.
Quantidade: use aproximadamente 1 a 2 colheres de sopa de café para cada 100 ml de água, ajustando conforme a intensidade desejada.
Água: prefira água filtrada ou mineral, aquecida a cerca de 90–95°C (não deixe ferver).
Extração: prepare no método escolhido — coador, prensa francesa, cafeteira italiana ou espresso.
Serviço: sirva imediatamente após a extração para apreciar a complexidade da bebida.
Dica: experimente combinar com leite vaporizado, espuma cremosa ou apenas puro.
`;

  const ingredientesText = `
Grãos de café 100% Arábica (ou blend específico dependendo da importação).
Não contém glúten, lactose ou aditivos.
`;

  const goBack = () => navigate(-1);

  // Pesos disponíveis
  const pesosDisponiveis = ["250g", "500g", "1kg"];
  const [selectedWeight, setSelectedWeight] = useState("250g");

  const precoPorPeso = {
    "250g": "R$ 12.50",
    "500g": "R$ 22.50",
    "1kg": "R$ 42.50",
  };

  const [quantidade, setQuantidade] = useState(1);
  const [selectedGrind, setSelectedGrind] = useState(""); // "", "Fina", "Média", "Grossa"
  const grindPrice = 2.5;

  const produto = {
    id: "cafe",
    nome: "Café Torrado em Grãos",
    categoria: "coffee",
    imagem: "/grao1.svg",
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

          {/* Opção de moagem */}
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
                quantidade
              );
            }}
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
