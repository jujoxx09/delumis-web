import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaCommentDots,
  FaCamera,
  FaCog,
} from "react-icons/fa";

import "./MagicNavbar.css";

const items = [
  { icon: <FaHome />, label: "Inicio" },
  { icon: <FaUser />, label: "Perfil" },
  { icon: <FaCommentDots />, label: "Chat" },
  { icon: <FaCamera />, label: "Fotos" },
  { icon: <FaCog />, label: "Ajustes" },
];

function MagicNavbar() {
  const [active, setActive] = useState(0);

  return (
    <div className="magic-demo">
      <h2>Interfaces modernas e interactivas</h2>

      <div className="magic-navbar">

        <div
          className="magic-indicator"
          style={{
            transform: `translateX(${active * 84.2}px)`
          }}
        />

        {items.map((item, index) => (
          <button
            key={index}
            className={`magic-item ${
              active === index ? "active" : ""
            }`}
            onClick={() => setActive(index)}
          >
            {item.icon}

            <span>{item.label}</span>      
          </button>
        ))}
      </div>
    </div>
  );
}

export default MagicNavbar;