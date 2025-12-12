import { useState } from "react";
import { apiPost } from "../services/api";

export default function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const entrar = async () => {
    if (!email || !senha) return alert("Preencha e-mail e senha");
    setLoading(true);
    try {
      const resp = await apiPost("/admin/login", { email, senha });
      // resp: { token, nome, email }
      localStorage.setItem("admin_token", resp.token);
      localStorage.setItem("admin_nome", resp.nome);
      alert("Login OK — redirecionando");
      window.location.href = "/admin/pedidos"; // ou rota do painel
    } catch (err) {
      console.error(err);
      alert("Login inválido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: "50px auto" }}>
      <h2>Painel Admin</h2>
      <input type="email" placeholder="E-mail" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" value={senha} onChange={(e)=>setSenha(e.target.value)} />
      <button onClick={entrar} disabled={loading}>
        {loading ? "Conectando..." : "Entrar"}
      </button>
    </div>
  );
}
