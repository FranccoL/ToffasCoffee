import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import CartButton from "./components/CartButton/CartButton";


// PAGES
import Inicio from "./pages/Inicio";
import CafeGrao from "./pages/CafeGrao";
import CafeMoido from "./pages/CafeMoido";
import Cha from "./pages/Cha";
import ChaV from "./pages/ChaV";
import ChaP from "./pages/ChaP";
import ChaL from "./pages/ChaL";
import Cappuccino from "./pages/Cappuccino";
import CappuccinoSA from "./pages/CappuccinoSA";
import Chocolate from "./pages/Chocolate";
import HotDrinks from "./pages/BebidasQuentes";
import Cafe from "./pages/Cafe";
import CafePremium from "./pages/CafePremium";
import NossosProdutos from "./pages/NossosProdutos";
import QuemSomos from "./pages/QuemSomos";
import Contato from "./pages/Contato";
import AluguelMaquinaPage from "./pages/AluguelMaquinaPage";
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
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/cafeGrao" element={<CafeGrao />} />
        <Route path="/cafeMoido" element={<CafeMoido />} />
        <Route path="/cafePremium" element={<CafePremium />} />
        <Route path="/cha" element={<Cha />} />
        <Route path="/chaV" element={<ChaV />} />
        <Route path="/chaP" element={<ChaP />} />
        <Route path="/chaL" element={<ChaL />} />
        <Route path="/bebidasQuentes" element={<HotDrinks />} />
        <Route path="/cappuccino" element={<Cappuccino />} />
        <Route path="/cappuccinoSA" element={<CappuccinoSA />} />
        <Route path="/chocolate" element={<Chocolate />} />
        <Route path="/produtos" element={<NossosProdutos />} />
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/aluguel" element={<AluguelMaquinaPage />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<h1>Página não encontrada </h1>} />
      </Routes>
    </Router>
  );
}

export default App;
