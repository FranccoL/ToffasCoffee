import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="logo"></div>
        <h3>SEJA NOSSO PARCEIRO</h3>
        <button className="contact-button">ENTRE EM CONTATO</button>
      </div>
      <div className="footer-right">
        <div className="info">
          <p>(11) 00000-0000</p>
          <p>rafa@gmail.com</p>
        </div>
        <div className="social">
          <p>SIGA</p>
          <a href="#">LINKEDIN</a>
          <a href="#">FACEBOOK</a>
          <a href="#">INSTAGRAM</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;