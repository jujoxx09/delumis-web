import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Carrucel.css";

const fotos = [
  "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/612d1402-0ad9-4135-3bbc-a30a6a252b00/w=800",
  "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/6d2ad64a-102d-4eab-0efe-31479e34b500/w=800",
  "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/be854dd1-37aa-4fc7-f569-fdb948109300/w=800",
];

function Carrucel() {
  const controls = useAnimation();
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(async () => {
      await controls.start({
        rotateY: -90,
        transition: {
          duration: 1,
          ease: [0.44, 0, 0.56, 1],
        },
      });

      setIndice((prev) => (prev + 1) % fotos.length);

      controls.set({
        rotateY: 0,
      });
    }, 3000);

    return () => clearInterval(intervalo);
  }, [controls]);

  const siguiente = () => {
    controls
      .start({
        rotateY: -90,
        transition: {
          duration: 1,
          ease: [0.44, 0, 0.56, 1],
        },
      })
      .then(() => {
        setIndice((prev) => (prev + 1) % fotos.length);
        controls.set({ rotateY: 0 });
      });
  };

  return (
    <div className="carrucel-container">
      <div className="carrucel-scene">
        <motion.div
          className="carrucel-cube"
          animate={controls}
        >
          {/* Cara frontal */}
          <div className="carrucel-face carrucel-front">
            <img
              src={fotos[indice]}
              alt={`Imagen ${indice + 1}`}
            />
          </div>

          {/* Cara derecha */}
          <div className="carrucel-face carrucel-right">
            <img
              src={fotos[(indice + 1) % fotos.length]}
              alt={`Imagen ${(indice + 1) % fotos.length + 1}`}
            />
          </div>

          {/* Cara trasera */}
          <div className="carrucel-face carrucel-back">
            <img
              src={fotos[(indice + 2) % fotos.length]}
              alt={`Imagen ${(indice + 2) % fotos.length + 1}`}
            />
          </div>

          {/* Cara izquierda */}
          <div className="carrucel-face carrucel-left">
            <img
              src={fotos[(indice + 1) % fotos.length]}
              alt="Imagen"
            />
          </div>
        </motion.div>
      </div>

      {/* Indicadores */}
      <div className="carrucel-indicadores">
        {fotos.map((_, i) => (
          <button
            key={i}
            className={i === indice ? "activo" : ""}
            onClick={() => {
              setIndice(i);
              controls.set({ rotateY: 0 });
            }}
            aria-label={`Ir a imagen ${i + 1}`}
          />
        ))}
      </div>

      {/* Botón siguiente */}
      <button
        className="carrucel-next"
        onClick={siguiente}
        aria-label="Siguiente imagen"
      >
        →
      </button>
    </div>
  );
}

export default Carrucel;