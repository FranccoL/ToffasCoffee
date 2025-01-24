import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="logo"></div>
        <h3>SEJA NOSSO PARCEIRO</h3>
        <a 
  href="https://wa.me/5511915387618?text=Olá,%20tudo%20bem?%20Gostaria%20de%20conversar%20sobre%20a%20possibilidade%20de%20uma%20parceria.%20Poderia%20me%20passar%20mais%20informações%20sobre%20como%20podemos%20colaborar?%20Estou%20à%20disposição!" 
  className="contact-button" 
  target="_blank" 
  rel="noopener noreferrer"
>
  ENTRE EM CONTATO
</a>
        
      </div>
      <div className="footer-right">
        <div className="info">
          <p>+55 (11) 91538-7618</p>
          <p>toffascoffee@gmail.com</p>
        </div>
        <div className="social">
          <p>SIGA</p>
          <a href="#">FACEBOOK</a>
          <a href="https://www.instagram.com/toffascoffee/" target="_blank">INSTAGRAM</a>
          <a href="#">LINKEDIN</a>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;