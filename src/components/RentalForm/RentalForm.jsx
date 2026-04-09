import React, { useState } from "react";
import "./RentalForm.css";
import { CheckCircle } from "lucide-react";

export default function RentalForm({ backgroundColor = "#f7f3ed" }) {
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

      const res = await fetch(`${API_URL}/send-email`, {
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
          <h2>Solicite um Orçamento</h2>
          <p>
            Preencha o formulário abaixo e nossos especialistas entrarão em
            contato.
          </p>
        </div>

        <div className="rental-tabs">
          <button
            type="button"
            className={`tab-trigger ${
              activeTab === "company" ? "active" : ""
            }`}
            onClick={() => setActiveTab("company")}
          >
            Sou Empresa
          </button>

          <button
            type="button"
            className={`tab-trigger ${
              activeTab === "person" ? "active" : ""
            }`}
            onClick={() => setActiveTab("person")}
          >
            Sou Pessoa Física
          </button>
        </div>

        <div className="rental-form-content">
          {/* FORMULÁRIO EMPRESA */}
          {activeTab === "company" && (
            <form onSubmit={handleSubmit} className="form-body form-company">
              <div className="form-grid">
                <div className="form-group">
                  <label>Nome da Empresa</label>
                  <input
                    type="text"
                    name="empresa"
                    placeholder="Sua empresa"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Nome do Responsável</label>
                  <input
                    type="text"
                    name="responsavel"
                    placeholder="Seu nome"
                    required
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>E-mail Corporativo</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email@empresa.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Telefone / WhatsApp</label>
                  <input
                    type="text"
                    name="telefone"
                    placeholder="11999999999"
                    required
                    onInput={handlePhoneInput}
                    maxLength={11}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Número de Colaboradores</label>
                <input
                  type="number"
                  name="colaboradores"
                  placeholder="Ex: 50"
                />
              </div>

              <div className="form-group">
                <label>Mensagem (Opcional)</label>
                <textarea
                  name="mensagem"
                  placeholder="Conte-nos mais sobre o que precisa..."
                ></textarea>
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
          )}

          {/* FORMULÁRIO PESSOA FÍSICA */}
          {activeTab === "person" && (
            <form onSubmit={handleSubmit} className="form-body form-person">
              <div className="form-group">
                <label>Nome Completo</label>
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>E-mail</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Telefone / WhatsApp</label>
                  <input
                    type="text"
                    name="telefone"
                    placeholder="11999999999"
                    required
                    onInput={handlePhoneInput}
                    maxLength={11}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Mensagem (Opcional)</label>
                <textarea
                  name="mensagem"
                  placeholder="Dúvidas, preferências ou necessidade..."
                ></textarea>
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