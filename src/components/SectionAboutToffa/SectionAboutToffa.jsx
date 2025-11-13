import './SectionAboutToffa.css'
import { Link } from 'react-router-dom'

function SectionAboutToffa () {
    return (
      <div className="container-about">
        <div className="aboutToffa d-flex">
        <div className="cupCoffe d-flex"></div>
        <div className="tittleSubAboutToffa d-flex flex-column">
            <h1 className="tittleAboutSection d-flex" >SOBRE TOFFA’S COFFEE</h1>
            <p className="subTittleAboutSection d-flex">TOFFA’S CAFÉ: um blend exclusivo de grãos cuidadosamente selecionados, criado para oferecer um café de alta qualidade que encanta os paladares mais refinados e exigentes.
            SABOR, AROMA e CORPO são os três pilares essenciais para apreciar essa bebida única.</p>
            <div className="buttonAboutSection d-flex flex-column">
            <Link to="quemSomos">
            <button className="btAbout d-flex">SAIBA MAIS</button>
            </Link>
        </div>
        </div>
        
        </div>
        
      </div>
    )
}

export default SectionAboutToffa