import './Hero.css';
import { Link } from 'react-router-dom';
// Importação dos componentes do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Importação dos módulos necessários (Navegação, Paginação, Autoplay)
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Importar os estilos básicos do Swiper e os módulos
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Dados para os 3 slides
const slidesData = [
    {
        id: 1,
        title: "",
        backgroundUrl: "/banerNatal.svg", 
        ctaText: "Adquira Agora!",
        ctaLink: "https://wa.me/5511915387618?text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20dos%20produtos."
    },
    {
        id: 2,
        title: "Aluguel de Máquinas:Soluções flexíveis para eventos e empresas.",
        backgroundUrl: "/bannerMaquina.svg", 
        ctaText: "Conheça as Máquinas",
        ctaLink: "/cha"
    },
    {
        id: 3,
        title: "Bebidas Quentes: Chocolate e Cappuccino para o seu conforto.",
        backgroundUrl: "/imageCafe.svg", 
        ctaText: "COMPRE AGORA",
        ctaLink: "/bebidas-quentes"
    }
];

function Hero() {
    return (
        <div className="hero-container">
            {/* WhatsApp flutuante mantido fora do carrossel */}
            <a 
                href="https://wa.me/5511915387618?text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20dos%20produtos.%20Poderia%20me%20informar%20mais%20detalhes,%20por%20favor?" 
                target="_blank" 
                rel="noopener noreferrer"
                className="whatsapp-fly"
            >
                <img src="/WhatsApp.svg" alt="WhatsApp" className="whatsapp-icon" />
            </a>

            <Swiper
                className="mySwiper"
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
            >
                {slidesData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        {/* Slide Individual */}
                        <div 
                            className="hero-slide" 
                            style={{ backgroundImage: `url(${slide.backgroundUrl})` }}
                        >
                            <div className="hero-text d-flex flex-column">
                                <h1>{slide.title}</h1>

                                <Link 
                                    to={slide.ctaLink} 
                                    className="btHero" 
                                    target={slide.ctaLink.startsWith('http') ? "_blank" : "_self"}
                                >
                                    {slide.ctaText}
                                </Link>
                            </div> 
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Hero;