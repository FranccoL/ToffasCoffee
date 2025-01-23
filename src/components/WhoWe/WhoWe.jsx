
import './WhoWe.css';

function WhoWe() {
  return (
    <div className="container-Who">
      <div className="titleWho d-flex al-center jc-flex-center">
        <h1>Quem Somos</h1>
      </div>

      <div className="description">
        <p>
          Somos uma equipe apaixonada por inovações tecnológicas e pelo impacto positivo que podemos gerar no mundo. Nosso objetivo é transformar ideias em soluções criativas, práticas e eficientes.
        </p>
      </div>

      <div className="cards-container">
        <div className="card">
          <div className="card-content">
            <div className="card-image">
              <img src="/cupCoffee.svg" alt="Card 1" />
            </div>
            <div className="card-text">
              <h2>Nosso Compromisso com a Qualidade</h2>
              <p>
                Nosso compromisso com a qualidade é inabalável. Estamos sempre em busca de melhores práticas e inovações para oferecer o melhor aos nossos clientes.
              </p>
              <button className="card-button">Saiba Mais</button>
            </div>
          </div>
        </div>

        <div className="card card-reverse">
          <div className="card-content">
            <div className="card-text">
              <h2>Nosso Compromisso com a Sustentabilidade</h2>
              <p>
                A sustentabilidade é um pilar central em nosso trabalho. Trabalhamos para reduzir nosso impacto ambiental enquanto oferecemos soluções inovadoras.
              </p>
              <button className="card-button">Saiba Mais</button>
            </div>
            <div className="card-image">
              <img src="/coletando.svg" alt="Card 2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWe;
