import './Hero.css'
import { Link } from 'react-router-dom'

function Hero () {
    return (
      <div className="hero d-flex al-center">
        <div className="hero-text">
            <h1>Café de Qualidade, <br/>Pensado para o Seu Negócio.</h1>
            <Link to="produtos">
            <button className="btHero"> Conheça nossos produtos!</button>
            </Link>
        </div>
      </div>
    )
}

export default Hero