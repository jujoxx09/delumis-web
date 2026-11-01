import { useEffect, useRef } from "react";
import "./ParticlesBackground4.css";

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // =========================
    // TEXTO → PUNTOS
    // =========================
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");

    tempCanvas.width = width;
    tempCanvas.height = height;

    tempCtx.fillStyle = "white";
    tempCtx.font = "bold 130px Arial";
    tempCtx.textAlign = "center";
    tempCtx.textBaseline = "middle";

    tempCtx.fillText("DELUMIS", width / 2, height / 2);

    const imageData = tempCtx.getImageData(0, 0, width, height);

    const points = [];

    for (let y = 0; y < height; y += 6) {
      for (let x = 0; x < width; x += 6) {
        const i = (y * width + x) * 4;

        if (imageData.data[i + 3] > 128) {
          points.push({ x, y });
        }
      }
    }

    // =========================
    // PARTICULAS
    // =========================
    const particles = points.map((p) => ({
      x: Math.random() * width,
      y: Math.random() * height,

      homeX: p.x,
      homeY: p.y,

      size: Math.random() * 1.8 + 0.8
    }));

    // =========================
    // ANIMACIÓN POR FASES
    // =========================
    let phase = 0; // 0 = disperso, 1 = formando

    setInterval(() => {
      phase = phase === 0 ? 1 : 0;
    }, 3000);

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {

        // 🎯 target según fase
        let targetX, targetY;
        let valor;

        if (phase === 1) {
          targetX = p.homeX;
          targetY = p.homeY;
           valor = 0.02;

        } else {
          valor = 0;
          const angle = Math.random() * Math.PI * 2;
          const radius = 200;

          targetX = p.homeX + Math.cos(angle) * radius;
          targetY = p.homeY + Math.sin(angle) * radius;
        }

        // 💡 EASING SUAVE (clave del look premium)
        p.x += (targetX - p.x) *  (0.015 + valor);
        p.y += (targetY - p.y) *  (0.015 + valor);

        // 🌟 GLOW NEÓN
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        ctx.fillStyle = "#00f7ff";
        ctx.shadowBlur = 18;
        ctx.shadowColor = "#00ffd0";
        ctx.fill();
      }

      requestAnimationFrame(animate);
    }

    animate();

    // =========================
    // RESIZE
    // =========================
    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);

  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" />;
}