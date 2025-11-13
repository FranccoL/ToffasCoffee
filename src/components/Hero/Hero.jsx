import './Hero.css'
import { Link } from 'react-router-dom'

function Hero () {
    return (
      <div className="hero d-flex al-center jc-flex-center">
        <a 
  href="https://wa.me/5511915387618?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento%20dos%20produtos.%20Poderia%20me%20informar%20mais%20detalhes,%20por%20favor?" 
  target="_blank" 
  rel="noopener noreferrer"
  className="whatsapp-fly"
>
  <img src="/WhatsApp.svg" alt="WhatsApp" className="whatsapp-icon" />
</a>

        <div className="imgHero d-flex"></div>
        <div className="hero-text d-flex flex-column">
            <h1>Café de Qualidade, <br/>Perfeito para seu negócio, <br/>perfeito para o seu lar.</h1>

            <Link 
  to="https://wa.me/5511915387618?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento%20dos%20produtos.%20Poderia%20me%20informar%20mais%20detalhes,%20por%20favor?" 
  className="btHero" 
  target="_blank"
>
  ENTRE EM CONTATO
</Link>
        </div> 
        
      </div>
    )
}

export default Hero
