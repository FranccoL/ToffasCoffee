import { useState } from 'react';
import { Check, ChevronDown, Coffee, Crown, SlidersHorizontal, Zap } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import './VantagensSection.css';

const machineLines = [
  {
    id: 'select',
    number: '01',
    name: 'Select',
    icon: SlidersHorizontal,
    subtitle: 'Praticidade e elegância no dia a dia',
    description: 'Uma solução compacta, intuitiva e eficiente para ambientes de menor demanda.',
    audience: ['Escritórios', 'Consultórios', 'Pequenas empresas'],
    drinks: ['Café', 'Café longo', 'Água quente'],
    specs: [
      ['Perfil', 'Consumo moderado'],
      ['Operação', 'Intuitiva'],
      ['Formato', 'Compacto']
    ],
    chapters: [
      {
        image: '/maq1.svg',
        eyebrow: '01 — A PRIMEIRA IMPRESSÃO',
        title: 'Café de qualidade, sem ocupar o seu espaço.',
        text: 'A Select une uma presença discreta a uma rotina simples de café para equipes menores.',
        detail: 'Ideal para',
        value: 'Ambientes compactos',
        hotspot: {
          top: '79%',
          left: '50%',
          tooltipTop: '72%',
          tooltipLeft: '56%',
          title: 'Tecnologia e Praticidade',
          text: 'Design moderno, moagem na hora e o espresso perfeito.'
        }
      },
      {
        image: '/spidemG.svg',
        eyebrow: '02 — OPERAÇÃO',
        title: 'Cada preparo acontece de um jeito claro e consistente.',
        text: 'Abastecimento e suporte ajudam a manter a experiência fluindo no dia a dia.',
        detail: 'Bebidas',
        value: '3 opções',
        hotspot: {
          top: '42%',
          left: '62%',
          tooltipTop: '45%',
          tooltipLeft: '45%',
          title: 'Reserva de grãos',
          text: 'Armazenamento integrado para preservar o aroma perfeito.'
        }
      },
      {
        image: '/wall2.svg',
        eyebrow: '03 — SERVIÇO',
        title: 'Controle na ponta dos dedos.',
        text: 'A interface foi pensada para que qualquer pessoa consiga servir uma bebida com segurança.',
        detail: 'Formato',
        value: 'Compacto',
        hotspot: {
          top: '50%',
          left: '60%',
          tooltipTop: '53%',
          tooltipLeft: '45%',
          title: 'Controle por toque',
          text: 'Tudo sob controle com apenas um toque.'
        }
      }
    ]
  },
  {
    id: 'performance',
    number: '02',
    name: 'Performance',
    icon: Zap,
    subtitle: 'Velocidade, versatilidade e maior capacidade para empresas em crescimento',
    description: 'Linha desenvolvida para um público maior que a linha Select. Oferece opções em multi-bebidas e versões dedicadas a grãos frescos.',
    audience: ['Empresas médias', 'Coworkings', 'Clínicas'],
    drinks: ['Café', 'Café longo', 'Bebidas quentes', 'Água quente', 'Linha Multi-bebidas'],
    specs: [
      ['Perfil', 'Maior circulação'],
      ['Ritmo', 'Ágil'],
      ['Ajustes', 'Personalizáveis']
    ],
    chapters: [
      {
        image: '/maqq2.svg',
        eyebrow: '01 — MAIS RITMO',
        title: 'Um passo acima da Select, ideal para equipes maiores.',
        text: 'Performance foi desenhada para acompanhar os momentos de maior circulação da empresa.',
        detail: 'Perfil',
        value: 'Maior fluxo',
        hotspot: {
          top: '25%',
          left: '50%',
          tooltipTop: '20%',
          tooltipLeft: '55%',
          title: 'Painel de controle',
          text: 'Interface pensada para agilidade.'
        }
      },
      {
        image: '/maqt.svg',
        eyebrow: '02 — PADRONIZAÇÃO',
        title: 'Tela touch',
        text: 'Equipada com um painel de toque de 10.1 polegadas e um menu intuitivo baseado no sistema Android, além de elegantes luzes LED nas laterais do visor, proporciona uma experiência de café prática e sofisticada.',
        detail: 'Interface',
        value: 'Touch 10.1',
        hotspot: {
          top: '38%',
          left: '60%',
          tooltipTop: '34%',
          tooltipLeft: '63%',
          title: 'Painel de 10.1 polegadas',
          text: 'Agilidade para horários movimentados.'
        }
      },
      {
        image: '/maqm.svg',
        eyebrow: '03 — AUTONOMIA',
        title: 'Variedade que agrada a todos',
        text: 'Do espresso tradicional a opções cremosas de cappuccinos, chocolates e chás solúveis, a linha multi-bebidas transforma a pausa para o café em uma experiência completa e personalizada para cada colaborador, unindo sabor, aconchego e muita versatilidade em um só lugar.',
        detail: 'Serviço',
        value: 'Recorrente',
        hotspot: {
          top: '33%',
          left: '50%',
          tooltipTop: '28%',
          tooltipLeft: '10%',
          title: 'Insumos e grãos',
          text: 'Maior capacidade para ingredientes solúveis e grãos, garantindo total autonomia à operação.'
        }
      }
    ]
  },
  {
    id: 'signature',
    number: '03',
    name: 'Signature',
    icon: Crown,
    subtitle: "O mais alto nível de tecnologia da Toffa's Coffee",
    description: 'Nossa linha mais sofisticada, para ambientes que desejam unir tecnologia, design e performance.',
    audience: ['Grandes empresas', 'Hotéis', 'Condomínios corporativos'],
    drinks: ['Café', 'Café longo', 'Bebidas especiais', 'Água quente'],
    specs: [
      ['Perfil', 'Alta exigência'],
      ['Experiência', 'Premium'],
      ['Atendimento', 'Prioritário']
    ],
    chapters: [
      {
        image: '/maqc.svg',
        eyebrow: '01 — PRESENÇA',
        title: 'Tecnologia que também transforma o ambiente.',
        text: 'Signature combina uma presença marcante com recursos destinados a uma experiência superior.',
        detail: 'Experiência',
        value: 'Premium',
        hotspot: {
          top: '24%',
          left: '62%',
          tooltipTop: '12%',
          tooltipLeft: '55%',
          title: 'Tecnologia avançada',
          text: 'Recursos para uma experiência premium.'
        }
      },
      {
        image: '/maqv2.svg',
        eyebrow: '02 — PERFORMANCE',
        title: 'Cardápio Inteligente e Interativo',
        text: 'O painel touch intuitivo exibe fotos reais das bebidas, permitindo que cada pessoa personalize o seu pedido com rapidez e total autonomia.',
        detail: 'Perfil',
        value: 'Alto fluxo',
        hotspot: {
          top: '25%',
          left: '65%',
          tooltipTop: '20%',
          tooltipLeft: '70%',
          title: 'Sistema de preparo',
          text: 'Performance para uso intenso.'
        }
      },
      {
        image: '/maq23.svg',
        eyebrow: '03 — EXPERIÊNCIA',
        title: 'Organização em camadas',
        text: 'Estrutura interna setorizada que separa os componentes operacionais, de insumos e de descarte, facilitando o acesso técnico e agilizando as manutenções preventivas.',
        detail: 'Serviço',
        value: 'Prioritário',
        hotspot: {
          top: '30%',
          left: '65%',
          tooltipTop: '25%',
          tooltipLeft: '68%',
          title: 'Arquitetura interna',
          text: 'Alta precisão e facilidade de manutenção.'
        }
      }
    ]
  }
];

function MachineScene({ line, chapter, index }) {
  const reversed = index % 2 === 1;
  const { hotspot } = chapter;

  return (
    <article className={`machine-story-row ${reversed ? 'machine-story-row-reverse' : ''}`}>
      <motion.div
        className="machine-scene"
        initial={{ opacity: 0, x: reversed ? 50 : -50, scale: 0.96 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 3.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="scene-halo"
          animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.7, 0.45] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.img
          src={chapter.image}
          alt={`${line.name} — ${chapter.title}`}
          className="scene-machine"
          whileInView={{ y: [30, 0], opacity: [0, 1] }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 3.0, ease: [0.22, 1, 0.36, 1] }}
        />

        <button
          type="button"
          className="scene-hotspot"
          aria-label={`Ver detalhes: ${hotspot.title}`}
          style={{
            top: hotspot.top,
            left: hotspot.left
          }}
        />

        <div
          className="scene-callout"
          style={{
            top: hotspot.tooltipTop,
            left: hotspot.tooltipLeft
          }}
        >
          <strong>{hotspot.title}</strong>
          <small>{hotspot.text}</small>
        </div>
      </motion.div>

      <motion.div
        className="machine-story-copy"
        initial={{ opacity: 0, x: reversed ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 3.0,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <span className="chapter-eyebrow">{chapter.eyebrow}</span>
        <h3>{chapter.title}</h3>
        <p>{chapter.text}</p>

        <div className="chapter-detail">
          <span>{chapter.detail}</span>
          <strong>{chapter.value}</strong>
        </div>
      </motion.div>
    </article>
  );
}

function MachineStory({ line }) {
  return (
    <section className={`machine-story machine-story-${line.id}`}>
      <div className="story-intro">
        <span>LINHA {line.name.toUpperCase()}</span>
        <p>{line.description}</p>
      </div>

      <div className="machine-story-list">
        {line.chapters.map((chapter, index) => (
          <MachineScene
            key={chapter.eyebrow}
            line={line}
            chapter={chapter}
            index={index}
          />
        ))}
      </div>

      <div className="machine-facts">
        <div>
          <span>INDICADA PARA</span>
          {line.audience.map((item) => (
            <p key={item}>
              <Check size={14} />
              {item}
            </p>
          ))}
        </div>

        <div>
          <span>BEBIDAS</span>
          {line.drinks.map((item) => (
            <p key={item}>
              <Coffee size={14} />
              {item}
            </p>
          ))}
        </div>

        <div>
          <span>VISÃO GERAL</span>
          {line.specs.map(([label, value]) => (
            <p key={label}>
              <small>{label}</small>
              <strong>{value}</strong>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function VantagensSection() {
  const [activeLine, setActiveLine] = useState(0);
  const line = machineLines[activeLine];

  return (
    <section className="coffee-lines-section">
      <header className="coffee-lines-header">
        <span>NOSSAS LINHAS</span>
        <h2>Escolha a experiência que acompanha o seu ritmo.</h2>
        <p>
          Desça para explorar cada detalhe. A máquina e as informações se
          revelam juntas, em uma experiência de produto mais imersiva.
        </p>
        <ChevronDown aria-hidden="true" />
      </header>

      <nav className="machine-line-tabs" aria-label="Linhas de máquinas">
        {machineLines.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setActiveLine(index)}
              className={index === activeLine ? 'active' : ''}
            >
              <span>{item.number}</span>
              <Icon size={20} />

              <div>
                <strong>{item.name}</strong>
                <small>{item.subtitle}</small>
              </div>
            </button>
          );
        })}
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={line.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <MachineStory line={line} />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}