import {
  ArrowUpRight,
  Check,
  Search,
  Sparkles,
} from "lucide-react";

function ComoConseguirClientesGoogle() {
  return (
    <>
      {/* =========================================
          INTRODUCCIÓN
      ========================================= */}

      <div id="introduccion">

        <p className="article-lead">
          Cuando una persona necesita un servicio,
          cada vez es más habitual que lo busque primero
          en Google. Una clínica, un restaurante, una
          peluquería, un fotógrafo, una inmobiliaria o
          cualquier negocio puede aprovechar este
          comportamiento para conseguir nuevos clientes.
        </p>

        <p>
          La clave no consiste simplemente en aparecer
          en Google. El verdadero objetivo es aparecer
          <strong>
            {" "}delante de las personas adecuadas,
          </strong>
          en el momento adecuado y conseguir que después
          de visitar tu web den el siguiente paso.
        </p>

      </div>


      {/* =========================================
          IDEA CLAVE
      ========================================= */}

      <div className="article-info-box">

        <Sparkles size={22} />

        <div>

          <strong>
            La idea clave
          </strong>

          <p>
            SEO + una buena web + una estrategia de
            conversión pueden transformar Google en
            un canal constante de nuevos clientes.
          </p>

        </div>

      </div>


      {/* =========================================
          SECCIÓN 1
      ========================================= */}

      <section id="web">

        <h2>
          1. Empieza por una página web preparada para Google
        </h2>

        <p>
          Antes de pensar en posicionamiento, anuncios o
          redes sociales, necesitas una base sólida.
          Tu página web es el lugar al que llegarán muchas
          de las personas que encuentren tu negocio.
        </p>

        <p>
          Una web profesional debería ser rápida,
          responsive, clara y estar estructurada de forma
          que Google pueda entender fácilmente qué ofrece
          tu negocio.
        </p>

        <h3>
          Una buena web debería tener:
        </h3>

        <ul className="article-check-list">

          <li>
            <Check size={17} />
            Diseño adaptado a móviles.
          </li>

          <li>
            <Check size={17} />
            Carga rápida.
          </li>

          <li>
            <Check size={17} />
            Títulos y textos correctamente estructurados.
          </li>

          <li>
            <Check size={17} />
            Información clara sobre tus servicios.
          </li>

          <li>
            <Check size={17} />
            Formularios o llamadas a la acción.
          </li>

          <li>
            <Check size={17} />
            Datos de contacto fáciles de encontrar.
          </li>

        </ul>

      </section>


      {/* =========================================
          SECCIÓN 2
      ========================================= */}

      <section id="google-business">

        <h2>
          2. Haz que tu negocio aparezca en Google Maps
        </h2>

        <p>
          Si tienes un negocio físico, el posicionamiento
          local puede ser especialmente importante.
        </p>

        <p>
          Cuando alguien busca algo como
          <em>
            {" "}“restaurante cerca de mí”
          </em>
          o
          <em>
            {" "}“peluquería en Sevilla”
          </em>,
          Google muestra resultados locales antes de
          muchas páginas tradicionales.
        </p>

        <p>
          Por eso es fundamental tener correctamente
          configurado tu perfil de negocio y mantener
          actualizada la información.
        </p>

        <h3>
          Comprueba especialmente:
        </h3>

        <ul>

          <li>
            Nombre del negocio.
          </li>

          <li>
            Dirección.
          </li>

          <li>
            Horarios.
          </li>

          <li>
            Teléfono.
          </li>

          <li>
            Página web.
          </li>

          <li>
            Fotografías.
          </li>

          <li>
            Reseñas de clientes.
          </li>

        </ul>

      </section>


      {/* =========================================
          SECCIÓN 3
      ========================================= */}

      <section id="keywords">

        <h2>
          3. Descubre qué buscan tus clientes
        </h2>

        <p>
          Uno de los errores más habituales al trabajar
          el SEO es escribir pensando únicamente en lo
          que queremos decir nosotros.
        </p>

        <p>
          Una estrategia mejor consiste en descubrir
          primero qué está buscando nuestro público.
        </p>

        <div className="keyword-example">

          <div className="keyword-title">

            <Search size={18} />

            Ejemplo

          </div>

          <div className="keyword-content">

            <div>

              <span>
                NEGOCIO
              </span>

              <strong>
                Fotógrafo de bodas
              </strong>

            </div>

            <ArrowUpRight />

            <div>

              <span>
                BÚSQUEDAS
              </span>

              <strong>
                fotógrafo bodas Sevilla
              </strong>

              <strong>
                fotógrafo boda precio
              </strong>

              <strong>
                fotógrafo bodas cerca de mí
              </strong>

            </div>

          </div>

        </div>

        <p>
          Estas búsquedas pueden ayudarte a descubrir
          qué páginas necesitas crear y qué información
          deberías incluir en ellas.
        </p>

      </section>


      {/* =========================================
          SECCIÓN 4
      ========================================= */}

      <section id="contenido">

        <h2>
          4. Crea contenido que responda preguntas reales
        </h2>

        <p>
          El blog puede convertirse en una herramienta
          muy potente para conseguir tráfico orgánico.
        </p>

        <p>
          Pero publicar artículos sin una estrategia
          normalmente no es suficiente. Lo interesante es
          crear contenido alrededor de las preguntas que
          tus potenciales clientes realizan antes de
          contratarte.
        </p>

        <h3>
          Por ejemplo:
        </h3>

        <ul>

          <li>
            ¿Cuánto cuesta una página web?
          </li>

          <li>
            ¿Cómo elegir un fotógrafo de bodas?
          </li>

          <li>
            ¿Qué debe tener una web profesional?
          </li>

          <li>
            ¿Cómo aparecer en Google Maps?
          </li>

          <li>
            ¿Cuánto tarda una página web en posicionarse?
          </li>

        </ul>

      </section>


      {/* =========================================
          SECCIÓN 5
      ========================================= */}

      <section id="seo-local">

        <h2>
          5. Potencia el SEO local
        </h2>

        <p>
          Para muchos pequeños negocios, no necesitas
          competir por búsquedas genéricas a nivel nacional.
        </p>

        <p>
          Puede ser mucho más rentable posicionarte para
          búsquedas relacionadas con tu ciudad o zona.
        </p>

        <div className="article-highlight">

          <span>
            EJEMPLO
          </span>

          <p>
            En lugar de intentar posicionarte únicamente
            para
            <strong>
              {" "}“diseño web”
            </strong>,
            puede tener mucho más sentido trabajar también
            términos como
            <strong>
              {" "}“diseño web Sevilla”
            </strong>
            si tu negocio trabaja principalmente en esa zona.
          </p>

        </div>

      </section>


      {/* =========================================
          SECCIÓN 6
      ========================================= */}

      <section id="conversion">

        <h2>
          6. Conseguir visitas no es suficiente
        </h2>

        <p>
          Este es probablemente uno de los puntos más
          importantes de toda la estrategia.
        </p>

        <p>
          Puedes conseguir miles de visitas y no conseguir
          prácticamente ningún cliente si tu web no está
          preparada para convertir.
        </p>

        <h3>
          Pregúntate:
        </h3>

        <ul className="article-check-list">

          <li>
            <Check size={17} />
            ¿El usuario entiende qué haces en pocos segundos?
          </li>

          <li>
            <Check size={17} />
            ¿Es fácil contactar contigo?
          </li>

          <li>
            <Check size={17} />
            ¿Muestras trabajos o casos reales?
          </li>

          <li>
            <Check size={17} />
            ¿Tienes opiniones de clientes?
          </li>

          <li>
            <Check size={17} />
            ¿Existe una llamada a la acción clara?
          </li>

        </ul>

      </section>


      {/* =========================================
          ESTRATEGIA COMPLETA
      ========================================= */}

      <section id="estrategia">

        <h2>
          La estrategia completa
        </h2>

        <p>
          Conseguir clientes desde Google no depende de
          una única acción. Es el resultado de conectar
          diferentes elementos.
        </p>

        <div className="strategy-flow">

          <div>

            <span>
              01
            </span>

            <strong>
              Google
            </strong>

            <small>
              Te encuentran
            </small>

          </div>

          <ArrowUpRight />

          <div>

            <span>
              02
            </span>

            <strong>
              Tu web
            </strong>

            <small>
              Te conocen
            </small>

          </div>

          <ArrowUpRight />

          <div>

            <span>
              03
            </span>

            <strong>
              Conversión
            </strong>

            <small>
              Te contactan
            </small>

          </div>

        </div>

        <p>
          Por eso, si quieres mejorar la captación de
          clientes desde Google, no pienses únicamente
          en SEO. Piensa en todo el recorrido que realiza
          una persona desde que descubre tu negocio hasta
          que decide contactar contigo.
        </p>

      </section>


      {/* =========================================
          CONCLUSIÓN
      ========================================= */}

      <div className="article-conclusion">

        <Sparkles size={22} />

        <div>

          <h3>
            En resumen
          </h3>

          <p>
            Una buena presencia en Google empieza por
            entender a tus clientes, crear una web
            preparada para convertir y construir una
            estrategia SEO que te permita aparecer delante
            de las personas que realmente necesitan tus
            servicios.
          </p>

        </div>

      </div>


      {/* =========================================
          IMAGEN FINAL
      ========================================= */}

      <figure className="article-image">

        <img
          src="/comoconseguirclientesfinal.jpg"
          alt="Resultados de una estrategia SEO"
          loading="lazy"
        />

      </figure>

    </>
  );
}

export default ComoConseguirClientesGoogle;
