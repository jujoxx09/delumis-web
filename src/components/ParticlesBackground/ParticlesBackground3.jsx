import { useEffect, useRef } from "react";
import "./ParticlesBackground2.css";

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // =========================
    // 1. CREAR TEXTO "DELUMIS"
    // =========================

    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");

    tempCanvas.width = width;
    tempCanvas.height = height;

    tempCtx.fillStyle = "white";
    tempCtx.font = "bold 120px Arial";
    tempCtx.textAlign = "center";
    tempCtx.textBaseline = "middle";

    tempCtx.fillText("DELUMIS", width / 2, height / 2);

    const imageData = tempCtx.getImageData(0, 0, width, height);

    const points = [];

    for (let y = 0; y < height; y += 6) {
      for (let x = 0; x < width; x += 6) {
        const index = (y * width + x) * 4;

        if (imageData.data[index + 3] > 128) {
          points.push({ x, y });
        }
      }
    }

    // =========================
    // 2. CREAR PARTICULAS
    // =========================

    const particles = points.map((p) => ({
      x: Math.random() * width,
      y: Math.random() * height,

      homeX: p.x,
      homeY: p.y,

      size: 2
    }));

    // =========================
    // 3. ANIMACIÓN
    // =========================

    let forming = true;

    setInterval(() => {
      forming = !forming;
    }, 5000);

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {

        const targetX = forming ? p.homeX : Math.random() * width;
        const targetY = forming ? p.homeY : Math.random() * height;

        p.x += (targetX - p.x) * 0.05;
        p.y += (targetY - p.y) * 0.05;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        ctx.fillStyle = "#00ffd0";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#00ffd0";
        ctx.fill();
      }

      requestAnimationFrame(animate);
    }

    animate();

    // =========================
    // 4. RESIZE
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