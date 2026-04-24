import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollTop";

// CONTEXT
import { CartProvider } from "./context/CartContext";

// STORE LAYOUT
import StoreLayout from "./layouts/StoreLayout";

// ADMIN
import AdminLayout from "./admin/components/AdminLayout";
import ProtectedRoute from "./admin/components/ProtectedRoute";
import AdminLogin from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import Pedidos from "./admin/pages/Pedidos";
import PedidoDetalhe from "./admin/pages/PedidoDetalhe";

// STORE PAGES
import Inicio from "./pages/Inicio";
import Cafe from "./pages/Cafe";
import CafeGrao from "./pages/CafeGrao";
import CafeMoido from "./pages/CafeMoido";
import CafePremium from "./pages/CafePremium";
import Cha from "./pages/Cha";
import ChaV from "./pages/ChaV";
import ChaP from "./pages/ChaP";
import ChaL from "./pages/ChaL";
import HotDrinks from "./pages/BebidasQuentes";
import Cappuccino from "./pages/Cappuccino";
import CappuccinoSA from "./pages/CappuccinoSA";
import CappPist from "./pages/CappPist";
import Chocolate from "./pages/Chocolate";
import Suico from "./pages/Suico";
import LeitePo from "./pages/LeitePo";
import NossosProdutos from "./pages/NossosProdutos";
import QuemSomos from "./pages/QuemSomos";
import Contato from "./pages/Contato";
import AluguelMaquinaPage from "./pages/AluguelMaquinaPage";
import Loja from "./pages/Loja";
import Checkout from "./pages/Checkout/Checkout";
import AdminCupom from "./pages/AdminCupom";
import CookieConsent from "./components/CookieConsent/CookieConsent";

//BACK_URLS
import PedidoSucesso from "./pages/PedidoSucesso";
import PedidoFalha from "./pages/PedidoFalha";
import PedidoPendente from "./pages/PedidoPendente";


function App() {
  return (
    <CartProvider>
      
      <Router>
        <ScrollToTop />

        <Routes>
          {/* STORE */}
          <Route element={<StoreLayout />}>
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
            <Route path="/cappPist" element={<CappPist />} />
            <Route path="/chocolate" element={<Chocolate />} />
            <Route path="/suico" element={<Suico />} />
            <Route path="/leitePo" element={<LeitePo />} />
            <Route path="/produtos" element={<NossosProdutos />} />
            <Route path="/quemSomos" element={<QuemSomos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/aluguel" element={<AluguelMaquinaPage />} />
            <Route path="/loja" element={<Loja />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cupom" element={<AdminCupom />} />
            <Route path="/pedido/sucesso" element={<PedidoSucesso />} />
            <Route path="/pedido/falha" element={<PedidoFalha />} />
            <Route path="/pedido/pendente" element={<PedidoPendente />} />
            
            </Route>

          {/* ADMIN */}
            <Route path="/admin/login" element={<AdminLogin />} />
         
            <Route path="/admin"element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="pedidos" element={<Pedidos />} />
            <Route path="pedidos/:id" element={<PedidoDetalhe />} />
            
          </Route>

          
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
        <CookieConsent />
      </Router>
    </CartProvider>
  );
}

export default App;
