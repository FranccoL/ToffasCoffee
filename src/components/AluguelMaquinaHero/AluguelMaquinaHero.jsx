import React from 'react';
import './AluguelMaquinaHero.css';
import { Link } from 'react-router-dom';

/**
 * Componente Hero com vídeo de fundo em loop para a página de Aluguel de Máquinas.
 * @param {string} title - O título principal da página.
 * @param {string} subtitle - (Opcional) Subtítulo ou navegação de migalhas.
 * @param {string} videoUrl - URL do arquivo de vídeo (Ex: '/videos/cafe_loop.mp4').
 * @param {string} posterUrl - URL da imagem de fallback para mobile ou carregamento.
 */
function AluguelMaquina({ title, subtitle, videoUrl, posterUrl }) {
    
    // Define a navegação de migalhas (Breadcrumb)
    const breadcrumb = subtitle || (
        <p className="breadcrumb">
            <h1>Aluguel de Máquinas</h1>
            <h2>A solução para ter café expresso de qualidade sempre à mão, seja em seu escritório ou na sua casa.</h2>
        </p>
    );

    // Defina um URL de vídeo padrão, caso não seja passado
    const finalVideoUrl = videoUrl || '/videoMaquina.mp4'; 
    // Defina um poster padrão para melhor experiência de usuário
    const finalPosterUrl = posterUrl || '/imgMaquina.jpg'; 

    return (
        <section className="aluguel-maquina-hero">
            
            {/* O ELEMENTO DE VÍDEO */}
            <video 
                className="hero-video-background"
                autoPlay 
                loop 
                muted 
                playsInline // Importante para autoPlay no iOS
                poster={finalPosterUrl} 
            >
                <source src={finalVideoUrl} type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
            </video>
            
            <div className="hero-overlay"></div>
            
            <div className="hero-content container-center">
                
                {/* Migalhas de pão / Subtítulo */}
                <div className="hero-subtitle">
                    {breadcrumb}
                </div>

                {/* Título Principal */}
                <h1 className="hero-title">{title}</h1>
            </div>
        </section>
    );
}

export default AluguelMaquina;