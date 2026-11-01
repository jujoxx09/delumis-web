import { motion } from "framer-motion";
import {
  FaCalendarCheck,
  FaTicketAlt,
  FaMapMarkedAlt,
  FaUsers,
  FaEnvelope,
  FaMobileAlt,
  FaImages,
  FaChartLine,
  FaCog,
  FaRocket,
  FaGlobeEurope,
  FaStar
} from "react-icons/fa";

import "./Eventos.css";

function EventosPage() {
  const specialties = [
    {
      number: "01",
      title: "Agencias de viajes",
      description:
        "Presenta destinos, experiencias y viajes de una forma visual que inspire a reservar.",
      image: "/web1.png",
      link: "/soluciones/eventos/agencias-viajes"
    },
    {
      number: "02",
      title: "Organizadores de eventos",
      description:
        "Convierte cada evento en una experiencia digital antes incluso de que comience.",
      image: "/web2.png",
      link: "/soluciones/eventos/organizadores"
    },
    {
      number: "03",
      title: "Festivales y espectáculos",
      description:
        "Cartel, artistas, horarios, entradas y toda la información en una experiencia única.",
      image: "/web3.png",
      link: "/soluciones/eventos/festivales"
    },
    {
      number: "04",
      title: "Ocio y aventura",
      description:
        "Muestra tus actividades y permite que tus clientes reserven su próxima aventura.",
      image: "/web1.png",
      link: "/soluciones/eventos/ocio-aventura"
    },
    {
      number: "05",
      title: "Animaciones y entretenimiento",
      description:
        "Haz que tus servicios destaquen con portfolios, galerías y experiencias interactivas.",
      image: "/web2.png",
      link: "/soluciones/eventos/entretenimiento"
    }
  ];

  return (
    <motion.div
      className="eventsPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="eventsPage__hero">

        <div className="eventsPage__heroGlow" />

        <div className="eventsPage__heroContent">

          <span className="eventsPage__tag">
            EVENTOS · EXPERIENCIAS · OCIO
          </span>

          <h1>
            No solo vendes una actividad.
            <span> Vendes una experiencia.</span>
          </h1>

          <p>
            Creamos webs para empresas de eventos, viajes y ocio que
            quieren convertir inspiración en reservas y visitantes
            en clientes.
          </p>

          <div className="eventsPage__heroButtons">

            <a href="/contacto" className="eventsPage__primaryButton">
              Crear mi proyecto
              <span>↗</span>
            </a>

            <a href="#especialidades" className="eventsPage__secondaryButton">
              Explorar soluciones
            </a>

          </div>

        </div>

        <div className="eventsPage__heroVisual">

          <div className="eventsPage__floatingCard cardOne">
            <FaCalendarCheck />
            <span>Reservas online</span>
          </div>

          <div className="eventsPage__floatingCard cardTwo">
            <FaTicketAlt />
            <span>Entradas</span>
          </div>

          <div className="eventsPage__floatingCard cardThree">
            <FaStar />
            <span>Experiencias</span>
          </div>

          <div className="eventsPage__heroCircle">
            <span>DELUMIS</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          ESPECIALIDADES
      ===================================================== */}

      <section
        className="eventsPage__specialties"
        id="especialidades"
      >

        <div className="eventsPage__sectionHeader">

          <span className="sectionTag">
            SOLUCIONES POR SECTOR
          </span>

          <h2>
            Una experiencia diferente
            <span> para cada negocio.</span>
          </h2>

          <p>
            No todos los negocios venden de la misma manera.
            Por eso adaptamos cada web al tipo de experiencia que ofreces.
          </p>

        </div>


        <div className="eventsPage__specialtiesGrid">

          {specialties.map((item) => (

            <motion.article
              className={`eventsSpecialtyCard ${
                item.number === "05"
                  ? "eventsSpecialtyCard--wide"
                  : ""
              }`}
              key={item.number}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >

              <div className="eventsSpecialtyCard__image">

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <div className="eventsSpecialtyCard__overlay" />

              </div>


              <div className="eventsSpecialtyCard__content">

                <span>{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <a href={item.link}>
                  Ver solución
                  <strong>→</strong>
                </a>

              </div>

            </motion.article>

          ))}

        </div>

      </section>


      {/* =====================================================
          SOLUCIONES
      ===================================================== */}

      <section className="eventsPage__solutions">

        <div className="eventsPage__sectionHeader eventsPage__sectionHeader--dark">

          <span className="sectionTag">
            TODO LO QUE NECESITAS
          </span>

          <h2>
            Convierte una visita
            <span> en una reserva.</span>
          </h2>

          <p>
            Creamos herramientas digitales para que tus clientes
            encuentren, entiendan y reserven tus experiencias
            sin complicaciones.
          </p>

        </div>


        <div className="eventsSolutionsGrid">

          <motion.div
            className="eventsSolutionCard"
            whileHover={{ scale: 1.03 }}
          >
            <FaCalendarCheck />

            <span>01</span>

            <h3>Reservas online</h3>

            <p>
              Calendarios y sistemas de reserva adaptados a tus
              actividades, eventos o experiencias.
            </p>

          </motion.div>


          <motion.div
            className="eventsSolutionCard"
            whileHover={{ scale: 1.03 }}
          >
            <FaTicketAlt />

            <span>02</span>

            <h3>Entradas y eventos</h3>

            <p>
              Presenta eventos, fechas, horarios, precios y
              accesos de forma clara y atractiva.
            </p>

          </motion.div>


          <motion.div
            className="eventsSolutionCard"
            whileHover={{ scale: 1.03 }}
          >
            <FaMapMarkedAlt />

            <span>03</span>

            <h3>Mapas y localización</h3>

            <p>
              Facilita que tus clientes sepan dónde encontrarte
              y cómo llegar a cada experiencia.
            </p>

          </motion.div>


          <motion.div
            className="eventsSolutionCard"
            whileHover={{ scale: 1.03 }}
          >
            <FaUsers />

            <span>04</span>

            <h3>Gestión de grupos</h3>

            <p>
              Formularios y herramientas para gestionar grupos,
              asistentes y solicitudes.
            </p>

          </motion.div>


          <motion.div
            className="eventsSolutionCard"
            whileHover={{ scale: 1.03 }}
          >
            <FaEnvelope />

            <span>05</span>

            <h3>Correos automáticos</h3>

            <p>
              Confirmaciones, recordatorios y comunicaciones
              automáticas después de cada reserva.
            </p>

          </motion.div>


          <motion.div
            className="eventsSolutionCard"
            whileHover={{ scale: 1.03 }}
          >
            <FaMobileAlt />

            <span>06</span>

            <h3>Experiencia móvil</h3>

            <p>
              Una web diseñada para funcionar perfectamente
              desde cualquier dispositivo.
            </p>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          EXPERIENCIA VISUAL
      ===================================================== */}

      <section className="eventsPage__experience">

        <div className="eventsPage__experienceText">

          <span className="sectionTag">
            TU EXPERIENCIA EMPIEZA ONLINE
          </span>

          <h2>
            Haz que quieran
            <span> vivirlo.</span>
          </h2>

          <p>
            Antes de comprar una entrada, reservar un viaje o apuntarse
            a una actividad, tu cliente necesita imaginar cómo será.
          </p>

          <p>
            Por eso creamos páginas donde las imágenes, vídeos,
            testimonios y contenido trabajan juntos para transmitir
            la experiencia.
          </p>

          <div className="eventsPage__features">

            <div>
              <FaImages />
              <span>Galerías visuales</span>
            </div>

            <div>
              <FaStar />
              <span>Opiniones de clientes</span>
            </div>

            <div>
              <FaRocket />
              <span>Animaciones modernas</span>
            </div>

          </div>

        </div>


        <div className="eventsPage__experienceVisual">

          <div className="experienceImage experienceImage--main">
            <img
              src="/web2.png"
              alt="Experiencia DELUMIS"
              loading="lazy"
            />
          </div>

          <div className="experienceImage experienceImage--small">
            <img
              src="/web1.png"
              alt="Evento"
              loading="lazy"
            />
          </div>

          <div className="experienceDecor">
            <span>EXPERIENCE</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          PANEL ADMIN
      ===================================================== */}

      <section className="eventsPage__admin">

        <div className="eventsPage__adminContent">

          <span className="sectionTag">
            GESTIÓN
          </span>

          <h2>
            Tu negocio por delante.
            <span> Tu web bajo control.</span>
          </h2>

          <p>
            Podemos crear un panel de administración desde el que
            gestionar el contenido de tu proyecto sin depender
            constantemente de un desarrollador.
          </p>


          <div className="adminFeatures">

            <div>
              <FaCog />
              <div>
                <h3>Gestiona tus experiencias</h3>
                <p>
                  Modifica actividades, eventos, precios y contenido.
                </p>
              </div>
            </div>

            <div>
              <FaUsers />
              <div>
                <h3>Gestiona clientes</h3>
                <p>
                  Consulta solicitudes y reservas desde un único lugar.
                </p>
              </div>
            </div>

            <div>
              <FaChartLine />
              <div>
                <h3>Conoce tu negocio</h3>
                <p>
                  Visualiza información útil para tomar decisiones.
                </p>
              </div>
            </div>

          </div>

        </div>


        <div className="adminVisual">

          <div className="adminWindow">

            <div className="adminWindow__top">
              <span />
              <span />
              <span />
            </div>

            <div className="adminWindow__body">

              <div className="adminSidebar">
                <div />
                <div />
                <div />
                <div />
              </div>

              <div className="adminDashboard">

                <div className="dashboardTitle">
                  <span />
                  <span />
                </div>

                <div className="dashboardCards">
                  <div />
                  <div />
                  <div />
                </div>

                <div className="dashboardGraph" />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CRECER ONLINE
      ===================================================== */}

      <section className="eventsPage__growth">

        <div className="eventsPage__growthHeader">

          <span className="sectionTag">
            MÁS QUE UNA WEB
          </span>

          <h2>
            Construye un ecosistema
            <span> para tu negocio.</span>
          </h2>

        </div>


        <div className="growthGrid">

          <div className="growthItem">

            <FaGlobeEurope />

            <h3>Presencia online</h3>

            <p>
              Una imagen profesional que represente la calidad
              de tus experiencias.
            </p>

          </div>


          <div className="growthItem">

            <FaChartLine />

            <h3>Más reservas</h3>

            <p>
              Diseñamos el recorrido de tus clientes para reducir
              fricciones y aumentar conversiones.
            </p>

          </div>


          <div className="growthItem">

            <FaMobileAlt />

            <h3>Todo conectado</h3>

            <p>
              Web, reservas, formularios, comunicaciones y gestión
              trabajando juntos.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          PLANTILLAS
      ===================================================== */}

      <section className="eventsPage__templates">

        <div className="eventsPage__sectionHeader">

          <span className="sectionTag">
            INSPÍRATE
          </span>

          <h2>
            Plantillas para
            <span> empezar.</span>
          </h2>

          <p>
            Explora diseños creados pensando en empresas de viajes,
            eventos, ocio y experiencias.
          </p>

        </div>


        <div className="templatesCarousel">

          <div className="templateCard">
            <img
              src="/web2.png"
              alt="Plantilla para viajes"
            />

            <div>
              <span>Viajes</span>
              <h3>Travel Experience</h3>
              <a href="/templates">Ver plantilla →</a>
            </div>
          </div>


          <div className="templateCard">
            <img
              src="/web3.png"
              alt="Plantilla para eventos"
            />

            <div>
              <span>Eventos</span>
              <h3>Event Studio</h3>
              <a href="/templates">Ver plantilla →</a>
            </div>
          </div>


          <div className="templateCard">
            <img
              src="/web1.png"
              alt="Plantilla para aventura"
            />

            <div>
              <span>Aventura</span>
              <h3>Adventure</h3>
              <a href="/templates">Ver plantilla →</a>
            </div>
          </div>

        </div>


        <a
          href="/templates"
          className="eventsPage__templatesButton"
        >
          Explorar todas las plantillas →
        </a>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="eventsPage__faq">

        <div className="eventsPage__sectionHeader">

          <span className="sectionTag">
            FAQ
          </span>

          <h2>
            Preguntas frecuentes
            <span> sobre tu proyecto.</span>
          </h2>

        </div>


        <div className="faqList">

          <details>
            <summary>
              ¿Puedo recibir reservas directamente desde mi web?
              <span>+</span>
            </summary>

            <p>
              Sí. Podemos integrar sistemas de reserva adaptados
              al tipo de actividad o experiencia que ofrezcas.
            </p>
          </details>


          <details>
            <summary>
              ¿Puedo vender entradas para mis eventos?
              <span>+</span>
            </summary>

            <p>
              Podemos preparar tu web para mostrar eventos,
              fechas, precios y conectar diferentes sistemas
              de venta o reserva.
            </p>
          </details>


          <details>
            <summary>
              ¿Podré modificar el contenido?
              <span>+</span>
            </summary>

            <p>
              Sí. Dependiendo del proyecto podemos incorporar
              un panel de administración para gestionar contenidos,
              experiencias y otros elementos.
            </p>
          </details>


          <details>
            <summary>
              ¿Puedo enviar correos automáticos?
              <span>+</span>
            </summary>

            <p>
              Sí. Podemos crear automatizaciones para confirmaciones,
              recordatorios y diferentes comunicaciones con tus clientes.
            </p>
          </details>


          <details>
            <summary>
              ¿La web funcionará en móvil?
              <span>+</span>
            </summary>

            <p>
              Todas nuestras webs se diseñan de forma responsive
              para ofrecer una experiencia correcta en móvil,
              tablet y ordenador.
            </p>
          </details>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="eventsPage__cta">

        <div className="eventsPage__ctaGlow" />

        <span className="sectionTag">
          ¿PREPARAMOS ALGO?
        </span>

        <h2>
          Tu próxima experiencia
          <span> empieza aquí.</span>
        </h2>

        <p>
          Cuéntanos qué haces, qué quieres conseguir y qué necesitas.
          Nosotros nos encargamos de convertirlo en una experiencia digital.
        </p>

        <a href="/contacto">
          Hablar con DELUMIS
          <span>↗</span>
        </a>

      </section>

    </motion.div>
  );
}

export default EventosPage;