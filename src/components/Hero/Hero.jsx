import './Hero.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slidesData = [
  {
    id: 1,
    title: "Conheça nossos Cafés Especiais",
    backgroundUrl: "/capPistache.svg",
    ctaText: "Peça o seu!",
    ctaLink: "/cappPist"
  },
  {
    id: 2,
    title: <>O AUTÊNTICO SABOR DO <span className="highlight">CAFÉ</span> EM SEU <span className="highlight">ESCRITÓRIO</span></>,
    subtitle: "Aluguel de máquinas: tecnologia de ponta e café premium no seu escritório.",
    backgroundUrl: "/bannerMaquina.svg",
    ctaText: "Conheça Mais!",
    ctaLink: "/aluguel"
  },
  {
    id: 3,
    title: "Uma experiência cremosa que derrete no paladar.",
    backgroundUrl: "/suico.svg",
    ctaText: "Comprar Agora!",
    ctaLink: "/suico"
  }
];

function Hero() {
  return (
    <div className="hero-container">

      {/* WhatsApp flutuante */}
      <a
        href="https://wa.me/5511915387618"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fly"
      >
        <img src="/WhatsApp.svg" alt="WhatsApp" className="whatsapp-icon" />
      </a>

      <Swiper
        className="mySwiper"
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`hero-slide slide-${slide.id}`}
              style={{ backgroundImage: `url(${slide.backgroundUrl})` }}
            >
              <div className="hero-text">
                <h1>{slide.title}</h1>
                {slide.subtitle && <h2 className="hero-subtitle">{slide.subtitle}</h2>}
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
