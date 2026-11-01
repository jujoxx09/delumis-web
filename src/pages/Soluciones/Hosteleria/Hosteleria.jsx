import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  ChefHat,
  Clock3,
  Globe2,
  LayoutDashboard,
  MessageCircle,
  MonitorSmartphone,
  Search,
  ShoppingBag,
  Smartphone,
  Star,
  Utensils,
  Zap,
} from "lucide-react";

import "./Hosteleria.css";

function Hosteleria() {

  const subNiches = [
    {
      title: "Restaurantes",
      description:
        "Una web que haga que tus clientes quieran reservar antes incluso de llegar.",
      image: "/web1.png",
      link: "/soluciones/restaurantes",
    },
    {
      title: "Bares y cafeterías",
      description:
        "Muestra tu ambiente, tu carta y todo lo que hace special a tu local.",
      image: "/web2.png",
      link: "/soluciones/bares-cafeterias",
    },
    {
      title: "Hoteles y alojamientos",
      description:
        "Convierte búsquedas en reservas con una experiencia digital cuidada.",
      image: "/web2.png",
      link: "/soluciones/hoteles",
    },
    {
      title: "Comida rápida / Delivery",
      description:
        "Facilita pedidos y consigue que tus clientes vuelvan.",
      image: "/web1.png",
      link: "/soluciones/delivery",
    },
    {
      title: "Catering",
      description:
        "Presenta tus servicios, menús y eventos de una forma profesional.",
      image: "/web2.png",
      link: "/soluciones/catering",
    },
  ];


  const features = [
    {
      icon: CalendarCheck,
      title: "Reservas sin complicaciones",
      text:
        "Permite que tus clientes consulten información y soliciten o gestionen sus reservas de forma sencilla.",
    },
    {
      icon: Utensils,
      title: "Carta y menú digital",
      text:
        "Presenta tus platos, menús, precios y opciones de una forma visual y fácil de consultar.",
    },
    {
      icon: Smartphone,
      title: "Perfecta en móvil",
      text:
        "La mayoría de tus clientes te descubrirán desde el móvil. Tu web estará preparada para ellos.",
    },
    {
      icon: ShoppingBag,
      title: "Pedidos y delivery",
      text:
        "Integra sistemas de pedidos o crea una experiencia preparada para llevar a tus clientes hasta la conversión.",
    },
    {
      icon: Star,
      title: "Opiniones y confianza",
      text:
        "Muestra reseñas, fotografías y elementos que ayuden a convertir visitantes en clientes.",
    },
    {
      icon: Globe2,
      title: "Presencia online",
      text:
        "Haz que encontrar tu negocio, conocerlo y contactar contigo sea mucho más sencillo.",
    },
  ];


  const optimization = [
    {
      icon: Globe2,
      title: "Dominio propio",
      text:
        "Tu negocio merece una dirección profesional y fácil de recordar.",
    },
    {
      icon: MonitorSmartphone,
      title: "Web optimizada",
      text:
        "Diseño responsive, velocidad y una experiencia pensada para tus clientes.",
    },
    {
      icon: LayoutDashboard,
      title: "Panel de administración",
      text:
        "Gestiona contenidos y funcionalidades de tu negocio desde un sistema adaptado a tus necesidades.",
    },
    {
      icon: Search,
      title: "SEO",
      text:
        "Preparamos tu web para que los buscadores puedan entender y posicionar tu negocio.",
    },
    {
      icon: MessageCircle,
      title: "Contacto directo",
      text:
        "WhatsApp, formularios, teléfono y otros canales para que tus clientes puedan encontrarte.",
    },
    {
      icon: Zap,
      title: "Rendimiento",
      text:
        "Construimos experiencias rápidas para que tus clientes no tengan que esperar.",
    },
  ];


  const faqs = [
    {
      question: "¿Puedo tener una carta digital?",
      answer:
        "Sí. Podemos crear una carta digital personalizada, accesible desde móvil y preparada para que tus clientes puedan consultar tus productos de forma rápida.",
    },
    {
      question: "¿Puedo recibir reservas desde mi web?",
      answer:
        "Sí. Podemos integrar sistemas de reservas existentes o plantear una solución personalizada dependiendo de las necesidades de tu negocio.",
    },
    {
      question: "¿La web funcionará bien en móvil?",
      answer:
        "Sí. Diseñamos primero pensando en la experiencia del usuario y adaptamos cada página a móvil, tablet y ordenador.",
    },
    {
      question: "¿Puedo modificar el contenido después?",
      answer:
        "Dependiendo del proyecto podemos incorporar un panel de administración para que puedas gestionar diferentes contenidos de tu web.",
    },
    {
      question: "¿Incluye dominio y hosting?",
      answer:
        "Los proyectos de DELUMIS pueden incluir la configuración del dominio, hosting y SSL según el plan y las necesidades del proyecto.",
    },
  ];


  return (
    <motion.main
      className="hosteleriaPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hosteleriaHero">

        <div className="hosteleriaHero__background">
          <div className="hosteleriaHero__grid"></div>

          <div className="hosteleriaHero__glow"></div>
        </div>


        <div className="hosteleriaHero__content">

          <span className="solutionEyebrow">
            SOLUCIONES · HOSTELERÍA
          </span>

          <h1>
            Tu negocio
            <br />
            también merece
            <br />
            <span>una gran web.</span>
          </h1>

          <p>
            Diseñamos experiencias digitales para restaurantes,
            cafeterías, hoteles, delivery y negocios de hostelería
            que quieren destacar y conseguir más clientes.
          </p>

          <div className="hosteleriaHero__buttons">

            <a
              href="/contacto"
              className="solutionButton solutionButton--primary"
            >
              Crear mi web
              <ArrowRight size={17} />
            </a>

            <a
              href="#soluciones-hosteleria"
              className="solutionButton solutionButton--secondary"
            >
              Explorar soluciones
            </a>

          </div>

        </div>


        <div className="hosteleriaHero__visual">

          <div className="hosteleriaHero__image-card">

            <img
              src="/web1.png"
              alt="Web para hostelería"
            />

          </div>

          <div className="hosteleriaHero__floating-card">

            <span>DELUMIS</span>

            <strong>
              Diseñado
              <br />
              para convertir.
            </strong>

            <div className="hosteleriaHero__floating-line"></div>

          </div>

        </div>


        <div className="hosteleriaHero__scroll">
          SCROLL
          <span></span>
        </div>

      </section>


      {/* =====================================================
          SUB NICHOS
      ===================================================== */}

      <section
        className="hosteleriaNiches"
        id="soluciones-hosteleria"
      >

        <div className="sectionHeader">

          <div>

            <span className="solutionEyebrow">
              SOLUCIONES ESPECÍFICAS
            </span>

            <h2>
              Una solución
              <br />
              para <span>cada negocio.</span>
            </h2>

          </div>

          <p>
            No todos los negocios de hostelería funcionan igual.
            Por eso adaptamos la experiencia digital a la forma
            en la que trabaja cada uno.
          </p>

        </div>


        <div className="hosteleriaNiches__grid">

          {subNiches.map((niche, index) => (

            <motion.a
              key={niche.title}
              href={niche.link}
              className={`nicheCard nicheCard--${index + 1}`}
              whileHover={{ y: -8 }}
            >

              <div className="nicheCard__image">

                <img
                  src={niche.image}
                  alt={niche.title}
                />

                <div className="nicheCard__overlay"></div>

              </div>


              <div className="nicheCard__content">

                <span>
                  0{index + 1}
                </span>

                <div>

                  <h3>
                    {niche.title}
                  </h3>

                  <p>
                    {niche.description}
                  </p>

                </div>

                <div className="nicheCard__arrow">
                  <ArrowRight size={17} />
                </div>

              </div>

            </motion.a>

          ))}

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="hosteleriaFeatures">

        <div className="sectionHeader sectionHeader--center">

          <span className="solutionEyebrow">
            TODO LO QUE NECESITAS
          </span>

          <h2>
            Una web pensada para
            <br />
            el <span>día a día.</span>
          </h2>

          <p>
            No se trata solamente de tener una web bonita.
            Se trata de facilitar el trabajo y mejorar la experiencia
            de tus clientes.
          </p>

        </div>


        <div className="hosteleriaFeatures__grid">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <motion.article
                className="featureCard"
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -6,
                }}
              >

                <div className="featureCard__top">

                  <span>
                    0{index + 1}
                  </span>

                  <Icon size={21} />

                </div>

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.text}
                </p>

              </motion.article>
            );

          })}

        </div>

      </section>


      {/* =====================================================
          DARK OPTIMIZATION
      ===================================================== */}

      <section className="hosteleriaOptimize">

        <div className="hosteleriaOptimize__glow"></div>

        <div className="hosteleriaOptimize__header">

          <span className="solutionEyebrow">
            MÁS QUE UNA WEB
          </span>

          <h2>
            Optimiza tu
            <br />
            <span>negocio.</span>
          </h2>

          <p>
            Construimos una base digital preparada para que tu negocio
            pueda crecer, gestionar mejor sus clientes y ofrecer una
            experiencia profesional desde el primer contacto.
          </p>

        </div>


        <div className="hosteleriaOptimize__grid">

          {optimization.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                className="optimizationCard"
                key={item.title}
                whileHover={{
                  y: -6,
                }}
              >

                <div className="optimizationCard__number">
                  0{index + 1}
                </div>

                <div className="optimizationCard__icon">
                  <Icon size={19} />
                </div>

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


      {/* =====================================================
          PLANTILLAS
      ===================================================== */}

      <section className="hosteleriaTemplates">

        <div className="sectionHeader">

          <div>

            <span className="solutionEyebrow">
              PLANTILLAS PARA HOSTELERÍA
            </span>

            <h2>
              Empieza con una
              <br />
              idea <span>que encaje contigo.</span>
            </h2>

          </div>

          <a
            href="/templates"
            className="textLink"
          >
            Ver todas las plantillas
            <ArrowRight size={16} />
          </a>

        </div>


        <div className="templatesCarousel">

          <div className="templatesCarousel__track">

            {[
              {
                image: "/web2.png",
                title: "Maison",
                type: "Restaurante",
              },
              {
                image: "/web3.png",
                title: "Noma",
                type: "Restaurante",
              },
              {
                image: "/web1.png",
                title: "Atelier",
                type: "Cafetería",
              },  
              {
                image: "/web2.png",
                title: "Aura",
                type: "Hotel",
              },
            ].map((template, index) => (

              <motion.a
                href="/templates"
                className="templateCard"
                key={template.title}
                whileHover={{
                  y: -10,
                }}
              >

                <div className="templateCard__image">

                  <img
                    src={template.image}
                    alt={template.title}
                  />

                  <span>
                    Ver plantilla
                    <ArrowRight size={14} />
                  </span>

                </div>

                <div className="templateCard__info">

                  <div>

                    <h3>
                      {template.title}
                    </h3>

                    <p>
                      {template.type}
                    </p>

                  </div>

                  <span>
                    0{index + 1}
                  </span>

                </div>

              </motion.a>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="hosteleriaBenefits">

        <div className="hosteleriaBenefits__image">

          <img
            src="/web1.png"
            alt="Negocio de hostelería"
          />

        </div>


        <div className="hosteleriaBenefits__content">

          <span className="solutionEyebrow">
            DISEÑADO PARA HOSTELERÍA
          </span>

          <h2>
            Haz que tu web
            <br />
            trabaje <span>por ti.</span>
          </h2>

          <p>
            Tu web puede convertirse en mucho más que una tarjeta
            de presentación. Puede responder preguntas, enseñar
            tu carta, generar reservas, mostrar tus servicios
            y ayudarte a captar nuevos clientes.
          </p>


          <div className="benefitList">

            <div>
              <Clock3 size={18} />

              <span>
                Menos tiempo respondiendo preguntas repetitivas
              </span>
            </div>

            <div>
              <Search size={18} />

              <span>
                Más facilidad para que nuevos clientes te encuentren
              </span>
            </div>

            <div>
              <Star size={18} />

              <span>
                Una imagen digital a la altura de tu negocio
              </span>
            </div>

            <div>
              <Zap size={18} />

              <span>
                Una experiencia rápida y sencilla
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="hosteleriaFAQ">

        <div className="sectionHeader sectionHeader--center">

          <span className="solutionEyebrow">
            PREGUNTAS FRECUENTES
          </span>

          <h2>
            Antes de empezar,
            <br />
            <span>resolvemos tus dudas.</span>
          </h2>

        </div>


        <div className="faqList">

          {faqs.map((faq, index) => (

            <details
              className="faqItem"
              key={faq.question}
            >

              <summary>

                <span>
                  0{index + 1}
                </span>

                <strong>
                  {faq.question}
                </strong>

                <ArrowRight size={17} />

              </summary>

              <div className="faqItem__answer">

                <p>
                  {faq.answer}
                </p>

              </div>

            </details>

          ))}

        </div>

      </section>


      {/* =====================================================
          RELATED
      ===================================================== */}

      <section className="hosteleriaRelated">

        <span className="solutionEyebrow">
          TAMBIÉN PUEDE INTERESARTE
        </span>

        <h2>
          Explora otras
          <br />
          soluciones <span>digitales.</span>
        </h2>

        <div className="relatedLinks">

          <a href="/servicios">
            Servicios
            <ArrowRight size={16} />
          </a>

          <a href="/precios">
            Planes y precios
            <ArrowRight size={16} />
          </a>

          <a href="/blog">
            Consejos para tu negocio
            <ArrowRight size={16} />
          </a>

          <a href="/templates">
            Explorar plantillas
            <ArrowRight size={16} />
          </a>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="hosteleriaCTA">

        <div className="hosteleriaCTA__glow"></div>

        <span className="solutionEyebrow">
          ¿PREPARAMOS TU PROYECTO?
        </span>

        <h2>
          Tu próximo cliente
          <br />
          puede estar
          <br />
          <span>visitando tu web.</span>
        </h2>

        <p>
          Cuéntanos qué tipo de negocio tienes y te ayudaremos
          a encontrar la solución que mejor encaje contigo.
        </p>

        <a
          href="/contacto"
          className="solutionButton solutionButton--primary"
        >
          Hablar con DELUMIS
          <ArrowRight size={17} />
        </a>

      </section>

    </motion.main>
  );
}

export default Hosteleria;