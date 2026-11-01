import { motion } from "framer-motion";
import FAQ from "../components/FAQ/FAQ";
import ContactCTA from "../components/ContactCTA/ContactCTA";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Layout,
  ShoppingCart,
  Smartphone,
  Zap,
  Search,
  Palette,
  Headphones,
  ShieldCheck,
  BarChart3,
  Settings2,
  Users,
} from "lucide-react";


import "./ServicesPage.css";


const solutions = [
  {
    icon: Users,
    title: "Quiero conseguir más clientes",
    description:
      "Una web pensada para convertir visitas en contactos, reservas o solicitudes.",
    type: "Landing Page / Web corporativa",
  },
  {
    icon: Layout,
    title: "Quiero presentar mi negocio",
    description:
      "Una presencia online profesional para explicar quién eres, qué haces y por qué elegirte.",
    type: "Web corporativa",
  },
  {
    icon: ShoppingCart,
    title: "Quiero vender por internet",
    description:
      "Una tienda online preparada para mostrar tus productos y facilitar las compras.",
    type: "eCommerce",
  },
  {
    icon: Settings2,
    title: "Quiero mejorar mi negocio",
    description:
      "Digitaliza procesos, gestiona información y crea herramientas adaptadas a tu forma de trabajar.",
    type: "App Web",
  },
  {
    icon: Code2,
    title: "Necesito algo diferente",
    description:
      "Si tu proyecto no encaja en una solución estándar, desarrollamos una herramienta a medida.",
    type: "Software personalizado",
  },
];


const services = [
  {
    number: "01",
    icon: Layout,
    title: "Landing Page",
    subtitle: "Convierte visitas en oportunidades",
    description:
      "Una página enfocada en un objetivo concreto: conseguir contactos, reservas, solicitudes o ventas.",
    ideal:
      "Ideal para campañas, servicios concretos, productos o negocios que quieren empezar a captar clientes online.",
    features: [
      "Diseño orientado a conversión",
      "Responsive",
      "Optimización de velocidad",
      "SEO básico",
      "Formularios de contacto",
    ],
  },
  {
    number: "02",
    icon: GlobeIcon,
    title: "Web Corporativa",
    subtitle: "Haz que tu negocio transmita confianza",
    description:
      "Una web completa para presentar tu empresa, servicios, equipo, proyectos y propuesta de valor.",
    ideal:
      "Ideal para empresas, profesionales y negocios que necesitan una presencia online sólida y profesional.",
    features: [
      "Diseño personalizado",
      "Estructura adaptada al negocio",
      "Responsive",
      "SEO básico",
      "Integración de contacto",
    ],
  },
  {
    number: "03",
    icon: ShoppingCart,
    title: "eCommerce",
    subtitle: "Convierte tu catálogo en un canal de ventas",
    description:
      "Creamos tiendas online pensadas para que tus clientes puedan descubrir, elegir y comprar tus productos.",
    ideal:
      "Ideal para tiendas, marcas y negocios que quieren vender sus productos online.",
    features: [
      "Catálogo de productos",
      "Carrito y checkout",
      "Diseño responsive",
      "Gestión de productos",
      "Optimización de rendimiento",
    ],
  },
  {
    number: "04",
    icon: Smartphone,
    title: "Apps Web",
    subtitle: "Herramientas digitales para tu negocio",
    description:
      "Aplicaciones accesibles desde el navegador para gestionar procesos, información, usuarios o servicios.",
    ideal:
      "Ideal para negocios que necesitan algo más que una web informativa.",
    features: [
      "Paneles de gestión",
      "Usuarios y permisos",
      "Bases de datos",
      "Procesos personalizados",
      "Interfaces responsive",
    ],
  },
  {
    number: "05",
    icon: Code2,
    title: "Software personalizado",
    subtitle: "Creamos exactamente lo que necesitas",
    description:
      "Desarrollamos soluciones específicas cuando las herramientas existentes no se adaptan a tu negocio.",
    ideal:
      "Ideal para proyectos con necesidades específicas o procesos que quieres digitalizar.",
    features: [
      "Arquitectura personalizada",
      "Funcionalidades a medida",
      "Integraciones",
      "Automatizaciones",
      "Escalable",
    ],
  },
];


const included = [
  {
    icon: Palette,
    title: "Diseño personalizado",
    text: "Tu proyecto se adapta a tu marca, objetivos y público.",
  },
  {
    icon: Smartphone,
    title: "Responsive",
    text: "Experiencia optimizada para móvil, tablet y ordenador.",
  },
  {
    icon: Zap,
    title: "Rendimiento",
    text: "Priorizamos velocidad, optimización y una experiencia fluida.",
  },
  {
    icon: Search,
    title: "SEO básico",
    text: "Configuramos las bases necesarias para que tu web pueda posicionarse.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad",
    text: "Trabajamos con HTTPS y buenas prácticas de seguridad.",
  },
  {
    icon: Headphones,
    title: "Acompañamiento",
    text: "Te ayudamos durante todo el proceso, no desaparecemos después del lanzamiento.",
  },
];


const process = [
  {
    number: "01",
    title: "Hablamos",
    text: "Entendemos tu negocio, tus necesidades y qué quieres conseguir.",
  },
  {
    number: "02",
    title: "Definimos",
    text: "Elegimos contigo el tipo de solución y la estructura más adecuada.",
  },
  {
    number: "03",
    title: "Diseñamos",
    text: "Creamos una propuesta visual alineada con tu marca.",
  },
  {
    number: "04",
    title: "Desarrollamos",
    text: "Construimos tu proyecto y damos vida a cada funcionalidad.",
  },
  {
    number: "05",
    title: "Probamos",
    text: "Revisamos diseño, responsive, rendimiento y funcionamiento.",
  },
  {
    number: "06",
    title: "Lanzamos",
    text: "Ponemos tu proyecto online y te acompañamos después del lanzamiento.",
  },
];


function GlobeIcon(props) {
  return <Layout {...props} />;
}


function ServicesPage() {
  return (
    <motion.main
      className="servicesPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="servicesPage__hero">

        <div className="servicesPage__hero-grid"></div>

        <div className="servicesPage__hero-glow"></div>

        <div className="servicesPage__hero-content">

          <span className="servicesPage__eyebrow">
            SERVICIOS DELUMIS
          </span>

          <h1>
            No necesitas
            <br />
            <span>una web más.</span>
            <br />
            Necesitas una web
            <br />
            que consiga algo.
          </h1>

          <p>
            Diseñamos y desarrollamos soluciones digitales
            adaptadas a tu negocio, desde una landing page
            hasta aplicaciones y software personalizado.
          </p>

          <div className="servicesPage__hero-actions">

            <a
              href="#soluciones"
              className="servicesPage__primary-button"
            >
              Encuentra tu solución

              <ArrowDownIcon />
            </a>

            <a
              href="#servicios"
              className="servicesPage__secondary-button"
            >
              Ver servicios
            </a>

          </div>

        </div>

        <div className="servicesPage__hero-bottom">
          <span>WEB</span>
          <span>DESIGN</span>
          <span>DEVELOPMENT</span>
          <span>STRATEGY</span>
        </div>

      </section>


      {/* ==================================================
          SOLUCIONES SEGÚN OBJETIVO
      ================================================== */}

      <section
        className="servicesPage__solutions"
        id="soluciones"
      >

        <div className="servicesPage__section-heading">

          <div>
            <span className="servicesPage__eyebrow">
              EMPIEZA POR TU OBJETIVO
            </span>

            <h2>
              ¿Qué quieres
              <span> conseguir?</span>
            </h2>
          </div>

          <p>
            No tienes que saber qué tecnología necesitas.
            Cuéntanos qué quieres conseguir y te ayudamos
            a encontrar la solución adecuada.
          </p>

        </div>


        <div className="servicesPage__solutions-grid">

          {solutions.map((solution, index) => {

            const Icon = solution.icon;

            return (
              <motion.article
                className="servicesPage__solution-card"
                key={solution.title}
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
                  amount: 0.2,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -7,
                }}
              >

                <div className="servicesPage__solution-number">
                  0{index + 1}
                </div>

                <div className="servicesPage__solution-icon">
                  <Icon size={22} />
                </div>

                <h3>
                  {solution.title}
                </h3>

                <p>
                  {solution.description}
                </p>

                <span>
                  {solution.type}
                </span>

                <ArrowUpRight
                  className="servicesPage__solution-arrow"
                  size={18}
                />

              </motion.article>
            );
          })}

        </div>

      </section>


      {/* ==================================================
          SERVICIOS
      ================================================== */}

      <section
        className="servicesPage__services"
        id="servicios"
      >

        <div className="servicesPage__section-heading">

          <div>
            <span className="servicesPage__eyebrow">
              LO QUE PODEMOS CREAR
            </span>

            <h2>
              Una solución para
              <span> cada necesidad.</span>
            </h2>
          </div>

          <p>
            Desde proyectos sencillos hasta plataformas
            digitales completas. Elegimos contigo la
            solución que mejor encaje con tus objetivos.
          </p>

        </div>


        <div className="servicesPage__service-list">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <motion.article
                className="servicesPage__service"
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
              >

                <div className="servicesPage__service-top">

                  <span className="servicesPage__service-number">
                    {service.number}
                  </span>

                  <div className="servicesPage__service-icon">
                    <Icon size={23} />
                  </div>

                  <div className="servicesPage__service-title">

                    <h3>
                      {service.title}
                    </h3>

                    <span>
                      {service.subtitle}
                    </span>

                  </div>

                  <ArrowUpRight
                    className="servicesPage__service-arrow"
                    size={20}
                  />

                </div>


                <div className="servicesPage__service-body">

                  <div>

                    <p>
                      {service.description}
                    </p>

                    <div className="servicesPage__ideal">

                      <span>
                        IDEAL PARA
                      </span>

                      <p>
                        {service.ideal}
                      </p>

                    </div>

                  </div>


                  <div className="servicesPage__features">

                    <span>
                      INCLUYE
                    </span>

                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="servicesPage__feature"
                      >
                        <Check size={14} />
                        {feature}
                      </div>
                    ))}

                  </div>

                </div>

              </motion.article>
            );
          })}

        </div>

      </section>


      {/* ==================================================
          INCLUYE
      ================================================== */}

      <section className="servicesPage__included">

        <div className="servicesPage__section-heading">

          <div>

            <span className="servicesPage__eyebrow">
              MÁS QUE DISEÑO
            </span>

            <h2>
              Todo lo que tu proyecto
              <span> necesita.</span>
            </h2>

          </div>

          <p>
            No nos limitamos a hacer que tu web se vea bien.
            También trabajamos para que funcione bien.
          </p>

        </div>


        <div className="servicesPage__included-grid">

          {included.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                className="servicesPage__included-card"
                key={item.title}
                whileHover={{
                  y: -5,
                }}
              >

                <div className="servicesPage__included-icon">
                  <Icon size={20} />
                </div>

                <span>
                  0{index + 1}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </motion.div>
            );
          })}

        </div>

      </section>


      {/* ==================================================
          DIFERENCIAL
      ================================================== */}

      <section className="servicesPage__difference">

        <div className="servicesPage__difference-inner">

          <div className="servicesPage__difference-heading">

            <span className="servicesPage__eyebrow">
              POR QUÉ DELUMIS
            </span>

            <h2>
              Tu negocio no es una
              <span> plantilla.</span>
            </h2>

          </div>


          <div className="servicesPage__difference-text">

            <p>
              Podemos partir de una plantilla para encontrar
              inspiración, pero tu proyecto se construye
              pensando en tu negocio.
            </p>

            <p>
              Analizamos qué necesitas, qué quieres transmitir
              y qué acción quieres que realice el visitante.
              Después diseñamos y desarrollamos una solución
              a medida.
            </p>

            <a
              href="/contacto"
              className="servicesPage__text-link"
            >
              Hablemos de tu proyecto
              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>

      </section>


      {/* ==================================================
          PROCESO
      ================================================== */}

      <section className="servicesPage__process">

        <div className="servicesPage__section-heading">

          <div>

            <span className="servicesPage__eyebrow">
              CÓMO TRABAJAMOS
            </span>

            <h2>
              Del primer mensaje
              <span> al lanzamiento.</span>
            </h2>

          </div>

          <p>
            Te acompañamos durante todo el proceso.
            No necesitas saber de diseño, programación
            o tecnología.
          </p>

        </div>


        <div className="servicesPage__process-grid">

          {process.map((step, index) => (

            <motion.div
              className="servicesPage__process-step"
              key={step.number}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
            >

              <span>
                {step.number}
              </span>

              <div className="servicesPage__process-line"></div>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.text}
              </p>

            </motion.div>

          ))}

        </div>

      </section>


      {/* ==================================================
          FAQ
      ================================================== */}

       <FAQ /> 


      {/* ==================================================
          CTA
      ================================================== */}

       <ContactCTA /> 

    </motion.main>
  );
}


/* Simple arrow reutilizable */

function ArrowDownIcon() {
  return (
    <ArrowRight size={17} />
  );
}


export default ServicesPage;