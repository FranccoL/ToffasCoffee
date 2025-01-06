import './SectionAboutToffa.css'
import { Link } from 'react-router-dom'

function SectionAboutToffa () {
    return (
      <div className="container">
        <div className="aboutToffa d-flex">
        <div className="cupCoffe"></div>
        <div className="tittleSubAboutToffa d-flex flex-column">
            <h1 className="tittleAboutSection" >SOBRE TOFFA’S CAFÉ</h1>
            <p className="subTittleAboutSection">Café para todos os gostos Sou um parágrafo. Aqui você pode adicionar seu texto. Café para todos os gostos Sou um parágrafo. Aqui você pode adicionar seu texto.</p>
            <div className="buttonAboutSection d-flex flex-column">
            <Link to="quemSomos">
            <button className="btAbout">SAIBA MAIS</button>
            </Link>
        </div>
        </div>
        
        </div>
        
      </div>
    )
}

export default SectionAboutToffa