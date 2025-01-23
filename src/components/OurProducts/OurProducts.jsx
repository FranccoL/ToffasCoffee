import './OurProducts.css';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

function OurProducts () {

    const products = [
        {
          name: "CAFÉ TORRADO MOÍDO",
          description: "Torra média\nNas versões: 250g, 500g e 1kg",
          image: "./torraMedia 1.svg",
        },
        {
          name: "CAFÉ TORRADO MOÍDO",
          description: "Torra escura\nNas versões: 250g, 500g e 1kg",
          image: "./torraEscura 1.svg",
        },
        {
          name: "CAFÉ TORRADO EM GRÃOS",
          description: "Torra média\nNas versões: 250g, 500g e 1kg",
          image: "/graoM.svg",
        },
        {
          name: "CAFÉ TORRADO EM GRÃOS",
          description: "Torra escura\nNas versões: 250g, 500g e 1kg",
          image: "/grao 1.svg",
        }, 
        {
          name: "CAPPUCCINO",
          description: "PREMIUM, SOLÚVEL\nNas versões: 250g, 500g e 1kg",
          image: "/cappuccino 1.svg",
        },
        {
          name: "CHOCOLATE",
          description: "PREMIUM, SOLÚVEL\nNas versões: 250g, 500g e 1kg",
          image: "/chocolate1.svg",
        },
    ];

    return (
        <div className="container-products">
            <div className="tittleProducts d-flex al-center jc-flex-center">
                <h1>NOSSOS PRODUTOS</h1>
            </div>
            <Swiper
                spaceBetween={20} // Espaço entre slides
                slidesPerView={4} // Quantos slides aparecem por vez
                loop={false} // Faz o carrossel ser infinito
                breakpoints={{
                    320: { slidesPerView: 1 }, 
                    480: { slidesPerView: 2 }, 
                    768: { slidesPerView: 3 }, 
                    1024: { slidesPerView: 4 }, 
                }}
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <div className="product-card">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-description">
                                {product.description.split("\n").map((line, idx) => (
                                    <span key={idx}>
                                        {line}
                                        <br />
                                    </span>
                                ))}
                            </p>
                            <button className="product-button">Entre em Contato</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
                <div className="lineBrown d-flex jc-flex-center al-center">
                    <div className="lineFaq d-flex ">
                        <div className="questions d-flex flex-column ">
                            <h2>PERGUNTAS FREQUENTES (FAQ)</h2>
                            <h1>De onde vem o nosso café?</h1>
                            <p>Nosso café é cultivado na renomada região do Sul de Minas Gerais, mais especificamente na Serra do Salitre, reconhecida pela excelência e tradição na produção de cafés especiais.</p>
                            <h1>Quais grãos utilizamos?</h1>
                            <p>Trabalhamos exclusivamente com grãos 100% Arábica, conhecidos por sua qualidade superior, incluindo as variedades Catuai Vermelho e Topázio Amarelo.</p>
                            <h1>Onde realizamos entregas?</h1>
                            <p>Atendemos todo o Brasil, com foco especial no estado de São Paulo, garantindo que nossos cafés cheguem frescos e com qualidade preservada.</p>
                            <h1>Existe uma quantidade mínima para pedidos?</h1>
                            <p>Não! Você pode pedir a quantidade que desejar. Seja para consumo próprio ou para abastecer seu negócio, estamos prontos para atender você.</p>
                        </div>
                        
            </div>  
            </div>
        </div>
    );
}

export default OurProducts;
