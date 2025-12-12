// HotDrinks.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./HotDrinks.css";

// Ícones para as bebidas quentes
import { GiCoffeeCup, GiCupcake, GiChocolateBar } from "react-icons/gi";

export default function HotDrinks() {
  return (
    <div className="hotdrinks-page">

      {/* HERO */}
      <section className="hotdrinks-hero">
        <div className="hotdrinks-hero-image">
          <img src="/bebidasQuentes.svg" alt="Hot Drinks Background" />
        </div>

        <div className="hotdrinks-hero-content">
          <h1>O Mundo das Bebidas Quentes Solúveis</h1>
          <p>
            Aproveite Cappuccinos, Chocolates e outras bebidas quentes
            de maneira prática e deliciosa. Sabor e conforto em segundos.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="hotdrinks-intro">
        <span className="hotdrinks-intro-tag">Nossa Seleção</span>
        <h2>Por que escolher nossas bebidas quentes?</h2>
        <p className="hotdrinks-intro-text">
          Bebidas quentes solúveis selecionadas para oferecer praticidade,
          sabor e qualidade. Basta misturar com água ou leite e saborear!
        </p>
      </section>

      {/* GRID */}
      <section className="hotdrinks-grid">

  {/* CAPPUCCINO */}
  <div className="hotdrinks-grid-item">
    <Link to="/cappuccino" className="hotdrink-link">
      <div className="hotdrinks-icon brown">
        <GiCoffeeCup size={36} />
      </div>
      <h3>Cappuccino Clássico</h3>
      <p>Sabor cremoso e equilibrado, ideal para seu café da manhã.</p>
    </Link>
  </div>

  {/* CAPPUCCINO SEM AÇÚCAR */}
  <div className="hotdrinks-grid-item">
    <Link to="/cappuccinoSA" className="hotdrink-link">
      <div className="hotdrinks-icon green">
        <GiCupcake size={36} />
      </div>
      <h3>Cappuccino Sem Açúcar</h3>
      <p>Perfeito para quem deseja aproveitar o sabor sem adição de açúcar.</p>
    </Link>
  </div>

  {/* CHOCOLATE */}
  <div className="hotdrinks-grid-item">
    <Link to="/chocolate" className="hotdrink-link">
      <div className="hotdrinks-icon chocolate">
        <GiChocolateBar size={36} />
      </div>
      <h3>Chocolate Solúvel</h3>
      <p>Delicioso e cremoso, ideal para qualquer hora do dia.</p>
    </Link>
  </div>

</section>

      {/* BENEFÍCIOS */}
      <section className="hotdrinks-benefits">
        <div className="hotdrinks-benefits-image">
          <img 
            src="/Group 92.svg"
            alt="Hot Drinks"
          />
        </div>

        <div className="hotdrinks-benefits-content">
          <h2>Benefícios para seu Dia a Dia</h2>

          <div className="hotdrinks-benefit-item">
            <div className="benefit-icon"><GiCoffeeCup size={24} /></div>
            <div>
              <h4>Praticidade</h4>
              <p>Preparação rápida e simples, perfeito para qualquer rotina.</p>
            </div>
          </div>

          <div className="hotdrinks-benefit-item">
            <div className="benefit-icon"><GiCupcake size={24} /></div>
            <div>
              <h4>Sabor sem Culpa</h4>
              <p>Opções sem açúcar para quem quer cuidar da saúde sem perder o prazer.</p>
            </div>
          </div>

          <div className="hotdrinks-benefit-item">
            <div className="benefit-icon"><GiChocolateBar size={24} /></div>
            <div>
              <h4>Momento Aconchegante</h4>
              <p>Uma bebida quente e cremosa para relaxar e se aquecer.</p>
            </div>
          </div>

          <div className="hotdrinks-button-wrap">
            <Link to="/loja?category=cappuccino">
              <button className="hotdrinks-button">
                Ver Bebidas Quentes →
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
