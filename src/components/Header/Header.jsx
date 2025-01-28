import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className="container-header">
                <div className="headAll d-flex al-center">
                    <Link to="/">
                    <img src="/logoHeader.svg" alt="logo" className="imgHeader d-flex jc-flex-start al-center" />
                    </Link>
                    <div className="mobile-menu">
                        <button className="btMobile d-flex jc-flex-end al-center" onClick={toggleMenu}> </button>
                    </div>
                    <nav className={`${isOpen ? 'open' : ''}`}>
                        <button className="mobile-menu close-btn" onClick={toggleMenu}>X</button>
                        <ul className="d-flex">
                            <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
                            <li><Link to="produtos"onClick={toggleMenu}>Nossos Produtos</Link></li>
                            <li><Link to="quemSomos"onClick={toggleMenu}>Quem Somos</Link></li>
                            <li><Link to="contato"onClick={toggleMenu}>Contato</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
