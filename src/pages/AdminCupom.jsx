import { useState } from "react";
import adminApi from "../admin/services/adminApi";
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
  const [saving, setSaving] = useState(false);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : name === "codigo" ? value.toUpperCase() : value
    }));
  };

  const salvar = async (e) => {
    e.preventDefault();
    setErro("");
    setSucesso("");
    setSaving(true);

    try {
      await adminApi.post("/cupom", form);
      setSucesso("Cupom criado com sucesso.");
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
      setErro(err.response?.data?.error || "Erro ao criar cupom.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-cupom-page">
    <form className="admin-cupom-container" onSubmit={salvar}>
      <h1 className="admin-cupom-title">Criar cupom</h1>
      {erro && <p className="admin-cupom-error" role="alert">{erro}</p>}
      {sucesso && <p className="admin-cupom-success" role="status">{sucesso}</p>}

      <input
        className="admin-cupom-input"
        name="codigo"
        placeholder="NOME DO CUPOM"
        value={form.codigo}
        onChange={handleChange}
        required
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
        type="number"
        min="0"
        step="0.01"
        name="valor"
        placeholder="Valor"
        value={form.valor}
        onChange={handleChange}
        required
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
        type="number"
        min="1"
        step="1"
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

      <button className="admin-cupom-button" type="submit" disabled={saving}>
        {saving ? "Salvando..." : "Salvar cupom"}
      </button>
    </form>
    </div>
  );
}
