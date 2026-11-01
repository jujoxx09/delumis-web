import {
  ArrowUpRight,
  Check,
  MousePointerClick,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

function ComoCrearWebQueConvierta() {
  return (
    <>
      {/* =========================================
          INTRODUCCIÓN
      ========================================= */}

      <div id="introduccion">

        <p className="article-lead">
          Tener una página web bonita es importante, pero no
          debería ser el objetivo principal. Una web realmente
          efectiva debe conseguir que las personas que la
          visitan entiendan tu negocio, confíen en él y den
          el siguiente paso.
        </p>

        <p>
          Ese siguiente paso puede ser solicitar un presupuesto,
          reservar una cita, llamar por teléfono, escribir por
          WhatsApp o simplemente ponerse en contacto contigo.
          Lo importante es que la web esté diseñada para
          <strong>
            {" "}convertir visitas en oportunidades reales.
          </strong>
        </p>

      </div>


      {/* =========================================
          IDEA CLAVE
      ========================================= */}

      <div className="article-info-box">

        <Target size={22} />

        <div>

          <strong>
            La idea clave
          </strong>

          <p>
            Una web que convierte no intenta impresionar al
            visitante durante unos segundos. Le guía desde
            el primer momento hasta la acción que quieres
            que realice.
          </p>

        </div>

      </div>


      {/* =========================================
          SECCIÓN 1
      ========================================= */}

      <section id="objetivo">

        <h2>
          1. Antes de diseñar, define qué quieres conseguir
        </h2>

        <p>
          Uno de los errores más habituales es comenzar un
          proyecto web pensando primero en los colores,
          animaciones o imágenes.
        </p>

        <p>
          Antes de diseñar cualquier elemento deberías
          preguntarte qué quieres que haga una persona
          cuando llegue a tu página.
        </p>

        <h3>
          Algunos objetivos pueden ser:
        </h3>

        <ul className="article-check-list">

          <li>
            <Check size={17} />
            Solicitar un presupuesto.
          </li>

          <li>
            <Check size={17} />
            Reservar una cita.
          </li>

          <li>
            <Check size={17} />
            Comprar un producto.
          </li>

          <li>
            <Check size={17} />
            Contactar por WhatsApp.
          </li>

          <li>
            <Check size={17} />
            Llamar al negocio.
          </li>

          <li>
            <Check size={17} />
            Conocer tus servicios.
          </li>

        </ul>

      </section>


      {/* =========================================
          BLOQUE VISUAL
      ========================================= */}

      <div className="keyword-example">

        <div className="keyword-title">

          <MousePointerClick size={18} />

          El objetivo de tu web

        </div>

        <div className="keyword-content">

          <div>

            <span>
              VISITA
            </span>

            <strong>
              Entra en tu página
            </strong>

          </div>

          <ArrowUpRight />

          <div>

            <span>
              ACCIÓN
            </span>

            <strong>
              Contacta contigo
            </strong>

          </div>

        </div>

      </div>


      {/* =========================================
          SECCIÓN 2
      ========================================= */}

      <section id="primeros-segundos">

        <h2>
          2. Los primeros segundos son fundamentales
        </h2>

        <p>
          Cuando alguien entra en una página web no suele
          leerla completamente. Primero realiza una
          exploración rápida para decidir si ha llegado
          al lugar correcto.
        </p>

        <p>
          Por eso la primera pantalla de tu web debería
          responder rápidamente a tres preguntas:
        </p>

        <div className="article-highlight">

          <span>
            LAS 3 PREGUNTAS
          </span>

          <p>
            <strong>
              ¿Qué haces?
            </strong>
            {" "}¿Para quién lo haces? y
            <strong>
              {" "}¿por qué debería elegirte?
            </strong>
          </p>

        </div>

        <p>
          Si el usuario tiene que investigar demasiado para
          entender qué ofrece tu negocio, existe una gran
          posibilidad de que abandone la página.
        </p>

      </section>


      {/* =========================================
          SECCIÓN 3
      ========================================= */}

      <section id="propuesta">

        <h2>
          3. Explica claramente por qué deberían elegirte
        </h2>

        <p>
          Decir simplemente que eres profesional, innovador
          o que ofreces la máxima calidad no suele ser
          suficiente.
        </p>

        <p>
          Tu web debe explicar qué problema solucionas y
          qué obtiene el cliente al trabajar contigo.
        </p>

        <h3>
          Una buena propuesta de valor debería ser:
        </h3>

        <ul>

          <li>
            Clara y fácil de entender.
          </li>

          <li>
            Específica para tu público.
          </li>

          <li>
            Diferente de la competencia.
          </li>

          <li>
            Orientada a beneficios.
          </li>

          <li>
            Visible desde las primeras secciones.
          </li>

        </ul>

      </section>


      {/* =========================================
          SECCIÓN 4
      ========================================= */}

      <section id="confianza">

        <h2>
          4. Genera confianza antes de pedir una acción
        </h2>

        <p>
          Una persona difícilmente contactará con un negocio
          en el que no confía.
        </p>

        <p>
          La página web debe reducir las dudas que pueda
          tener el visitante antes de tomar una decisión.
        </p>

        <h3>
          Elementos que ayudan a generar confianza:
        </h3>

        <ul className="article-check-list">

          <li>
            <Check size={17} />
            Opiniones de clientes.
          </li>

          <li>
            <Check size={17} />
            Trabajos realizados.
          </li>

          <li>
            <Check size={17} />
            Fotografías reales.
          </li>

          <li>
            <Check size={17} />
            Casos de éxito.
          </li>

          <li>
            <Check size={17} />
            Información sobre el equipo.
          </li>

          <li>
            <Check size={17} />
            Datos de contacto visibles.
          </li>

        </ul>

      </section>


      {/* =========================================
          IDEA DE CONFIANZA
      ========================================= */}

      <div className="article-info-box">

        <Users size={22} />

        <div>

          <strong>
            Piensa como tu cliente
          </strong>

          <p>
            Antes de contactar, muchas personas necesitan
            responder mentalmente a una pregunta:
            "¿Puedo confiar en este negocio?"
          </p>

        </div>

      </div>


      {/* =========================================
          SECCIÓN 5
      ========================================= */}

      <section id="llamadas">

        <h2>
          5. Utiliza llamadas a la acción claras
        </h2>

        <p>
          Una web puede tener un diseño espectacular y
          aun así no generar clientes si el usuario no sabe
          qué hacer después.
        </p>

        <p>
          Las llamadas a la acción, también conocidas como
          CTA, ayudan a guiar al visitante hacia el siguiente
          paso.
        </p>

        <h3>
          Algunos ejemplos:
        </h3>

        <ul>

          <li>
            Solicitar presupuesto.
          </li>

          <li>
            Reservar una cita.
          </li>

          <li>
            Ver nuestros proyectos.
          </li>

          <li>
            Hablar con nosotros.
          </li>

          <li>
            Quiero empezar mi proyecto.
          </li>

        </ul>

        <div className="article-highlight">

          <span>
            CONSEJO
          </span>

          <p>
            Evita utilizar demasiadas llamadas a la acción
            diferentes. El usuario debería tener claro cuál
            es el siguiente paso más importante.
          </p>

        </div>

      </section>


      {/* =========================================
          SECCIÓN 6
      ========================================= */}

      <section id="movil">

        <h2>
          6. Diseña pensando primero en el móvil
        </h2>

        <p>
          Una gran parte de las visitas de cualquier negocio
          pueden llegar desde teléfonos móviles.
        </p>

        <p>
          Por eso una web responsive no significa simplemente
          que el contenido se adapte a una pantalla pequeña.
          La experiencia debe estar diseñada específicamente
          para ese contexto.
        </p>

        <h3>
          Comprueba especialmente:
        </h3>

        <ul className="article-check-list">

          <li>
            <Check size={17} />
            Que los botones sean fáciles de pulsar.
          </li>

          <li>
            <Check size={17} />
            Que los textos sean cómodos de leer.
          </li>

          <li>
            <Check size={17} />
            Que las imágenes carguen rápidamente.
          </li>

          <li>
            <Check size={17} />
            Que el menú sea sencillo.
          </li>

          <li>
            <Check size={17} />
            Que contactar sea rápido.
          </li>

        </ul>

      </section>


      {/* =========================================
          SECCIÓN 7
      ========================================= */}

      <section id="velocidad">

        <h2>
          7. La velocidad también influye en la conversión
        </h2>

        <p>
          Una web lenta genera una experiencia negativa
          incluso antes de que el usuario pueda conocer
          tus servicios.
        </p>

        <p>
          Si una página tarda demasiado en cargar, algunos
          visitantes simplemente abandonarán antes de ver
          tu propuesta.
        </p>

        <h3>
          Algunas buenas prácticas son:
        </h3>

        <ul>

          <li>
            Optimizar las imágenes.
          </li>

          <li>
            Evitar recursos innecesarios.
          </li>

          <li>
            Utilizar una infraestructura adecuada.
          </li>

          <li>
            Reducir scripts que no aporten valor.
          </li>

          <li>
            Optimizar la carga en dispositivos móviles.
          </li>

        </ul>

      </section>


      {/* =========================================
          SECCIÓN 8
      ========================================= */}

      <section id="proceso">

        <h2>
          8. Elimina obstáculos durante el proceso
        </h2>

        <p>
          Cada paso adicional que obligas a realizar al
          usuario puede convertirse en una oportunidad
          perdida.
        </p>

        <p>
          Si quieres que alguien solicite información,
          intenta que el proceso sea lo más sencillo posible.
        </p>

        <div className="strategy-flow">

          <div>

            <span>
              01
            </span>

            <strong>
              Descubre
            </strong>

            <small>
              Encuentra tu web
            </small>

          </div>

          <ArrowUpRight />

          <div>

            <span>
              02
            </span>

            <strong>
              Confía
            </strong>

            <small>
              Conoce tu negocio
            </small>

          </div>

          <ArrowUpRight />

          <div>

            <span>
              03
            </span>

            <strong>
              Contacta
            </strong>

            <small>
              Da el siguiente paso
            </small>

          </div>

        </div>

      </section>


      {/* =========================================
          SECCIÓN 9
      ========================================= */}

      <section id="medicion">

        <h2>
          9. Mide qué está funcionando
        </h2>

        <p>
          Una web no debería publicarse y olvidarse.
          Los datos pueden ayudarte a descubrir qué
          partes funcionan y cuáles necesitan mejorar.
        </p>

        <h3>
          Puedes analizar aspectos como:
        </h3>

        <ul className="article-check-list">

          <li>
            <Check size={17} />
            Número de visitas.
          </li>

          <li>
            <Check size={17} />
            Páginas más visitadas.
          </li>

          <li>
            <Check size={17} />
            Tiempo de permanencia.
          </li>

          <li>
            <Check size={17} />
            Formularios enviados.
          </li>

          <li>
            <Check size={17} />
            Clics en botones de contacto.
          </li>

        </ul>

      </section>


      {/* =========================================
          ESTRATEGIA COMPLETA
      ========================================= */}

      <section id="estrategia">

        <h2>
          La fórmula de una web que convierte
        </h2>

        <p>
          Una web que consigue clientes no depende de un
          único elemento. Es la combinación de diferentes
          piezas que trabajan juntas.
        </p>

        <div className="strategy-flow">

          <div>

            <span>
              01
            </span>

            <strong>
              Claridad
            </strong>

            <small>
              Entienden tu negocio
            </small>

          </div>

          <ArrowUpRight />

          <div>

            <span>
              02
            </span>

            <strong>
              Confianza
            </strong>

            <small>
              Creen en tu negocio
            </small>

          </div>

          <ArrowUpRight />

          <div>

            <span>
              03
            </span>

            <strong>
              Acción
            </strong>

            <small>
              Se convierten en clientes
            </small>

          </div>

        </div>

        <p>
          El objetivo final no es conseguir que una persona
          permanezca mucho tiempo en tu página. Es conseguir
          que encuentre rápidamente lo que necesita y tenga
          una razón clara para dar el siguiente paso.
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
            Una web que convierte combina un mensaje claro,
            una propuesta de valor convincente, elementos
            que generan confianza, llamadas a la acción
            visibles y una experiencia rápida y sencilla.
            El diseño debe estar al servicio del objetivo:
            conseguir resultados para tu negocio.
          </p>

        </div>

      </div>


      {/* =========================================
          IMAGEN FINAL
      ========================================= */}

      <figure className="article-image">

        <img
          src="/web2.png"
          alt="Página web diseñada para convertir visitas en clientes"
          loading="lazy"
        />

        <figcaption>
          Una buena web conecta diseño, estrategia y
          conversión para transformar visitas en clientes.
        </figcaption>

      </figure>

    </>
  );
}

export default ComoCrearWebQueConvierta;