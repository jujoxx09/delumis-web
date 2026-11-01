import { useState } from "react";
import { Plus, ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import "./FAQ.css";

const faqs = [
  {
    number: "01",
    question: "¿Cuánto cuesta crear una página web?",
    answer:
      "El precio depende del tipo de proyecto, las funcionalidades que necesites y el nivel de personalización. En DELUMIS trabajamos con diferentes opciones para adaptarnos a cada negocio. Puedes consultar nuestros planes y, si necesitas algo más específico, solicitar un presupuesto personalizado.",
  },
  {
    number: "02",
    question: "¿Cuánto tiempo se tarda en crear una web?",
    answer:
      "Cada proyecto es diferente. Una página sencilla puede estar lista en pocos días, mientras que proyectos más completos como tiendas online, plataformas o aplicaciones web pueden necesitar más tiempo. Antes de comenzar te indicaremos una estimación según las características de tu proyecto.",
  },
  {
    number: "03",
    question: "¿La página web será personalizada?",
    answer:
      "Sí. Las plantillas que mostramos sirven como inspiración para ayudarte a encontrar un estilo que te guste, pero tu página se adapta a tu negocio, identidad visual, contenido, estructura y necesidades. Nuestro objetivo es que tu web tenga personalidad propia.",
  },
  {
    number: "04",
    question: "¿Tengo que saber de programación?",
    answer:
      "No. Nosotros nos encargamos de la parte técnica. Te acompañaremos durante todo el proceso para definir la estructura, el diseño, los contenidos y las funcionalidades que necesita tu negocio.",
  },
  {
    number: "05",
    question: "¿El dominio, hosting y SSL están incluidos?",
    answer:
      "Sí. En nuestros proyectos incluimos los elementos necesarios para que tu página pueda estar online: dominio, hosting y certificado SSL, según las condiciones del plan contratado.",
  },
  {
    number: "06",
    question: "¿Podré modificar mi página después?",
    answer:
      "Sí. Dependiendo del tipo de proyecto, podemos crear sistemas que te permitan gestionar determinados contenidos de forma sencilla. También podemos encargarnos nosotros de las modificaciones y mantenimiento que necesites.",
  },
  {
    number: "07",
    question: "¿Mi página funcionará en móvil?",
    answer:
      "Sí. Todas nuestras webs se desarrollan teniendo en cuenta diferentes tamaños de pantalla. El diseño se adapta a móviles, tablets y ordenadores para ofrecer una buena experiencia independientemente del dispositivo.",
  },
  {
    number: "08",
    question: "¿Podéis ayudarme con el SEO?",
    answer:
      "Sí. Podemos trabajar aspectos de SEO y optimización para ayudarte a mejorar la visibilidad de tu negocio en buscadores. También podemos desarrollar estrategias específicas de SEO local y posicionamiento.",
  },
  {
    number: "09",
    question: "¿Qué pasa si ya tengo una página web?",
    answer:
      "Podemos analizar tu situación actual y plantear una mejora, rediseño o nueva página si es necesario. No siempre hace falta empezar desde cero; estudiaremos qué opción tiene más sentido para tu negocio.",
  },
  {
    number: "10",
    question: "¿Me ayudáis durante todo el proceso?",
    answer:
      "Sí. Esta es una de las partes más importantes de nuestro servicio. Te acompañamos desde la elección del tipo de web y la definición de la estructura hasta el lanzamiento y las mejoras posteriores.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">

      <div className="faq__container">

        {/* CABECERA */}
        <div className="faq__top">

          <div className="faq__heading">

            <span className="faq__eyebrow">
              PREGUNTAS FRECUENTES
            </span>

            <h2>
              Todo claro.
              <br />
              <span>Sin preguntas pendientes.</span>
            </h2>

          </div>

          <div className="faq__intro">

            <p>
              Sabemos que crear una página web puede
              generar muchas dudas. Aquí respondemos
              algunas de las preguntas que más nos hacen.
            </p>

            <NavLink
              to="/contacto"
              className="faq__contact"
            >
              ¿Tienes otra pregunta?

              <ArrowUpRight size={16} />

            </NavLink>

          </div>

        </div>


        {/* FAQ */}

        <div className="faq__content">

          <div className="faq__list">

            {faqs.map((faq, index) => {

              const isOpen = activeIndex === index;

              return (
                <div
                  className={`faq__item ${
                    isOpen ? "is-open" : ""
                  }`}
                  key={faq.number}
                >

                  <button
                    className="faq__question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >

                    <span className="faq__number">
                      {faq.number}
                    </span>

                    <span className="faq__question-text">
                      {faq.question}
                    </span>

                    <span className="faq__icon">
                      <Plus size={18} />
                    </span>

                  </button>


                  <div className="faq__answer-wrapper">

                    <div className="faq__answer">
                      {faq.answer}
                    </div>

                  </div>

                </div>
              );
            })}

          </div>


          {/* BLOQUE LATERAL */}

          <div className="faq__side">

            <div className="faq__side-glow"></div>

            <span className="faq__side-number">
              10+
            </span>

            <h3>
              Preguntas,
              <br />
              <span>una misma idea.</span>
            </h3>

            <p>
              Queremos que entiendas cada parte del
              proceso antes de empezar. Tú decides
              qué necesitas y nosotros nos encargamos
              de hacerlo realidad.
            </p>

            <div className="faq__side-line"></div>

            <span className="faq__side-label">
              DELUMIS / WEB EXPERIENCE
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FAQ;