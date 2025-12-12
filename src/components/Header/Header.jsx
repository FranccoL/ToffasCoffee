import './Header.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Search, User, Menu } from 'lucide-react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const [isCoffeeDropdownOpen, setIsCoffeeDropdownOpen] = useState(false);
    const [isTeaDropdownOpen, setIsTeaDropdownOpen] = useState(false);
    const [isDrinksDropdownOpen, setIsDrinksDropdownOpen] = useState(false);

    // ESTADOS DA BUSCA
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // DADOS PARA A BUSCA
    const searchData = [
        { label: "Café Moído", path: "/cafeMoido" },
        { label: "Café em Grãos", path: "/cafeGrao" },
        { label: "Café Premium", path: "/cafePremium" },

        { label: "Chá de Frutas Vermelhas", path: "/chaV" },
        { label: "Chá de Limão", path: "/chaL" },
        { label: "Chá de Pêssego", path: "/chaP" },

        { label: "Cappuccino", path: "/cappuccino" },
        { label: "Cappuccino Sem Açucar", path: "/cappuccinoSA" },
        { label: "Chocolate Quente", path: "/chocolate" },

        { label: "Aluguel de Máquinas", path: "/aluguel" },
        { label: "Loja", path: "/loja" },
    ];

    const filteredResults =
        searchQuery.length > 0
            ? searchData.filter(item =>
                item.label.toLowerCase().includes(searchQuery.toLowerCase())
            )
            : [];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // Fecha submenus ao fechar menu principal
        if (isOpen) {
            setIsCoffeeDropdownOpen(false);
            setIsTeaDropdownOpen(false);
            setIsDrinksDropdownOpen(false);
        }
    };

    // Funções de toggle ajustadas para funcionar bem no mobile
    const toggleCoffeeDropdown = (e) => {
        if (e) e.preventDefault(); // Previne navegação no mobile
        setIsCoffeeDropdownOpen(!isCoffeeDropdownOpen);
        setIsTeaDropdownOpen(false);
        setIsDrinksDropdownOpen(false);
    };

    const toggleTeaDropdown = (e) => {
        if (e) e.preventDefault();
        setIsTeaDropdownOpen(!isTeaDropdownOpen);
        setIsCoffeeDropdownOpen(false);
        setIsDrinksDropdownOpen(false);
    };

    const toggleDrinksDropdown = (e) => {
        if (e) e.preventDefault();
        setIsDrinksDropdownOpen(!isDrinksDropdownOpen);
        setIsTeaDropdownOpen(false);
        setIsCoffeeDropdownOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        setIsOpen(false);
        setIsCoffeeDropdownOpen(false);
        setIsTeaDropdownOpen(false);
        setIsDrinksDropdownOpen(false);
        setIsSearchOpen(false);
    };

    // Função auxiliar para lidar com clique em itens pai no mobile vs desktop
    const handleParentClick = (e, toggleFunc) => {
        if (isOpen) {
            // Se menu mobile aberto, apenas expande, não navega
            toggleFunc(e);
        } else {
            // Desktop: navega e fecha dropdowns
            handleLinkClick();
        }
    };

    const headerClass = isScrolled ? 'headAll scrolled' : 'headAll transparent';

    return (
        <header>
            <div className="container-header">
                <div className={`${headerClass} d-flex al-center`}>
                    <Link to="/" className="logo-link">
                        <img
                            src={isScrolled ? "/logoPreto.png" : "/logoBranco.png"}
                            alt="logo"
                            className="imgHeader" />
                    </Link>
                    
                    <nav className={`${isOpen ? "open" : ""}`}>
                        <button className="mobile-menu close-btn" onClick={toggleMenu}>X</button>
                        <ul className="d-flex">

                            {/* CAFÉ */}
                            <li 
                                className="dropdown-menu"
                                onMouseEnter={() => !isOpen && setIsCoffeeDropdownOpen(true)}
                                onMouseLeave={() => !isOpen && setIsCoffeeDropdownOpen(false)}
                            >
                                <Link 
                                    to="/cafe" 
                                    onClick={(e) => handleParentClick(e, toggleCoffeeDropdown)}
                                >
                                    Café ▾
                                </Link>

                                {/* REMOVIDO "|| isOpen" DAQUI PARA NÃO FORÇAR ABERTURA */}
                                <div className={`dropdown-content ${isCoffeeDropdownOpen ? "visible" : ""}`}>
                                    <Link to="/cafeMoido" onClick={handleLinkClick}>Café Moído</Link>
                                    <Link to="/cafeGrao" onClick={handleLinkClick}>Café em Grãos</Link>
                                    <Link to="/cafePremium" onClick={handleLinkClick}>Café Premium</Link>
                                </div>
                            </li>

                            {/* CHÁ */}
                            <li 
                                className="dropdown-menu"
                                onMouseEnter={() => !isOpen && setIsTeaDropdownOpen(true)}
                                onMouseLeave={() => !isOpen && setIsTeaDropdownOpen(false)}
                            >
                                <Link 
                                    to="/cha" 
                                    onClick={(e) => handleParentClick(e, toggleTeaDropdown)}
                                >
                                    Chá ▾
                                </Link>

                                <div className={`dropdown-content ${isTeaDropdownOpen ? "visible" : ""}`}>
                                    <Link to="/chaV" onClick={handleLinkClick}>Chá de Frutas Vermelhas</Link>
                                    <Link to="/chaL" onClick={handleLinkClick}>Chá de Limão</Link>
                                    <Link to="/chaP" onClick={handleLinkClick}>Chá de Pêssego</Link>
                                </div>
                            </li>

                            {/* BEBIDAS QUENTES */}
                            <li 
                                className="dropdown-menu"
                                onMouseEnter={() => !isOpen && setIsDrinksDropdownOpen(true)}
                                onMouseLeave={() => !isOpen && setIsDrinksDropdownOpen(false)}
                            >
                                <Link 
                                    to="/bebidasQuentes" 
                                    onClick={(e) => handleParentClick(e, toggleDrinksDropdown)}
                                >
                                    Bebidas Quentes ▾
                                </Link>

                                <div className={`dropdown-content ${isDrinksDropdownOpen ? "visible" : ""}`}>
                                    <Link to="/cappuccino" onClick={handleLinkClick}>Cappuccino</Link>
                                    <Link to="/cappuccinoSA" onClick={handleLinkClick}>Cappuccino s/ Açúcar</Link>
                                    <Link to="/chocolate" onClick={handleLinkClick}>Chocolate</Link>
                                </div>
                            </li>

                            <li><Link to="/aluguel" onClick={handleLinkClick}>Alugar Máquina</Link></li>
                            <li><Link to="/loja" onClick={handleLinkClick}>Loja</Link></li>
                        </ul>
                    </nav>

                    {/* ÍCONES */}
                    <div className="utility-icons d-flex al-center">

                        {/* LUPA COM BUSCA */}
                        <button className="icon-btn search-btn" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                            <Search size={20} />
                        </button>

                        <button className="icon-btn profile-btn">
                            <User size={20} />
                        </button>

                    </div>

                    <div className="mobile-menu">
                        <button className="btMobile icon-btn" onClick={toggleMenu}>
                            <Menu size={28} />
                        </button>
                    </div>
                </div>

                {/* CAIXA DE BUSCA */}
                {isSearchOpen && (
                    <div className="search-box-header"> 
                        <input type="text" placeholder="Buscar..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="search-input-header" />
                        <ul className="search-results-header">
                            {filteredResults.map((item) => (
                                <li key={item.label}>
                                    <Link to={item.path} onClick={handleLinkClick}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>
        </header>
    );
}

export default Header;