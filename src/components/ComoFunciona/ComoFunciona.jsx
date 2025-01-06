import './ComoFunciona.css'

function ComoFunciona () {
    return (
      <div className="container">
        <div className="tittleHow">
        <h1>COMO FUNCIONA? </h1>
        </div>

        <div className=" d-flex image-coffe">
            <div className="whiteCard d-flex">
            </div>
                <div className="iconsHow d-flex jc-space-evenlyn ">
                    <div className="iconCoffe"></div>
                    <div className="iconWhatsapp"></div>
                    <div className="iconDelivery"></div>
                </div>

            <div className="tittleIcons d-flex jc-space-evenlyn al-center">
                <h1 className="tittleIcon1">ESCOLHA SEU CAFÉ</h1>
                <h1 className="tittleIcon2">ENTRE EM CONTATO</h1>
                <h1 className="tittleIcon3">APROVEITE A SUA ENTREGA</h1>
            </div>
            <div className="buttonHowM">
                <button className="buttonHow al-center" type='submit'> Entre em Contato </button>     
            </div>
        </div>
</div>

           


    )
}

export default ComoFunciona