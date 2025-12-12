import React, { useState, useMemo } from "react";
import "./StoreCatalog.css";
import { ShoppingBag, Search, Filter } from "lucide-react";
import { useCart } from "../../context/CartContext";

export default function StoreCatalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const { addToCart } = useCart();

  const categorias = [
    { value: "all", label: "Todos os Produtos" },
    { value: "coffee", label: "Cafés" },
    { value: "tea", label: "Chás" },
    { value: "bebidasquentes", label: "Bebidas Quentes" },
    
  ];

  const produtos = [
    {
      id: 1,
      category: "coffee",
      nome: "Café Toffa's torrado em grãos",
      descricao: "Blend 100% arábica.",
      imagem: "/grao1.svg",
      precos: { "250g": "R$ 24,90", "500g": "R$ 44,90", "1kg": "R$ 79,90" },
    },
    {
      id: 2,
      category: "coffee",
      nome: "Café Toffa's Torrado e moído",
      descricao: "Blend 100% arábica.",
      imagem: "/cafemoido.svg",
      precos: { "500g": "R$ 49,90" },
    },
    {
      id: 3,
      category: "coffee",
      nome: "Café Toffa's Premium",
      descricao: "Seleção especial de grãos de altitude.",
      imagem: "/premium.svg",
      precos: { "250g": "R$ 26,90", "500g": "R$ 47,90", "1kg": "R$ 84,90" },
    },
    {
      id: 4,
      category: "bebidasquentes",
      nome: "Chocolate Toffa's Coffee",
      descricao: "Produto solúvel.",
      imagem: "/chocolate1.svg",
      precos: { "250g": "R$ 16,90", "500g": "R$ 29,90", "1kg": "R$ 52,90" },
    },
    {
      id: 5,
      category: "bebidasquentes",
      nome: "Cappuccino Toffa's Coffee",
      descricao: "Produto solúvel.",
      imagem: "/grao 1.svg",
      precos: { "250g": "R$ 15,90", "500g": "R$ 27,90", "1kg": "R$ 49,90" },
    },
    {
      id: 6,
      category: "tea",
      nome: "Chá Mate de Limão Toffa's",
      descricao: "Blend aromático e revigorante.",
      imagem: "/limao.svg",
      precos: { "250g": "R$ 18,90", "500g": "R$ 32,90", "1kg": "R$ 56,90" },
    },
    {
      id: 7,
      category: "tea",
      nome: "Chá Mate de Pêssego Toffa's",
      descricao: "Blend aromático e revigorante.",
      imagem: "/pessego.svg",
      precos: { "250g": "R$ 18,90", "500g": "R$ 32,90", "1kg": "R$ 56,90" },
    },
    {
      id: 8,
      category: "tea",
      nome: "Chá Preto de Frutas Vermelhas Toffa's",
      descricao: "Blend aromático e revigorante.",
      imagem: "/frutas.svg",
      precos: { "250g": "R$ 18,90", "500g": "R$ 32,90", "1kg": "R$ 56,90" },
    },
    {
      id: 9,
      category: "bebidasquentes",
      nome: "Cappuccino Toffa's Coffee - Sem Açúcar",
      descricao: "Produto solúvel.",
      imagem: "/capp.svg",
      precos: { "250g": "R$ 15,90", "500g": "R$ 27,90", "1kg": "R$ 49,90" },
    },
  ];

  // guarda o peso selecionado por produto (padrão 250g)
  const [selectedWeights, setSelectedWeights] = useState(
    () =>
      produtos.reduce((acc, p) => {
        acc[p.id] = "250g";
        return acc;
      }, {})
  );

  const handleSelectWeight = (productId, weight) => {
    setSelectedWeights((prev) => ({ ...prev, [productId]: weight }));
  };

  const filteredProducts = useMemo(() => {
    return produtos.filter((p) => {
      const matchCategory = category === "all" || p.category === category;
      const matchSearch =
        p.nome.toLowerCase().includes(search.toLowerCase()) ||
        p.descricao.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [category, search]);

  return (
    <section id="catalogo" className="store-page">
      <div className="store-container">

        {/* FILTERS */}
        <div className="shop-header">
          <div className="shop-title-block">
    
          </div>

          <div className="shop-filters">
            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Buscar produtos"
              />
            </div>

            <div className="category-box">
              <Filter size={16} className="filter-icon" />
              <select
                aria-label="Filtrar por categoria"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categorias.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="catalog-grid">
          {filteredProducts.map((item) => {
            const selected = selectedWeights[item.id] || "250g";
            const precoAtual = item.precos[selected];

            return (
              <div key={item.id} className="produto-card">
                <img className="produto-img" src={item.imagem} alt={item.nome} />

                <div className="produto-info">
                  <h3 className="produto-nome">{item.nome}</h3>
                  <p className="produto-desc">{item.descricao}</p>

                  {/* PESO - BOTÕES CLICÁVEIS */}
                  <div className="peso-badges-inline">
                    {Object.keys(item.precos).map((peso) => (
                      <button
                        key={peso}
                        type="button"
                        className={`peso-badge-btn ${selected === peso ? "active" : ""}`}
                        onClick={() => handleSelectWeight(item.id, peso)}
                        aria-pressed={selected === peso}
                      >
                        {peso}
                      </button>
                    ))}
                  </div>

                  <div className="produto-footer">
                    <span className="produto-preco">{precoAtual}</span>

                    <button
                      className="produto-btn"
                      onClick={() => addToCart(item, selected, precoAtual)}
                    >
                      <ShoppingBag size={18} /> Adicionar
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <p className="no-results">Nenhum produto encontrado.</p>
        )}
      </div>
    </section>
  );
}
