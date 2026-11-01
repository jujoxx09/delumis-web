import { useRef } from "react";
import anime from "animejs";
import { FaHome, FaUser, FaCog, FaEnvelope } from "react-icons/fa";
import "./FluidIcons.css";

const icons = [FaHome, FaUser, FaCog, FaEnvelope];

export default function FluidIcons() {
  const refs = useRef([]);

  const handleEnter = (index) => {
    anime({
      targets: refs.current[index],
      scale: [
        { value: 1, duration: 0 },
        { value: 1.4, duration: 300 },
        { value: 1, duration: 800 }
      ],
      translateY: [
        { value: 0, duration: 0 },
        { value: -10, duration: 300, easing: "easeOutQuad" },
        { value: 0, duration: 800, easing: "easeOutElastic(1, .6)" }
      ],
      rotate: [
        { value: 0, duration: 0 },
        { value: 15, duration: 300 },
        { value: 0, duration: 800 }
      ],
      easing: "easeOutElastic(1, .8)"
    });
  };

  return (
    <div className="fluid-container">
      {icons.map((Icon, i) => (
        <div
          key={i}
          className="fluid-item"
          ref={(el) => (refs.current[i] = el)}
          onMouseEnter={() => handleEnter(i)}
        >
          <Icon />
        </div>
      ))}
    </div>
  );
}