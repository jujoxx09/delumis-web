import { motion } from "framer-motion";
import React from "react";
import {
  Check,
  ArrowUpRight,
  Sparkles,
  Zap,
  Code2,
  Globe,
  ShoppingCart,
  Search,
  ShieldCheck,
  Smartphone,
  Palette,
  Headphones,
  Minus,
} from "lucide-react";

import FAQ from "../components/FAQ/FAQ";
import ContactCTA from "../components/ContactCTA/ContactCTA";

import "./PricingPage.css";


const plans = [
  {
    id: "starter",
    number: "01",
    name: "Starter",
    subtitle: "Para empezar a estar online",
    description:
      "Una solución sencilla y profesional para negocios que necesitan una presencia online clara y efectiva.",
    price: "499€",
    priceText: "desde",
    featured: false,

    features: [
      "Landing Page",
      "Diseño personalizado",
      "Diseño Responsive",
      "Formulario de contacto",
      "SEO básico",
      "Dominio + hosting + SSL",
    ],
  },

  {
    id: "professional",
    number: "02",
    name: "Professional",
    subtitle: "Para negocios que quieren crecer",
    description:
      "Una web completa diseñada para transmitir confianza, posicionar tu negocio y convertir visitas en clientes.",
    price: "799€",
    priceText: "desde",
    featured: true,

    features: [
      "Web completa",
      "Hasta 5 páginas",
      "Diseño personalizado",
      "Responsive",
      "SEO básico",
      "Animaciones",
      "Optimización de rendimiento",
      "Dominio + hosting + SSL",
    ],
  },

  {
    id: "custom",
    number: "03",
    name: "Custom",
    subtitle: "Para proyectos sin límites",
    description:
      "Soluciones digitales avanzadas para negocios que necesitan funcionalidades específicas o procesos personalizados.",
    price: "1.500€+",
    priceText: "desde",
    featured: false,

    features: [
      "Software a medida",
      "Aplicaciones web",
      "Paneles de administración",
      "Funcionalidades avanzadas",
      "Integraciones API",
      "Bases de datos",
      "Automatizaciones",
      "Funcionalidades personalizadas",
      "Soporte prioritario",
      "asesoramiento durante el proyecto",
    ],
  },
];


const comparison = [
  {
    category: "PROYECTO",
    rows: [
      ["Landing Page", true, true, true],
      ["Web corporativa", false, true, true],
      ["Diseño personalizado", true, true, true],
      ["Responsive", true, true, true],
    ],
  },
  {
    category: "DISEÑO & EXPERIENCIA",
    rows: [
      ["Diseño adaptado a tu marca", true, true, true],
      ["Animaciones", false, true, true],
      ["Microinteracciones", false, true, true],
      ["UX personalizada", false, true, true],
    ],
  },
  {
    category: "SEO & RENDIMIENTO",
    rows: [
      ["SEO básico", true, true, true],
      ["Optimización de velocidad", true, true, true],
      ["Estructura SEO avanzada", false, true, true],
      ["Optimización técnica avanzada", false, false, true],
    ],
  },
  {
    category: "FUNCIONALIDADES",
    rows: [
      ["Formularios", true, true, true],
      ["Integraciones externas", false, true, true],
      ["APIs", false, false, true],
      ["Panel de administración", false, false, true],
      ["Base de datos", false, false, true],
      ["Automatizaciones", false, false, true],
    ],
  },
  {
    category: "SOPORTE",
    rows: [
      ["Responsive", true, true, true],
      ["SSL", true, true, true],
      ["Soporte durante el proyecto", true, true, true],
      ["Soporte prioritario", false, false, true],
    ],
  },
];


const extras = [
  {
    icon: ShoppingCart,
    title: "eCommerce",
    text: "Añade una tienda online y convierte tu web en un canal de ventas.",
  },
  {
    icon: Code2,
    title: "Aplicación web",
    text: "Si necesitas usuarios, paneles, bases de datos o funcionalidades avanzadas.",
  },
  {
    icon: Search,
    title: "SEO avanzado",
    text: "Trabajamos la estructura y optimización para mejorar tu visibilidad.",
  },
  {
    icon: Palette,
    title: "Diseño avanzado",
    text: "Experiencias visuales más elaboradas, animaciones y microinteracciones.",
  },
];


function PricingPage() {
  return (
    <motion.main
      className="pricingPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="pricingPage__hero">

        <div className="pricingPage__hero-grid"></div>

        <div className="pricingPage__hero-glow pricingPage__hero-glow--one"></div>

        <div className="pricingPage__hero-glow pricingPage__hero-glow--two"></div>

        <div className="pricingPage__hero-content">

          <span className="pricingPage__eyebrow">
            PRECIOS DELUMIS
          </span>

          <h1>
            Tu web.
            <br />
            Tu proyecto.
            <br />
            <span>Tu inversión.</span>
          </h1>

          <p>
            Soluciones digitales diseñadas para cada etapa de tu negocio.
            Elige un punto de partida y nosotros nos encargamos de convertir
            tu idea en una experiencia digital.
          </p>

          <div className="pricingPage__hero-note">
            <span></span>
            Todos los proyectos son personalizados
          </div>

        </div>

        <div className="pricingPage__hero-side">
          <span>01</span>
          <div></div>
          <span>PRICING</span>
        </div>

      </section>


      {/* =====================================================
          PLANES
      ===================================================== */}

      <section className="pricingPage__plans">

        <div className="pricingPage__section-header">

          <div>
            <span className="pricingPage__eyebrow">
              ELIGE TU PUNTO DE PARTIDA
            </span>

            <h2>
              Planes pensados para
              <span> diferentes objetivos.</span>
            </h2>
          </div>

          <p>
            No todas las empresas necesitan lo mismo.
            Por eso creamos diferentes niveles de proyecto.
          </p>

        </div>


        <div className="pricingPage__cards">

          {plans.map((plan, index) => (

            <motion.article
              className={`pricingCard ${
                plan.featured
                  ? "pricingCard--featured"
                  : ""
              }`}
              key={plan.id}
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
                amount: 0.2,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
            >

              {plan.featured && (
                <div className="pricingCard__popular">
                  <Sparkles size={12} />
                  MÁS POPULAR
                </div>
              )}

              <div className="pricingCard__top">

                <span className="pricingCard__number">
                  {plan.number}
                </span>

                <div className="pricingCard__icon">

                  {plan.id === "starter" && (
                    <Zap size={20} />
                  )}

                  {plan.id === "professional" && (
                    <Globe size={20} />
                  )}

                  {plan.id === "custom" && (
                    <Code2 size={20} />
                  )}

                </div>

                <h3>
                  {plan.name}
                </h3>

                <span className="pricingCard__subtitle">
                  {plan.subtitle}
                </span>

              </div>


              <p className="pricingCard__description">
                {plan.description}
              </p>


              <div className="pricingCard__price">

                <small>
                  {plan.priceText}
                </small>

                <strong>
                  {plan.price}
                </strong>

              </div>


              <div className="pricingCard__divider"></div>


              <ul className="pricingCard__features">

                {plan.features.map((feature) => (

                  <li key={feature}>

                    <Check size={14} />

                    <span>
                      {feature}
                    </span>

                  </li>

                ))}

              </ul>


              <a
                href="/contacto"
                className="pricingCard__button"
              >
                {plan.featured
                  ? "Quiero este plan"
                  : "Empezar proyecto"
                }

                <ArrowUpRight size={17} />

              </a>

            </motion.article>

          ))}

        </div>


        <div className="pricingPage__custom-note">

          <div className="pricingPage__custom-note-icon">
            <Sparkles size={18} />
          </div>

          <div>

            <strong>
              ¿Tu proyecto no encaja en ningún plan?
            </strong>

            <p>
              No hay problema. Creamos presupuestos personalizados
              según las necesidades reales de cada proyecto.
            </p>

          </div>

          <a href="/contacto">
            Cuéntanos tu idea
            <ArrowUpRight size={16} />
          </a>

        </div>

      </section>


      {/* =====================================================
          COMPARATIVA
      ===================================================== */}

      <section className="pricingPage__comparison">

        <div className="pricingPage__section-header">

          <div>

            <span className="pricingPage__eyebrow">
              COMPARA
            </span>

            <h2>
              ¿Qué incluye
              <span> cada plan?</span>
            </h2>

          </div>

          <p>
            Compara las características principales y descubre
            qué opción encaja mejor con tu proyecto.
          </p>

        </div>


        <div className="pricingTable__wrapper">

          <table className="pricingTable">

            <thead>

              <tr>

                <th>
                  Características
                </th>

                <th>
                  <span>01</span>
                  Starter
                </th>

                <th className="pricingTable__featured">
                  <span>02</span>
                  Professional
                </th>

                <th>
                  <span>03</span>
                  Custom
                </th>

              </tr>

            </thead>


            <tbody>

              {comparison.map((group) => (

                <React.Fragment key={group.category}>

                  <tr className="pricingTable__category">

                    <td colSpan="4">
                      {group.category}
                    </td>

                  </tr>

                  {group.rows.map((row) => (

                    <tr key={row[0]}>

                      <td>
                        {row[0]}
                      </td>

                      {[row[1], row[2], row[3]].map(
                        (included, index) => (

                          <td
                            key={index}
                            className={
                              index === 1
                                ? "pricingTable__featured"
                                : ""
                            }
                          >

                            {included ? (
                              <Check
                                size={16}
                                className="pricingTable__check"
                              />
                            ) : (
                              <Minus
                                size={15}
                                className="pricingTable__minus"
                              />
                            )}

                          </td>

                        )
                      )}

                    </tr>

                  ))}

                </React.Fragment>

              ))}

            </tbody>

          </table>

        </div>

      </section>


      {/* =====================================================
          EXTRAS
      ===================================================== */}

      <section className="pricingPage__extras">

        <div className="pricingPage__extras-inner">

          <div className="pricingPage__extras-heading">

            <span className="pricingPage__eyebrow">
              PERSONALIZA TU PROYECTO
            </span>

            <h2>
              ¿Necesitas
              <span> algo más?</span>
            </h2>

            <p>
              Puedes ampliar tu proyecto con funcionalidades
              y servicios adicionales.
            </p>

          </div>


          <div className="pricingPage__extras-grid">

            {extras.map((extra, index) => {

              const Icon = extra.icon;

              return (
                <motion.div
                  className="pricingPage__extra"
                  key={extra.title}
                  whileHover={{
                    y: -5,
                  }}
                >

                  <div className="pricingPage__extra-icon">
                    <Icon size={20} />
                  </div>

                  <span>
                    0{index + 1}
                  </span>

                  <h3>
                    {extra.title}
                  </h3>

                  <p>
                    {extra.text}
                  </p>

                </motion.div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          INFORMACIÓN SOBRE PRECIO
      ===================================================== */}

      <section className="pricingPage__clarity">

        <div className="pricingPage__clarity-inner">

          <div className="pricingPage__clarity-number">
            04
          </div>

          <div>

            <span className="pricingPage__eyebrow">
              SIN SORPRESAS
            </span>

            <h2>
              El precio se define
              <span> contigo.</span>
            </h2>

            <p>
              Los precios mostrados son orientativos y parten de una
              base según el tipo de proyecto. Antes de comenzar,
              analizamos tus necesidades y te enviamos una propuesta
              clara con lo que incluye tu proyecto.
            </p>

            <div className="pricingPage__clarity-points">

              <div>
                <Check size={15} />
                Presupuesto personalizado
              </div>

              <div>
                <Check size={15} />
                Sin costes ocultos
              </div>

              <div>
                <Check size={15} />
                Te explicamos cada parte
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <FAQ />


      {/* =====================================================
          CTA
      ===================================================== */}

      <ContactCTA />

    </motion.main>
  );
}


export default PricingPage;