import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import PqNos from "../components/PqNos/PqNos"
import ComoFunciona from "../components/ComoFunciona/ComoFunciona"
import CardInfo from "../components/CardInfo/CardInfo"
import SectionAboutToffa from "../components/SectionAboutToffa/SectionAboutToffa"
import Footer from "../components/Footer/Footer"

function Inicio () {
    return (
        <>
        <Header />
        <Hero />
        <PqNos />
        <ComoFunciona />
        <CardInfo />
        <SectionAboutToffa />
        <Footer />
        </>
    )
}

export default Inicio