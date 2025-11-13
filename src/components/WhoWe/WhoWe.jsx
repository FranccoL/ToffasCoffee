
import './WhoWe.css';

function WhoWe() {
  return (
    <div className="container-Who">
      <div className="titleWho d-flex al-center jc-flex-center">
        <h1>Quem Somos</h1>
      </div>

      <div className="description">
        <p>
        TOFFA’S COFFEE , um blend de grãos selecionados com o objetivo de adquirir um café de alta qualidade para agradar os paladares mais exigentes e requintados.
SABOR, AROMA E CORPO são os 3 pontos básicos para a apreciação dessa bebida. 
<br />Nosso objetivo: deliciar os consumidores com um excelente café unindo os sentidos e o espírito. 
        </p>
      </div>

      <div className="cards-container">
        <div className="card">
          <div className="card-content">
            <div className="card-image">
              <img src="/cupCoffee.svg" alt="Card 1" />
            </div>
            <div className="card-text">
              <h2>O Compromisso por Trás de Cada Gole: A Arte do Café</h2>
              <p>
              Uma boa xícara de café reflete o esforço e dedicação de muitas pessoas que fazem desta bebida um elixir tão apreciado pelo mundo
              </p>
              <button className="card-button">Conheça nossos produtos</button>
            </div>
          </div>
        </div>

        <div className="card card-reverse">
          <div className="card-content">
            <div className="card-text">
              <h2>TOFFA’S COFFEE: Um Legado de Qualidade e Dedicação no Café Arábica</h2>
              <p>
              Com mais de 50 anos de trabalho e dedicação , meu avô se tornou um produtor de café arábica de altíssima qualidade e continuando seu legado TOFFA’S CAFÉ
              </p>
              <button className="card-button">Entre em contato</button>
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
