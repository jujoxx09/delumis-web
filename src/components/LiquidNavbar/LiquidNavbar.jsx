import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaCog,
} from "react-icons/fa";

import "./LiquidNavbar.css";

const items = [
  <FaHome />,
  <FaUser />,
  <FaBriefcase />,
  <FaEnvelope />,
  <FaCog />,
];

export default function LiquidNavbar() {
  const [active, setActive] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const itemWidth = 85;

  const handleClick = (index) => {
    setIsMoving(true);
    setActive(index);
  };

  return (
    <section className="liquid-demo">
      <h2>Indicador Líquido PRO</h2>

      <div className="liquid-nav">
        <motion.div
          className="liquid-bg"
          animate={{
            x: active * itemWidth + itemWidth / 2 - 30,

            // 💧 FORMA DINÁMICA
            scaleX: isMoving ? 1.8 : 1,
            scaleY: isMoving ? 0.8 : 1,

            borderRadius: isMoving ? "999px" : "50%",
          }}
          transition={{
            type: "spring",
            stiffness: 160,
            damping: 12,
          }}
          onAnimationComplete={() => {
            setIsMoving(false); // vuelve a círculo al llegar
          }}
        />

        {items.map((icon, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`nav-btn ${active === index ? "active" : ""}`}
          >
            {icon}
          </button>
        ))}
      </div>
    </section>
  );
}