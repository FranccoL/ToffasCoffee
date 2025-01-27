import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


// PAGES

import Inicio from './pages/Inicio';
import NossosProdutos from './pages/NossosProdutos';
import QuemSomos from './pages/QuemSomos';
import Contato from './pages/Contato';


// UTILS
import ScrollToTop from './utils/ScrollTop'



function App() {
  return (
    <>
    <Router>
    
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/produtos" element={<NossosProdutos />}/>
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<h1>Página não encontrada :( </h1>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
