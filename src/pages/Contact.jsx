import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    project: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí podrás conectar posteriormente el formulario
    // con Formspree, Resend, Firebase, tu backend, etc.
    console.log("Formulario enviado:", formData);
  };

  return (
    <motion.main
      className="contactPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contactPage__hero">

        <div className="contactPage__grid-bg"></div>

        <div className="contactPage__glow contactPage__glow--one"></div>
        <div className="contactPage__glow contactPage__glow--two"></div>

        <div className="contactPage__hero-inner">

          <div className="contactPage__hero-main">

            <span className="contactPage__eyebrow">
              HABLEMOS
            </span>

            <h1>
              Tu próxima
              <br />
              <span>web empieza</span>
              <br />
              aquí.
            </h1>

            <p>
              Cuéntanos qué tienes en mente, qué necesita tu negocio
              y qué quieres conseguir. Nosotros te ayudaremos a
              encontrar la solución adecuada.
            </p>

            <div className="contactPage__hero-status">
              <span></span>
              Estamos listos para escuchar tu proyecto
            </div>

          </div>


          <div className="contactPage__hero-side">

            <div className="contactPage__vertical-line"></div>

            <span>CONTACT</span>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT MAIN
      ===================================================== */}

      <section className="contactPage__main">

        <div className="contactPage__main-inner">

          {/* =================================================
              FORM
          ================================================= */}

          <div className="contactPage__form-wrapper">

            <div className="contactPage__section-label">

              <span>01</span>

              <p>
                CUÉNTANOS TU PROYECTO
              </p>

            </div>

            <div className="contactPage__form-heading">

              <h2>
                Vamos a convertir
                <span> tu idea en algo real.</span>
              </h2>

              <p>
                No necesitas tenerlo todo decidido.
                Explícanos tu situación y te ayudaremos
                a definir el camino.
              </p>

            </div>


            <form
              className="contactPage__form"
              onSubmit={handleSubmit}
            >

              <div className="contactPage__form-row">

                <div className="contactField">
                  <label htmlFor="name">
                    Nombre
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>


                <div className="contactField">
                  <label htmlFor="company">
                    Empresa
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Nombre de tu negocio"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

              </div>


              <div className="contactPage__form-row">

                <div className="contactField">
                  <label htmlFor="email">
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>


                <div className="contactField">
                  <label htmlFor="phone">
                    Teléfono
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+34 600 000 000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

              </div>


              <div className="contactPage__form-row">

                <div className="contactField">

                  <label htmlFor="project">
                    ¿Qué necesitas?
                  </label>

                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Selecciona una opción
                    </option>

                    <option value="landing">
                      Landing Page
                    </option>

                    <option value="web">
                      Página web
                    </option>

                    <option value="ecommerce">
                      Tienda online / eCommerce
                    </option>

                    <option value="app">
                      Aplicación web
                    </option>

                    <option value="redesign">
                      Mejorar mi web actual
                    </option>

                    <option value="custom">
                      Proyecto personalizado
                    </option>

                    <option value="unknown">
                      No estoy seguro
                    </option>

                  </select>

                </div>


                <div className="contactField">

                  <label htmlFor="budget">
                    Presupuesto aproximado
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >

                    <option value="">
                      Prefiero hablarlo
                    </option>

                    <option value="300-800">
                      300€ — 800€
                    </option>

                    <option value="800-1500">
                      800€ — 1.500€
                    </option>

                    <option value="1500-3000">
                      1.500€ — 3.000€
                    </option>

                    <option value="3000+">
                      Más de 3.000€
                    </option>

                  </select>

                </div>

              </div>


              <div className="contactField">

                <label htmlFor="message">
                  Cuéntanos tu proyecto
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="¿Qué hace tu negocio? ¿Qué necesitas? ¿Qué te gustaría conseguir?"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                />

              </div>


              <div className="contactPage__form-bottom">

                <p>
                  Al enviar este formulario no estás
                  adquiriendo ningún compromiso.
                </p>

                <button
                  type="submit"
                  className="contactPage__submit"
                >

                  <span>
                    Enviar proyecto
                  </span>

                  <Send size={16} />

                </button>

              </div>

            </form>

          </div>


          {/* =================================================
              DIRECT CONTACT
          ================================================= */}

          <aside className="contactPage__aside">

            <div className="contactPage__aside-card">

              <div className="contactPage__aside-top">

                <span className="contactPage__eyebrow">
                  CONTACTO DIRECTO
                </span>

                <Sparkles size={18} />

              </div>


              <h3>
                ¿Prefieres
                <span> hablar directamente?</span>
              </h3>

              <p>
                También puedes contactar con nosotros
                directamente. Resolveremos tus dudas
                y hablaremos sobre tu proyecto.
              </p>


              <div className="contactPage__direct-list">

                <a
                  href="https://wa.me/34XXXXXXXXX"
                  className="contactDirect"
                >

                  <div className="contactDirect__icon">
                    <MessageCircle size={18} />
                  </div>

                  <div>
                    <span>WhatsApp</span>
                    <strong>
                      Hablar ahora
                    </strong>
                  </div>

                  <ArrowUpRight size={16} />

                </a>


                <a
                  href="tel:+34XXXXXXXXX"
                  className="contactDirect"
                >

                  <div className="contactDirect__icon">
                    <Phone size={18} />
                  </div>

                  <div>
                    <span>Teléfono</span>
                    <strong>
                      Llamar directamente
                    </strong>
                  </div>

                  <ArrowUpRight size={16} />

                </a>


                <a
                  href="mailto:hola@delumis.com"
                  className="contactDirect"
                >

                  <div className="contactDirect__icon">
                    <Mail size={18} />
                  </div>

                  <div>
                    <span>Email</span>
                    <strong>
                      hola@delumis.com
                    </strong>
                  </div>

                  <ArrowUpRight size={16} />

                </a>

              </div>

            </div>


            {/* LOCATION */}

            <div className="contactPage__location">

              <div className="contactPage__location-icon">
                <MapPin size={18} />
              </div>

              <div>

                <span>
                  DÓNDE ESTAMOS
                </span>

                <h4>
                  Sevilla, España
                </h4>

                <p>
                  Trabajamos con negocios locales y
                  proyectos de cualquier parte.
                </p>

              </div>

            </div>


            {/* RESPONSE */}

            <div className="contactPage__response">

              <div className="contactPage__response-icon">
                <Clock3 size={17} />
              </div>

              <div>

                <strong>
                  Respondemos rápido.
                </strong>

                <p>
                  Intentaremos responder a tu solicitud
                  lo antes posible.
                </p>

              </div>

            </div>

          </aside>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="contactPage__process">

        <div className="contactPage__process-inner">

          <div className="contactPage__process-heading">

            <span className="contactPage__eyebrow">
              ¿Y DESPUÉS?
            </span>

            <h2>
              Así empieza
              <span> tu proyecto.</span>
            </h2>

          </div>


          <div className="contactPage__steps">

            {[
              {
                number: "01",
                title: "Nos cuentas tu idea",
                text: "Analizamos qué necesitas y qué quieres conseguir.",
              },
              {
                number: "02",
                title: "Te asesoramos",
                text: "Te proponemos la solución más adecuada para tu negocio.",
              },
              {
                number: "03",
                title: "Definimos el proyecto",
                text: "Concretamos estructura, diseño, funcionalidades y presupuesto.",
              },
              {
                number: "04",
                title: "Creamos tu web",
                text: "Diseñamos y desarrollamos una experiencia única y personalizada.",
              },
            ].map((step, index) => (

              <motion.div
                className="contactStep"
                key={step.number}
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
              >

                <span>
                  {step.number}
                </span>

                <div className="contactStep__line"></div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          TRUST
      ===================================================== */}

      <section className="contactPage__trust">

        <div className="contactPage__trust-inner">

          <div className="contactPage__trust-icon">
            <Check size={22} />
          </div>

          <div>

            <h3>
              No necesitas saber exactamente qué necesitas.
            </h3>

            <p>
              Si tienes una idea pero no sabes qué tipo de web,
              funcionalidades o estructura necesitas, cuéntanoslo.
              Te ayudaremos a encontrar el camino adecuado.
            </p>

          </div>

          <a href="#contact-form">
            Empezar
            <ArrowUpRight size={16} />
          </a>

        </div>

      </section>

    </motion.main>
  );
}

export default Contact;