import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import "./Pricing.css"

const planes = [
  {
    id: 1,
    name: "Inicial",
    description:
      "Para negocios que necesitan una presencia online profesional y sencilla.",
    price: "Desde 499 €",
    features: [
      "Landing Page","Diseño personalizado",
      "Diseño responsive",
      "Dominio",
      "Hosting",
      "SSL",
      "SEO básico",
      "Formulario de contacto",
    ],
  },
  {
    id: 2,
    name: "Profesional",
    description:
      "Para negocios que quieren una web completa preparada para crecer.",
    price: "Desde 799 €",
    popular: true,
    features: [
      "Todo lo incluido en Inicial",
      "Más páginas y secciones",
      "SEO básico",
      "Animaciones e interacciones",
      "Integración con herramientas",
      "Optimización de rendimiento",
    ],
  },
  {
    id: 3,
    name: "Personalizada",
    description:
      "Para proyectos que necesitan funcionalidades específicas y soluciones a medida.",
    price: "A medida",
    features: [
      "Diseño completamente personalizado",
      "Funcionalidades avanzadas",
      "Apps y plataformas web",
      "Integraciones personalizadas",
      "Software a medida",
      "Asesoramiento durante el proyecto",
    ],
  },
];

function Precios() {
  return (
    <section className="precios" id="precios">
      <div className="precios-container">

        {/* DECORACIÓN */}
        <div className="precios-glow precios-glow-1" />
        <div className="precios-glow precios-glow-2" />

        {/* HEADER */}
        <motion.div
          className="precios-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="precios-heading">

            <span className="precios-label">
              Planes y precios
            </span>

            <h2>
              Una web profesional
              <span> empieza aquí.</span>
            </h2>

            <p>
              Creamos soluciones digitales adaptadas a cada negocio.
              Elige el punto de partida que mejor encaje contigo y
              nosotros nos encargamos del resto.
            </p>

          </div>

          <motion.a
            href="/precios"
            className="precios-header-link"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            Ver todos los precios
            <ArrowUpRight size={17} />
          </motion.a>
        </motion.div>

        {/* PLANES */}
        <div className="precios-grid">

          {planes.map((plan, index) => (
            <motion.article
              key={plan.id}
              className={`precio-card ${
                plan.popular ? "precio-card-featured" : ""
              }`}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.25,
                },
              }}
            >

              {/* POPULAR */}
              {plan.popular && (
                <div className="precio-popular">
                  Más elegido
                </div>
              )}

              {/* TOP */}
              <div className="precio-top">

                <span className="precio-number">
                  0{plan.id}
                </span>

                <h3>
                  {plan.name}
                </h3>

                <p>
                  {plan.description}
                </p>

              </div>

              {/* PRICE */}
              <div className="precio-value">
                {plan.price}
              </div>

              <span className="precio-small">
                Precio inicial del proyecto
              </span>

              {/* FEATURES */}
              <div className="precio-features">

                {plan.features.map((feature) => (
                  <div
                    className="precio-feature"
                    key={feature}
                  >
                    <span className="precio-check">
                      <Check size={13} />
                    </span>

                    <span>
                      {feature}
                    </span>
                  </div>
                ))}

              </div>

              {/* LINK */}
              <a
                href="/precios"
                className="precio-card-link"
              >
                Más información
                <ArrowUpRight size={16} />
              </a>

            </motion.article>
          ))}

        </div>

        {/* RECURRING */}
        <motion.div
          className="precios-recurring"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className="recurring-content">

            <span className="recurring-label">
              Después de crear tu web
            </span>

            <h3>
              Nosotros nos encargamos
              <span> de mantenerla online.</span>
            </h3>

            <p>
              Dominio, hosting, SSL y mantenimiento para que tú puedas
              centrarte en tu negocio.
            </p>

          </div>

          <a
            href="/precios"
            className="recurring-button"
          >
            Ver qué incluye
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Precios;