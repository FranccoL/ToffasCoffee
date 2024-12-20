
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// PAGES
import Inicio from './pages/Inicio'
import NossosProdutos from './pages/NossosProdutos'
import QuemSomos from './pages/QuemSomos'
import Contato from './pages/Contato'




function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/produtos" element={<NossosProdutos />}/>
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
