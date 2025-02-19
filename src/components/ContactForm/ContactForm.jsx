import './ContactForm.css';
import { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hryppuc', 'template_xbe3zq5', e.target, 'sGQWUhgfYKz3VOisR')
      .then((result) => {
        console.log(result.text);
        setStatus('Mensagem enviada com sucesso!');
        setFormData({ nome: '', email: '', mensagem: '' });
      }, (error) => {
        console.log(error.text);
        setStatus('Erro ao enviar a mensagem. Tente novamente mais tarde.');
      });
  };

  return (
    <div className="container-Form">
      <div className="titleForm d-flex al-center jc-flex-center">
        <h1>Contato</h1>
      </div>

      <div className="container-contato">
        <h1 className="titulo-contato">Entre em Contato</h1>
        <form className="form-contato" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="5"
              placeholder="Digite sua mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-enviar">Enviar</button>
        </form>

        {status && <p>{status}</p>}
      </div>
    </div>
  );
}

export default ContactForm;
