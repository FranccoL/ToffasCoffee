import { Link } from "react-router-dom";
import "./Coffee.css";
import { LiaSeedlingSolid } from "react-icons/lia";
import { GiWheat, GiCoffeeCup, GiCoffeeBeans } from "react-icons/gi";
import { GiCoffeePot } from "react-icons/gi";

export default function Coffee() {
  const produtos = [
    {
      id: "cafeMoido",
      nome: "Café Torrado e Moído",
      descricao: "Sabor intenso e aroma marcante, pronto para sua cafeteira ou coador.",
      icone: <GiCoffeeCup size={36} />,
      cor: "brown",
      link: "/cafeMoido",
    },
    {
      id: "cafeGrao",
      nome: "Café Torrado em Grãos",
      descricao: "Grãos selecionados, frescos e perfeitos para moer na hora e extrair sabor máximo.",
      icone: <GiCoffeeBeans size={36} />,
      cor: "darkbrown",
      link: "/cafeGrao",
    },
    {
      id: "cafePremium",
      nome: "Café Importado",
      descricao: "Variedades internacionais de café, selecionadas para experiências únicas de sabor.",
      icone: <LiaSeedlingSolid size={36} />,
      cor: "golden",
      link: "/cafePremium",
    },
  ];

  return (
    <div className="coffee-page">

      {/* HERO */}
      <section className="coffee-hero">
        <div className="coffee-hero-image">
          <img src="/bannercafe.svg" alt="Coffee Background" />
        </div>
        <div className="coffee-hero-content">
          <h1>O Mundo dos Cafés</h1>
          <p>
            Descubra cafés selecionados, torrados e moídos, prontos para você
            saborear. Aromas intensos e qualidade em cada xícara.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="coffee-intro">
        <span className="coffee-intro-tag">Nossa Seleção</span>
        <h2>Por que escolher nossos cafés?</h2>
        <p className="coffee-intro-text">
          Cafés de alta qualidade, cuidadosamente selecionados e torrados
          para oferecer sabor e aroma únicos. Ideal para qualquer momento do dia.
        </p>
      </section>

      {/* GRID DE PRODUTOS */}
      <section className="coffee-grid">
        {produtos.map((prod) => (
          <div className="coffee-grid-item" key={prod.id}>
            <Link to={prod.link} className="coffee-link">
              <div className={`coffee-icon ${prod.cor}`}>{prod.icone}</div>
              <h3>{prod.nome}</h3>
              <p>{prod.descricao}</p>
            </Link>
          </div>
        ))}
      </section>

      {/* BENEFÍCIOS */}
      <section className="coffee-benefits">
        <div className="coffee-benefits-image">
          <img 
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80"
            alt="Coffee Cups"
          />
        </div>
        <div className="coffee-benefits-content">
          <h2>Benefícios do Café</h2>

          <div className="coffee-benefit-item">
            <div className="benefit-icon"><GiCoffeeCup size={24} /></div>
            <div>
              <h4>Energizante</h4>
              <p>O café ajuda a manter você alerta e com disposição ao longo do dia.</p>
            </div>
          </div>

          <div className="coffee-benefit-item">
            <div className="benefit-icon"><GiCoffeeBeans size={24} /></div>
            <div>
              <h4>Aroma e Sabor</h4>
              <p>Grãos selecionados garantem uma bebida com aroma intenso e sabor único.</p>
            </div>
          </div>

          <div className="coffee-benefit-item">
            <div className="benefit-icon"><GiCoffeePot size={24} /></div>
            <div>
              <h4>Variedade</h4>
              <p>Opções nacionais e importadas para agradar todos os paladares.</p>
            </div>
          </div>

          <div className="coffee-benefit-item">
            <div className="benefit-icon" style={{ position: 'relative' }}>
              <GiWheat size={24} />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderTop: '2px solid red',
                transform: 'rotate(45deg)'
              }} />
            </div>
            <div>
              <h4>Sem Glúten</h4>
              <p>Todos os nossos cafés são naturalmente livres de glúten.</p>
            </div>
          </div>

          <div className="coffee-button-wrap">
            <Link to={`/loja?category=coffee`}>
              <button className="coffee-button">
                Ver Cafés →
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
