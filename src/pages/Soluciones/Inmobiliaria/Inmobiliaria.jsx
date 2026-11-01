import { motion } from "framer-motion";
import {
  FaBuilding,
  FaHome,
  FaKey,
  FaUserTie,
  FaImages,
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaEnvelope,
  FaWhatsapp,
  FaChartLine,
  FaDatabase,
  FaFilter,
  FaLaptopHouse,
  FaFileAlt,
  FaGlobe,
  FaArrowRight,
} from "react-icons/fa";

import "./Inmobiliaria.css";

function InmobiliariaPage() {
  const tipos = [
    {
      icon: <FaBuilding />,
      title: "Agencias inmobiliarias",
      text: "Una web diseñada para mostrar tu cartera de propiedades y convertir visitas en contactos.",
      link: "/soluciones/inmobiliaria/agencias",
    },
    {
      icon: <FaHome />,
      title: "Promotoras",
      text: "Presenta promociones y proyectos inmobiliarios con una experiencia digital premium.",
      link: "/soluciones/inmobiliaria/promotoras",
    },
    {
      icon: <FaKey />,
      title: "Gestores de alquileres",
      text: "Gestiona y presenta propiedades destinadas al alquiler de forma clara y profesional.",
      link: "/soluciones/inmobiliaria/alquileres",
    },
    {
      icon: <FaUserTie />,
      title: "Asesores inmobiliarios",
      text: "Construye una marca personal sólida y genera confianza antes del primer contacto.",
      link: "/soluciones/inmobiliaria/asesores",
    },
  ];

  const funcionalidades = [
    {
      icon: <FaImages />,
      title: "Galerías inmobiliarias",
      text: "Fotografías, vídeos y recorridos visuales para que cada inmueble destaque.",
    },
    {
      icon: <FaSearch />,
      title: "Buscador de propiedades",
      text: "Permite encontrar viviendas utilizando filtros como precio, ubicación, habitaciones o tipo de inmueble.",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Ubicación y mapas",
      text: "Muestra dónde se encuentra cada propiedad y facilita al cliente explorar la zona.",
    },
    {
      icon: <FaFileAlt />,
      title: "Fichas de propiedades",
      text: "Cada inmueble puede tener su propia página con características, fotografías, precio y contacto.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Solicitar visita",
      text: "Los interesados pueden solicitar una visita desde la propia web.",
    },
    {
      icon: <FaWhatsapp />,
      title: "Contacto inmediato",
      text: "WhatsApp, formularios, teléfono y otros canales integrados directamente en la web.",
    },
  ];

  const crecimiento = [
    {
      icon: <FaEnvelope />,
      title: "Captación de compradores",
      text: "Formularios estratégicos para convertir visitantes interesados en oportunidades comerciales.",
    },
    {
      icon: <FaGlobe />,
      title: "SEO local",
      text: "Optimización para que tu inmobiliaria pueda aparecer cuando alguien busca propiedades o servicios en tu zona.",
    },
    {
      icon: <FaChartLine />,
      title: "Analítica",
      text: "Conoce qué propiedades reciben más visitas y qué acciones generan más contactos.",
    },
    {
      icon: <FaDatabase />,
      title: "Panel de administración",
      text: "Gestiona propiedades, información, imágenes y contenido desde un espacio centralizado.",
    },
  ];

  const proceso = [
    "Analizamos tu inmobiliaria y el tipo de propiedades que quieres captar o vender.",
    "Definimos la estructura y la experiencia que tendrá el visitante.",
    "Diseñamos una interfaz visual adaptada a tu marca.",
    "Desarrollamos las funcionalidades necesarias para tu negocio.",
    "Probamos la web en móvil, tablet y ordenador.",
    "Publicamos y dejamos tu plataforma preparada para crecer.",
  ];

  const faqs = [
    {
      question: "¿Puedo mostrar todos mis inmuebles en la web?",
      answer:
        "Sí. Podemos crear un catálogo inmobiliario donde cada propiedad tenga su propia ficha, fotografías, características, precio, ubicación y formulario de contacto.",
    },
    {
      question: "¿Puedo añadir nuevas propiedades posteriormente?",
      answer:
        "Sí. Podemos desarrollar un panel de administración desde el que puedas añadir, editar o eliminar propiedades sin depender continuamente del desarrollador.",
    },
    {
      question: "¿Se puede incluir un buscador con filtros?",
      answer:
        "Sí. Podemos crear filtros por precio, ubicación, tipo de inmueble, habitaciones, superficie y otros criterios relevantes para tu negocio.",
    },
    {
      question: "¿Los clientes pueden solicitar una visita?",
      answer:
        "Sí. Podemos integrar formularios, calendarios o sistemas de solicitud de visitas para facilitar el contacto entre comprador y agente.",
    },
    {
      question: "¿Puedo mostrar promociones inmobiliarias?",
      answer:
        "Sí. Las promociones pueden tener páginas propias con fotografías, planos, viviendas disponibles, características y formularios de información.",
    },
    {
      question: "¿La web estará adaptada a móviles?",
      answer:
        "Sí. Todas las páginas se diseñan para funcionar correctamente en móviles, tablets y ordenadores.",
    },
  ];

  return (
    <motion.main
      className="inmobiliariaPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

      {/* HERO */}
      <section className="inmoHero">

        <div className="inmoHero__grid" />

        <div className="inmoHero__content">

          <span className="inmoHero__eyebrow">
            SOLUCIONES DIGITALES · INMOBILIARIA
          </span>

          <h1>
            Haz que cada propiedad
            <span> tenga algo que decir.</span>
          </h1>

          <p>
            Creamos experiencias digitales para inmobiliarias que quieren
            mostrar propiedades de forma espectacular, captar compradores
            y convertir visitas en oportunidades reales.
          </p>

          <div className="inmoHero__buttons">
            <a href="/contacto" className="inmoBtn inmoBtn--primary">
              Crear mi web
              <FaArrowRight />
            </a>

            <a href="#soluciones" className="inmoBtn inmoBtn--secondary">
              Explorar soluciones
            </a>
          </div>

        </div>

        <div className="inmoHero__visual">

          <div className="propertyCard propertyCard--back">
            <div className="propertyCard__image">
              <img src="/web2.png" alt="Propiedad inmobiliaria" />
            </div>
          </div>

          <div className="propertyCard propertyCard--main">

            <div className="propertyCard__image">
              <img src="/web1.png" alt="Inmueble destacado" />
              <span>DESTACADO</span>
            </div>

            <div className="propertyCard__info">
              <small>SEVILLA · CENTRO</small>
              <h3>Vivienda que destaca</h3>

              <div className="propertyCard__details">
                <span>3 hab.</span>
                <span>2 baños</span>
                <strong>320.000 €</strong>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* TIPOS DE NEGOCIO */}
      <section className="inmoTypes">

        <div className="sectionHeading">
          <span>PARA TU NEGOCIO</span>
          <h2>
            Una solución pensada para
            <strong> tu forma de trabajar.</strong>
          </h2>

          <p>
            No todas las inmobiliarias necesitan lo mismo. Adaptamos la
            estructura, funcionalidades y diseño a tu modelo de negocio.
          </p>
        </div>

        <div className="inmoTypes__grid">

          {tipos.map((tipo, index) => (
            <motion.a
              href={tipo.link}
              className="inmoTypeCard"
              key={tipo.title}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.25 }}
            >

              <div className="inmoTypeCard__number">
                0{index + 1}
              </div>

              <div className="inmoTypeCard__icon">
                {tipo.icon}
              </div>

              <h3>{tipo.title}</h3>

              <p>{tipo.text}</p>

              <span className="inmoTypeCard__link">
                Descubrir solución
                <FaArrowRight />
              </span>

            </motion.a>
          ))}

        </div>

      </section>


      {/* PROPIEDADES */}
      <section className="inmoProperties">

        <div className="inmoProperties__content">

          <span>LA PROPIEDAD ES LA PROTAGONISTA</span>

          <h2>
            Presenta tus inmuebles
            <strong> como se merecen.</strong>
          </h2>

          <p>
            Una propiedad no debería perderse entre una lista interminable.
            Diseñamos experiencias donde cada inmueble tiene espacio para
            destacar y generar interés.
          </p>

          <ul>
            <li>
              <FaImages />
              Fotografías y galerías inmersivas
            </li>

            <li>
              <FaSearch />
              Buscadores y filtros avanzados
            </li>

            <li>
              <FaMapMarkerAlt />
              Mapas y localización
            </li>

            <li>
              <FaCalendarAlt />
              Solicitud de visitas
            </li>
          </ul>

        </div>

        <div className="propertyShowcase">

          <div className="propertyShowcase__image">
            <img src="/web3.png" alt="Propiedad inmobiliaria" />
          </div>

          <div className="propertyShowcase__floating">
            <small>PROPIEDAD DESTACADA</small>
            <strong>Una experiencia diferente.</strong>
            <span>Ver inmueble →</span>
          </div>

        </div>

      </section>


      {/* FUNCIONALIDADES */}
      <section className="inmoFeatures" id="soluciones">

        <div className="sectionHeading sectionHeading--light">

          <span>TODO LO QUE PUEDES HACER</span>

          <h2>
            Mucho más que
            <strong> una web inmobiliaria.</strong>
          </h2>

          <p>
            Construimos una herramienta digital que ayuda a presentar,
            organizar y vender tus propiedades.
          </p>

        </div>

        <div className="inmoFeatures__grid">

          {funcionalidades.map((item, index) => (
            <motion.div
              className="inmoFeature"
              key={item.title}
              whileHover={{ scale: 1.03 }}
            >

              <span className="inmoFeature__number">
                0{index + 1}
              </span>

              <div className="inmoFeature__icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </motion.div>
          ))}

        </div>

      </section>


      {/* CRECIMIENTO */}
      <section className="inmoGrowth">

        <div className="sectionHeading">

          <span>OPTIMIZA TU NEGOCIO</span>

          <h2>
            Tu web también puede
            <strong> trabajar por ti.</strong>
          </h2>

          <p>
            Una buena web no termina en mostrar propiedades. También debe
            ayudarte a conseguir contactos, organizar información y entender
            qué está funcionando.
          </p>

        </div>

        <div className="inmoGrowth__grid">

          {crecimiento.map((item, index) => (
            <motion.div
              className="growthCard"
              key={item.title}
              whileHover={{ y: -8 }}
            >

              <div className="growthCard__icon">
                {item.icon}
              </div>

              <span>0{index + 1}</span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </motion.div>
          ))}

        </div>

      </section>


      {/* PANEL ADMIN */}
      <section className="inmoAdmin">

        <div className="inmoAdmin__visual">

          <div className="adminWindow">

            <div className="adminWindow__top">
              <span />
              <span />
              <span />
            </div>

            <div className="adminWindow__content">

              <div className="adminSidebar">
                <strong>DELUMIS</strong>

                <span>Dashboard</span>
                <span>Propiedades</span>
                <span>Clientes</span>
                <span>Solicitudes</span>
              </div>

              <div className="adminDashboard">

                <small>PROPIEDADES</small>

                <h3>Gestiona tu cartera</h3>

                <div className="adminStats">
                  <div>
                    <strong>48</strong>
                    <span>Activas</span>
                  </div>

                  <div>
                    <strong>12</strong>
                    <span>Reservadas</span>
                  </div>

                  <div>
                    <strong>31</strong>
                    <span>Contactos</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="inmoAdmin__content">

          <span>PANEL DE ADMINISTRACIÓN</span>

          <h2>
            Controla tu inmobiliaria
            <strong> desde un solo lugar.</strong>
          </h2>

          <p>
            Podemos desarrollar un panel privado para gestionar propiedades,
            fotografías, información, solicitudes y contenido sin tener que
            modificar el código de la web.
          </p>

          <a href="/contacto" className="textLink">
            Quiero saber más
            <FaArrowRight />
          </a>

        </div>

      </section>


      {/* PLANTILLAS */}
      <section className="inmoTemplates">

        <div className="sectionHeading">

          <span>PLANTILLAS INMOBILIARIAS</span>

          <h2>
            Empieza con una idea.
            <strong> Hazla tuya.</strong>
          </h2>

          <p>
            Inspírate en nuestras propuestas y personalizamos la experiencia
            para adaptarla a tu marca y propiedades.
          </p>

        </div>

        <div className="inmoTemplates__track">

          {["/web1.png", "/web2.png", "/web3.png"].map(
            (image, index) => (

              <motion.a
                href="/templates"
                className="templateCard"
                key={image}
                whileHover={{ y: -12 }}
              >

                <div className="templateCard__image">
                  <img
                    src={image}
                    alt={`Plantilla inmobiliaria ${index + 1}`}
                  />
                </div>

                <div className="templateCard__info">
                  <span>INMOBILIARIA</span>

                  <h3>
                    {[
                      "Real Estate",
                      "Urban Living",
                      "Premium Homes",
                    ][index]}
                  </h3>

                  <FaArrowRight />
                </div>

              </motion.a>

            )
          )}

        </div>

        <a href="/templates" className="templatesButton">
          Ver todas las plantillas
          <FaArrowRight />
        </a>

      </section>


      {/* PROCESO */}
      <section className="inmoProcess">

        <div className="sectionHeading">

          <span>CÓMO LO HACEMOS</span>

          <h2>
            De la idea
            <strong> a tu nueva web.</strong>
          </h2>

        </div>

        <div className="processTimeline">

          {proceso.map((step, index) => (

            <motion.div
              className="processStep"
              key={step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >

              <span>{String(index + 1).padStart(2, "0")}</span>

              <p>{step}</p>

            </motion.div>

          ))}

        </div>

      </section>


      {/* FAQ */}
      <section className="inmoFAQ">

        <div className="sectionHeading">

          <span>PREGUNTAS FRECUENTES</span>

          <h2>
            Todo claro antes
            <strong> de empezar.</strong>
          </h2>

        </div>

        <div className="faqList">

          {faqs.map((faq, index) => (

            <details className="faqItem" key={faq.question}>

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


      {/* CTA */}
      <section className="inmoCTA">

        <div className="inmoCTA__glow" />

        <span>¿PREPARADO PARA DAR EL SIGUIENTE PASO?</span>

        <h2>
          Tus propiedades merecen
          <strong> una experiencia diferente.</strong>
        </h2>

        <p>
          Cuéntanos qué necesitas y diseñaremos una solución digital
          adaptada a tu inmobiliaria.
        </p>

        <a href="/contacto" className="inmoBtn inmoBtn--primary">
          Hablar con DELUMIS
          <FaArrowRight />
        </a>

      </section>

    </motion.main>
  );
}

export default InmobiliariaPage;
