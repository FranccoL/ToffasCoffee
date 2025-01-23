import './PqNos.css';

function PqNos() {
    return (
        <div className="container-whyUs d-flex">  
            <div className="tittleWhyUs d-flex flex-column al-center jc-flex-center">
                <h1>Por que escolher<br /> Toffa’s Coffee?</h1>
            </div>

            <div className="quadrados-container d-flex flex-wrap">
                <div className="quadrado">
                    <h1>Café gourmet de alta qualidade</h1>   
                    <p>Produtos premium que destaca-se <br /> pela seleção cuidadosa dos grãos, torrefação artesanal, oferecendo um sabor único e sofisticado a cada xícara.</p>
                </div>

                <div className="quadrado">
                    <h1>100% Arábica</h1>   
                    <p>Grãos da espécie Coffea arabica, conhecida por sua qualidade superior, sabor mais suave e menos amargor em comparação com outras variedades.</p>
                </div>

                <div className="quadrado">
                    <h1>Ótimo custo benefício</h1>   
                    <p>Um equilíbrio ideal entre preço e qualidade, atendendo às expectativas do cliente sem comprometer o orçamento.</p>
                </div>

                <div className="quadrado">
                    <h1>Outro Benefício</h1>   
                    <p>Com uma excelente relação de custo-benefício, você terá o melhor café para o seu dia a dia.</p>
                </div>
            </div>

            <div className="WhyUs">
                <button className="WhyUss" type="submit">Mais informações</button>
            </div>
        </div>
    );
}

export default PqNos;
