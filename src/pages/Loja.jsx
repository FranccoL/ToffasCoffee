
import { Store } from 'lucide-react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import HeroStore from '../components/HeroStore/HeroStore'
import TitleStore from '../components/TitleStore/TitleStore'
import StoreCatalog from '../components/StoreCatalog/StoreCatalog'
import EndStore from '../components/EndStore/EndStore'


function Loja () {
    return (
        <>
        <Header />
       <HeroStore />
       <TitleStore />
       <StoreCatalog />
       <EndStore />
        <Footer />
        </>
    )
}

export default Loja