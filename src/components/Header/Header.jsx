import './Header.css'
import { Link } from 'react-router-dom'

function Header () {
    return (
      <header>
        <div className="container">
            <div className="al-center d-flex jc-space-between">
                <Link to="/"><img src="/logoHeader.svg" alt="logo" /></Link>
                <nav>
                <ul className="d-flex">
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