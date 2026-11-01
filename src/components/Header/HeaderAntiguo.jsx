import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__container">

        <div className="header__logo">
          <NavLink to="/" onClick={closeMenu}>
          <div className="logo">
          <img src="/logo-delumis.png" alt="DELUMIS" />
          </div>
          </NavLink>
          
        </div>

        <nav className={`header__nav ${menuOpen ? "active" : ""}`}>

          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/servicios"
            onClick={closeMenu}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Servicios
          </NavLink>

          <NavLink
            to="/portfolio"
            onClick={closeMenu}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Portfolio
          </NavLink>

                    <NavLink
            to="/showcase"
            onClick={closeMenu}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Showcase
          </NavLink>

          <NavLink
            to="/precios"
            onClick={closeMenu}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Precios
          </NavLink>

          <NavLink
            to="/nosotros"
            onClick={closeMenu}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            About
          </NavLink>

          <NavLink
            to="/contacto"
            onClick={closeMenu}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Contacto
          </NavLink>

        </nav>

        <NavLink to="/contacto" className="header__cta">
          Solicitar Presupuesto
        </NavLink>

        <div
          className="header__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
}

export default Header;