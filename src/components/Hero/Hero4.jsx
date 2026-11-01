import { useCallback, useEffect, useRef, useState } from "react";
import "./Hero.css";

const slides = [
  {
    image: "/web1.png",
    background: "linear-gradient(0deg, #ae8e00, #0108d4)",
  },
  {
    image: "/web2.png",
    background: "linear-gradient(0deg, #00afb2, #0108d4)",
  },
  {
    image: "/web3.png",
    background: "linear-gradient(0deg, #c103037d, #0108d4)",
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
    <section
      className="hero"
      id="inicio"
      style={{
        "--hero-bg": slides[active].background,
      }}
    >
      <div className="hero__background" />

      <div className="hero__content">
        <h1>
          Creamos webs modernas <br />
          que convierten visitas en clientes
        </h1>

        <p>
          DELUMIS es un estudio de desarrollo web especializado en
          experiencias digitales, diseño moderno y alto rendimiento.
        </p>

        <div className="hero__buttons">
          <a href="/contacto" className="btn primary">
            Solicitar presupuesto
          </a>

          <a href="/portfolio" className="btn secondary">
            Ver trabajos
          </a>
        </div>
      </div>

      <div className="hero__carousel">
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
            const translateZ = -Math.abs(relative) * 240;
            const rotateY = -relative * 12;
            const rotateZ = relative * 8;

            return (
              <div
                key={slide.image}
                className="carousel__card"
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
                  zIndex: isActive ? 10 : 5 - Math.abs(relative),
                }}
              >
                <img
                  src={slide.image}
                  alt={`Proyecto DELUMIS ${index + 1}`}
                />

                <div
                  className="carousel__overlay"
                  style={{
                    opacity: isActive ? 0 : 0.4,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;