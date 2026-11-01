import "./Hero2.css";

import { motion } from "framer-motion";

import { Globe, Smartphone, Rocket } from "lucide-react";

import ParticlesBackground from "../ParticlesBackground/ParticlesBackground2";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";

export default function Hero() {
  const slides = [
    {
      title: "Webs modernas y rápidas",
      text: "Diseño optimizado para conversión, rendimiento y experiencia de usuario."
    },
    {
      title: "Apps a medida",
      text: "Desarrollamos soluciones web y móviles adaptadas a tu negocio."
    },
    {
      title: "Marketing digital",
      text: "Aumenta tu visibilidad, clientes y presencia online con estrategias efectivas."
    }
  ];

  return (
    <section className="hero">

      <ParticlesBackground />

      <div className="hero-content">

        {/* TITULO FIJO (más estable que dentro del swiper) */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          DELUMIS
        </motion.h1>

        {/* SWIPER SOLO PARA MENSAJES */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="hero-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="hero-slide">
                <h2>{slide.title}</h2>
                <p>{slide.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* BOTONES */}
        <div className="hero-buttons">
          <button>Ver Proyectos</button>
          <button className="secondary">Contactar</button>
        </div>

        {/* ICONOS */}
        <div className="hero-icons">

          <div className="icon-card">
            <Globe size={40} />
            <span>Webs</span>
          </div>

          <div className="icon-card">
            <Smartphone size={40} />
            <span>Apps</span>
          </div>

          <div className="icon-card">
            <Rocket size={40} />
            <span>Marketing</span>
          </div>

        </div>

      </div>

    </section>
  );
}