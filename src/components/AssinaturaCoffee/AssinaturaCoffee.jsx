import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, Coffee, Gift, Sparkles, Truck, Pause, CalendarHeart,
  Star, Lock, Check, Tag, Package, MessageCircle
} from "lucide-react";
import "./AssinaturaCoffee.css"; // Link direto para o seu novo arquivo de estilo

const HERO_IMG     = "https://media.base44.com/images/public/6a01ec293f0228fa50150369/0ec740585_generated_1c79e2cf.png";
const BENEFITS_IMG = "https://media.base44.com/images/public/6a01ec293f0228fa50150369/276c500e6_generated_a6232c44.png";
const HOW_IMG      = "https://media.base44.com/images/public/6a01ec293f0228fa50150369/690b23383_generated_3e8d2618.png";
const WA_BASE      = "https://wa.me/5511915387618";

const levels = [
  {
    months: 1, label: "Grão",
    iconColor: "#92400e",
    unlocks: [
      { icon: Coffee,       text: "Cafés especiais selecionados mensalmente" },
      { icon: Pause,        text: "Pausa da assinatura por até 30 dias" },
      { icon: CalendarHeart, text: "Presente de aniversário exclusivo" },
    ],
  },
  {
    months: 3, label: "Blend",
    iconColor: "#57534e",
    unlocks: [
      { icon: Gift,   text: "Mimo surpresa na renovação trimestral" },
      { icon: Coffee, text: "Escolha de moagem e sabor preferido" },
      { icon: Star,   text: "Frete reduzido em todos os envios" },
    ],
  },
  {
    months: 6, label: "Reserva",
    iconColor: "#065f46",
    unlocks: [
      { icon: Sparkles, text: "Acesso antecipado a todos os lançamentos" },
      { icon: Gift,     text: "Brinde exclusivo de assinante semestral" },
      { icon: Star,     text: "Blend surpresa especial a cada renovação" },
    ],
  },
  {
    months: 12, label: "Premium",
    iconColor: "#92400e",
    unlocks: [
      { icon: Truck, text: "Frete grátis em todos os envios recorrentes" },
      { icon: Gift,  text: "Kit premium anual exclusivo" },
      { icon: Star,  text: "Canal VIP de atendimento prioritário" },
    ],
  },
];

const pacotes = [
  {
    months: 3, label: "Trimestral", discount: "X% OFF", icon: "☕",
    highlight: false, saving: "Economize em 3 pedidos", cta: "Fechar Trimestral",
    perks: [
      { icon: Tag,   text: "X% de desconto em cada envio" },
      { icon: Gift,  text: "Mimo especial na 1ª caixa" },
      { icon: Truck, text: "Frete reduzido" },
      { icon: Check, text: "Cafés especiais selecionados" },
      { icon: Check, text: "Escolha de moagem e sabor" },
    ],
  },
  {
    months: 6, label: "Semestral", discount: "X% OFF", icon: "🏆",
    highlight: true, saving: "Economize em 6 pedidos", cta: "Fechar Semestral",
    perks: [
      { icon: Tag,   text: "X% de desconto em cada envio" },
      { icon: Gift,  text: "Brinde exclusivo de assinante" },
      { icon: Star,  text: "Acesso antecipado a lançamentos" },
      { icon: Truck, text: "Frete reduzido em todos os envios" },
      { icon: Gift,  text: "Blend surpresa a cada renovação" },
      { icon: Check, text: "Escolha de moagem e sabor" },
    ],
  },
  {
    months: 12, label: "Anual", discount: "X% OFF", icon: "👑",
    highlight: false, saving: "Maior economia do ano", cta: "Fechar Anual",
    perks: [
      { icon: Tag,   text: "X% de desconto em cada envio" },
      { icon: Truck, text: "Frete grátis em todos os envios" },
      { icon: Gift,  text: "Kit premium anual exclusivo" },
      { icon: Star,  text: "Acesso antecipado a lançamentos" },
      { icon: Gift,  text: "Blend surpresa trimestral" },
      { icon: Star,  text: "Canal VIP de atendimento" },
    ],
  },
];

const steps = [
  { number: "01", title: "Escolha seu Plano",  description: "Selecione o plano que melhor se encaixa na sua rotina e no seu bolso." },
  { number: "02", title: "Personalize",         description: "Defina sua moagem preferida, sabor e frequência de entrega." },
  { number: "03", title: "Receba em Casa",      description: "Seu café especial chega na sua porta, fresquinho e pronto para degustar." },
];

export default function Assinatura() {
  const [activeTab, setActiveTab] = useState("assinatura");
  const [activeLevel, setActiveLevel] = useState(0);
  const level = levels[activeLevel];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const wa = (msg) => {
    window.open(`${WA_BASE}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleTab = (id) => {
    setActiveTab(id);
    setTimeout(() => scrollTo(id), 50);
  };

  return (
    <div className="clube-root">

      {/* ── HERO ── */}
      <section className="clube-hero">
  <div className="clube-hero__bg">
    {/* Trocado de <img> para <video> */}
    <video 
      src="videoassinatura.mp4"
      className="clube-hero__video"
      autoPlay 
      loop 
      muted 
      playsInline
    />
    <div className="clube-hero__overlay" />
  </div>
        <div className="clube-hero__content">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <span className="clube-hero__tag">Clube Exclusivo</span>
            <h1 className="clube-hero__title">
              Clube<br /><em>Toffa's</em> Coffee
            </h1>
            <p className="clube-hero__subtitle">
              Receba cafés especiais selecionados na sua porta todos os meses.
              Sabor, exclusividade e comodidade em cada xícara.
            </p>
            <div className="clube-hero__buttons">
              <button className="clube-btn clube-btn--primary" onClick={() => scrollTo("assinatura")}>
                Assine Agora
              </button>
              <button className="clube-btn clube-btn--outline" onClick={() => scrollTo("assinatura")}>
                Conheça os Benefícios
              </button>
            </div>
          </motion.div>
        </div>
        <motion.div className="clube-hero__scroll" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown style={{ width: 24, height: 24 }} />
        </motion.div>
      </section>

      {/* ── STICKY NAV ── */}
      <div className="clube-nav">
        <div className="clube-nav__inner">
          {[{ id: "assinatura", label: "☕ Assinatura" }, { id: "pacotes", label: "📦 Pacotes" }].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTab(tab.id)}
              className={`clube-tab ${activeTab === tab.id ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── ASSINATURA ── */}
      <section id="assinatura" className="clube-assinatura">
        <div className="clube-section-header">
          <span className="clube-eyebrow">Clube mensal</span>
          <h2 className="clube-section-title">Assinatura <em>Recorrente</em></h2>
          <p className="clube-section-subtitle">Assine mensalmente e evolua de nível conforme sua jornada cresce. Quanto mais tempo, mais benefícios desbloqueados.</p>
        </div>

        <div className="clube-levels">
          {levels.map((l, i) => (
            <button key={l.months} onClick={() => setActiveLevel(i)} className={`clube-level-btn ${activeLevel === i ? "active" : ""}`}>
              <span className="clube-level-btn__label">{l.months === 1 ? "Início" : `${l.months} meses`}</span>
              <span className="clube-level-btn__name">{l.label}</span>
              {i > 0 && <span className="clube-level-badge">Nível {i + 1}</span>}
            </button>
          ))}
        </div>

        <motion.div key={activeLevel} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="clube-level-detail">
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", fontWeight: 700, color: "#1e1a14", marginBottom: "0.5rem" }}>
              {activeLevel === 0 ? "Benefícios desde o 1º mês" : `Desbloqueado ao completar ${level.months} meses`}
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#6b5e4a", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              {activeLevel === 0
                ? "Desde o primeiro dia como assinante você já aproveita vantagens exclusivas."
                : `Ao completar ${level.months} meses de assinatura, você sobe para o nível ${level.label} e ganha acesso a:`}
            </p>
            <div className="clube-unlocks">
              {level.unlocks.map((u, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="clube-unlock-item">
                  <div className="clube-unlock-icon">
                    <u.icon style={{ width: 18, height: 18, color: "#4a6741" }} />
                  </div>
                  <span className="clube-unlock-text">{u.text}</span>
                </motion.div>
              ))}
            </div>
            {activeLevel < levels.length - 1 && (
              <div className="clube-progression">
                <Lock className="clube-progression__icon" />
                <p>Continue assinando até <strong>{levels[activeLevel + 1].months} meses</strong> para desbloquear o nível <strong>{levels[activeLevel + 1].label}</strong>.</p>
              </div>
            )}
            <button className="clube-start-btn" onClick={() => wa("Olá! Quero assinar o Clube Toffa's Coffee!")}>
              Começar Agora — Nível {levels[0].label}
            </button>
          </div>
          <div className="clube-level-image">
            <img src={BENEFITS_IMG} alt="Assinatura Toffa's Coffee" />
          </div>
        </motion.div>
      </section>

      {/* ── PACOTES ── */}
      <section id="pacotes" className="clube-pacotes">
        <div className="clube-section-header">
          <span className="clube-eyebrow">Compra fechada</span>
          <h2 className="clube-section-title">Pacotes com <em>Desconto</em></h2>
          <p className="clube-section-subtitle">Feche um pacote de 3, 6 ou 12 meses e garanta descontos progressivos. Quanto mais meses, maior a economia.</p>
        </div>

        <div className="clube-comparison">
          {pacotes.map((p) => (
            <div key={p.months} className="clube-comparison-item">
              <span>{p.icon}</span>
              <span>{p.months} meses</span>
              <span style={{ padding: "2px 8px", borderRadius: 9999, fontSize: 12, background: p.highlight ? "#4a6741" : "#e7e0d6", color: p.highlight ? "white" : "#6b5e4a", fontWeight: 700 }}>{p.discount}</span>
            </div>
          ))}
        </div>

        <div className="clube-cards">
          {pacotes.map((p, i) => (
            <motion.div
              key={p.months}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`clube-card ${p.highlight ? "clube-card--highlight" : ""}`}
            >
              {p.highlight && <div className="clube-card__badge">⭐ Mais Escolhido</div>}
              <div className="clube-card__body">
                <div className="clube-card__top">
                  <div>
                    <h3>{p.label}</h3>
                    <p>{p.months} meses de café especial</p>
                  </div>
                  <span className="clube-card__emoji">{p.icon}</span>
                </div>
                <div className="clube-card__discount">
                  <Tag style={{ width: 16, height: 16 }} />{p.discount} garantido
                </div>
                <div className="clube-card__saving">
                  <Package style={{ width: 16, height: 16 }} />{p.saving}
                </div>
                <ul className="clube-card__perks">
                  {p.perks.map((perk, j) => (
                    <li key={j} className="clube-perk">
                      <div className="clube-perk__icon"><perk.icon style={{ width: 12, height: 12 }} /></div>
                      <span className="clube-perk__text">{perk.text}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`clube-card__btn ${p.highlight ? "clube-card__btn--highlight" : "clube-card__btn--default"}`}
                  onClick={() => wa(`Olá! Quero fechar o Pacote ${p.label} (${p.months} meses) do Clube Toffa's Coffee!`)}
                >
                  {p.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="clube-bottom-note">
          Dúvidas sobre qual pacote escolher? <a href={WA_BASE} target="_blank" rel="noopener noreferrer">Fale com a gente no WhatsApp.</a>
        </p>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section className="clube-how">
        <div className="clube-how__container">
          <div>
            <span className="clube-eyebrow">Simples e rápido</span>
            <h2 className="clube-section-title">Como <em>Funciona</em></h2>
            <div className="clube-how__steps">
              {steps.map((step, i) => (
                <motion.div key={step.number} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="clube-how__step">
                  <div className="clube-how__num">{step.number}</div>
                  <div className="clube-how__step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="clube-how__image">
            <img src={HOW_IMG} alt="Preparo do café Toffa's" />
            <div className="clube-how__deco" />
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="clube-cta">
        <div className="clube-cta__deco">
          <div className="clube-cta__deco-1" />
          <div className="clube-cta__deco-2" />
        </div>
        <div className="clube-cta__content">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="clube-cta__title">Comece sua jornada <br /><em>Toffa's</em> hoje</h2>
            <p className="clube-cta__subtitle">Dúvidas? Fale conosco pelo WhatsApp. Estamos prontos para encontrar o plano perfeito para você.</p>
            <div className="clube-cta__buttons">
              <button className="clube-btn clube-btn--outline" style={{ background: "white", color: "#4a6741", borderColor: "white" }} onClick={() => scrollTo("assinatura")}>
                Ver Planos
              </button>
              <button className="clube-btn clube-btn--outline" onClick={() => wa("Olá! Quero saber mais sobre o Clube Toffa's Coffee!")}>
                <MessageCircle style={{ width: 20, height: 20 }} /> Falar no WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      

    </div>
  );
}