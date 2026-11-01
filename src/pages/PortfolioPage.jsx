import { motion } from "framer-motion";
import Portfolio from "../components/Portfolio/Portfolio";
import ContactCTA from "../components/ContactCTA/ContactCTA";
import "./PortfolioPage.css";

function PortfolioPage() {
  return (
    <motion.div
      className="portfolioPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >

      {/* HERO AUTORIDAD */}
      <section className="portfolioPage__hero">
        <h1>
          Proyectos que no solo se ven bien, <br />
          generan resultados reales
        </h1>

        <p>
          Cada proyecto está diseñado con un objetivo claro: atraer,
          convertir y hacer crecer negocios.
        </p>
      </section>

      {/* METRICS / AUTORIDAD */}
      <section className="portfolioPage__stats">

        <div className="stat">
          <h2>+50</h2>
          <p>Proyectos desarrollados</p>
        </div>

        <div className="stat">
          <h2>+90%</h2>
          <p>Satisfacción de clientes</p>
        </div>

        <div className="stat">
          <h2>x3</h2>
          <p>Aumento medio de conversiones</p>
        </div>

      </section>

      {/* PORTFOLIO */}
      <section className="portfolioPage__projects">
        <h2>Casos de estudio</h2>
        <Portfolio />
      </section>

      {/* CONSEJOS / VALOR */}
      <section className="portfolioPage__tips">
        <h2>Lo que hemos aprendido construyendo proyectos</h2>

        <div className="grid">

          <motion.div whileHover={{ y: -5 }} className="card">
            Una web bonita no sirve si no convierte.
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="card">
            El rendimiento es tan importante como el diseño.
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="card">
            El usuario decide en menos de 3 segundos.
          </motion.div>

        </div>
      </section>

      {/* PROCESO DE RESULTADOS */}
      <section className="portfolioPage__process">
        <h2>Cómo logramos resultados</h2>

        <div className="steps">

          <div className="step">
            <span>1</span>
            <h3>Entendemos el negocio</h3>
          </div>

          <div className="step">
            <span>2</span>
            <h3>Diseño orientado a conversión</h3>
          </div>

          <div className="step">
            <span>3</span>
            <h3>Desarrollo optimizado</h3>
          </div>

          <div className="step">
            <span>4</span>
            <h3>Medición y mejora</h3>
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <ContactCTA />

    </motion.div>
  );
}

export default PortfolioPage;