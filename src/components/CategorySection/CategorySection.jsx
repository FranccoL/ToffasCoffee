import React from 'react';
import './CategorySection.css';
import { Link } from 'react-router-dom';

// Dados das categorias (baseado na imagem)
const categoriesData = [
    {
        name: "Cafés Especiais",
        link: "/cafe",
        image: "/coffeePq.jpg", // Substitua pelo caminho real
        // O fundo parece escuro na imagem, vamos definir uma cor de texto clara
        textColor: 'white',
        alt: "Moedor de café e grãos"
    },
    {
        name: "Chás",
        link: "/cha",
        image: "/teaPq.jpg", // Substitua pelo caminho real
        // O fundo parece claro/rosado na imagem, vamos definir uma cor de texto escura
        textColor: 'white',
        alt: "Pacote de chá e copo"
    },
    {
        name: "Bebidas Quentes",
        link: "/bebidasQuentes",
        image: "/hotPq.jpg", // Substitua pelo caminho real
        // O fundo é um cappuccino, vamos definir uma cor de texto clara/escura
        textColor: 'white',
        alt: "Cappuccino com arte"
    },
    {
        name: "Máquinas",
        link: "/aluguel",
        image: "/maquinaPq.svg", // A imagem está em cinza claro na imagem original
        textColor: 'white',
        alt: "Máquina de café"
    }
];

function CategorySection() {
    return (
        <section className="category-section container-center">
            <header className="category-header">
                <span className="subtitle">NOSSA SELEÇÃO</span>
                <div className="title-row">
                    <h2>Categorias em Destaque</h2>
                    
                </div>
            </header>
            
            <div className="category-grid">
                {categoriesData.map((category, index) => (
                    <Link 
                        to={category.link} 
                        key={index} 
                        className="category-card"
                        style={{ 
                            // O fundo será a imagem ou a cor de fundo cinza claro
                            backgroundImage: category.image ? `url(${category.image})` : 'none',
                            backgroundColor: !category.image ? '#e8e6e0' : 'none', // Cor do último card (Máquinas)
                            color: category.textColor // Cor do texto
                        }}
                    >
                        {/* Se for o card das Máquinas (sem imagem), aplicamos um estilo de fundo */}
                        {category.image && (
                             <div className="card-overlay"></div>
                        )}
                        <h3 className="card-title">{category.name}</h3>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default CategorySection;