import { ArrowUpRight, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";
import "./ContactCTA.css";

function FinalCTA() {
  return (
    <section className="final-cta">

      {/* BACKGROUND EFFECTS */}
      <div className="final-cta__grid"></div>

      <div className="final-cta__glow final-cta__glow--one"></div>
      <div className="final-cta__glow final-cta__glow--two"></div>


      <div className="final-cta__container">

        {/* TOP LABEL */}
        <div className="final-cta__label">
          <span className="final-cta__label-dot"></span>

          <span>
            TU PRÓXIMO PROYECTO
          </span>

          <Sparkles size={13} />
        </div>


        {/* MAIN CONTENT */}
        <div className="final-cta__content">

          <div className="final-cta__heading">

            <h2>
              ¿Creamos algo
              <br />
              <span>increíble juntos?</span>
            </h2>

          </div>


          <div className="final-cta__description">

            <p>
              Tu negocio merece algo más que una página web.
              Creamos experiencias digitales únicas,
              pensadas para tu marca y para las personas
              que la visitan.
            </p>

            <NavLink
              to="/contacto"
              className="final-cta__button"
            >
              <span>
                Empezar mi proyecto
              </span>

              <span className="final-cta__button-icon">
                <ArrowUpRight size={19} />
              </span>
            </NavLink>

          </div>

        </div>


        {/* BOTTOM */}
        <div className="final-cta__bottom">

          <span>
            DISEÑO
          </span>

          <span className="final-cta__line"></span>

          <span>
            DESARROLLO
          </span>

          <span className="final-cta__line"></span>

          <span>
            EXPERIENCIA
          </span>

          <span className="final-cta__line"></span>

          <span>
            DELUMIS
          </span>

        </div>

      </div>

    </section>
  );
}

export default FinalCTA;