import './ComoFunciona.css';

function ComoFunciona () {
  return (
    <div className="container">
      <div className="tittleHow">
        <h1>COMO FUNCIONA?</h1>
      </div>

      <div className="d-flex image-coffe">
        <div className="whiteCard">
          <div className="iconsHow">
            <div className="iconCoffe"></div>
            <h1 className="tittleIcon">ESCOLHA SEU CAFÉ</h1>
          </div>
          <div className="iconsHow">
            <div className="iconWhatsapp"></div>
            <h1 className="tittleIcon">ENTRE EM CONTATO</h1>
          </div>
          <div className="iconsHow">
            <div className="iconDelivery"></div>
            <h1 className="tittleIcon">APROVEITE A SUA ENTREGA</h1>
          </div>

          <div className="buttonHowM">
            <button className="buttonHow" type="submit">Entre em Contato</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComoFunciona;
