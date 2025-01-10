import './Header.css'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'



function Header () {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    const toggleMenu = () => {
      setIsOpen (!isOpen)
    }
    return (
      <header className={`header ${isHomePage ? 'home' : 'not-home'}`}> {/* Adiciona a classe 'home' se for a página inicial */}
        <div className="container-header">
            <div className="al-center d-flex jc-space-between">
                <Link to="/"><img src="/logoHeader.svg" alt="logo" /></Link>
                <div className="mobile-menu">
                  <button className="btMobile" onClick={toggleMenu}></button>
                </div>
                <nav className={`${isOpen ? 'open' : ''}`}>
                  <button className="mobile-menu close-btn" onClick={toggleMenu}>X</button>
                <ul className="d-flex ">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="produtos">Nossos Produtos</Link></li>
                    <li><Link to="quemSomos">Quem Somos</Link></li>
                    <li><Link to="contato">Contato</Link></li>
                </ul>
            </nav>
            </div>

        </div>
      </header>
    )
}

export default Header