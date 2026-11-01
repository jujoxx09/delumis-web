import { useEffect, useRef } from "react";
import "./ParticlesBackground1.css";

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const centerX = () => width / 2;
    const centerY = () => height / 2;

    const RADIUS = Math.min(width, height) * 0.40;

    // 🌍 inclinación del eje (23.5° como la Tierra)
    const AXIS_TILT = 23.5 * (Math.PI / 180);

    const particles = Array.from({ length: 10000 }).map(() => {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      return {
        theta,
        phi,
        size: Math.random() * 1.6 + 0.4
      };
    });

    let rotation = 0;

    function project(x, y, z) {
      const scale = 400 / (400 + z);
      return {
        x: x * scale + centerX(),
        y: y * scale + centerY(),
        scale
      };
    }

    function rotateX(x, y, z, angle) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x,
        y: y * cos - z * sin,
        z: y * sin + z * cos
      };
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      rotation += 0.0025; // 🌍 velocidad de giro

      for (let p of particles) {
        // 🌐 esfera base
        let x =
          RADIUS *
          Math.sin(p.phi) *
          Math.cos(p.theta);

        let y =
          RADIUS *
          Math.sin(p.phi) *
          Math.sin(p.theta);

        let z =
          RADIUS *
          Math.cos(p.phi);

        // 🔥 rotación del planeta
        let rotated = rotateX(x, y, z, AXIS_TILT); // inclinación eje
        rotated = {
          x: rotated.x,
          y: rotated.y * Math.cos(rotation) - rotated.z * Math.sin(rotation),
          z: rotated.y * Math.sin(rotation) + rotated.z * Math.cos(rotation)
        };

        const proj = project(rotated.x, rotated.y, rotated.z);

        const depth = (proj.scale * 1.4);

        ctx.beginPath();
        ctx.arc(
          proj.x,
          proj.y,
          p.size * proj.scale,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(64, 224, 208,${Math.min(depth, 0.9)})`;
        ctx.fill();
      }
      requestAnimationFrame(animate);
    }

    animate();

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" />;
}