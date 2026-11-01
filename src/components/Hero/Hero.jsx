import { useCallback, useEffect, useRef, useState } from "react";
import "./Hero.css";

const slides = [
  {
    image: "/web1.png",
  },
  {
    image: "/web2.png",
  },
  {
    image: "/web3.png",
  },
];

function Hero() {
  const [active, setActive] = useState(0);
  const lockRef = useRef(false);

  const nextSlide = useCallback(() => {
    if (lockRef.current) return;

    lockRef.current = true;

    setActive((current) => (current + 1) % slides.length);

    setTimeout(() => {
      lockRef.current = false;
    }, 600);
  }, []);

  // Cambio automático
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="hero" id="inicio">

      {/* =====================================================
          FONDO TECNOLÓGICO
      ===================================================== */}

      <div className="hero__background">

        <div className="hero__grid"></div>

        <div className="hero__glow hero__glow--one"></div>

        <div className="hero__glow hero__glow--two"></div>

        <div className="hero__orbit hero__orbit--one"></div>

        <div className="hero__orbit hero__orbit--two"></div>

        <div className="hero__scanline"></div>

      </div>


      {/* =====================================================
          CONTENIDO
      ===================================================== */}

      <div className="hero__content">

        <div className="hero__eyebrow">
          <span className="hero__eyebrow-dot"></span>

          DESARROLLO WEB · DISEÑO · ESTRATEGIA
        </div>

        <h1>
          Creamos webs modernas
          <br />
          <span>que convierten visitas en clientes.</span>
        </h1>

        <p>
          Diseñamos y desarrollamos experiencias digitales
          personalizadas para que tu negocio destaque,
          conecte con sus clientes y crezca.
        </p>

        <div className="hero__buttons">

          <a
            href="/contacto"
            className="btn primary"
          >
            Solicitar presupuesto
          </a>

          <a
            href="/portfolio"
            className="btn secondary"
          >
            Ver trabajos
          </a>

        </div>

      </div>


      {/* =====================================================
          CARRUSEL
      ===================================================== */}

      <div className="hero__carousel">

        {/* Halo detrás de las webs */}
        <div className="hero__carousel-glow"></div>

        <div className="carousel__track">

          {slides.map((slide, index) => {

            let relative = index - active;

            if (relative > slides.length / 2) {
              relative -= slides.length;
            }

            if (relative < -slides.length / 2) {
              relative += slides.length;
            }

            const isActive = relative === 0;

            const visible = Math.abs(relative) <= 2;

            const scale = Math.max(
              0.4,
              1 - Math.abs(relative) * 0.16
            );

            const translateX = relative * 280;

            const translateZ =
              -Math.abs(relative) * 240;

            const rotateY =
              -relative * 12;

            const rotateZ =
              relative * 8;

            return (
              <div
                key={slide.image}
                className={`carousel__card ${
                  isActive
                    ? "carousel__card--active"
                    : ""
                }`}
                style={{
                  transform: `
                    translate(-50%, -50%)
                    translateX(${translateX}px)
                    translateZ(${translateZ}px)
                    rotateY(${rotateY}deg)
                    rotateZ(${rotateZ}deg)
                    scale(${scale})
                  `,

                  opacity: visible ? 1 : 0,

                  zIndex:
                    isActive
                      ? 10
                      : 5 - Math.abs(relative),
                }}
              >

                <img
                  src={slide.image}
                  alt={`Proyecto DELUMIS ${index + 1}`}
                />

                <div
                  className="carousel__overlay"
                  style={{
                    opacity: isActive ? 0 : 0.38,
                  }}
                />

              </div>
            );
          })}

        </div>


        {/* Indicadores */}

        <div className="hero__indicators">

          {slides.map((_, index) => (
            <span
              key={index}
              className={
                index === active
                  ? "active"
                  : ""
              }
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Hero;