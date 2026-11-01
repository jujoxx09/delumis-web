import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaEnvelope,
  FaImages,
  FaUsersCog,
  FaMobileAlt,
  FaChartLine,
  FaInstagram,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
  FaMagic,
  FaStore
} from "react-icons/fa";

import "./BellezaEstetica.css";

function BellezaEsteticaPage() {

  const negocios = [
    {
      title: "Peluquerías y barberías",
      description:
        "Una web diseñada para mostrar tus trabajos, servicios y facilitar las reservas.",
      image: "/web1.png",
      link: "/soluciones/belleza/peluquerias-barberias"
    },
    {
      title: "Centros de estética",
      description:
        "Presenta tus tratamientos y convierte visitas en nuevas citas.",
      image: "/web2.png",
      link: "/soluciones/belleza/centros-estetica"
    },
    {
      title: "Salones de uñas",
      description:
        "Haz que tus diseños hablen por ti con una galería visual y reservas online.",
      image: "/web3.png",
      link: "/soluciones/belleza/salones-unas"
    },
    {
      title: "Estudios de tatuajes y piercing",
      description:
        "Portfolio, estilos, información y contacto en una experiencia digital única.",
      image: "/web1.png",
      link: "/soluciones/belleza/tatuajes-piercing"
    },
    {
      title: "Maquilladores profesionales",
      description:
        "Muestra tus trabajos y permite que tus clientes soliciten una cita fácilmente.",
      image: "/web2.png",
      link: "/soluciones/belleza/maquilladores"
    }
  ];

  const soluciones = [
    {
      icon: <FaCalendarAlt />,
      title: "Citas online",
      text:
        "Permite que tus clientes consulten disponibilidad y soliciten o reserven su cita desde cualquier dispositivo."
    },
    {
      icon: <FaEnvelope />,
      title: "Correos automáticos",
      text:
        "Automatiza confirmaciones, recordatorios y comunicaciones para reducir olvidos y mejorar la experiencia."
    },
    {
      icon: <FaImages />,
      title: "Galerías que venden",
      text:
        "Muestra tus trabajos mediante galerías modernas, visuales e interactivas adaptadas a tu marca."
    },
    {
      icon: <FaMobileAlt />,
      title: "Experiencia móvil",
      text:
        "Tu web estará optimizada para móvil, tablet y ordenador para que tus clientes puedan reservar desde cualquier lugar."
    },
    {
      icon: <FaInstagram />,
      title: "Conecta tus redes",
      text:
        "Integra Instagram y otros canales para convertir tu contenido social en nuevas oportunidades."
    },
    {
      icon: <FaClock />,
      title: "Disponibilidad y horarios",
      text:
        "Muestra horarios, servicios y disponibilidad de forma clara para evitar llamadas y mensajes innecesarios."
    }
  ];

  const adminFeatures = [
    "Gestionar citas y solicitudes",
    "Consultar clientes",
    "Gestionar servicios y precios",
    "Modificar horarios y disponibilidad",
    "Actualizar galerías e imágenes",
    "Gestionar contenidos de la web",
    "Consultar información del negocio",
    "Centralizar la gestión desde un único lugar"
  ];

  const faqs = [
    {
      question: "¿Mis clientes podrán reservar cita desde la web?",
      answer:
        "Sí. Podemos integrar un sistema de reservas adaptado a las necesidades de tu negocio para que tus clientes puedan solicitar o reservar sus citas online."
    },
    {
      question: "¿Puedo recibir recordatorios automáticos?",
      answer:
        "Sí. Podemos configurar comunicaciones automáticas para confirmaciones, recordatorios y diferentes momentos del proceso de reserva."
    },
    {
      question: "¿Puedo gestionar yo mismo la web?",
      answer:
        "Sí. Dependiendo del proyecto podemos crear un panel de administración para gestionar citas, servicios, contenidos, imágenes y otros elementos."
    },
    {
      question: "¿Puedo enseñar mis trabajos?",
      answer:
        "Por supuesto. Las galerías son especialmente importantes para este sector y podemos crear una experiencia visual completamente personalizada."
    },
    {
      question: "¿La web funcionará bien en móvil?",
      answer:
        "Sí. Diseñamos las experiencias pensando primero en la experiencia del usuario y optimizamos la web para móviles, tablets y ordenadores."
    },
    {
      question: "¿Puedo empezar con algo sencillo y ampliarlo después?",
      answer:
        "Sí. Podemos empezar con las funcionalidades que realmente necesitas y evolucionar el proyecto conforme crezca tu negocio."
    }
  ];

  return (
    <motion.main
      className="beautyPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="beautyHero">

        <div className="beautyHero__content">

          <span className="beautyHero__eyebrow">
            DELUMIS · BELLEZA & ESTÉTICA
          </span>

          <h1>
            Tu talento merece
            <span> una web a su altura.</span>
          </h1>

          <p>
            Creamos experiencias digitales para peluquerías,
            centros de estética, salones de uñas, tatuadores
            y profesionales de la belleza.
          </p>

          <div className="beautyHero__buttons">

            <a href="/contacto" className="beautyBtn beautyBtn--primary">
              Quiero mi web
              <FaArrowRight />
            </a>

            <a href="#soluciones" className="beautyBtn beautyBtn--secondary">
              Descubrir soluciones
            </a>

          </div>

        </div>

        <div className="beautyHero__visual">

          <div className="beautyHero__glow" />

          <div className="beautyHero__image">
            <img
              src="/web3.png"
              alt="Web DELUMIS para negocios de belleza"
            />
          </div>

          <div className="beautyHero__floating beautyHero__floating--top">
            <FaCalendarAlt />
            <span>
              Citas online
              <small>Disponible 24/7</small>
            </span>
          </div>

          <div className="beautyHero__floating beautyHero__floating--bottom">
            <FaCheckCircle />
            <span>
              Nueva reserva
              <small>Cliente confirmado</small>
            </span>
          </div>

        </div>

      </section>


      {/* =====================================================
          NEGOCIOS
      ===================================================== */}

      <section className="beautyBusinesses">

        <div className="beautySectionHeader">

          <span>ENCUENTRA TU SOLUCIÓN</span>

          <h2>
            Una experiencia digital
            <strong> para cada tipo de negocio.</strong>
          </h2>

          <p>
            No todos los negocios de belleza funcionan igual.
            Por eso creamos soluciones adaptadas a cada modelo.
          </p>

        </div>

        <div className="beautyBusinesses__grid">

          {negocios.map((business, index) => (

            <motion.a
              href={business.link}
              className="businessCard"
              key={business.title}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >

              <div className="businessCard__image">

                <img
                  src={business.image}
                  alt={business.title}
                />

                <div className="businessCard__overlay" />

                <span className="businessCard__number">
                  0{index + 1}
                </span>

                <div className="businessCard__arrow">
                  <FaArrowRight />
                </div>

              </div>

              <div className="businessCard__content">

                <h3>{business.title}</h3>

                <p>{business.description}</p>

              </div>

            </motion.a>

          ))}

        </div>

      </section>


      {/* =====================================================
          SOLUCIONES
      ===================================================== */}

      <section
        className="beautySolutions"
        id="soluciones"
      >

        <div className="beautySectionHeader beautySectionHeader--light">

          <span>TODO LO QUE NECESITAS</span>

          <h2>
            Mucho más que
            <strong> una página web.</strong>
          </h2>

          <p>
            Creamos herramientas digitales pensadas para ayudarte
            a conseguir clientes, gestionar tu negocio y ahorrar tiempo.
          </p>

        </div>

        <div className="beautySolutions__grid">

          {soluciones.map((solution) => (

            <motion.div
              className="solutionCard"
              key={solution.title}
              whileHover={{ y: -6 }}
            >

              <div className="solutionCard__icon">
                {solution.icon}
              </div>

              <h3>{solution.title}</h3>

              <p>{solution.text}</p>

              <span className="solutionCard__line" />

            </motion.div>

          ))}

        </div>

      </section>


      {/* =====================================================
          PANEL ADMIN
      ===================================================== */}

      <section className="beautyAdmin">

        <div className="beautyAdmin__content">

          <span className="beautyAdmin__eyebrow">
            TU NEGOCIO · TUS REGLAS
          </span>

          <h2>
            Gestiona tu negocio
            <strong> desde un solo lugar.</strong>
          </h2>

          <p>
            Tu web puede convertirse también en una herramienta
            de gestión. Dependiendo del proyecto, podemos crear
            un panel personalizado para que tengas el control.
          </p>

          <div className="beautyAdmin__list">

            {adminFeatures.map((feature) => (

              <div key={feature}>
                <FaCheckCircle />
                <span>{feature}</span>
              </div>

            ))}

          </div>

          <a href="/contacto" className="beautyBtn beautyBtn--dark">
            Hablar sobre mi proyecto
            <FaArrowRight />
          </a>

        </div>

        <div className="beautyAdmin__visual">

          <div className="adminWindow">

            <div className="adminWindow__top">
              <span />
              <span />
              <span />
            </div>

            <div className="adminWindow__content">

              <div className="adminWindow__title">
                <span>Panel de gestión</span>
                <FaUsersCog />
              </div>

              <div className="adminStats">

                <div>
                  <small>Citas hoy</small>
                  <strong>18</strong>
                </div>

                <div>
                  <small>Nuevos clientes</small>
                  <strong>07</strong>
                </div>

                <div>
                  <small>Servicios</small>
                  <strong>24</strong>
                </div>

              </div>

              <div className="adminChart">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPERIENCIA
      ===================================================== */}

      <section className="beautyExperience">

        <div className="beautySectionHeader">

          <span>DISEÑO + ESTRATEGIA</span>

          <h2>
            Haz que tu trabajo
            <strong> hable por ti.</strong>
          </h2>

          <p>
            Tus trabajos son tu mejor carta de presentación.
            Creamos galerías y experiencias visuales pensadas
            para transmitir calidad desde el primer segundo.
          </p>

        </div>

        <div className="beautyExperience__layout">

          <div className="experienceImage experienceImage--large">
            <img src="/web1.png" alt="Diseño web de belleza" />
          </div>

          <div className="experienceImage experienceImage--small">
            <img src="/web2.png" alt="Galería web de belleza" />
          </div>

          <div className="experienceText">
            <FaMagic />

            <h3>
              Diseñamos cada detalle
              alrededor de tu marca.
            </h3>

            <p>
              Colores, tipografías, fotografías, animaciones,
              estructura y contenido trabajan juntos para crear
              una experiencia reconocible y profesional.
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          PLANTILLAS
      ===================================================== */}

      <section className="beautyTemplates">

        <div className="beautySectionHeader beautySectionHeader--light">

          <span>INSPÍRATE</span>

          <h2>
            Plantillas para
            <strong> Belleza & Estética.</strong>
          </h2>

          <p>
            Explora diseños pensados para tu sector y
            encuentra el punto de partida para tu proyecto.
          </p>

        </div>

        <div className="beautyTemplates__carousel">

          {[
            "/web1.png",
            "/web2.png",
            "/web3.png"
          ].map((image, index) => (

            <motion.a
              href="/templates"
              className="templateCard"
              key={image}
              whileHover={{ y: -10 }}
            >

              <div className="templateCard__image">

                <img
                  src={image}
                  alt={`Plantilla de belleza ${index + 1}`}
                />

                <div className="templateCard__overlay">
                  <span>Ver plantilla</span>
                  <FaArrowRight />
                </div>

              </div>

            </motion.a>

          ))}

        </div>

        <a
          href="/templates"
          className="beautyTemplates__more"
        >
          Explorar todas las plantillas
          <FaArrowRight />
        </a>

      </section>


      {/* =====================================================
          BENEFICIOS
      ===================================================== */}

      <section className="beautyBenefits">

        <div className="beautySectionHeader">

          <span>POR QUÉ DELUMIS</span>

          <h2>
            Una web pensada para
            <strong> hacer crecer tu negocio.</strong>
          </h2>

        </div>

        <div className="beautyBenefits__grid">

          <div>
            <FaChartLine />
            <h3>Más oportunidades</h3>
            <p>
              Convierte tu presencia online en una herramienta
              para captar nuevos clientes.
            </p>
          </div>

          <div>
            <FaCalendarAlt />
            <h3>Menos gestión manual</h3>
            <p>
              Automatiza procesos repetitivos y facilita
              la gestión de las citas.
            </p>
          </div>

          <div>
            <FaStore />
            <h3>Más profesionalidad</h3>
            <p>
              Proyecta una imagen digital acorde con la calidad
              de tus servicios.
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="beautyFAQ">

        <div className="beautySectionHeader">

          <span>FAQ</span>

          <h2>
            Preguntas frecuentes
          </h2>

          <p>
            Algunas de las preguntas que suelen hacernos
            los negocios de belleza.
          </p>

        </div>

        <div className="beautyFAQ__list">

          {faqs.map((faq, index) => (

            <details key={faq.question}>

              <summary>

                <span>
                  0{index + 1}
                </span>

                <strong>
                  {faq.question}
                </strong>

                <FaArrowRight />

              </summary>

              <p>
                {faq.answer}
              </p>

            </details>

          ))}

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="beautyCTA">

        <div className="beautyCTA__glow" />

        <span>¿EMPEZAMOS?</span>

        <h2>
          Convierte tu negocio
          <strong> en una experiencia digital.</strong>
        </h2>

        <p>
          Cuéntanos qué haces, qué necesitas y hacia dónde
          quieres llevar tu negocio. Nosotros nos encargamos
          de convertirlo en una solución digital.
        </p>

        <a href="/contacto" className="beautyBtn beautyBtn--primary">
          Crear mi proyecto
          <FaArrowRight />
        </a>

      </section>

    </motion.main>
  );
}

export default BellezaEsteticaPage;