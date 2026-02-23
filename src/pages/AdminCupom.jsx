import { useState } from "react";
import { apiPost } from "../services/api";
import "./AdminCupom.css";

export default function AdminCupom() {
  const [form, setForm] = useState({
    codigo: "",
    tipo: "percentual",
    valor: "",
    validade: "",
    uso_maximo: "",
    frete_gratis: false,
    primeira_compra: false,
    uso_por_cliente: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : name === "codigo" ? value.toUpperCase() : value
    }));
  };

  const salvar = async () => {
    try {
      await apiPost("/admin/cupom", form);
      alert("Cupom criado!");
      setForm({
        codigo: "",
        tipo: "percentual",
        valor: "",
        validade: "",
        uso_maximo: "",
        frete_gratis: false,
        primeira_compra: false,
        uso_por_cliente: false
      });
    } catch (err) {
      alert("Erro ao criar cupom");
    }
  };

  return (
    <div className="admin-cupom-page">

    <div className="admin-cupom-container">
      <h2 className="admin-cupom-title">Criar Cupom</h2>

      <input
        className="admin-cupom-input"
        name="codigo"
        placeholder="NOME DO CUPOM"
        value={form.codigo}
        onChange={handleChange}
      />

      <select
        className="admin-cupom-select"
        name="tipo"
        value={form.tipo}
        onChange={handleChange}
      >
        <option value="percentual">Percentual</option>
        <option value="fixo">Valor Fixo</option>
      </select>

      <input
        className="admin-cupom-input"
        name="valor"
        placeholder="Valor"
        value={form.valor}
        onChange={handleChange}
      />

      <label className="admin-cupom-date-label">
        Validade do cupom
        <input
          className="admin-cupom-input"
          type="date"
          name="validade"
          value={form.validade}
          onChange={handleChange}
        />
      </label>

      <input
        className="admin-cupom-input"
        name="uso_maximo"
        placeholder="Quantas vezes o cupom pode ser usado no total"
        value={form.uso_maximo}
        onChange={handleChange}
      />

      <label className="admin-cupom-label">
        <input type="checkbox" name="frete_gratis" checked={form.frete_gratis} onChange={handleChange} />
        Frete grátis
      </label>

      <label className="admin-cupom-label">
        <input type="checkbox" name="primeira_compra" checked={form.primeira_compra} onChange={handleChange} />
        Primeira compra
      </label>

      <label className="admin-cupom-label">
        <input type="checkbox" name="uso_por_cliente" checked={form.uso_por_cliente} onChange={handleChange} />
        Uso único por cliente
      </label>

      <button className="admin-cupom-button" onClick={salvar}>
        Salvar Cupom
      </button>
    </div>
    </div>
  );
}