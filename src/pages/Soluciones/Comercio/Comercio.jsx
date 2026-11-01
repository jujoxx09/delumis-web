import { motion } from "framer-motion";
import {
  FaTshirt,
  FaShoePrints,
  FaCogs,
  FaStore,
  FaGem,
  FaShoppingBag,
  FaSearch,
  FaMobileAlt,
  FaWhatsapp,
  FaBoxes,
  FaChartLine,
  FaCreditCard,
  FaMapMarkerAlt,
  FaRocket,
  FaCheck,
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";

import { useState } from "react";
import { Link } from "react-router-dom";

import "./Comercio.css";

function ComercioPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const businesses = [
    {
      icon: <FaTshirt />,
      title: "Tiendas de moda y complementos",
      description:
        "Presenta tus colecciones, productos y novedades con una web visual que invite a descubrir tu marca.",
      link: "/soluciones/comercio/moda",
    },
    {
      icon: <FaShoePrints />,
      title: "Zapaterías",
      description:
        "Muestra tus modelos, tallas, colecciones y novedades de una forma clara y atractiva.",
      link: "/soluciones/comercio/zapaterias",
    },
    {
      icon: <FaCogs />,
      title: "Tiendas de repuestos y accesorios",
      description:
        "Organiza referencias, productos y categorías para que tus clientes encuentren rápidamente lo que necesitan.",
      link: "/soluciones/comercio/repuestos",
    },
    {
      icon: <FaStore />,
      title: "Comercio local / multi-categoría",
      description:
        "Una presencia digital flexible para negocios que ofrecen diferentes productos y servicios.",
      link: "/soluciones/comercio/local",
    },
    {
      icon: <FaGem />,
      title: "Tiendas especializadas",
      description:
        "Creamos una experiencia adaptada a la personalidad, productos y necesidades específicas de tu negocio.",
      link: "/soluciones/comercio/especializadas",
    },
  ];

  const features = [
    {
      icon: <FaShoppingBag />,
      title: "Catálogo de productos",
      text: "Muestra tus productos de forma visual, organizada y fácil de explorar.",
    },
    {
      icon: <FaSearch />,
      title: "Búsqueda inteligente",
      text: "Ayuda a tus clientes a encontrar rápidamente aquello que están buscando.",
    },
    {
      icon: <FaBoxes />,
      title: "Categorías y filtros",
      text: "Organiza grandes catálogos mediante categorías, filtros y características.",
    },
    {
      icon: <FaCreditCard />,
      title: "Venta online",
      text: "Si quieres vender directamente desde tu web, podemos crear tu ecommerce.",
    },
    {
      icon: <FaWhatsapp />,
      title: "Pedidos por WhatsApp",
      text: "Facilita consultas, pedidos y contacto directo desde cualquier producto.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Experiencia móvil",
      text: "Tu tienda se adapta perfectamente a móviles, tablets y ordenadores.",
    },
  ];

  const management = [
    "Añadir y modificar productos",
    "Gestionar categorías",
    "Actualizar precios",
    "Controlar productos destacados",
    "Gestionar pedidos",
    "Consultar información de clientes",
  ];

  const faqs = [
    {
      question: "¿Puedo tener una tienda online completa?",
      answer:
        "Sí. Podemos crear desde una web de catálogo hasta un ecommerce completo con carrito, pagos y gestión de pedidos.",
    },
    {
      question: "¿Y si no quiero vender directamente por internet?",
      answer:
        "No hay problema. Podemos crear un catálogo digital para mostrar tus productos y dirigir al cliente a WhatsApp, teléfono o tienda física.",
    },
    {
      question: "¿Puedo actualizar los productos yo mismo?",
      answer:
        "Sí. Podemos incorporar un panel de administración para que puedas gestionar productos, categorías, precios e información sin depender de nosotros.",
    },
    {
      question: "¿La web funcionará bien en móvil?",
      answer:
        "Sí. Diseñamos todas nuestras páginas para que funcionen correctamente en móvil, tablet y ordenador.",
    },
    {
      question: "¿Puedo conectar WhatsApp?",
      answer:
        "Sí. Podemos integrar botones y acciones de WhatsApp para facilitar consultas y pedidos desde productos concretos.",
    },
    {
      question: "¿Podéis ayudarme con el SEO local?",
      answer:
        "Sí. Podemos preparar la estructura de la web para mejorar su posicionamiento y trabajar aspectos relacionados con búsquedas locales.",
    },
  ];

  return (
    <motion.main
      className="commercePage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* =========================
          HERO
      ========================= */}

      <section className="commerceHero">
        <div className="commerceHero__glow"></div>

        <div className="commerceHero__content">
          <span className="commerceHero__eyebrow">
            DELUMIS · COMERCIO Y TIENDAS
          </span>

          <h1>
            Tu tienda merece
            <span> algo más que un escaparate digital.</span>
          </h1>

          <p>
            Creamos experiencias digitales para tiendas que quieren mostrar
            mejor sus productos, llegar a más clientes y convertir visitas en
            oportunidades.
          </p>

          <div className="commerceHero__actions">
            <Link to="/contacto" className="commerceBtn commerceBtn--primary">
              Crear mi tienda
              <FaArrowRight />
            </Link>

            <a href="#soluciones" className="commerceBtn commerceBtn--ghost">
              Explorar soluciones
            </a>
          </div>
        </div>

        <div className="commerceHero__visual">
          <div className="commerceHero__grid"></div>

          <div className="floatingProduct floatingProduct--one">
            <FaShoppingBag />
          </div>

          <div className="floatingProduct floatingProduct--two">
            <FaTshirt />
          </div>

          <div className="commerceHero__mockup">
            <div className="mockup__top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="mockup__content">
              <div className="mockup__line"></div>
              <div className="mockup__line short"></div>

              <div className="mockup__products">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          TIPOS DE NEGOCIO
      ========================= 

      <section className="commerceBusinesses" id="soluciones">
        <div className="sectionHeading">
          <span>ENCUENTRA TU SOLUCIÓN</span>

          <h2>
            Una web pensada para
            <strong> tu tipo de tienda.</strong>
          </h2>

          <p>
            No todos los comercios funcionan igual. Por eso adaptamos la
            experiencia digital a la forma en la que trabaja cada negocio.
          </p>
        </div>

        <div className="commerceBusinesses__grid">
          {businesses.map((business, index) => (
            <motion.div
              key={business.title}
              className="businessCard"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <div className="businessCard__icon">{business.icon}</div>

              <span className="businessCard__number">
                0{index + 1}
              </span>

              <h3>{business.title}</h3>

              <p>{business.description}</p>

              <Link to={business.link}>
                Descubrir solución
                <FaArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>*/}

      {/* =========================
            ESPECIALIDADES
        ========================= */}

        <section className="commercePage__specialties">

        <div className="sectionHeader">
            <span className="sectionTag">COMERCIO</span>

            <h2>
            Una web pensada para
            <span> vender tus productos</span>
            </h2>

            <p>
            Creamos experiencias digitales adaptadas a cada tipo de comercio,
            desde pequeños negocios locales hasta tiendas con cientos de productos.
            </p>
        </div>


        <div className="specialtiesGrid">

            {/* MODA */}
            <motion.div
            className="specialtyCard"
            whileHover={{ y: -10 }}
            >
            <div className="specialtyCard__image">
                <img
                src="/web1.png"
                alt="Tienda de moda y complementos"
                />

                <div className="specialtyCard__overlay" />
            </div>

            <div className="specialtyCard__content">
                <span>01</span>

                <h3>
                Tiendas de moda
                <br />
                y complementos
                </h3>

                <p>
                Presenta tus colecciones de una forma visual,
                elegante y pensada para convertir visitas en compras.
                </p>

                <a href="/soluciones/comercio/moda">
                Descubrir solución →
                </a>
            </div>
            </motion.div>


            {/* ZAPATERÍAS */}
            <motion.div
            className="specialtyCard"
            whileHover={{ y: -10 }}
            >
            <div className="specialtyCard__image">
                <img
                src="/web2.png"
                alt="Zapatería"
                />

                <div className="specialtyCard__overlay" />
            </div>

            <div className="specialtyCard__content">
                <span>02</span>

                <h3>
                Zapaterías
                </h3>

                <p>
                Catálogos atractivos para mostrar modelos,
                tallas, colores y novedades de tu tienda.
                </p>

                <a href="/soluciones/comercio/zapaterias">
                Descubrir solución →
                </a>
            </div>
            </motion.div>


            {/* REPUESTOS */}
            <motion.div
            className="specialtyCard"
            whileHover={{ y: -10 }}
            >
            <div className="specialtyCard__image">
                <img
                src="/web3.png"
                alt="Tienda de repuestos y accesorios"
                />

                <div className="specialtyCard__overlay" />
            </div>

            <div className="specialtyCard__content">
                <span>03</span>

                <h3>
                Repuestos
                <br />
                y accesorios
                </h3>

                <p>
                Organiza tus productos y facilita que tus clientes
                encuentren exactamente lo que necesitan.
                </p>

                <a href="/soluciones/comercio/repuestos">
                Descubrir solución →
                </a>
            </div>
            </motion.div>


            {/* COMERCIO LOCAL */}
            <motion.div
            className="specialtyCard"
            whileHover={{ y: -10 }}
            >
            <div className="specialtyCard__image">
                <img
                src="/web1.png"
                alt="Comercio local"
                />

                <div className="specialtyCard__overlay" />
            </div>

            <div className="specialtyCard__content">
                <span>04</span>

                <h3>
                Comercio local
                </h3>

                <p>
                Haz que tu negocio destaque en tu ciudad y convierte
                las búsquedas online en visitas a tu establecimiento.
                </p>

                <a href="/soluciones/comercio/local">
                Descubrir solución →
                </a>
            </div>
            </motion.div>


            {/* ESPECIALIZADAS */}
            <motion.div
            className="specialtyCard specialtyCard--wide"
            whileHover={{ y: -10 }}
            >
            <div className="specialtyCard__image">
                <img
                src="/web2.png"
                alt="Tienda especializada"
                />

                <div className="specialtyCard__overlay" />
            </div>

            <div className="specialtyCard__content">
                <span>05</span>

                <h3>
                Tiendas especializadas
                </h3>

                <p>
                Una experiencia digital creada alrededor de tus productos,
                tu público y la forma en la que tus clientes compran.
                </p>

                <a href="/soluciones/comercio/especializadas">
                Descubrir solución →
                </a>
            </div>
            </motion.div>

        </div>

        </section>

      {/* =========================
          CATÁLOGO
      ========================= */}

      <section className="commerceCatalog">
        <div className="commerceCatalog__content">
          <span className="sectionTag">TU CATÁLOGO, REINVENTADO</span>

          <h2>
            Convierte tus productos en una
            <span> experiencia.</span>
          </h2>

          <p>
            Una buena tienda online no consiste simplemente en colocar
            productos. Organizamos la información para que el cliente pueda
            descubrir, comparar y decidir con facilidad.
          </p>

          <div className="commerceCatalog__points">
            <div>
              <FaCheck />
              <span>Galerías de producto atractivas</span>
            </div>

            <div>
              <FaCheck />
              <span>Productos destacados y novedades</span>
            </div>

            <div>
              <FaCheck />
              <span>Categorías y filtros personalizados</span>
            </div>

            <div>
              <FaCheck />
              <span>Fichas de producto completas</span>
            </div>
          </div>
        </div>

        <div className="catalogVisual">
          <div className="catalogVisual__card">
            <div className="catalogVisual__image">
              <div className="catalogVisual__circle"></div>
            </div>

            <div className="catalogVisual__info">
              <span>NUEVA COLECCIÓN</span>
              <h3>Producto destacado</h3>
              <strong>59,90 €</strong>
            </div>
          </div>

          <div className="catalogVisual__badge">
            <FaShoppingBag />
            <span>Compra fácil</span>
          </div>
        </div>
      </section>

      {/* =========================
          FUNCIONALIDADES
      ========================= */}

      <section className="commerceFeatures">
        <div className="sectionHeading sectionHeading--dark">
          <span>TODO LO QUE NECESITA TU TIENDA</span>

          <h2>
            Mucho más que
            <strong> una página web.</strong>
          </h2>

          <p>
            Añadimos las herramientas necesarias para que tu presencia digital
            trabaje realmente a favor de tu negocio.
          </p>
        </div>

        <div className="commerceFeatures__grid">
          {features.map((feature, index) => (
            <motion.div
              className="featureCard"
              key={feature.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="featureCard__icon">{feature.icon}</div>

              <span>0{index + 1}</span>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================
          PANEL ADMIN
      ========================= */}

      <section className="commerceAdmin">
        <div className="commerceAdmin__visual">
          <div className="adminPanel">
            <div className="adminPanel__header">
              <div>
                <span>DELUMIS ADMIN</span>
                <h3>Panel de control</h3>
              </div>

              <div className="adminPanel__status">
                ● Online
              </div>
            </div>

            <div className="adminPanel__stats">
              <div>
                <span>Productos</span>
                <strong>248</strong>
              </div>

              <div>
                <span>Pedidos</span>
                <strong>36</strong>
              </div>

              <div>
                <span>Clientes</span>
                <strong>1.284</strong>
              </div>
            </div>

            <div className="adminPanel__chart">
              <div className="chartLine"></div>
            </div>
          </div>
        </div>

        <div className="commerceAdmin__content">
          <span className="sectionTag">CONTROL TOTAL</span>

          <h2>
            Tu tienda.
            <span> Tus reglas.</span>
          </h2>

          <p>
            Gestiona el contenido de tu negocio desde un panel sencillo y
            diseñado para que puedas mantener tu web actualizada.
          </p>

          <div className="adminList">
            {management.map((item) => (
              <div key={item}>
                <FaCheck />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Link to="/contacto" className="commerceBtn commerceBtn--dark">
            Quiero mi panel
            <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* =========================
          VISIBILIDAD
      ========================= */}

      <section className="commerceVisibility">
        <div className="visibility__content">
          <span className="sectionTag">MÁS VISIBILIDAD</span>

          <h2>
            Que tus clientes te encuentren
            <span> cuando te necesitan.</span>
          </h2>

          <p>
            Tu web puede ser mucho más que una tarjeta de visita. Trabajamos
            una estructura preparada para ayudarte a ganar visibilidad en
            buscadores y facilitar el contacto.
          </p>
        </div>

        <div className="visibility__cards">
          <motion.div
            className="visibilityCard"
            whileHover={{ rotate: -2, y: -8 }}
          >
            <FaSearch />
            <h3>SEO</h3>
            <p>Una estructura preparada para buscadores.</p>
          </motion.div>

          <motion.div
            className="visibilityCard"
            whileHover={{ rotate: 2, y: -8 }}
          >
            <FaMapMarkerAlt />
            <h3>SEO Local</h3>
            <p>Facilita que te encuentren cerca de tu negocio.</p>
          </motion.div>

          <motion.div
            className="visibilityCard"
            whileHover={{ rotate: -2, y: -8 }}
          >
            <FaWhatsapp />
            <h3>Contacto</h3>
            <p>WhatsApp, teléfono, email y formularios.</p>
          </motion.div>

          <motion.div
            className="visibilityCard"
            whileHover={{ rotate: 2, y: -8 }}
          >
            <FaChartLine />
            <h3>Analítica</h3>
            <p>Conoce cómo interactúan los usuarios con tu web.</p>
          </motion.div>
        </div>
      </section>

      {/* =========================
          PLANTILLAS
      ========================= */}

      <div className="templateCarousel">

      {/* TEMPLATE 1 */}
      <div className="templateCard templateCard--one">

        <div className="templateCard__image_comercio">
          <div className="templateCard__glow"></div>

          <div className="templateCard__mockup">
            <div className="mockup__top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="mockup__content">
              <small>DELUMIS / TEMPLATE</small>
              <strong>FASHION</strong>
              <p>Minimal design for modern brands</p>
            </div>
          </div>

          <span className="templateCard__tag">FASHION</span>
        </div>

        <div className="templateCard__info_comerio">
          <div>
            <span className="templateCard__number">01</span>
            <h3>Minimal Store</h3>
          </div>

          <Link to="/templates" className="templateCard__link">
            Ver plantilla
            <FaArrowRight />
          </Link>
        </div>

      </div>


      {/* TEMPLATE 2 */}
      <div className="templateCard templateCard--two">

        <div className="templateCard__image_comercio">
          <div className="templateCard__glow"></div>

          <div className="templateCard__mockup mockup--dark">
            <div className="mockup__top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="mockup__content">
              <small>DELUMIS / TEMPLATE</small>
              <strong>URBAN</strong>
              <p>Bold experiences for local businesses</p>
            </div>
          </div>

          <span className="templateCard__tag">SHOP</span>
        </div>

        <div className="templateCard__info_comerio">
          <div>
            <span className="templateCard__number">02</span>
            <h3>Urban Shop</h3>
          </div>

          <Link to="/templates" className="templateCard__link">
            Ver plantilla
            <FaArrowRight />
          </Link>
        </div>

      </div>


      {/* TEMPLATE 3 */}
      <div className="templateCard templateCard--three">

        <div className="templateCard__image_comercio">
          <div className="templateCard__glow"></div>

          <div className="templateCard__mockup">
            <div className="mockup__top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="mockup__content">
              <small>DELUMIS / TEMPLATE</small>
              <strong>LOCAL</strong>
              <p>Simple. Professional. Memorable.</p>
            </div>
          </div>

          <span className="templateCard__tag">LOCAL</span>
        </div>

        <div className="templateCard__info_comerio">
          <div>
            <span className="templateCard__number">03</span>
            <h3>Local Market</h3>
          </div>

          <Link to="/templates" className="templateCard__link">
            Ver plantilla
            <FaArrowRight />
          </Link>
        </div>

      </div>

    </div>

    <Link to="/plantillas" className="templatesMore">
      Explorar todas las plantillas
      <FaArrowRight />
    </Link>

     
      {/* =========================
          FAQ
      ========================= */}

      <section className="commerceFaq">
        <div className="sectionHeading">
          <span>FAQ</span>

          <h2>
            Antes de empezar,
            <strong> resolvamos tus dudas.</strong>
          </h2>
        </div>

        <div className="faqList">
          {faqs.map((faq, index) => (
            <div
              className={`faqItem ${
                openFaq === index ? "faqItem--open" : ""
              }`}
              key={faq.question}
            >
              <button onClick={() => toggleFaq(index)}>
                <span>{faq.question}</span>

                <FaChevronDown />
              </button>

              <div className="faqAnswer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          CTA
      ========================= */}

      <section className="commerceCTA">
        <div className="commerceCTA__glow"></div>

        <div className="commerceCTA__content">
          <span>DELUMIS · COMERCIO DIGITAL</span>

          <h2>
            Tu tienda ya tiene algo que vender.
            <strong> Ahora hagamos que quiera comprar.</strong>
          </h2>

          <p>
            Cuéntanos qué vendes, cómo funciona tu negocio y qué quieres
            conseguir. Nosotros nos encargamos de convertirlo en una
            experiencia digital.
          </p>

          <Link to="/contacto" className="commerceCTA__button">
            Hablemos de tu proyecto
            <FaArrowRight />
          </Link>
        </div>

        <div className="commerceCTA__icon">
          <FaRocket />
        </div>
      </section>
    </motion.main>
  );
}

export default ComercioPage;
