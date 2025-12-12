import React from 'react';
import { CheckCircle2, Building2 } from 'lucide-react';
import './VantagensSection.css';

export default function VantagensSection() {
  const companyBenefits = [
    "Máquinas profissionais de alta capacidade",
    "Abastecimento recorrente de grãos e insumos",
    "Manutenção preventiva e corretiva inclusa",
    "Treinamento de uso para colaboradores",
    "Faturamento mensal simplificado"
  ];

  return (
    <div className="benefits-container">
      {/* Card Empresas */}
      <div className="benefit-card">
        <div className="icon-wrapper">
          <Building2 size={28} />
        </div>
        <h2>Benefícios para sua empresa</h2> 
        <p className="description">
          Tenha café de alta qualidade no seu ambiente corporativo, garantindo produtividade,
          bem-estar e satisfação da equipe. Um serviço completo para o seu negócio, sem complicações.
        </p>
        <ul className="benefit-list">
          {companyBenefits.map((item, i) => (
            <li key={i}>
              <CheckCircle2 className="check-icon" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
