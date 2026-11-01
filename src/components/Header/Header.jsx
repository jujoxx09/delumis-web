import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronDown,
  Globe,
  LayoutTemplate,
  BriefcaseBusiness,
  BookOpen,
  Search,
  ShoppingCart,
  Smartphone,
  Code2,
  Utensils,
  Hotel,
  HeartPulse,
  Store,
  Dumbbell,
  House,
  UserRound,
  Megaphone,
} from "lucide-react";

import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setResourcesOpen(false);
    setSolutionsOpen(false);
  };

  const toggleResources = () => {
    setResourcesOpen(!resourcesOpen);
    setSolutionsOpen(false);
  };

  const toggleSolutions = () => {
    setSolutionsOpen(!solutionsOpen);
    setResourcesOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">

        {/* LOGO */}
        <div className="header__logo">
          <NavLink to="/" onClick={closeMenu}>
            <div className="logo">
              <img
                src="/logo-delumis.png"
                alt="DELUMIS"
              />
            </div>
          </NavLink>
        </div>

        {/* NAV */}
        <nav
          className={`header__nav ${
            menuOpen ? "active" : ""
          }`}
        >

          {/* INICIO */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Inicio
          </NavLink>


          {/* =========================
              RECURSOS
          ========================= */}

          <div
            className={`nav-dropdown ${
              resourcesOpen ? "open" : ""
            }`}
          >

            <button
              className="nav-dropdown__trigger"
              onClick={toggleResources}
            >
              Recursos

              <ChevronDown
                size={14}
                className="dropdown-chevron"
              />
            </button>


            <div className="mega-menu resources-menu">

              <div className="mega-menu__header">
                <div>
                  <span className="mega-menu__eyebrow">
                    RECURSOS DELUMIS
                  </span>

                  <h3>
                    Todo lo que necesitas
                    <span> para crecer.</span>
                  </h3>
                </div>

                <p>
                  Descubre nuestros servicios, proyectos,
                  plantillas y recursos digitales.
                </p>
              </div>


              <div className="mega-menu__grid">

                {/* SERVICIOS */}
                <NavLink
                  to="/servicios"
                  onClick={closeMenu}
                  className="mega-card"
                >
                  <div className="mega-card__icon">
                    <BriefcaseBusiness size={20} />
                  </div>

                  <div className="mega-card__content">
                    <h4>Servicios</h4>

                    <p>
                      Soluciones digitales para tu negocio.
                    </p>
                  </div>

                  <ArrowUpRight
                    className="mega-card__arrow"
                    size={17}
                  />
                </NavLink>


                {/* PLANTILLAS */}
                <NavLink
                  to="/plantillas"
                  onClick={closeMenu}
                  className="mega-card"
                >
                  <div className="mega-card__icon">
                    <LayoutTemplate size={20} />
                  </div>

                  <div className="mega-card__content">
                    <h4>Plantillas</h4>

                    <p>
                      Inspírate con nuestros diseños.
                    </p>
                  </div>

                  <ArrowUpRight
                    className="mega-card__arrow"
                    size={17}
                  />
                </NavLink>


                {/* PORTFOLIO 
                <NavLink
                  to="/portfolio"
                  onClick={closeMenu}
                  className="mega-card"
                >
                  <div className="mega-card__icon">
                    <Globe size={20} />
                  </div>

                  <div className="mega-card__content">
                    <h4>Portfolio</h4>

                    <p>
                      Descubre algunos de nuestros proyectos.
                    </p>
                  </div>

                  <ArrowUpRight
                    className="mega-card__arrow"
                    size={17}
                  />
                </NavLink>*/}


                {/* BLOG */}
                <NavLink
                  to="/blog"
                  onClick={closeMenu}
                  className="mega-card"
                >
                  <div className="mega-card__icon">
                    <BookOpen size={20} />
                  </div>

                  <div className="mega-card__content">
                    <h4>Blog</h4>

                    <p>
                      Consejos, tendencias e inspiración.
                    </p>
                  </div>

                  <ArrowUpRight
                    className="mega-card__arrow"
                    size={17}
                  />
                </NavLink>


                {/* SEO 
                <NavLink
                  to="/seo"
                  onClick={closeMenu}
                  className="mega-card"
                >
                  <div className="mega-card__icon">
                    <Search size={20} />
                  </div>

                  <div className="mega-card__content">
                    <h4>Marketing & SEO</h4>

                    <p>
                      Haz que tu negocio sea visible.
                    </p>
                  </div>

                  <ArrowUpRight
                    className="mega-card__arrow"
                    size={17}
                  />
                </NavLink>*/}


                {/* ECOMMERCE 
                <NavLink
                  to="/servicios/ecommerce"
                  onClick={closeMenu}
                  className="mega-card"
                >
                  <div className="mega-card__icon">
                    <ShoppingCart size={20} />
                  </div>

                  <div className="mega-card__content">
                    <h4>eCommerce</h4>

                    <p>
                      Vende tus productos online.
                    </p>
                  </div>

                  <ArrowUpRight
                    className="mega-card__arrow"
                    size={17}
                  />
                </NavLink>*/}

              </div>

            </div>
          </div>


          {/* =========================
              SOLUCIONES
          ========================= */}

          <div
            className={`nav-dropdown ${
              solutionsOpen ? "open" : ""
            }`}
          >

            <button
              className="nav-dropdown__trigger"
              onClick={toggleSolutions}
            >
              Soluciones

              <ChevronDown
                size={14}
                className="dropdown-chevron"
              />
            </button>


            <div className="mega-menu solutions-menu">

              <div className="mega-menu__header">

                <div>
                  <span className="mega-menu__eyebrow">
                    SOLUCIONES POR SECTOR
                  </span>

                  <h3>
                    Tu negocio,
                    <span> nuestra solución.</span>
                  </h3>
                </div>

                <p>
                  Creamos experiencias digitales adaptadas
                  a las necesidades de cada sector.
                </p>

              </div>


              <div className="solutions-grid">

                {/* RESTAURANTES */}
                <NavLink  
                  to="/Soluciones/Hosteleria"
                  onClick={closeMenu}
                  className="solution-card"
                >
                  <div className="solution-card__icon">
                    <Utensils size={20} />
                  </div>

                  <div>
                    <h4>Hostelería</h4>
                    <span>
                      Web · Carta digital · Reservas
                    </span>
                  </div>

                  <ArrowUpRight size={16} />
                </NavLink>


                {/* BELLLEZA Y ESTÉTICA */}
                <NavLink
                  to="/Soluciones/BellezaEstetica"
                  onClick={closeMenu}
                  className="solution-card"
                >
                  <div className="solution-card__icon">
                    <Hotel size={20} />
                  </div>

                  <div>
                    <h4>Belleza y Estética</h4>
                    <span>
                      Reservas · Experiencias · Web
                    </span>
                  </div>

                  <ArrowUpRight size={16} />
                </NavLink>


                {/* EVENTOS */}
                <NavLink
                  to="/soluciones/eventos"
                  onClick={closeMenu}
                  className="solution-card"
                >
                  <div className="solution-card__icon">
                    <HeartPulse size={20} />
                  </div>

                  <div>
                    <h4>Eventos</h4>
                    <span>
                      Organización · Marketing · Asistentes
                    </span>
                  </div>

                  <ArrowUpRight size={16} />
                </NavLink>


                {/* TIENDAS */}
                <NavLink
                  to="/soluciones/comercio"
                  onClick={closeMenu}
                  className="solution-card"
                >
                  <div className="solution-card__icon">
                    <Store size={20} />
                  </div>

                  <div>
                    <h4>Tiendas</h4>
                    <span>
                      eCommerce · Catálogo · Ventas
                    </span>
                  </div>

                  <ArrowUpRight size={16} />
                </NavLink>


                {/* GIMNASIOS 
                <NavLink
                  to="/soluciones/gimnasios"
                  onClick={closeMenu}
                  className="solution-card"
                >
                  <div className="solution-card__icon">
                    <Dumbbell size={20} />
                  </div>

                  <div>
                    <h4>Gimnasios</h4>
                    <span>
                      Reservas · Clases · Clientes
                    </span>
                  </div>

                  <ArrowUpRight size={16} />
                </NavLink>*/}


                {/* INMOBILIARIAS */}
                <NavLink
                  to="/soluciones/inmobiliaria"
                  onClick={closeMenu}
                  className="solution-card"
                >
                  <div className="solution-card__icon">
                    <House size={20} />
                  </div>

                  <div>
                    <h4>Inmobiliarias</h4>
                    <span>
                      Catálogo · Propiedades · Contactos
                    </span>
                  </div>

                  <ArrowUpRight size={16} />
                </NavLink>


                {/* PROFESIONALES */}
                <NavLink
                  to="/soluciones/MantenimientoReparaciones"
                  onClick={closeMenu}
                  className="solution-card"
                >
                  <div className="solution-card__icon">
                    <UserRound size={20} />
                  </div>

                  <div>
                    <h4>Mantenimiento y Reparaciones</h4>
                    <span>
                      Marca personal · Servicios · Web
                    </span>
                  </div>

                  <ArrowUpRight size={16} />
                </NavLink>


                {/* MARKETING 
                <NavLink
                  to="/soluciones/marketing"
                  onClick={closeMenu}
                  className="solution-card"
                >
                  <div className="solution-card__icon">
                    <Megaphone size={20} />
                  </div>

                  <div>
                    <h4>Otros negocios</h4>
                    <span>
                      Marketing · Web · Digitalización
                    </span>
                  </div>

                  <ArrowUpRight size={16} />
                </NavLink>*/}

              </div>

            </div>
          </div>


          {/* PRECIOS */}
          <NavLink
            to="/precios"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Precios
          </NavLink>


          {/* SOBRE NOSOTROS */}
          <NavLink
            to="/nosotros"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Sobre nosotros
          </NavLink>


          {/* CONTACTO */}
          <NavLink
            to="/contacto"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Contacto
          </NavLink>

        </nav>


        {/* CTA */}
        <NavLink
          to="/contacto"
          onClick={closeMenu}
          className="header__cta"
        >
          Solicitar presupuesto
          <ArrowUpRight size={16} />
        </NavLink>


        {/* MOBILE */}
        <button
          className={`header__toggle ${
            menuOpen ? "open" : ""
          }`}
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Header;