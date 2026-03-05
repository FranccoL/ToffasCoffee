import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom'
 
function PedidoPendente() {
  return (
    <>
      <Header />
      <section style={{ textAlign: 'center', padding: '80px 20px', minHeight: '60vh' }}>
        <h1 style={{ fontSize: '2rem', color: '#f9a825', marginBottom: '16px' }}>Pagamento Pendente</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '24px' }}>
          Seu pagamento está sendo processado. Assim que for confirmado, você receberá um e-mail com os detalhes.
        </p>
        <Link to="/loja" style={{ color: '#5C3A1E', fontWeight: 'bold', textDecoration: 'underline' }}>
          Voltar para a loja
        </Link>
      </section>
      <Footer />
    </>
  )
}
 
export default PedidoPendente