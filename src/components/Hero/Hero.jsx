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
    backgroundUrl: "/bannerCaffe.svg",
    ctaText: "Compre Agora!",
    ctaLink: "/cafe"
  },
  {
    id: 2,
    title: "Aluguel de Máquinas para sua Empresa",
    backgroundUrl: "/bannerMaquina.svg",
    ctaText: "Conheça as Máquinas",
    ctaLink: "/aluguel"
  },
  {
    id: 3,
    title: "Chás Premium: Sabores que Encantam",
    backgroundUrl: "/bannerChaa.svg",
    ctaText: "Comprar Agora",
    ctaLink: "/cha"
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
