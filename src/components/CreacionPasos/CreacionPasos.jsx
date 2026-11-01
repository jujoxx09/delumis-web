import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Palette,
  Rocket,
  LayoutTemplate,
  ShoppingCart,
  Globe,
  Sparkles,
} from "lucide-react";
import "./CreacionPasos.css";

const pasos = [
  {
    number: "01",
    icon: Globe,
    title: "Define qué necesitas",
    description:
      "Lo primero es decidir qué tipo de sitio web necesita tu negocio. Puede ser una landing page, una web corporativa, una carta digital, una tienda online o una solución más personalizada.",
    examples:
      "Landing page · Página web · Carta digital · eCommerce · Plataforma",
    link: "#servicios",
    linkText: "Ver tipos de proyectos",
  },
  {
    number: "02",
    icon: ShoppingCart,
    title: "Realiza el pago inicial",
    description:
      "Una vez definido el proyecto, realizas el pago inicial y comenzamos a trabajar en tu web. Te explicaremos todo el proceso antes de empezar para que tengas claro qué incluye tu proyecto.",
    examples:
      "Sin complicaciones · Proceso claro · Acompañamiento",
  },
  {
    number: "03",
    icon: LayoutTemplate,
    title: "Explora nuestras plantillas",
    description:
      "Puedes explorar nuestras plantillas para encontrar estilos, estructuras e ideas que te inspiren. No tienes que elegir una plantilla exactamente: nos sirve como punto de partida para conocer tus gustos.",
    examples:
      "Estilos · Estructuras · Colores · Inspiración",
    link: "#plantillas",
    linkText: "Explorar plantillas",
  },
  {
    number: "04",
    icon: LayoutTemplate,
    title: "Define tu estructura",
    description:
      "Decidimos juntos qué páginas y apartados tendrá tu web. Te ayudaremos a elegir la estructura más adecuada según tu negocio y tus objetivos.",
    examples:
      "Inicio · Nosotros · Servicios · Galería · Contacto · Reservas",
  },
  {
    number: "05",
    icon: Palette,
    title: "Define tu marca",
    description:
      "Aquí damos personalidad a tu proyecto. Definiremos los colores, tipografías, estilo visual, fotografías y todos los elementos que harán que tu web sea reconocible.",
    examples:
      "Logo · Colores · Tipografía · Imágenes · Estilo visual",
  },
  {
    number: "06",
    icon: Sparkles,
    title: "Creamos tu web",
    description:
      "Con toda la información definida, nuestro equipo transforma tus ideas en una web única y personalizada. No utilizamos una web genérica: adaptamos cada detalle a tu negocio.",
    examples:
      "Diseño personalizado · Responsive · Animaciones · Optimización",
  },
  {
    number: "07",
    icon: Check,
    title: "Revisamos juntos",
    description:
      "Antes de publicar, revisamos el resultado contigo. Podrás indicarnos los cambios que quieras realizar y nos aseguraremos de que todo funciona correctamente.",
    examples:
      "Revisión · Ajustes · Responsive · Formularios · Optimización",
  },
  {
    number: "08",
    icon: Rocket,
    title: "Tu web está lista",
    description:
      "Publicamos tu proyecto y tu negocio comienza a tener presencia online. Y no termina aquí: seguiremos disponibles para ayudarte cuando lo necesites.",
    examples:
      "Publicación · Dominio · Soporte · Mantenimiento",
  },
];

function CreacionPasos() {
  return (
    <section className="creacion-pasos" id="como-crear">
      <div className="creacion-container">

        {/* HEADER */}
        <div className="creacion-header">

          <div className="creacion-heading">
            <span className="creacion-label">
              Cómo trabajamos
            </span>

            <h2>
              Crear tu web es
              <span> más fácil de lo que parece.</span>
            </h2>

            <p>
              Te acompañamos durante todo el proceso para convertir
              tus ideas en una web única, profesional y completamente
              personalizada para tu negocio.
            </p>
          </div>

          <div className="creacion-header-badge">
            <span>DELUMIS</span>
            <p>
              Tu proyecto.
              <br />
              Nuestra experiencia.
            </p>
          </div>

        </div>

        {/* PASOS */}
        <div className="creacion-steps">

          {pasos.map((paso, index) => {
            const Icon = paso.icon;

            return (
              <motion.article
                className={`creacion-card creacion-card-${index + 1}`}
                key={paso.number}
                initial={{
                  opacity: 0,
                  y: 60,
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
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.25,
                  },
                }}
              >

                {/* TOP */}
                <div className="creacion-card-top">

                  <span className="creacion-number">
                    {paso.number}
                  </span>

                  <div className="creacion-icon">
                    <Icon size={21} />
                  </div>

                </div>

                {/* CONTENT */}
                <div className="creacion-card-content">

                  <h3>
                    {paso.title}
                  </h3>

                  <p>
                    {paso.description}
                  </p>

                  <span className="creacion-examples">
                    {paso.examples}
                  </span>

                  {paso.link && (
                    <a
                      href={paso.link}
                      className="creacion-link"
                    >
                      {paso.linkText}
                      <ArrowUpRight size={16} />
                    </a>
                  )}

                </div>

                {/* GLOW */}
                <div className="creacion-card-glow" />

              </motion.article>
            );
          })}

        </div>

        {/* FINAL */}
        <motion.div
          className="creacion-final"
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
        >
          <div className="creacion-final-icon">
            <Sparkles size={22} />
          </div>

          <div>
            <h3>
              Tú tienes la idea. Nosotros te ayudamos a hacerla realidad.
            </h3>

            <p>
              No necesitas saber de diseño, programación ni tecnología.
              Te acompañaremos en cada decisión para crear una web
              que realmente represente tu negocio.
            </p>
          </div>

          <button className="creacion-final-button" onClick={() => window.location.href = '/contacto'}>
            Empezar mi proyecto
            <ArrowUpRight size={18} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}

export default CreacionPasos;