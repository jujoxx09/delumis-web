import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import "./Services.css";

const servicios = [
  {
    id: 1,
    title: "eCommerce",
    description:
      "Creamos tiendas online rápidas, modernas y preparadas para convertir visitas en clientes. Integramos productos, pagos, pedidos y todas las herramientas necesarias para vender online.",
    image: "/ecommerce.jpg",
  },
  {
    id: 2,
    title: "Plataformas de gestión",
    description:
      "Desarrollamos plataformas a medida para gestionar clientes, reservas, pedidos, empleados, inventario y procesos internos desde un único lugar.",
    image: "/public/plataformadegestion.jpg",
  },
  {
    id: 3,
    title: "Landing Page",
    description:
      "Landing pages diseñadas para presentar tu negocio, producto o servicio de forma clara, rápida y atractiva, enfocadas en conseguir conversiones.",
    image: "/public/landingpage.jpg",
  },
  {
    id: 4,
    title: "Apps Web",
    description:
      "Aplicaciones web modernas y accesibles desde cualquier dispositivo. Creamos experiencias interactivas que funcionan directamente desde el navegador.",
    image: "/public/appsweb.jpg",
  },
  {
    id: 5,
    title: "Software personalizado",
    description:
      "Si necesitas algo que no existe, lo construimos. Diseñamos software completamente personalizado adaptado a las necesidades concretas de tu negocio.",
    image: "/public/softwarepersonalizado.jpg",
  },
];

function Servicios() {
  const [activeService, setActiveService] = useState(0);

  const handleService = (index) => {
    setActiveService(activeService === index ? -1 : index);
  };

  return (
    <section className="servicios" id="servicios">
      <div className="servicios-container">

        {/* CABECERA */}
        <div className="servicios-header">

          <div className="servicios-heading">
            <span className="servicios-label">
              Lo que hacemos
            </span>

            <h2>
              No solo hacemos
              <span> páginas web.</span>
            </h2>

            <p>
              Creamos soluciones digitales pensadas para que tu negocio
              avance, crezca y se adapte a lo que realmente necesita.
            </p>
          </div>

          <motion.button
            className="servicios-button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => window.location.href = '/servicios'}
          >
            Ver servicios
            <ArrowUpRight size={18} />
          </motion.button>

        </div>

        {/* CONTENIDO */}
        <div className="servicios-content">

          {/* LISTA */}
          <div className="servicios-list">

            {servicios.map((servicio, index) => {
              const isActive = activeService === index;

              return (
                <div
                  className={`servicio-item ${
                    isActive ? "active" : ""
                  }`}
                  key={servicio.id}
                >

                  <button
                    className="servicio-header"
                    onClick={() => handleService(index)}
                    aria-expanded={isActive}
                  >
                    <div className="servicio-title">

                      <span className="servicio-number">
                        0{index + 1}
                      </span>

                      <h3>
                        {servicio.title}
                      </h3>

                    </div>

                    <div className="servicio-icon">
                      {isActive ? (
                        <Minus size={20} />
                      ) : (
                        <Plus size={20} />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        className="servicio-description"
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                      >
                        <p>
                          {servicio.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}

          </div>

          {/* IMAGEN */}
          <div className="servicios-preview">

            <AnimatePresence mode="wait">
              {activeService >= 0 && (
                <motion.div
                  key={servicios[activeService].id}
                  className="servicio-image-wrapper"
                  initial={{
                    opacity: 0,
                    scale: 1.04,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                >
                  <img
                    src={servicios[activeService].image}
                    alt={servicios[activeService].title}
                  />

                  <div className="servicio-image-overlay" />

                  <div className="servicio-image-info">
                    <span>
                      0{activeService + 1}
                    </span>

                    <h3>
                      {servicios[activeService].title}
                    </h3>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {activeService === -1 && (
              <motion.div
                className="servicios-empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span>DELUMIS</span>
                <p>
                  Selecciona un servicio
                </p>
              </motion.div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Servicios;