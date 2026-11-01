import { FaArrowRight } from "react-icons/fa";
import "./Prueba.css";

function Prueba() {
  return (
    <section className="prueba">

      {/* CONTENIDO FUERA DE LA IMAGEN */}
      <div className="prueba__content">

        <h2 className="prueba__title">
          Prueba de ventana integrada
        </h2>

        <p className="prueba__subtitle">
          Diseños modernos y fluidos adaptados a la identidad visual de tu marca.
        </p>

        <button className="prueba__button">
          <span>Ver más</span>
          <FaArrowRight className="prueba__arrow" />
        </button>

      </div>

      {/* IMAGEN INDEPENDIENTE */}
      <div className="prueba__image-container">
        <img
          src="/prueba-ventana.png"
          alt="Ejemplo de diseño web"
          className="prueba__image"
        />
      </div>

    </section>
  );
}

export default Prueba;