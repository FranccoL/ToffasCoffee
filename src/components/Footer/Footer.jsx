import './Footer.css'


function Footer () {
    return (
      <div className="container-footer">

        <div className="footer d-flex">
        <div className="logoFooter">
            
        <div className="tittleFooter d-flex flex-column">
            <h1>Junte-se <br /> a nós!</h1>
            <div className="buttonFotter flex-column ">
            <button type="submit" className="btfooter">TRABALHE CONOSCO</button>
            </div>
            
        </div>
        </div>
        <div className="lineFooter d-flex"></div> 
        <div className="infosFooter d-flex flex-column ">
            <div className="infoFooter">
            <h1>INFO</h1>
            <p>(11) 00000-0000</p>
            <p>RAFA@GMAIL.COM</p>
            </div>

            <div className="infoFooter">
            <h1>Endereço</h1>
            <p>Rua DA RAFAELA - FROLDI <br />
            São Paulo - SP, 01121-000</p>
            </div>

            <div className="infoFooter d-flex flex-column ">
            <h1>Siga</h1>
            <a href="https://www.instagram.com/toffascoffee/" target="_blank">
            <button className="btRedes">INSTAGRAM</button>
            </a>

            <a href="https://www.instagram.com/toffascoffee/" target="_blank">
            <button className="btRedes">FACEBOOK</button>
            </a>

            <a href="https://www.instagram.com/toffascoffee/" target="_blank">
            <button className="btRedes">LINKEDIN</button>
            </a>
            </div>
            
            
        </div>

        </div>
      </div>
    )
}

export default Footer