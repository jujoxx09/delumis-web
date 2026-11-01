import { motion } from "framer-motion";
import { Globe, Server, ShieldCheck } from "lucide-react";
import LiquidCarveButton from "../LiquidCarveButton/LiquidCarveButton";
import "./Dominio.css";

const elementos = [
  {
    icon: Globe,
    title: "Dominio",
    description: "La dirección de tu negocio en Internet.",
  },
  {
    icon: Server,
    title: "Hosting",
    description: "El espacio donde vive y funciona tu web.",
  },
  {
    icon: ShieldCheck,
    title: "SSL",
    description: "Seguridad y confianza para tus visitantes.",
  },
];

function Dominio() {
  return (
    <section className="dominio" id="dominio">
      <div className="dominio-container">

        {/* DECORACIÓN */}
        <div className="dominio-glow dominio-glow-1" />
        <div className="dominio-glow dominio-glow-2" />

        {/* CONTENIDO */}
        <motion.div
          className="dominio-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="dominio-label">
            Todo incluido
          </span>

          <h2>
            Tu web necesita un lugar
            <span> donde existir.</span>
          </h2>

          <p className="dominio-intro">
            En cualquier sitio web que creamos incluimos todo lo
            necesario para que puedas tener tu proyecto online,
            seguro y preparado para recibir visitas.
          </p>
        </motion.div>

        {/* ELEMENTOS */}
        <div className="dominio-items">
          {elementos.map((elemento, index) => {
            const Icon = elemento.icon;

            return (
              <motion.div
                className="dominio-item"
                key={elemento.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -6 }}
              >
                <div className="dominio-item-icon">
                  <Icon size={23} />
                </div>

                <div>
                  <h3>{elemento.title}</h3>

                  <p>{elemento.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTÓN */}
        <motion.div
          className="dominio-button-wrapper"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.35,
          }}
        >
          <LiquidCarveButton
            label="Descubre qué incluye tu web"
            link="/blog/dominio-hosting-ssl"
            newTab={false}
            padding="18px 30px"
            rounded={100}
            colors={{
              fill: "#ffffff",
              textColor: "#070b14",
              hoverFill: "#159AFB",
              hoverTextColor: "#070b14",
            }}
            blob={{
              size: 100,
              color: "#159AFB",
              smoothness: 50,
            }}
            addIcon={true}
            icon={{
              type: "symbol",
              symbol: "→",
              color: "#070b14",
              size: 20,
              side: "right",
            }}
          />

          <span className="dominio-button-hint">
            Te lo explicamos paso a paso
          </span>
        </motion.div>

      </div>
    </section>
  );
}

export default Dominio;