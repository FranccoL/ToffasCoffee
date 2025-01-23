import './ContactForm.css';

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <div className="container-Form">
      <div className='titleForm d-flex al-center jc-flex-center'>
        <h1>Contato</h1>
      </div>

    
    <div className="container-contato">
      
      <h1 className="titulo-contato">Entre em Contato</h1>
      <form className="form-contato" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Digite seu email" required />
        </div>

        <div className="input-group">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" name="mensagem" rows="5" placeholder="Digite sua mensagem" required></textarea>
        </div>

        <button type="submit" className="btn-enviar">Enviar</button>
      </form>
    </div>
    </div>
  );
}

export default ContactForm;