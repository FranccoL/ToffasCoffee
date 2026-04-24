import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useCart } from "../../context/CartContext";
import "./PistacheProduct.css";

export default function CappuccinoProduct() {
  const [activeTab, setActiveTab] = useState("descricao");
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const preparoText = `
Coloque 1 a 2 colheres de sopa de Toffa’s Cappuccino de Pistache. Adicione 100mL de água quente ou leite. Misture bem com uma colher ou mixer (recomendado). Pronto! 
  `;

  const ingredientesText = `
Açúcar, leite integral, soro de leite, café solúvel, aroma idêntico ao natural de pistache, espessante carboximetilcelulose sódica, regulador de acidez bicarbonato de sódio e antiumectante dióxido de silício.
ALÉRGICOS: CONTÉM LEITE E DERIVADOS. CONTÉM LACTOSE.
NÃO CONTÉM GLÚTEN.
  `;

  const goBack = () => navigate(-1);

  const pesosDisponiveis = ["250g", "500g", "1kg"];
  const [selectedWeight, setSelectedWeight] = useState("250g");

  const precoPorPeso = {
    "250g": "R$ 23,40",
    "500g": "R$ 39,15",
    "1kg": "R$ 73,85",
  };

  const produto = {
    id: "pistache",
    nome: "Cappuccino de Pistache Toffa's",
    categoria: "cap",
    imagem: "/pistache.svg",
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
            Cappuccino solúvel com textura extremamente cremosa e o sabor marcante e sofisticado do pistache. Com um equilíbrio perfeito entre as notas torradas do café e a delicadeza da castanha, ele oferece uma experiência gourmet de preparo rápido. Dissolve-se perfeitamente em água quente, sendo a escolha ideal para transformar sua pausa em um momento de puro requinte e conforto.
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
            O Cappuccino de Pistache do Toffa’s é uma bebida solúvel pensada para quem busca sofisticação e praticidade sem abrir mão de uma cremosidade única. Ideal para o consumo diário, proporciona uma experiência gourmet e aconchegante, unindo o aroma marcante do café ao toque distinto do pistache em um preparo rápido e irresistível.
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
              <tr><td>Valor Energético</td><td>71 kcal</td><td>4%</td></tr>
                <tr><td>Carboidratos</td><td>30,0 g</td><td>10%</td></tr>
                <tr><td>Açúcares Totais</td><td>10 g</td><td>—</td></tr>
                <tr><td>Açúcares Adicionados</td><td>7,3 g</td><td>15%</td></tr>
                <tr><td>Proteínas</td><td>14 g</td><td>5%</td></tr>
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
