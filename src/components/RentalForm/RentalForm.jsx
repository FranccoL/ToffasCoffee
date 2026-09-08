import React, { useState } from "react";
import "./RentalForm.css";
import { CheckCircle } from "lucide-react";

export default function RentalForm({ backgroundColor = "#1A1311" }) {
  const [activeTab, setActiveTab] = useState("company");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    data.tipo = activeTab === "company" ? "empresarial" : "pessoal";

    const API_URL = import.meta.env.VITE_API_URL;

    if (!API_URL) {
      console.error("VITE_API_URL não está definida no .env");
      alert("Erro de configuração do sistema.");
      return;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 60000);

      const res = await fetch(`${API_URL}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        throw new Error("Erro ao enviar");
      }

      setSuccessMessage(
        `Obrigado! Seu orçamento ${data.tipo} foi enviado.`
      );

      e.target.reset();

      setTimeout(() => setSuccessMessage(""), 10000);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      if (error.name === "AbortError") {
        alert(
          "A requisição demorou demais. Verifique sua conexão e tente novamente."
        );
      } else if (error.message === "Failed to fetch") {
        alert(
          "Não foi possível conectar ao servidor. Se você usa bloqueador de anúncios, desative-o e tente novamente."
        );
      } else {
        alert("Erro ao enviar formulário. Tente novamente.");
      }
    }
  };

  const handlePhoneInput = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  };

  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className="outer-background-wrapper"
    >
      <div className="rental-form-container">
        <div className="rental-form-header">
          <span className="eyebrow-text">Solicite sua proposta</span>
          <h2>Vamos escolher a máquina ideal para você</h2>
          <p>
            Preencha os dados abaixo e nossa equipe entra em contato
            com a proposta de locação mais adequada ao seu consumo.
          </p>
        </div>

        <div className="rental-tabs-container">
          <div className="rental-tabs">
            <button
              type="button"
              className={`tab-trigger ${
                activeTab === "company" ? "active" : ""
              }`}
              onClick={() => setActiveTab("company")}
            >
              Empresa
            </button>

            <button
              type="button"
              className={`tab-trigger ${
                activeTab === "person" ? "active" : ""
              }`}
              onClick={() => setActiveTab("person")}
            >
              Pessoa Física
            </button>
          </div>
        </div>

        <div className="rental-form-content">
          {/* FORMULÁRIO EMPRESA */}
          {activeTab === "company" && (
            <form onSubmit={handleSubmit} className="form-body form-company">
              
              <div className="form-group full-width">
                <label>Razão Social / Nome da Empresa</label>
                <input
                  type="text"
                  name="empresa"
                  required
                />
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>Nome do Responsável</label>
                  <input
                    type="text"
                    name="responsavel"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>CNPJ</label>
                  <input
                    type="text"
                    name="cnpj"
                    required
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>E-mail</label>
                  <input
                    type="email"
                    name="email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Telefone / WhatsApp</label>
                  <input
                    type="text"
                    name="telefone"
                    required
                    onInput={handlePhoneInput}
                    maxLength={15}
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>Cidade</label>
                  <input
                    type="text"
                    name="cidade"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Linha de Interesse</label>
                  <select name="linha_interesse">
                    <option value="Nao sei ainda">Não sei ainda</option>
                    <option value="Maquinas de Cafe Espresso">Linha Select</option>
                    <option value="Maquinas Multibebidas">Linha Performance</option>
                    <option value="Vending Machines">Linha Signature</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label>Consumo Estimado Por Dia</label>
                <input
                  type="text"
                  name="consumo"
                  placeholder="Ex.: 80 cafés por dia"
                />
              </div>

              <div className="form-group full-width">
                <label>Mensagem</label>
                <textarea
                  name="mensagem"
                ></textarea>
              </div>

              <div className="form-action">
                <button type="submit" className="submit-btn">
                  Enviar Solicitação
                </button>
              </div>

              {successMessage && (
                <div className="success-message">
                  <CheckCircle size={20} />
                  <span>{successMessage}</span>
                </div>
              )}
            </form>
          )}

          {/* FORMULÁRIO PESSOA FÍSICA */}
          {activeTab === "person" && (
            <form onSubmit={handleSubmit} className="form-body form-person">
              <div className="form-group full-width">
                <label>Nome Completo</label>
                <input
                  type="text"
                  name="nome"
                  required
                />
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>E-mail</label>
                  <input
                    type="email"
                    name="email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Telefone / WhatsApp</label>
                  <input
                    type="text"
                    name="telefone"
                    required
                    onInput={handlePhoneInput}
                    maxLength={15}
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>Cidade</label>
                  <input
                    type="text"
                    name="cidade"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>CPF</label>
                  <input
                    type="text"
                    name="cpf"
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label>Mensagem (Opcional)</label>
                <textarea
                  name="mensagem"
                ></textarea>
              </div>

              <div className="form-action">
                <button type="submit" className="submit-btn">
                  Enviar Solicitação
                </button>
              </div>

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