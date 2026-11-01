import { motion } from "framer-motion";
import MagicNavbar from "../components/MagicNavbar/MagicNavbar";
import LiquidNavbar from "../components/LiquidNavbar/LiquidNavbar";
import AnimeCard from "../components/AnimeCard/AnimeCard";
import FloatingCard from "../components/FloatingCard/FloatingCard";
import FluidIcons from "../components/FluidIcons/FluidIcons";
import "./ShowcasePage.css";
import LiquidDock from "../components/LiquidDock/LiquidDock";
import BrowserIcons from "../components/BrowserIcons/BrowserIcons";

function ShowcasePage() {
  return (
    <motion.div
      className="showcase"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* HERO */}
      <section className="showcase__hero">
        <span className="showcase__badge">
          DELUMIS EXPERIMENTAL
        </span>

        <h1>
          Experiencias digitales que captan atención.
        </h1>
        

        

        <p>
          Un espacio donde exploramos diseño, movimiento,
          interacción y tecnología para construir webs memorables.
        </p>

        {/*<MagicNavbar />*/}
        {/*<LiquidNavbar />*/}
        {/*<LiquidDock />*/}
        {/*<AnimeCard />*/}
        {/*<FloatingCard />*/}
        {/*<FluidIcons />*/}
        {/*<BrowserIcons />*/}

        <div className="showcase__buttons">
          <button className="btn-primary">
            Ver proyectos
          </button>

          <button className="btn-secondary">
            Más información
          </button>
        </div>
      </section>

      {/* AQUÍ IREMOS AÑADIENDO SECCIONES */}
      <section className="showcase__placeholder">
        <h2>Próximas secciones</h2>

        <div className="placeholder-grid">
          <div className="placeholder-card">
            Hero interactivo
          </div>

          <div className="placeholder-card">
            Timeline animado
          </div>

          <div className="placeholder-card">
            Cards 3D
          </div>

          <div className="placeholder-card">
            Parallax
          </div>

          <div className="placeholder-card">
            CTA Premium
          </div>

          <div className="placeholder-card">
            Showcase Portfolio
          </div>
          
        </div>
      </section>
    </motion.div>
  );
}

export default ShowcasePage;