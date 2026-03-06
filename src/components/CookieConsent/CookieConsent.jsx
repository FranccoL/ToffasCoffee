import { useState, useEffect } from "react";
import "./CookieConsent.css";
 
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
 
  useEffect(() => {
    const accepted = localStorage.getItem("toffas_cookies_accepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);
 
  const handleAccept = () => {
    localStorage.setItem("toffas_cookies_accepted", "true");
    setVisible(false);
  };
 
  if (!visible) return null;
 
  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p>
          Utilizamos cookies e tecnologias semelhantes para melhorar sua
          experiencia em nosso site, personalizar conteudo e analisar nosso
          trafego. Ao continuar navegando, voce concorda com nossa politica de
          privacidade e o uso de cookies conforme a LGPD.
        </p>
        <button className="cookie-accept-btn" onClick={handleAccept}>
          Aceitar
        </button>
      </div>
    </div>
  );
}