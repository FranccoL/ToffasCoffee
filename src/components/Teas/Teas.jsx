import React from "react";
import { Link } from "react-router-dom";
import "./Teas.css";

// Ícones corretos (e garantidos)
import { GiStrawberry, GiLemon, GiPeach } from "react-icons/gi";

export default function Teas() {
  return (
    <div className="teas-page">

      {/* HERO */}
      <section className="teas-hero">
        <div className="teas-hero-image">
          <img src="/bannerCha.svg" alt="Tea Background" />
        </div>

        <div className="teas-hero-content">
          <h1>O Mundo dos Chás Solúveis</h1>
          <p>
            Descubra sabores incríveis e práticos para o seu dia a dia. 
            Nossos chás solúveis são fáceis de preparar e cheios de aroma.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="teas-intro">
        <span className="teas-intro-tag">Nossa Seleção</span>
        <h2>Por que escolher nossos chás?</h2>
        <p className="teas-intro-text">
          Trabalhamos com chás solúveis selecionados para oferecer praticidade,
          sabor e qualidade. Basta misturar com água e aproveitar uma experiência
          deliciosa em segundos.
        </p>
      </section>

      {/* GRID */}
      <section className="teas-grid">

  {/* FRUTAS VERMELHAS */}
  <div className="teas-grid-item">
    <Link to="/chaV" className="tea-link">
      <div className="teas-icon red">
        <GiStrawberry size={36} />
      </div>
      <h3>Chá Preto de Frutas Vermelhas</h3>
      <p>Sabor marcante com toque frutado perfeito para qualquer momento.</p>
    </Link>
  </div>

  {/* LIMÃO */}
  <div className="teas-grid-item">
    <Link to="/chaL" className="tea-link">
      <div className="teas-icon yellow">
        <GiLemon size={36} />
      </div>
      <h3>Chá Mate de Limão</h3>
      <p>Refrescante e equilibrado, ideal para quem busca leveza e energia.</p>
    </Link>
  </div>

  {/* PÊSSEGO */}
  <div className="teas-grid-item">
    <Link to="/chaP" className="tea-link">
      <div className="teas-icon peach">
        <GiPeach size={36} />
      </div>
      <h3>Chá Mate de Pêssego</h3>
      <p>Levemente adocicado e aromático — perfeito para relaxar.</p>
    </Link>
  </div>

</section>

      {/* BENEFÍCIOS */}
      <section className="teas-benefits">
        <div className="teas-benefits-image">
           <img 
            src="Group 91.svg"
            alt="Coffee Cups"
          />
        </div>

        <div className="teas-benefits-content">
          <h2>Benefícios para sua Saúde</h2>

          <div className="teas-benefit-item">
            <div className="benefit-icon"><GiStrawberry size={24} /></div>
            <div>
              <h4>Fácil de Preparar</h4>
              <p>Basta misturar com água quente ou gelada. Praticidade total.</p>
            </div>
          </div>

          <div className="teas-benefit-item">
            <div className="benefit-icon"><GiLemon size={24} /></div>
            <div>
              <h4>Hidratação com Sabor</h4>
              <p>Uma alternativa deliciosa para aumentar a ingestão de líquidos.</p>
            </div>
          </div>

          <div className="teas-benefit-item">
            <div className="benefit-icon"><GiPeach size={24} /></div>
            <div>
              <h4>Momento de Pausa</h4>
              <p>Aprecie um sabor suave e relaxante a qualquer hora.</p>
            </div>
          </div>

          <div className="teas-button-wrap">
            <Link to="/loja?category=cha">
              <button className="teas-button">
                Ver Nossos Chás →
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
