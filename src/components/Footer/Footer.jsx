import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Mail, Phone, InstagramIcon, Linkedin } from "lucide-react";

function Footer() {
    const products = [
        { name: "Cafés", link: "/cafe" },
        { name: "Chás Premium", link: "/cha" },
        { name: "Bebidas Quentes", link: "/bebidasQuentes" },
        { name: "Aluguel de Máquinas", link: "/aluguel" },
    ];

    return (
        <footer className="footer-section">
            <div className="footer-content container-center">

                {/* Logo + texto */}
                <div className="footer-col about">
                    <div className="footer-logo">
                        <img src="/logoF.svg" alt="Toffa's Coffee" className="footer-logo-img" />
                    </div>
                    <p>
                        Levando a melhor experiência de café para sua casa ou empresa. 
                        Grãos selecionados, produtos premium e as melhores máquinas do mercado.
                    </p>
                </div>

                {/* Produtos */}
                <div className="footer-col links">
                    <h3>PRODUTOS</h3>
                    <ul>
                        {products.map((item, index) => (
                            <li key={index}>
                                <Link to={item.link}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contato */}
                <div className="footer-col contact">
                    <h3>CONTATO</h3>

                    <p className="contact-line">
                        <Mail size={18} />
                        <span>toffascoffee@gmail.com</span>
                    </p>

                    <p className="contact-line">
                        <Phone size={18} />
                        <span>+55 (11) 91538-7618</span>
                    </p>

                    <a
                        className="contact-line link"
                        href="https://www.instagram.com/toffascoffee/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InstagramIcon size={18} />
                        <span>@toffascoffee</span>
                    </a>

                    <a
                        className="contact-line link"
                        href="https://linkedin.com/in/seuLinkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin size={18} />
                        <span>LinkedIn</span>
                    </a>

                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Toffa's Coffee. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
