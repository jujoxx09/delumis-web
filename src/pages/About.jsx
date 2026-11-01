import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Compass,
  Layers3,
  Lightbulb,
  Palette,
  Rocket,
  Target,
  Users,
  Zap,
} from "lucide-react";

import "./About.css";

function About() {
  return (
    <motion.main
      className="aboutPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="aboutPage__hero">

        <div className="aboutPage__hero-grid"></div>

        <div className="aboutPage__hero-image">
          <img
            src="/web1.png"
            alt="Diseño y desarrollo web DELUMIS"
          />
        </div>

        <div className="aboutPage__hero-overlay"></div>

        <div className="aboutPage__hero-content">

          <span className="aboutPage__eyebrow">
            SOBRE DELUMIS
          </span>

          <h1>
            No hacemos
            <br />
            páginas web.
            <br />
            <span>Construimos experiencias.</span>
          </h1>

          <p>
            Somos un estudio digital que combina diseño, tecnología
            y estrategia para ayudar a los negocios a crecer en
            el mundo digital.
          </p>

          <div className="aboutPage__hero-bottom">

            <div className="aboutPage__scroll">
              <span></span>
              Descubre DELUMIS
            </div>

            <span className="aboutPage__hero-number">
              01 / 07
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO / VISION
      ===================================================== */}

      <section className="aboutPage__intro">

        <div className="aboutPage__intro-label">

          <span>01</span>

          <p>
            NUESTRA VISIÓN
          </p>

        </div>


        <div className="aboutPage__intro-content">

          <h2>
            Tu negocio puede ser
            <span> mucho más.</span>
          </h2>

          <p>
            Internet está lleno de páginas que simplemente están ahí.
            Nosotros creemos que una web debería hacer mucho más:
            explicar quién eres, transmitir confianza, diferenciarte
            y convertir visitantes en clientes.
          </p>

          <p>
            Por eso cada proyecto de DELUMIS comienza entendiendo
            el negocio que hay detrás de la pantalla.
          </p>

        </div>

      </section>


      {/* =====================================================
          IMAGE STORY
      ===================================================== */}

      <section className="aboutPage__story">

        <div className="aboutPage__story-image">

          <img
            src="/web2.png"
            alt="Equipo trabajando en un proyecto digital"
          />

          <div className="aboutPage__image-tag">
            <span>DELUMIS</span>
            <strong>01</strong>
          </div>

        </div>

        <div className="aboutPage__story-content">

          <span className="aboutPage__eyebrow">
            CÓMO EMPEZÓ TODO
          </span>

          <h2>
            Nació de una
            <span> necesidad.</span>
          </h2>

          <p>
            Nos encontramos con algo que se repetía constantemente:
            negocios con grandes productos y servicios tenían una
            presencia digital que no reflejaba realmente lo que
            ofrecían.
          </p>

          <p>
            Webs antiguas, experiencias difíciles de utilizar,
            diseños genéricos y páginas que no estaban pensadas
            para conseguir nuevos clientes.
          </p>

          <p>
            DELUMIS nace para cambiar esa situación.
          </p>

          <div className="aboutPage__story-line"></div>

          <span className="aboutPage__story-highlight">
            Diseño + Tecnología + Estrategia
          </span>

        </div>

      </section>


      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="aboutPage__philosophy">

        <div className="aboutPage__philosophy-heading">

          <span className="aboutPage__eyebrow">
            NUESTRA FILOSOFÍA
          </span>

          <h2>
            Tres cosas.
            <br />
            <span>Una misma dirección.</span>
          </h2>

        </div>


        <div className="aboutPage__philosophy-grid">

          <motion.article
            className="aboutPhilosophyCard"
            whileHover={{ y: -8 }}
          >

            <div className="aboutPhilosophyCard__top">

              <span>01</span>

              <Palette size={22} />

            </div>

            <h3>
              Diseño
            </h3>

            <p>
              Diseñamos interfaces que representan la personalidad
              de cada negocio y hacen que la primera impresión cuente.
            </p>

          </motion.article>


          <motion.article
            className="aboutPhilosophyCard"
            whileHover={{ y: -8 }}
          >

            <div className="aboutPhilosophyCard__top">

              <span>02</span>

              <Code2 size={22} />

            </div>

            <h3>
              Tecnología
            </h3>

            <p>
              Utilizamos tecnologías modernas para crear webs rápidas,
              responsive, optimizadas y preparadas para crecer.
            </p>

          </motion.article>


          <motion.article
            className="aboutPhilosophyCard"
            whileHover={{ y: -8 }}
          >

            <div className="aboutPhilosophyCard__top">

              <span>03</span>

              <Target size={22} />

            </div>

            <h3>
              Estrategia
            </h3>

            <p>
              Una web bonita no es suficiente. Cada decisión debe
              tener un objetivo y ayudar al negocio a conseguir resultados.
            </p>

          </motion.article>

        </div>

      </section>


      {/* =====================================================
          DIFFERENCE
      ===================================================== */}

      <section className="aboutPage__difference">

        <div className="aboutPage__difference-image">

          <img
            src="/web3.png"
            alt="Proceso de diseño web"
          />

        </div>


        <div className="aboutPage__difference-content">

          <span className="aboutPage__eyebrow">
            LO QUE NOS DIFERENCIA
          </span>

          <h2>
            No queremos que
            <span> parezca una web más.</span>
          </h2>

          <p>
            Internet ya está lleno de páginas prácticamente iguales.
            Nosotros buscamos que cuando alguien entre en tu web
            recuerde tu marca.
          </p>

          <div className="aboutPage__features">

            <div className="aboutFeature">

              <div>
                <Zap size={18} />
              </div>

              <section>
                <h3>
                  Hecho a medida
                </h3>

                <p>
                  No dependemos de una plantilla genérica para definir
                  la identidad de tu negocio.
                </p>
              </section>

            </div>


            <div className="aboutFeature">

              <div>
                <Users size={18} />
              </div>

              <section>
                <h3>
                  Cerca del cliente
                </h3>

                <p>
                  Trabajamos contigo durante todo el proceso para
                  entender exactamente lo que necesitas.
                </p>
              </section>

            </div>


            <div className="aboutFeature">

              <div>
                <Rocket size={18} />
              </div>

              <section>
                <h3>
                  Pensado para crecer
                </h3>

                <p>
                  Construimos soluciones que pueden evolucionar
                  junto a tu negocio.
                </p>
              </section>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="aboutPage__process">

        <div className="aboutPage__process-heading">

          <div>

            <span className="aboutPage__eyebrow">
              NUESTRA FORMA DE TRABAJAR
            </span>

            <h2>
              Tu proyecto.
              <br />
              <span>Nuestro compromiso.</span>
            </h2>

          </div>

          <p>
            No queremos que seas simplemente otro proyecto.
            Queremos entender tu negocio y construir algo
            que realmente te represente.
          </p>

        </div>


        <div className="aboutPage__process-list">

          {[
            {
              number: "01",
              icon: Compass,
              title: "Escuchamos",
              text: "Empezamos por ti. Entendemos tu negocio, tus clientes y tus objetivos.",
            },
            {
              number: "02",
              icon: Lightbulb,
              title: "Pensamos",
              text: "Definimos la estructura, experiencia y estrategia que necesita tu proyecto.",
            },
            {
              number: "03",
              icon: Layers3,
              title: "Construimos",
              text: "Diseñamos y desarrollamos una experiencia digital personalizada.",
            },
            {
              number: "04",
              icon: Rocket,
              title: "Lanzamos",
              text: "Probamos, optimizamos y ponemos tu proyecto online preparado para crecer.",
            },
          ].map((step, index) => {

            const Icon = step.icon;

            return (
              <motion.div
                className="aboutProcessStep"
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
                  amount: 0.2,
                }}
                transition={{
                  delay: index * 0.08,
                }}
              >

                <div className="aboutProcessStep__number">
                  {step.number}
                </div>

                <div className="aboutProcessStep__icon">
                  <Icon size={20} />
                </div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.text}
                </p>

              </motion.div>
            );

          })}

        </div>

      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="aboutPage__values">

        <div className="aboutPage__values-inner">

          <div className="aboutPage__values-title">

            <span className="aboutPage__eyebrow">
              NUESTROS VALORES
            </span>

            <h2>
              Lo que queremos
              <span> transmitir.</span>
            </h2>

          </div>


          <div className="aboutPage__values-grid">

            <div>
              <strong>
                01
              </strong>

              <h3>
                Claridad
              </h3>

              <p>
                Explicamos las cosas de forma sencilla.
                Sin tecnicismos innecesarios ni complicaciones.
              </p>
            </div>


            <div>
              <strong>
                02
              </strong>

              <h3>
                Creatividad
              </h3>

              <p>
                Buscamos soluciones diferentes que hagan que
                cada proyecto tenga su propia identidad.
              </p>
            </div>


            <div>
              <strong>
                03
              </strong>

              <h3>
                Calidad
              </h3>

              <p>
                Cuidamos los detalles, desde el primer píxel
                hasta la última línea de código.
              </p>
            </div>


            <div>
              <strong>
                04
              </strong>

              <h3>
                Evolución
              </h3>

              <p>
                El lanzamiento no es el final. Tu negocio cambia
                y tu presencia digital también debe poder hacerlo.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="aboutPage__cta">

        <div className="aboutPage__cta-glow"></div>

        <span className="aboutPage__eyebrow">
          ¿EMPEZAMOS?
        </span>

        <h2>
          Tu negocio tiene
          <br />
          una historia.
          <br />
          <span>Vamos a contarla.</span>
        </h2>

        <p>
          Cuéntanos qué tienes en mente y descubre cómo podemos
          convertirlo en una experiencia digital que represente
          realmente tu negocio.
        </p>

        <a
          href="/contacto"
          className="aboutPage__cta-button"
        >
          Hablemos de tu proyecto
          <ArrowUpRight size={17} />
        </a>

      </section>

    </motion.main>
  );
}

export default About;