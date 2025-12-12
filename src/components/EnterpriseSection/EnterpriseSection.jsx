import React from 'react';
import './EnterpriseSection.css';
import { Link } from 'react-router-dom';
// IMPORTANDO O ÍCONE NECESSÁRIO
import { Users } from 'lucide-react'; 

function EnterpriseSection() {
    return (
        <section className="enterprise-section">
            <div className="enterprise-content container-center">
                
                {/* Texto e CTA */}
                <div className="text-container">
                    <h1>Soluções para Empresas</h1>
                    <p>
                        Transforme o ambiente de trabalho com nosso serviço de locação de máquinas de café. Planos flexíveis que incluem **manutenção, abastecimento e treinamento**.
                    </p>
                    <Link to="/aluguel" className="cta-button">
                        Conheça nossos planos <span className="arrow">→</span>
                    </Link>
                </div>

                {/* Ícone de fundo (O logo estilizado e opaco) */}
                <div className="background-logo">
                    {/* USANDO O ÍCONE LUCIDE-REACT PARA REPRESENTAR A EMPRESA/GRUPO */}
                    <Users size={300} className="enterprise-icon" />
                </div>
            </div>
        </section>
    );
}

export default EnterpriseSection;