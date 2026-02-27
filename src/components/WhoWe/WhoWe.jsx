import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Coffee, Leaf, Award} from 'lucide-react';
import './WhoWe.css';

export default function WhoWe() {
  return (
    <div className="whowe-page">

      {/* Hero */}
      <section className="whowe-hero">
        <div className="whowe-hero-overlay" />
        <img
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2000&auto=format&fit=crop"
          alt="Quem Somos"
          className="whowe-hero-img"
        />
        <motion.div
          className="whowe-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="whowe-hero-eyebrow">Nossa História</span>
          <h1 className="whowe-hero-title">Quem Somos</h1>
          <div className="whowe-hero-divider" />
          <p className="whowe-hero-sub">
            Um blend de grãos selecionados com o objetivo de oferecer um café de alta qualidade para os paladares mais exigentes.
          </p>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="whowe-intro">
        <motion.div
          className="whowe-intro-inner"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="whowe-eyebrow">TOFFA'S COFFEE</span>
          <h2 className="whowe-intro-title">Sabor. Aroma. Corpo.</h2>
          <p className="whowe-intro-text">
            TOFFA'S COFFEE é um blend de grãos selecionados com o objetivo de adquirir um café de alta qualidade para agradar os paladares mais exigentes e requintados.
            <strong> Sabor, Aroma e Corpo</strong> são os 3 pontos básicos para a apreciação dessa bebida.
            Nosso objetivo: deliciar os consumidores com um excelente café unindo os sentidos e o espírito.
          </p>

          <div className="whowe-pillars">
            {[
              { icon: <Coffee size={26} />, label: 'Sabor', desc: 'Rico e marcante' },
              { icon: <Leaf size={26} />, label: 'Aroma', desc: 'Intenso e envolvente' },
              { icon: <Award size={26} />, label: 'Corpo', desc: 'Encorpado e suave' },
            ].map((p, i) => (
              <motion.div
                key={i}
                className="whowe-pillar"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="whowe-pillar-icon">{p.icon}</div>
                <span className="whowe-pillar-label">{p.label}</span>
                <span className="whowe-pillar-desc">{p.desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Card 1 */}
      <section className="whowe-section whowe-section-light">
        <div className="whowe-card-grid">
          <motion.div
            className="whowe-card-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="whowe-eyebrow">Nossa Essência</span>
            <h2 className="whowe-card-title">O Compromisso por Trás de Cada Gole</h2>
            <div className="whowe-title-line" />
            <p className="whowe-card-body">
              Uma boa xícara de café reflete o esforço e dedicação de muitas pessoas que fazem desta bebida um elixir tão apreciado pelo mundo. Cada grão carrega uma história.
            </p>
            <Link to="/loja" className="whowe-btn">
              Conheça nossos produtos
            </Link>
          </motion.div>
          <motion.div
            className="whowe-card-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop"
              alt="Arte do Café"
            />
          </motion.div>
        </div>
      </section>

    </div>
  );
}