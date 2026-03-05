import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom'
 
function PedidoFalha() {
  return (
    <>
      <Header />
      <section style={{ textAlign: 'center', padding: '80px 20px', minHeight: '60vh' }}>
        <h1 style={{ fontSize: '2rem', color: '#c62828', marginBottom: '16px' }}>Pagamento não aprovado</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '24px' }}>
          Infelizmente o pagamento não foi concluído. Tente novamente ou escolha outra forma de pagamento.
        </p>
        <Link to="/loja" style={{ color: '#5C3A1E', fontWeight: 'bold', textDecoration: 'underline' }}>
          Voltar para a loja
        </Link>
      </section>
      <Footer />
    </>
  )
}
 
export default PedidoFalha