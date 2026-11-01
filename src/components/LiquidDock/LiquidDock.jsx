import { useRef, useState, useEffect } from "react";
import anime from "animejs";
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaCog,
  FaHeart
} from "react-icons/fa";
import "./LiquidDock.css";

const items = [FaHome, FaUser, FaEnvelope, FaCog, FaHeart];

export default function LiquidDock() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef([]);
  const blobRef = useRef(null);

  const moveBlob = (index) => {
    const el = itemRefs.current[index];
    if (!el || !blobRef.current) return;

    const rect = el.getBoundingClientRect();
    const parentRect = el.parentElement.getBoundingClientRect();

    const x = rect.left - parentRect.left + rect.width / 2;

    anime({
      targets: blobRef.current,
      translateX: x,
      width: rect.width + 20,
      height: rect.height + 20,
      duration: 700,
      easing: "easeOutElastic(1, .6)"
    });
  };

  const animateIcon = (index) => {
    anime({
      targets: itemRefs.current[index],
      scale: [
        { value: 1, duration: 0 },
        { value: 1.4, duration: 300 },
        { value: 1, duration: 800 }
      ],
      translateY: [
        { value: 0, duration: 0 },
        { value: -12, duration: 300 },
        { value: 0, duration: 800 }
      ],
      easing: "easeOutElastic(1, .7)"
    });
  };

  const handleClick = (index) => {
    setActive(index);
    moveBlob(index);
    animateIcon(index);
  };

  useEffect(() => {
    moveBlob(0);
  }, []);

  return (
    <div className="dock-container">
      <div className="dock">
        <div ref={blobRef} className="blob" />

        {items.map((Icon, i) => (
          <button
            key={i}
            ref={(el) => (itemRefs.current[i] = el)}
            className={`dock-item ${active === i ? "active" : ""}`}
            onClick={() => handleClick(i)}
          >
            <Icon />
          </button>
        ))}
      </div>
    </div>
  );
}