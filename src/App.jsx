<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import CartButton from "./components/CartButton/CartButton";


// PAGES
import Inicio from "./pages/Inicio";
import NossosProdutos from "./pages/NossosProdutos";
import QuemSomos from "./pages/QuemSomos";
import Contato from "./pages/Contato";
import Loja from "./pages/Loja";
import Checkout from "./pages/Checkout/Checkout";
// UTILS
import ScrollToTop from "./utils/ScrollTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      
      <CartButton />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/produtos" element={<NossosProdutos />} />
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<h1>Página não encontrada </h1>} />
      </Routes>
    </Router>
  );
}

export default App;
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'

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
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/produtos" element={<NossosProdutos />}/>
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<h1>Página não encontrada : </h1>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
>>>>>>> cdc38fbff0a434d52ddaa88d6f22b23c5b687589
