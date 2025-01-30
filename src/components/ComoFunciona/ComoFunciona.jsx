import './ComoFunciona.css';

function ComoFunciona () {
  return (
    <div className="container-how">
      <div className="tittleHow">
        <h1>COMO FUNCIONA?</h1>
      </div>

      <div className="image-coffe">
        <div className="whiteCard  d-flex ">
          <div className="iconWithTitle d-flex jc-flex-center al-center flex-column">
            <div className="iconCoffe"></div>
            <h1 className="tittleIcon">ESCOLHA SEU CAFÉ</h1>
          </div>
          <div className="iconWithTitle d-flex jc-flex-center al-center flex-column">
            <div className="iconWhatsapp"></div>
            <h1 className="tittleIcon">ENTRE EM CONTATO</h1>
          </div>
          <div className="iconWithTitle d-flex jc-flex-center al-center flex-column ">
            <div className="iconDelivery"></div>
            <h1 className="tittleIcon">APROVEITE A SUA ENTREGA</h1>
          </div>
          <div className="buttonHowM d-flex jc-flex-center al-center flex-column">
          <a href="https://wa.me/5511915387618?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento%20dos%20produtos.%20Poderia%20me%20informar%20mais%20detalhes%20,%20por%20favor?" className="buttonHow " target="_blank" rel="noopener noreferrer">
            Entre em Contato
          </a >
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComoFunciona;
