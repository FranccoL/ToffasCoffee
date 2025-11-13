import React from "react";
import "./HeroStore.css";

export default function HeroStore() {
  const scrollToCatalog = () => {
    const section = document.getElementById("catalogo");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-store-container">
      <div className="hero-store-video-wrapper">
        <video
          className="hero-store-video"
          src="/videocafe.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="hero-store-content">
        <h1>SABORES ESPECIAIS PARA TODOS OS MOMENTOS</h1>
        <p>
          Descubra nossa seleção de cafés, chocolates, chás e cappuccinos criados com cuidado para oferecer uma experiência de sabor autêntica e inesquecível.
        </p>
        <button onClick={scrollToCatalog}>Ver Produtos</button>
      </div>
    </section>
  );
}
