import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom'
 
function PedidoSucesso() {
  return (
    <>
      <Header />
      <section style={{ textAlign: 'center', padding: '80px 20px', minHeight: '60vh' }}>
        <h1 style={{ fontSize: '2rem', color: '#2e7d32', marginBottom: '16px' }}>Pagamento Aprovado!</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '24px' }}>
          Obrigado pela sua compra. Seu pedido foi confirmado e em breve você receberá os detalhes por e-mail.
        </p>
        <Link to="/loja" style={{ color: '#5C3A1E', fontWeight: 'bold', textDecoration: 'underline' }}>
          Voltar para a loja
        </Link>
      </section>
      <Footer />
    </>
  )
}
 
export default PedidoSucesso