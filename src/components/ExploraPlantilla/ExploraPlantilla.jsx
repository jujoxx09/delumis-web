import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import "./ExploraPlantilla.css";

const plantillas = [
  {
    id: 1,
    title: "Restaurante",
    category: "Hostelería",
    image: "/public/web1.png",
  },
  {
    id: 2,
    title: "Clínica Moderna",
    category: "Salud",
    image: "/public/web2.png",
  },
  {
    id: 3,
    title: "Agencia Digital",
    category: "Servicios",
    image: "/public/web3.png",
  },
  {
    id: 4,
    title: "Gimnasio",
    category: "Fitness",
    image: "/public/web1.png",
  },
  {
    id: 5,
    title: "Inmobiliaria",
    category: "Inmobiliaria",
    image: "/public/web2.png",
  },
];

function ExploraPlantilla() {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;

    const scrollAmount = 380;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="explora-plantilla" id="plantillas">
      <div className="explora-container">

        {/* CABECERA */}
        <div className="explora-header">
          <div className="explora-title">
            <span className="explora-label">
              Nuestras plantillas
            </span>

            <h2>
              Explora nuestras
              <span> plantillas</span>
            </h2>

            <p>
              Diseños modernos y profesionales preparados para
              llevar tu negocio al siguiente nivel.
            </p>
          </div>

          <div className="explora-actions">
            <motion.button
              className="explora-more"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => window.location.href = '/plantillas'}
            >
              Ver más
              <ArrowUpRight size={18} />
            </motion.button>

            <div className="explora-arrows">
              <button
                onClick={() => scrollCarousel("left")}
                aria-label="Anterior"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={() => scrollCarousel("right")}
                aria-label="Siguiente"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* CARRUSEL */}
        <div
          className="plantillas-carousel"
          ref={carouselRef}
        >
          {plantillas.map((plantilla, index) => (
            <motion.article
              className="plantilla-card"
              key={plantilla.id}
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
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <div className="plantilla-image">
                <img
                  src={plantilla.image}
                  alt={plantilla.title}
                  loading="lazy"
                />

                <div className="plantilla-overlay">
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Ver plantilla ${plantilla.title}`}
                  >
                    <ArrowUpRight size={20} />
                  </motion.button>
                </div>
              </div>

              <div className="plantilla-info">
                <div>
                  <span>{plantilla.category}</span>
                  <h3>{plantilla.title}</h3>
                </div>

                <div className="plantilla-number">
                  0{index + 1}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* INDICADOR */}
        <div className="explora-bottom">
          <span>
            Desliza para explorar
          </span>

          <div className="explora-line">
            <div />
          </div>
        </div>

      </div>
    </section>
  );
}

export default ExploraPlantilla;