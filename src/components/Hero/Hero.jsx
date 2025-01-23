import './Hero.css'
import { Link } from 'react-router-dom'

function Hero () {
    return (
      <div className="hero d-flex al-center jc-flex-center">
        <div className="imgHero d-flex"></div>
        <div className="hero-text d-flex flex-column">
            <h1>Café de Qualidade, <br/>Pensado para o Seu Negócio.</h1>

            <Link to="/produtos" className="btHero">
            ENTRE EM CONTATO
        </Link>
        </div>  
      </div>
    )
}

export default Hero