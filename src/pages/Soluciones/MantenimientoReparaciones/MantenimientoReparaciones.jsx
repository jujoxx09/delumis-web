import { motion } from "framer-motion";
import {
  FaWrench,
  FaTint,
  FaSnowflake,
  FaBolt,
  FaCar,
  FaTools,
  FaCalendarCheck,
  FaPhoneAlt,
  FaImages,
  FaFileAlt,
  FaUserCog,
  FaBell,
  FaArrowRight,
  FaCheck,
  FaClock,
  FaStar,
} from "react-icons/fa";

import "./MantenimientoReparaciones.css";

function MaintenancePage() {
  const professionals = [
    {
      title: "Fontaneros",
      description:
        "Webs preparadas para captar avisos, mostrar servicios y facilitar solicitudes de presupuesto.",
      icon: <FaTint />,
      image: "/web1.png",
      link: "/soluciones/mantenimiento/fontaneros",
    },
    {
      title: "Aire acondicionado",
      description:
        "Presenta tus instalaciones, reparaciones y servicios de climatización de forma profesional.",
      icon: <FaSnowflake />,
      image: "/web2.png",
      link: "/soluciones/mantenimiento/aire-acondicionado",
    },
    {
      title: "Electricistas",
      description:
        "Haz que tus clientes encuentren rápidamente tus servicios y puedan contactar contigo.",
      icon: <FaBolt />,
      image: "/web3.png",
      link: "/soluciones/mantenimiento/electricistas",
    },
    {
      title: "Talleres mecánicos",
      description:
        "Muestra tus servicios, trabajos realizados y facilita la solicitud de cita.",
      icon: <FaCar />,
      image: "/web1.png",
      link: "/soluciones/mantenimiento/talleres",
    },
    {
      title: "Climatización y electrodomésticos",
      description:
        "Una web preparada para reparaciones, instalaciones, mantenimiento y asistencia técnica.",
      icon: <FaTools />,
      image: "/web2.png",
      link: "/soluciones/mantenimiento/climatizacion",
    },
    {
      title: "Mantenimiento general",
      description:
        "Presenta todos tus servicios en un único espacio y facilita la contratación.",
      icon: <FaWrench />,
      image: "/web3.png",
      link: "/soluciones/mantenimiento/mantenimiento-general",
    },
  ];

  const solutions = [
    {
      icon: <FaCalendarCheck />,
      title: "Solicitudes de servicio",
      text: "Permite que tus clientes soliciten una reparación, instalación o visita directamente desde la web.",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Contacto inmediato",
      text: "Botones de llamada, WhatsApp y formularios visibles para que contactar contigo sea cuestión de segundos.",
    },
    {
      icon: <FaFileAlt />,
      title: "Presupuestos",
      text: "Formularios personalizados para conocer el problema antes de desplazarte.",
    },
    {
      icon: <FaImages />,
      title: "Portfolio de trabajos",
      text: "Muestra reparaciones, instalaciones y proyectos realizados para generar confianza.",
    },
    {
      icon: <FaClock />,
      title: "Servicios urgentes",
      text: "Destaca servicios 24h, asistencia urgente o atención prioritaria cuando sea necesario.",
    },
    {
      icon: <FaStar />,
      title: "Opiniones de clientes",
      text: "Muestra valoraciones y experiencias reales para aumentar la confianza de nuevos clientes.",
    },
  ];

  const management = [
    "Gestionar solicitudes de clientes",
    "Consultar formularios recibidos",
    "Organizar citas y visitas",
    "Gestionar servicios",
    "Actualizar precios y contenidos",
    "Añadir nuevos trabajos al portfolio",
    "Gestionar imágenes y galerías",
    "Consultar información desde cualquier dispositivo",
  ];

  const faqs = [
    {
      question: "¿Puedo recibir solicitudes de reparación desde la web?",
      answer:
        "Sí. Podemos crear formularios específicos para que el cliente indique qué necesita, describa el problema e incluso pueda adjuntar fotografías.",
    },
    {
      question: "¿Puedo mostrar mis trabajos realizados?",
      answer:
        "Sí. Podemos crear un portfolio o galería organizada por servicios, tipos de reparación o proyectos.",
    },
    {
      question: "¿Puedo recibir solicitudes de presupuesto?",
      answer:
        "Sí. Podemos diseñar formularios específicos para recopilar la información necesaria antes de contactar con el cliente.",
    },
    {
      question: "¿Puedo gestionar la web yo mismo?",
      answer:
        "Sí. Podemos crear un panel de administración desde el que puedas gestionar contenidos, servicios, solicitudes, imágenes y otros elementos.",
    },
    {
      question: "¿Se puede adaptar a servicios 24 horas?",
      answer:
        "Por supuesto. Podemos destacar teléfonos de urgencia, WhatsApp, horarios especiales y llamadas rápidas.",
    },
    {
      question: "¿La web funciona en móvil?",
      answer:
        "Sí. Diseñamos todas las soluciones para funcionar correctamente en móvil, tablet y ordenador.",
    },
  ];

  return (
    <motion.main
      className="maintenancePage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

      {/* =========================
          HERO
      ========================= */}

      <section className="maintenanceHero">

        <div className="maintenanceHero__grid" />

        <div className="maintenanceHero__content">

          <span className="maintenanceHero__badge">
            SOLUCIONES PARA PROFESIONALES
          </span>

          <h1>
            Tu trabajo es solucionar problemas.
            <span> Tu web debería ayudarte a conseguir clientes.</span>
          </h1>

          <p>
            Creamos webs para profesionales de mantenimiento y reparación
            pensadas para conseguir solicitudes, presupuestos y nuevos clientes
            sin complicaciones.
          </p>

          <div className="maintenanceHero__buttons">

            <a href="/contacto" className="maintenanceBtn primary">
              Quiero mi web
              <FaArrowRight />
            </a>

            <a href="#soluciones" className="maintenanceBtn secondary">
              Ver soluciones
            </a>

          </div>

        </div>

        <div className="maintenanceHero__visual">

          <div className="maintenanceHero__orb">
            <FaWrench />
          </div>

          <div className="floatingCard cardOne">
            <FaCalendarCheck />
            <div>
              <strong>Nueva solicitud</strong>
              <span>Reparación urgente</span>
            </div>
          </div>

          <div className="floatingCard cardTwo">
            <FaPhoneAlt />
            <div>
              <strong>Cliente interesado</strong>
              <span>Solicitar presupuesto</span>
            </div>
          </div>

        </div>

      </section>


      {/* =========================
          PROFESIONALES
      ========================= */}

      <section className="maintenanceProfessionals">

        <div className="sectionHeading">

          <span>ENCUENTRA TU SOLUCIÓN</span>

          <h2>
            Una web pensada para
            <strong> tu profesión.</strong>
          </h2>

          <p>
            No todos los negocios de mantenimiento funcionan igual.
            Adaptamos la estructura, funcionalidades y contenido a la forma
            en la que trabajan tus clientes.
          </p>

        </div>

        <div className="professionalsGrid">

          {professionals.map((item, index) => (

            <motion.a
              href={item.link}
              className="professionalCard"
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              viewport={{ once: true }}
            >

              <div className="professionalCard__image">

                <img src={item.image} alt={item.title} />

                <div className="professionalCard__icon">
                  {item.icon}
                </div>

              </div>

              <div className="professionalCard__content">

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span>
                  Ver solución
                  <FaArrowRight />
                </span>

              </div>

            </motion.a>

          ))}

        </div>

      </section>


      {/* =========================
          SOLUCIONES
      ========================= */}

      <section className="maintenanceSolutions" id="soluciones">

        <div className="sectionHeading light">

          <span>TODO LO QUE NECESITAS</span>

          <h2>
            Convierte tu web en una
            <strong> herramienta de trabajo.</strong>
          </h2>

          <p>
            Una web profesional no tiene que limitarse a mostrar información.
            Puede ayudarte a recibir solicitudes, enseñar tus trabajos y
            convertir visitantes en clientes.
          </p>

        </div>

        <div className="solutionsGrid">

          {solutions.map((item, index) => (

            <motion.div
              className="solutionCard"
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >

              <div className="solutionCard__icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </motion.div>

          ))}

        </div>

      </section>


      {/* =========================
          PRESUPUESTOS
      ========================= */}

      <section className="maintenanceQuotes">

        <div className="maintenanceQuotes__content">

          <span>MENOS LLAMADAS INNECESARIAS</span>

          <h2>
            Explícanos el problema.
            <strong> Nosotros hacemos el resto.</strong>
          </h2>

          <p>
            Podemos crear formularios inteligentes para que el cliente indique
            qué necesita, dónde se encuentra el problema y añada fotografías
            antes de solicitar tu presupuesto.
          </p>

          <ul>

            <li>
              <FaCheck />
              Tipo de servicio
            </li>

            <li>
              <FaCheck />
              Descripción del problema
            </li>

            <li>
              <FaCheck />
              Fotografías
            </li>

            <li>
              <FaCheck />
              Ubicación
            </li>

            <li>
              <FaCheck />
              Datos de contacto
            </li>

          </ul>

          <a href="/contacto" className="textButton">
            Quiero recibir solicitudes
            <FaArrowRight />
          </a>

        </div>

        <div className="maintenanceQuotes__visual">

          <div className="quoteWindow">

            <div className="quoteWindow__top">
              <span />
              <span />
              <span />
            </div>

            <div className="quoteWindow__body">

              <small>NUEVA SOLICITUD</small>

              <h3>Reparación de aire acondicionado</h3>

              <div className="fakeInput">
                El equipo no enfría correctamente...
              </div>

              <div className="fakeInput small">
                📍 Sevilla
              </div>

              <button>
                Solicitar presupuesto
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          PANEL ADMIN
      ========================= */}

      <section className="maintenanceAdmin">

        <div className="sectionHeading">

          <span>GESTIONA TU NEGOCIO</span>

          <h2>
            Tu negocio,
            <strong> bajo control.</strong>
          </h2>

          <p>
            Si necesitas algo más que una web informativa, podemos desarrollar
            un panel de administración adaptado a tu negocio.
          </p>

        </div>

        <div className="adminLayout">

          <div className="adminVisual">

            <div className="adminPanel">

              <div className="adminPanel__header">
                <strong>DELUMIS ADMIN</strong>
                <span>● Online</span>
              </div>

              <div className="adminStats">

                <div>
                  <small>Solicitudes</small>
                  <strong>24</strong>
                </div>

                <div>
                  <small>Citas</small>
                  <strong>12</strong>
                </div>

                <div>
                  <small>Presupuestos</small>
                  <strong>8</strong>
                </div>

              </div>

              <div className="adminRows">

                <div>
                  <FaBell />
                  <span>Nueva solicitud recibida</span>
                  <small>2 min</small>
                </div>

                <div>
                  <FaCalendarCheck />
                  <span>Cita confirmada</span>
                  <small>15 min</small>
                </div>

                <div>
                  <FaFileAlt />
                  <span>Presupuesto solicitado</span>
                  <small>32 min</small>
                </div>

              </div>

            </div>

          </div>

          <div className="adminContent">

            <h3>
              Más que una página web.
            </h3>

            <p>
              Para negocios que necesitan gestionar clientes, servicios y
              solicitudes desde un único lugar.
            </p>

            <ul>

              {management.map((item) => (

                <li key={item}>
                  <FaCheck />
                  {item}
                </li>

              ))}

            </ul>

          </div>

        </div>

      </section>


      {/* =========================
          PORTFOLIO
      ========================= */}

      <section className="maintenancePortfolio">

        <div className="sectionHeading">

          <span>DEMUESTRA LO QUE SABES HACER</span>

          <h2>
            Tus trabajos son
            <strong> tu mejor carta de presentación.</strong>
          </h2>

          <p>
            Enseña reparaciones, instalaciones y proyectos realizados con
            galerías visuales diseñadas para generar confianza.
          </p>

        </div>

        <div className="portfolioRail">

          {[
            "/web1.png",
            "/web2.png",
            "/web3.png",
            "/web4.png",
          ].map((image, index) => (

            <motion.div
              className="portfolioItem"
              key={image}
              whileHover={{ scale: 1.04 }}
            >

              <img
                src={image}
                alt={`Trabajo realizado ${index + 1}`}
              />

              <div>
                <span>PROYECTO {String(index + 1).padStart(2, "0")}</span>
                <strong>Trabajo realizado</strong>
              </div>

            </motion.div>

          ))}

        </div>

      </section>


      {/* =========================
          PLANTILLAS
      ========================= */}

      <section className="maintenanceTemplates">

        <div className="sectionHeading">

          <span>INSPÍRATE</span>

          <h2>
            Plantillas para
            <strong> mantenimiento y reparación.</strong>
          </h2>

          <p>
            Partimos de diseños pensados para este sector y los personalizamos
            completamente para tu negocio.
          </p>

        </div>

        <div className="templatesCarousel">

          {[
            {
              image: "/web1.png",
              title: "ProFix",
              text: "Servicios técnicos y reparaciones",
            },
            {
              image: "/web2.png",
              title: "RepairLab",
              text: "Taller y mantenimiento",
            },
            {
              image: "/web3.png",
              title: "TechCare",
              text: "Asistencia técnica",
            },
          ].map((template, index) => (

            <motion.a
              href="/templates"
              className="templateCard"
              key={template.title}
              whileHover={{ y: -12 }}
            >

              <div className="templateCard__image">
                <img src={template.image} alt={template.title} />
              </div>

              <div className="templateCard__content">

                <span>PLANTILLA {index + 1}</span>

                <h3>{template.title}</h3>

                <p>{template.text}</p>

                <strong>
                  Ver plantilla <FaArrowRight />
                </strong>

              </div>

            </motion.a>

          ))}

        </div>

        <a href="/templates" className="templateButton">
          Ver todas las plantillas
          <FaArrowRight />
        </a>

      </section>


      {/* =========================
          FAQ
      ========================= */}

      <section className="maintenanceFAQ">

        <div className="sectionHeading">

          <span>PREGUNTAS FRECUENTES</span>

          <h2>
            Antes de empezar,
            <strong> resolvamos tus dudas.</strong>
          </h2>

        </div>

        <div className="faqList">

          {faqs.map((faq, index) => (

            <details key={faq.question}>

              <summary>
                <span>0{index + 1}</span>
                {faq.question}
                <b>+</b>
              </summary>

              <p>{faq.answer}</p>

            </details>

          ))}

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="maintenanceCTA">

        <div className="maintenanceCTA__glow" />

        <span>¿PREPARADO PARA DAR EL SIGUIENTE PASO?</span>

        <h2>
          Haz que encontrar
          <strong> un buen profesional</strong>
          sea fácil.
        </h2>

        <p>
          Cuéntanos qué haces y qué necesitas. Diseñaremos una solución digital
          adaptada a tu negocio.
        </p>

        <a href="/contacto">
          Crear mi web
          <FaArrowRight />
        </a>

      </section>

    </motion.main>
  );
}

export default MaintenancePage;


