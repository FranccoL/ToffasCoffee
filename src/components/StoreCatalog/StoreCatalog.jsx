import React, { useState, useMemo, useCallback } from "react";
import "./StoreCatalog.css";
import { ShoppingBag, Search, Filter } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Toast from "../Toast/Toast";

export default function StoreCatalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const { addToCart } = useCart();
const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
 
  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    setToastVisible(true);
  }, []);
 
  const handleAddToCart = useCallback((item, selected, precoAtual) => {
    addToCart(
      { ...item, id: item.variantes[selected].dbId },
      selected,
      precoAtual
    );
    showToast(`${item.nome} (${selected}) adicionado ao carrinho!`);
  }, [addToCart, showToast]);


  const categorias = [
    { value: "all", label: "Todos os Produtos" },
    { value: "coffee", label: "Cafés" },
    { value: "tea", label: "Chás" },
    { value: "bebidasquentes", label: "Bebidas Quentes" },
    
  ];

  const produtos = [
  {
    id: "cafe-graos",
    category: "coffee",
    nome: "Café Toffa's Torrado em Grãos",
    descricao: "Blend 100% arábica.",
    imagem: "/grao1.svg",
    route: "/cafeGrao",
    variantes: {
      "250g": { preco: "R$ 25,97", dbId: 2 },
      "500g": { preco: "R$ 47,44", dbId: 3 },
      "1kg":  { preco: "R$ 90,59", dbId: 4 },
    },
  },
  {
    id: "cafe-moido",
    category: "coffee",
    nome: "Café Toffa's Torrado e Moído",
    descricao: "Blend 100% arábica.",
    imagem: "/cafemoido.svg",
    route: "/cafeMoido",
    variantes: {
      "500g": { preco: "R$ 30,39", dbId: 5 },
    },
  },
  {
    id: "cafe-premium",
    category: "coffee",
    nome: "Café Toffa's Premium",
    descricao: "Seleção especial de grãos de altitude.",
    imagem: "/premium.svg",
    route: "/cafePremium",
    variantes: {
      "250g": { preco: "R$ 28,60", dbId: 6 },
      "500g": { preco: "R$ 52,70", dbId: 7 },
      "1kg":  { preco: "R$ 100,38", dbId: 8 },
    },
  },
  {
    id: "chocolate",
    category: "bebidasquentes",
    nome: "Chocolate Toffa's Coffee",
    descricao: "Produto solúvel.",
    imagem: "/chocolate1.svg",
    route: "/chocolate",
    variantes: {
      "250g": { preco: "R$ 17,45", dbId: 9 },
      "500g": { preco: "R$ 34,71", dbId: 10 },
      "1kg":  { preco: "R$ 68,60", dbId: 11 },
    },
  },
  {
    id: "cappuccino",
    category: "bebidasquentes",
    nome: "Cappuccino Toffa's Coffee",
    descricao: "Produto solúvel.",
    imagem: "/grao 1.svg",
    route: "/cappuccino",
    variantes: {
      "250g": { preco: "R$ 17,03", dbId: 12 },
      "500g": { preco: "R$ 33,87", dbId: 13 },
      "1kg":  { preco: "R$ 63,33", dbId: 14 },
    },
  },
  {
    id: "cappuccino-zero",
    category: "bebidasquentes",
    nome: "Cappuccino Toffa's Coffee - Zero Açúcar",
    descricao: "Produto solúvel.",
    imagem: "/capp.svg",
    route: "/cappuccinoSA",
    variantes: {
      "250g": { preco: "R$ 29,13", dbId: 15 },
      "500g": { preco: "R$ 52,81", dbId: 16 },
      "1kg":  { preco: "R$ 105,38", dbId: 17 },
    },
  },
  {
    id: "leite-po",
    category: "bebidasquentes",
    nome: "Leite em Pó Toffa's Coffee",
    descricao: "Produto solúvel.",
    imagem: "/leite.png",
    route: "/LeitePo",
    variantes: {
      "250g": { preco: "R$ 15,90", dbId: 18 },
      "500g": { preco: "R$ 30,74", dbId: 19 },
      "1kg":  { preco: "R$ 61,48", dbId: 20 },
    },
  },
  {
    id: "cha-limao",
    category: "tea",
    nome: "Chá Mate de Limão Toffa's",
    descricao: "Blend aromático e revigorante.",
    imagem: "/limao.svg",
    route: "/chaL",
    variantes: {
      "250g": { preco: "R$ 13,25", dbId: 21 },
      "500g": { preco: "R$ 25,97", dbId: 22 },
      "1kg":  { preco: "R$ 47,55", dbId: 23 },
    },
  },
  {
    id: "cha-pessego",
    category: "tea",
    nome: "Chá Mate de Pêssego Toffa's",
    descricao: "Blend aromático e revigorante.",
    imagem: "/pessego.svg",
    route: "/chaP",
    variantes: {
      "250g": { preco: "R$ 13,25", dbId: 24 },
      "500g": { preco: "R$ 25,97", dbId: 25 },
      "1kg":  { preco: "R$ 47,55", dbId: 26 },  
    },
  },
  {
    id: "cha-frutas",
    category: "tea",
    nome: "Chá Preto de Frutas Vermelhas Toffa's",
    descricao: "Blend aromático e revigorante.",
    imagem: "/frutas.svg",
    route: "/chaV",
    variantes: {
      "250g": { preco: "R$ 13,25", dbId: 27 },  
      "500g": { preco: "R$ 25,97", dbId: 28 },  
      "1kg":  { preco: "R$ 47,55", dbId: 29 },  
    },
  },
];

  // guarda o peso selecionado por produto (padrão 250g)
  const [selectedWeights, setSelectedWeights] = useState(
    () =>
      produtos.reduce((acc, p) => {
        acc[p.id] = Object.keys(p.variantes)[0];
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
            const precoAtual = item.variantes[selected]?.preco ?? "—";

            return (
              <div key={item.id} className="produto-card">
                <img className="produto-img" src={item.imagem} alt={item.nome} />

                <div className="produto-info">
                  <Link to={item.route} className="produto-nome">
                    {item.nome}
                  </Link>
                  <p className="produto-desc">{item.descricao}</p>

                  {/* PESO - BOTÕES CLICÁVEIS */}
                  <div className="peso-badges-inline">
                    {Object.keys(item.variantes).map((peso) => (
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
                      onClick={() => handleAddToCart(item, selected, precoAtual)}
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
         <Toast
          message={toastMessage}
          visible={toastVisible}
          onClose={() => setToastVisible(false)}
        />
      </div>
    </section>
  );
}
