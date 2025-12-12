import React, { useState } from 'react';
import './RentalForm.css';
import { CheckCircle } from 'lucide-react';

/**
 * Componente do formulário de aluguel com abas, estilizado via CSS.
 * @param {string} backgroundColor - Cor de fundo do container externo.
 */
export default function RentalForm({ backgroundColor = '#f7f3ed' }) {
  const [activeTab, setActiveTab] = useState('company');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formType = activeTab === 'company' ? 'Empresarial' : 'Pessoal';
    setSuccessMessage(`Obrigado pelo interesse! Seu orçamento ${formType} foi solicitado.`);

    e.target.reset();

    setTimeout(() => {
      setSuccessMessage('');
    }, 10000);
  };

  const handlePhoneInput = (e) => {
    // Permite apenas números
    e.target.value = e.target.value.replace(/\D/g, '');
  };

  return (
    <div style={{ backgroundColor: backgroundColor }} className="outer-background-wrapper">
      <div className="rental-form-container">
        <div className="rental-form-header">
          <h2>Solicite um Orçamento</h2>
          <p>Preencha o formulário abaixo e nossos especialistas entrarão em contato para ajudar a escolher a melhor solução para você.</p>
        </div>

        <div className="rental-tabs">
          <button 
            className={`tab-trigger ${activeTab === 'company' ? 'active' : ''}`}
            onClick={() => setActiveTab('company')}
          >
            Sou Empresa
          </button>
          <button 
            className={`tab-trigger ${activeTab === 'person' ? 'active' : ''}`}
            onClick={() => setActiveTab('person')}
          >
            Sou Pessoa Física
          </button>
        </div>

        <div className="rental-form-content">
          {activeTab === 'company' ? (
            <form onSubmit={handleSubmit} className="form-body form-company">
              <div className="form-grid">
                <div className="form-group">
                  <label>Nome da Empresa</label>
                  <input type="text" placeholder="Sua empresa" required />
                </div>
                <div className="form-group">
                  <label>Nome do Responsável</label>
                  <input type="text" placeholder="Seu nome" required />
                </div>
              </div>
              <div className="form-grid">
                <div className="form-group">
                  <label>E-mail Corporativo</label>
                  <input type="email" placeholder="email@empresa.com" required />
                </div>
                <div className="form-group">
                  <label>Telefone / WhatsApp (apenas números)</label>
                  <input 
                    type="text" 
                    placeholder="(11) 999999999" 
                    required 
                    onInput={handlePhoneInput}
                    maxLength={11}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Número de Colaboradores</label>
                <input type="number" placeholder="Ex: 50" />
              </div>
              <div className="form-group">
                <label>Mensagem (Opcional)</label>
                <textarea placeholder="Conte-nos mais sobre o que precisa..."></textarea>
              </div>
              <button type="submit" className="submit-btn btn-primary">
                Solicitar Orçamento Empresarial
              </button>
              
              {successMessage && (
                <div className="success-message">
                  <CheckCircle size={20} />
                  <span>{successMessage}</span>
                </div>
              )}
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="form-body form-person">
              <div className="form-group">
                <label>Nome Completo</label>
                <input type="text" placeholder="Seu nome" required />
              </div>
              <div className="form-grid">
                <div className="form-group">
                  <label>E-mail</label>
                  <input type="email" placeholder="seu@email.com" required />
                </div>
                <div className="form-group">
                  <label>Telefone / WhatsApp (apenas números)</label>
                  <input 
                    type="text" 
                    placeholder="(11) 999999999" 
                    required 
                    onInput={handlePhoneInput}
                    maxLength={11}
                  />
                </div>
              </div>
              <div className="form-group">
                
              </div>
              <div className="form-group">
                <label>Mensagem (Opcional)</label>
                <textarea placeholder="Dúvidas ou preferências..."></textarea>
              </div>
              <button type="submit" className="submit-btn btn-secondary">
                Solicitar Orçamento Pessoal
              </button>
              
              {successMessage && (
                <div className="success-message">
                  <CheckCircle size={20} />
                  <span>{successMessage}</span>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}