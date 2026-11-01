import {
  ArrowUpRight,
  Check,
  AlertTriangle,
  Smartphone,
  MousePointerClick,
  Sparkles,
} from "lucide-react";

function ErroresPaginaWeb() {
  return (
    <>
      {/* =========================================
          INTRODUCCIÓN
      ========================================= */}

      <div id="introduccion">

        <p className="article-lead">
          Tu página web puede estar perdiendo clientes sin que
          te des cuenta. A veces no es necesario tener un gran
          problema técnico: pequeños errores de diseño,
          comunicación o experiencia pueden hacer que un
          visitante abandone tu web antes de contactar contigo.
        </p>

        <p>
          Una web debe hacer que el usuario entienda rápidamente
          qué ofreces, confíe en tu negocio y encuentre fácilmente
          el siguiente paso. Cuando alguna de estas piezas falla,
          puedes estar perdiendo oportunidades todos los días.
        </p>

      </div>


      {/* =========================================
          IDEA CLAVE
      ========================================= */}

      <div className="article-info-box">

        <AlertTriangle size={22} />

        <div>

          <strong>
            La idea clave
          </strong>

          <p>
            No siempre necesitas más visitas. Antes de invertir
            en conseguir tráfico, asegúrate de que tu web está
            preparada para convertir las visitas que ya tienes.
          </p>

        </div>

      </div>


      {/* =========================================
          ERROR 1
      ========================================= */}

      <section id="error-1">

        <h2>
          1. No queda claro qué hace tu negocio
        </h2>

        <p>
          Uno de los errores más importantes ocurre cuando una
          persona entra en una web y no entiende rápidamente
          qué ofrece el negocio.
        </p>

        <p>
          Frases demasiado genéricas como "Creamos soluciones
          para el futuro" pueden sonar bien, pero no explican
          realmente qué haces ni por qué debería interesarle
          al visitante.
        </p>

        <h3>
          Tu primera pantalla debería responder:
        </h3>

        <ul className="article-check-list">

          <li>
            <Check size={17} />
            Qué haces.
          </li>

          <li>
            <Check size={17} />
            Para quién lo haces.
          </li>

          <li>
            <Check size={17} />
            Qué beneficio obtiene el cliente.
          </li>

          <li>
            <Check size={17} />
            Qué puede hacer a continuación.
          </li>

        </ul>

      </section>


      {/* =========================================
          ERROR 2
      ========================================= */}

      <section id="error-2">

        <h2>
          2. Tu web está pensada para ordenador, no para móvil
        </h2>

        <p>
          Hoy una gran parte de las visitas pueden llegar desde
          dispositivos móviles. Si tu web se ve mal en un
          teléfono, estás creando una barrera enorme entre tu
          negocio y tus potenciales clientes.
        </p>

        <div className="keyword-example">

          <div className="keyword-title">

            <Smartphone size={18} />

            Comprueba tu versión móvil

          </div>

          <div className="keyword-content">

            <div>

              <span>
                PROBLEMA
              </span>

              <strong>
                Botones pequeños
              </strong>

              <strong>
                Texto difícil de leer
              </strong>

              <strong>
                Menú complicado
              </strong>

            </div>

            <ArrowUpRight />

            <div>

              <span>
                SOLUCIÓN
              </span>

              <strong>
                Navegación sencilla
              </strong>

              <strong>
                Botones accesibles
              </strong>

              <strong>
                Diseño responsive
              </strong>

            </div>

          </div>

        </div>

        <p>
          No basta con que el contenido "quepa" en la pantalla.
          La experiencia debe estar pensada específicamente
          para usuarios que navegan desde el móvil.
        </p>

      </section>


      {/* =========================================
          ERROR 3
      ========================================= */}

      <section id="error-3">

        <h2>
          3. No tienes una llamada a la acción clara
        </h2>

        <p>
          Imagina que alguien entra en tu web, lee tus servicios,
          ve tus proyectos y decide que le interesa trabajar
          contigo.
        </p>

        <p>
          ¿Qué debería hacer después?
        </p>

        <p>
          Si la respuesta no es evidente, probablemente estás
          perdiendo oportunidades.
        </p>

        <h3>
          Algunas llamadas a la acción efectivas:
        </h3>

        <ul>

          <li>
            Solicitar presupuesto.
          </li>

          <li>
            Reservar una cita.
          </li>

          <li>
            Hablar con nosotros.
          </li>

          <li>
            Contactar por WhatsApp.
          </li>

          <li>
            Ver nuestros proyectos.
          </li>

        </ul>

        <div className="article-highlight">

          <span>
            CONSEJO
          </span>

          <p>
            No escondas el contacto. Si quieres conseguir
            clientes, facilita que puedan contactar contigo
            desde cualquier parte de la web.
          </p>

        </div>

      </section>


      {/* =========================================
          ERROR 4
      ========================================= */}

      <section id="error-4">

        <h2>
          4. Tu web tarda demasiado en cargar
        </h2>

        <p>
          La velocidad de carga afecta directamente a la
          experiencia del usuario. Una persona que tiene que
          esperar demasiado puede abandonar antes de ver
          siquiera tu propuesta.
        </p>

        <p>
          Imágenes demasiado pesadas, animaciones innecesarias,
          código sin optimizar o demasiados recursos externos
          pueden ralentizar una página.
        </p>

        <h3>
          Algunas mejoras habituales:
        </h3>

        <ul className="article-check-list">

          <li>
            <Check size={17} />
            Comprimir y optimizar imágenes.
          </li>

          <li>
            <Check size={17} />
            Utilizar formatos modernos de imagen.
          </li>

          <li>
            <Check size={17} />
            Reducir recursos innecesarios.
          </li>

          <li>
            <Check size={17} />
            Cargar determinados elementos de forma diferida.
          </li>

          <li>
            <Check size={17} />
            Utilizar un buen sistema de alojamiento.
          </li>

        </ul>

      </section>


      {/* =========================================
          ERROR 5
      ========================================= */}

      <section id="error-5">

        <h2>
          5. No generas suficiente confianza
        </h2>

        <p>
          Cuando una persona está pensando en contratar un
          servicio, necesita sentirse segura antes de dar el
          siguiente paso.
        </p>

        <p>
          Una web sin opiniones, proyectos, fotografías o
          información sobre quién está detrás del negocio
          puede generar dudas.
        </p>

        <h3>
          Puedes aumentar la confianza mostrando:
        </h3>

        <ul className="article-check-list">

          <li>
            <Check size={17} />
            Opiniones reales de clientes.
          </li>

          <li>
            <Check size={17} />
            Trabajos realizados.
          </li>

          <li>
            <Check size={17} />
            Casos de éxito.
          </li>

          <li>
            <Check size={17} />
            Fotografías reales.
          </li>

          <li>
            <Check size={17} />
            Información sobre tu equipo.
          </li>

        </ul>

      </section>


      {/* =========================================
          BLOQUE DE CONFIANZA
      ========================================= */}

      <div className="article-info-box">

        <Sparkles size={22} />

        <div>

          <strong>
            Recuerda
          </strong>

          <p>
            Antes de comprar o contactar, el usuario necesita
            responder una pregunta muy sencilla:
            "¿Puedo confiar en este negocio?"
          </p>

        </div>

      </div>


      {/* =========================================
          ERROR 6
      ========================================= */}

      <section id="error-6">

        <h2>
          6. Hay demasiadas cosas compitiendo por la atención
        </h2>

        <p>
          Una web puede tener demasiados colores, animaciones,
          botones, mensajes y elementos visuales.
        </p>

        <p>
          El problema no es utilizar diseño llamativo. El
          problema aparece cuando el diseño hace difícil
          encontrar la información importante.
        </p>

        <h3>
          Una buena jerarquía visual debería conseguir que:
        </h3>

        <ul>

          <li>
            El mensaje principal destaque.
          </li>

          <li>
            Los contenidos importantes sean fáciles de encontrar.
          </li>

          <li>
            Los botones principales destaquen.
          </li>

          <li>
            Las secciones tengan un orden lógico.
          </li>

          <li>
            Exista suficiente espacio entre elementos.
          </li>

        </ul>

        <div className="article-highlight">

          <span>
            MENOS PUEDE SER MÁS
          </span>

          <p>
            El objetivo del diseño no es llenar la pantalla.
            Es conseguir que el usuario encuentre exactamente
            lo que necesita.
          </p>

        </div>

      </section>


      {/* =========================================
          ERROR 7
      ========================================= */}

      <section id="error-7">

        <h2>
          7. No facilitas el contacto
        </h2>

        <p>
          Este puede parecer un error evidente, pero todavía
          existen webs donde encontrar el teléfono, correo o
          formulario de contacto resulta complicado.
        </p>

        <p>
          Si una persona está preparada para contactar contigo,
          no deberías obligarla a buscar durante varios minutos.
        </p>

        <h3>
          Comprueba que tu web tenga:
        </h3>

        <ul className="article-check-list">

          <li>
            <Check size={17} />
            Botón de contacto visible.
          </li>

          <li>
            <Check size={17} />
            Teléfono accesible desde móvil.
          </li>

          <li>
            <Check size={17} />
            Formulario sencillo.
          </li>

          <li>
            <Check size={17} />
            WhatsApp cuando tenga sentido para tu negocio.
          </li>

          <li>
            <Check size={17} />
            Información de contacto en el footer.
          </li>

        </ul>

      </section>


      {/* =========================================
          COMPROBACIÓN FINAL
      ========================================= */}

      <section id="check">

        <h2>
          ¿Está tu web perdiendo clientes?
        </h2>

        <p>
          Haz una pequeña prueba. Entra en tu propia web desde
          el móvil e intenta responder estas preguntas en menos
          de diez segundos.
        </p>

        <div className="strategy-flow">

          <div>

            <span>
              01
            </span>

            <strong>
              ¿Qué haces?
            </strong>

            <small>
              Debe quedar claro
            </small>

          </div>

          <ArrowUpRight />

          <div>

            <span>
              02
            </span>

            <strong>
              ¿Por qué tú?
            </strong>

            <small>
              Debes generar confianza
            </small>

          </div>

          <ArrowUpRight />

          <div>

            <span>
              03
            </span>

            <strong>
              ¿Qué hago?
            </strong>

            <small>
              Debe existir un CTA
            </small>

          </div>

        </div>

        <p>
          Si alguna de estas preguntas no tiene una respuesta
          evidente, probablemente existe una oportunidad de
          mejorar tu página web.
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
            Una web puede perder clientes por muchas razones:
            falta de claridad, mala experiencia móvil, ausencia
            de llamadas a la acción, lentitud, falta de confianza,
            exceso de elementos o dificultades para contactar.
            Revisar estos puntos puede marcar una diferencia
            enorme en los resultados de tu negocio.
          </p>

        </div>

      </div>


      {/* =========================================
          IMAGEN FINAL
      ========================================= */}

      <figure className="article-image">

        <img
          src="/web3.png"
          alt="Errores habituales en una página web"
          loading="lazy"
        />

        <figcaption>
          Una buena página web debe eliminar obstáculos y
          facilitar que los visitantes se conviertan en clientes.
        </figcaption>

      </figure>

    </>
  );
}

export default ErroresPaginaWeb;