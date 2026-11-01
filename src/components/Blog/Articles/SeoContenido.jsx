import {
  ArrowUpRight,
  Check,
  Search,
  Sparkles,
} from "lucide-react";

function SeoContenido() {
  return (
    <>
      {/* =========================================
          INTRODUCCIÓN
      ========================================= */}

      <div id="introduccion">

        <p className="article-lead">
          El SEO ha cambiado mucho en los últimos años.
          Ya no se trata simplemente de repetir palabras
          clave o publicar artículos constantemente. En 2026,
          posicionarse en Google requiere entender qué buscan
          las personas, ofrecer contenido realmente útil y
          construir una experiencia web de calidad.
        </p>

        <p>
          Para un negocio, esto significa que el SEO debe
          formar parte de una estrategia digital más amplia.
          Una buena página web, contenido útil, autoridad y
          una experiencia pensada para el usuario deben
          trabajar juntos.
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
            En 2026, el SEO no consiste en crear más contenido,
            sino en crear contenido mejor, más útil y conectado
            con las necesidades reales de tus clientes.
          </p>

        </div>

      </div>


      {/* =========================================
          SECCIÓN 1
      ========================================= */}

      <section id="intencion">

        <h2>
          1. La intención de búsqueda es más importante que nunca
        </h2>

        <p>
          Una de las bases de cualquier estrategia SEO es
          entender qué quiere conseguir una persona cuando
          realiza una búsqueda.
        </p>

        <p>
          No todas las búsquedas tienen la misma intención.
          Una persona que busca información todavía puede
          estar investigando, mientras que otra que busca
          un servicio concreto puede estar preparada para
          contactar con un negocio.
        </p>

        <div className="keyword-example">

          <div className="keyword-title">

            <Search size={18} />

            Ejemplo

          </div>

          <div className="keyword-content">

            <div>

              <span>
                BÚSQUEDA INFORMATIVA
              </span>

              <strong>
                cómo hacer una página web
              </strong>

            </div>

            <ArrowUpRight />

            <div>

              <span>
                BÚSQUEDA COMERCIAL
              </span>

              <strong>
                diseño web Sevilla
              </strong>

              <strong>
                empresa diseño web
              </strong>

            </div>

          </div>

        </div>

        <p>
          Por eso, antes de crear una página o un artículo,
          deberías preguntarte qué necesita realmente la
          persona que realiza esa búsqueda.
        </p>

      </section>


      {/* =========================================
          SECCIÓN 2
      ========================================= */}

      <section id="contenido-util">

        <h2>
          2. El contenido útil gana importancia
        </h2>

        <p>
          Crear contenido únicamente para intentar posicionar
          una palabra clave puede producir artículos que no
          aportan demasiado valor.
        </p>

        <p>
          En cambio, un contenido realmente útil responde
          preguntas, resuelve problemas y ayuda al lector a
          tomar una decisión.
        </p>

        <h3>
          Un buen contenido debería:
        </h3>

        <ul className="article-check-list">

          <li>
            <Check size={17} />
            Resolver una necesidad concreta.
          </li>

          <li>
            <Check size={17} />
            Ser fácil de entender.
          </li>

          <li>
            <Check size={17} />
            Aportar información práctica.
          </li>

          <li>
            <Check size={17} />
            Utilizar ejemplos reales.
          </li>

          <li>
            <Check size={17} />
            Estar actualizado.
          </li>

          <li>
            <Check size={17} />
            Facilitar el siguiente paso al usuario.
          </li>

        </ul>

      </section>


      {/* =========================================
          SECCIÓN 3
      ========================================= */}

      <section id="experiencia">

        <h2>
          3. Tu web también forma parte del SEO
        </h2>

        <p>
          El posicionamiento no depende únicamente de los
          textos que publicas. La experiencia que encuentra
          el usuario al entrar en tu página también es
          fundamental.
        </p>

        <p>
          Una página lenta, difícil de utilizar o que no se
          adapta correctamente al móvil puede provocar que
          los usuarios abandonen antes de encontrar lo que
          necesitan.
        </p>

        <div className="article-highlight">

          <span>
            IMPORTANTE
          </span>

          <p>
            El objetivo no debería ser conseguir únicamente
            una posición en Google. El verdadero objetivo es
            conseguir que esa visita termine convirtiéndose
            en una oportunidad para tu negocio.
          </p>

        </div>

        <h3>
          Revisa especialmente:
        </h3>

        <ul className="article-check-list">

          <li>
            <Check size={17} />
            Velocidad de carga.
          </li>

          <li>
            <Check size={17} />
            Diseño responsive.
          </li>

          <li>
            <Check size={17} />
            Navegación sencilla.
          </li>

          <li>
            <Check size={17} />
            Legibilidad de los textos.
          </li>

          <li>
            <Check size={17} />
            Claridad de las llamadas a la acción.
          </li>

        </ul>

      </section>


      {/* =========================================
          SECCIÓN 4
      ========================================= */}

      <section id="palabras-clave">

        <h2>
          4. Las palabras clave siguen siendo importantes
        </h2>

        <p>
          Que el SEO haya evolucionado no significa que las
          palabras clave hayan dejado de importar.
        </p>

        <p>
          Siguen ayudando a Google a comprender de qué trata
          una página y permiten conocer mejor las necesidades
          de las personas que realizan determinadas búsquedas.
        </p>

        <p>
          La diferencia está en cómo las utilizamos.
          En lugar de intentar repetir una palabra clave
          constantemente, es mucho más interesante construir
          contenido alrededor de un tema completo.
        </p>

        <div className="keyword-example">

          <div className="keyword-title">

            <Search size={18} />

            Ejemplo

          </div>

          <div className="keyword-content">

            <div>

              <span>
                TEMA PRINCIPAL
              </span>

              <strong>
                Diseño web Sevilla
              </strong>

            </div>

            <ArrowUpRight />

            <div>

              <span>
                TEMAS RELACIONADOS
              </span>

              <strong>
                precio de una página web
              </strong>

              <strong>
                diseño web para empresas
              </strong>

              <strong>
                páginas web profesionales
              </strong>

            </div>

          </div>

        </div>

        <p>
          De esta manera puedes crear una estructura de
          contenidos mucho más completa y natural.
        </p>

      </section>


      {/* =========================================
          SECCIÓN 5
      ========================================= */}

      <section id="seo-local">

        <h2>
          5. El SEO local puede ser una gran oportunidad
        </h2>

        <p>
          Para muchos negocios pequeños y medianos, competir
          por términos genéricos a nivel nacional puede ser
          complicado.
        </p>

        <p>
          En estos casos, trabajar el posicionamiento local
          puede ser mucho más interesante.
        </p>

        <p>
          Si tienes un negocio en Sevilla, por ejemplo,
          conseguir visibilidad para búsquedas relacionadas
          con Sevilla puede acercarte mucho más a personas
          que realmente pueden convertirse en clientes.
        </p>

        <div className="article-highlight">

          <span>
            EJEMPLO
          </span>

          <p>
            Un negocio puede intentar posicionarse para
            <strong>
              {" "}“diseño web”
            </strong>
            o centrarse también en búsquedas como
            <strong>
              {" "}“diseño web Sevilla”
            </strong>
            y
            <strong>
              {" "}“empresa de diseño web en Sevilla”.
            </strong>
          </p>

        </div>

      </section>


      {/* =========================================
          SECCIÓN 6
      ========================================= */}

      <section id="autoridad">

        <h2>
          6. La autoridad y la confianza importan
        </h2>

        <p>
          Cuando una persona encuentra varias empresas en
          Google, no siempre elegirá automáticamente la que
          aparece primero.
        </p>

        <p>
          La confianza puede marcar la diferencia.
        </p>

        <h3>
          Algunos elementos que ayudan a transmitir confianza:
        </h3>

        <ul className="article-check-list">

          <li>
            <Check size={17} />
            Opiniones de clientes.
          </li>

          <li>
            <Check size={17} />
            Casos de éxito.
          </li>

          <li>
            <Check size={17} />
            Portfolio de trabajos.
          </li>

          <li>
            <Check size={17} />
            Información clara sobre la empresa.
          </li>

          <li>
            <Check size={17} />
            Datos de contacto visibles.
          </li>

          <li>
            <Check size={17} />
            Contenido que demuestre experiencia.
          </li>

        </ul>

      </section>


      {/* =========================================
          SECCIÓN 7
      ========================================= */}

      <section id="ia">

        <h2>
          7. La inteligencia artificial cambia la forma de crear contenido
        </h2>

        <p>
          Las herramientas de inteligencia artificial permiten
          investigar, organizar ideas y producir contenidos
          mucho más rápidamente.
        </p>

        <p>
          Sin embargo, utilizar inteligencia artificial no
          significa que cualquier contenido generado vaya a
          funcionar automáticamente.
        </p>

        <p>
          El contenido necesita contexto, experiencia,
          revisión y una verdadera intención de ayudar al
          lector.
        </p>

        <div className="article-info-box">

          <Sparkles size={22} />

          <div>

            <strong>
              Utiliza la IA como herramienta
            </strong>

            <p>
              La inteligencia artificial puede ayudarte a
              investigar y estructurar contenidos, pero el
              conocimiento real de tu negocio y de tus clientes
              sigue siendo fundamental.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          ESTRATEGIA COMPLETA
      ========================================= */}

      <section id="estrategia">

        <h2>
          La estrategia SEO que debería seguir un negocio
        </h2>

        <p>
          Una estrategia SEO efectiva en 2026 debería conectar
          diferentes elementos en lugar de centrarse en una
          única acción.
        </p>

        <div className="strategy-flow">

          <div>

            <span>
              01
            </span>

            <strong>
              Investigar
            </strong>

            <small>
              Entender qué buscan
            </small>

          </div>

          <ArrowUpRight />

          <div>

            <span>
              02
            </span>

            <strong>
              Crear
            </strong>

            <small>
              Resolver necesidades
            </small>

          </div>

          <ArrowUpRight />

          <div>

            <span>
              03
            </span>

            <strong>
              Optimizar
            </strong>

            <small>
              Mejorar la experiencia
            </small>

          </div>

          <ArrowUpRight />

          <div>

            <span>
              04
            </span>

            <strong>
              Convertir
            </strong>

            <small>
              Conseguir clientes
            </small>

          </div>

        </div>

        <p>
          El SEO debería formar parte de todo el recorrido
          digital de un cliente: desde que descubre tu negocio
          hasta que decide contactar contigo.
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
            El SEO en 2026 consiste en entender mejor a tus
            clientes, crear contenido útil, ofrecer una
            experiencia web excelente y construir una presencia
            digital que genere confianza.
          </p>

        </div>

      </div>


      {/* =========================================
          IMAGEN FINAL
      ========================================= */}

      <figure className="article-image">

        <img
          src="/web1.png"
          alt="Estrategia SEO y contenido digital"
          loading="lazy"
        />

        <figcaption>
          Una estrategia SEO efectiva conecta contenido,
          experiencia y conversión.
        </figcaption>

      </figure>

    </>
  );
}

export default SeoContenido;