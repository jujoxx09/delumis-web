import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* LOGO */}
        <div className="footer__brand">
          <h2>DELUMIS</h2>
          <p>Creando experiencias digitales modernas</p>
        </div>

        {/* CONTACTO */}
        <div className="footer__section">
          <h3>Contacto</h3>

          <a href="mailto:contacto@delumis.com">Email</a>

          <a
            href="https://wa.me/34XXXXXXXXX"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>

        {/* REDES */}
        <div className="footer__section">
          <h3>Redes</h3>

          <a href="#" target="_blank" rel="noreferrer">
            Instagram
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            TikTok
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} DELUMIS. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;