import { useEffect, useRef } from "react";
import anime from "animejs";

import "./FloatingCard.css";

function FloatingCard() {
  const cardRef = useRef(null);

  useEffect(() => {
    anime({
      targets: cardRef.current,

      opacity: [0, 1],

      translateY: [300, 0],

      rotateX: ["60deg", "0deg"],

      scale: [0.5, 1],

      duration: 1800,

      easing: "easeOutExpo",
    });

    anime({
      targets: cardRef.current,

      translateY: [
        { value: -12, duration: 2500 },
        { value: 12, duration: 2500 },
      ],

      direction: "alternate",

      loop: true,

      easing: "easeInOutSine",

      delay: 1800,
    });
  }, []);

  return (
    <div className="floating-wrapper">

      <div className="floating-glow"></div>

      <div className="floating-card" ref={cardRef}>
        <span className="floating-badge">
          PREMIUM EXPERIENCE
        </span>

        <h2>
          Diseño moderno que impacta
        </h2>

        <p>
          Creamos experiencias digitales con
          animaciones, microinteracciones y
          tecnología avanzada.
        </p>

        <button>
          Ver demostración
        </button>
      </div>

    </div>
  );
}

export default FloatingCard;