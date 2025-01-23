import './Header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'



function Header () {
    const [isOpen, setIsOpen] = useState(false)
 

    

    const toggleMenu = () => {
      setIsOpen (!isOpen)
    }
    return (
      <header>
        <div className="container-header">
            <div className="headAll d-flex al-center">
                <Link to="/"><img src="/logoHeader.svg" alt="logo" className="imgHeader d-flex jc-flex-start al-center" /></Link>
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