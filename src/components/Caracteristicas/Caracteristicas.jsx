import "./Caracteristicas.css";
import CubeRoll from "../CubeRoll/CubeRoll";

function Caracteristicas() {
  const caracteristicas = [
    {
      numero: "01",
      texto: "Webs de alto impacto",
    },
    {
      numero: "02",
      texto: "Enfoque en conversión",
    },
    {
      numero: "03",
      texto: "Clientes reales en crecimiento",
    },
    {
      numero: "04",
      texto: "Diseño + estrategia",
    },
  ];

  return (
    <section className="caracteristicas" id="caracteristicas">
      <div className="caracteristicas-container">

        <div className="caracteristicas-header">
          <span className="caracteristicas-label">
            ¿POR QUÉ DELUMIS?
          </span>

          <h2>
            Diseñamos para que tu negocio
            <span> destaque.</span>
          </h2>

          <p>
            No hacemos webs bonitas sin más. Creamos experiencias digitales
            pensadas para atraer clientes y hacer crecer tu negocio.
          </p>
        </div>

        <div className="caracteristicas-grid">
          {caracteristicas.map((item) => (
            <article className="caracteristica-card" key={item.numero}>

              <span className="caracteristica-number">
                {item.numero}
              </span>

              <div className="caracteristica-title">
                <CubeRoll
                  text={item.texto}
                  font={{
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: "clamp(1.5rem, 2.2vw, 2.2rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                    textAlign: "left",
                  }}
                  color="#ffffff"
                  tag="h3"
                  direction="down"
                  stagger={0.06}
                  perspective={500}
                  sideOpacity={85}
                  transition={{
                    type: "tween",
                    duration: 1.8,
                    ease: "linear",
                  }}
                />
              </div>

              <div className="caracteristica-line" />

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Caracteristicas;