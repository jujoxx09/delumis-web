import { useEffect, useRef } from "react";
import anime from "animejs";
import "./AnimeCard.css";

function AnimeCard() {
  const cardRef = useRef(null);

useEffect(() => {

  anime({
    targets: cardRef.current,

    opacity: [0, 1],

    translateY: [100, 0],

    scale: [0.7, 1],

    duration: 1400,

    easing: "easeOutExpo",
  });

  anime({
    targets: cardRef.current,

    translateY: [
      { value: -8, duration: 2000 },
      { value: 8, duration: 2000 },
    ],

    direction: "alternate",

    loop: true,

    easing: "easeInOutSine",

    delay: 1400,
  });

}, []);

  return (
    <div className="anime-card" ref={cardRef}>
      <h2>DELUMIS</h2>

      <p>
        Creamos experiencias digitales modernas
      </p>

      <button>
        Descubrir más
      </button>
    </div>
  );
}

export default AnimeCard;