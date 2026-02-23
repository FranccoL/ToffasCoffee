import { useEffect, useState } from "react";
import adminApi from "../services/adminApi";
import "./Dashboard.css";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarDashboard() {
      try {
        const res = await adminApi.get("/dashboard");
        setData(res.data);
      } catch (err) {
        console.error("Erro dashboard:", err);
      } finally {
        setLoading(false);
      }
    }

    carregarDashboard();
  }, []);

  if (loading) return <p>Carregando dashboard...</p>;
  if (!data) return <p>Erro ao carregar dashboard</p>;


  const { resumo, ultimosPedidos } = data;

  return (
    <div className="admin-dashboard">
      <h1>Dashboard</h1>

      {/* Cards */}
      <div className="dashboard-cards">
        <Card title="Pedidos" value={resumo.totalPedidos} />
        <Card title="Aguardando" value={resumo.aguardandoPagamento} />
        <Card title="Pagos" value={resumo.pagos} />
        <Card title="Enviados" value={resumo.enviados} />
        <Card title="Entregues" value={resumo.entregues} />
        <Card title="Hoje (R$)" value={resumo.faturamentoHoje.toFixed(2)} />
        <Card title="Mês (R$)" value={resumo.faturamentoMes.toFixed(2)} />
      </div>

      {/* Últimos pedidos */}
      <h2>Últimos pedidos</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Total</th>
            <th>Status</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {ultimosPedidos.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.cliente}</td>
              <td>R$ {Number(p.total).toFixed(2)}</td>
              <td>
                <span className={`status ${p.status.toLowerCase()}`}>
                  {p.status}
                </span>
              </td>
              <td>{new Date(p.criado_em).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="dashboard-card">
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  );
}
