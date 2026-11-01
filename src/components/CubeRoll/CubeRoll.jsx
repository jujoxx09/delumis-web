import * as React from "react";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { useAnimate } from "framer-motion";

const TAGS = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "div",
  "span",
];

function CubeRoll({
  text = "LETTER ROLL",

  font = {
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: 120,
    lineHeight: 1.1,
    letterSpacing: "0em",
    textAlign: "center",
  },

  color = "#FFFFFF",

  tag = "h1",

  direction = "down",

  stagger = 0.1,

  perspective = 600,

  sideOpacity = 100,

  transition = {
    type: "tween",
    duration: 0.75,
    ease: "linear",
  },
}) {
  const [scope, animate] = useAnimate();

  const depthRef = useRef(null);

  /*
   * Side Fade
   * Cuanto mayor sea sideOpacity,
   * más transparentes serán las caras laterales.
   */
  const side =
    1 - Math.max(0, Math.min(1, sideOpacity / 100));

  const sign = direction === "up" ? -1 : 1;

  /*
   * Separamos las palabras para mantener
   * los espacios y permitir el wrapping.
   */
  const words = useMemo(
    () => (text ?? "").split(/(\s+)/),
    [text]
  );

  /*
   * Calculamos la profundidad del cubo
   * basándonos en la altura real de la letra.
   */
  const measure = useCallback(() => {
    const root = scope.current;
    const probe = depthRef.current;

    if (!root || !probe) return;

    root.style.setProperty(
      "--d",
      `${probe.offsetHeight / 2}px`
    );
  }, [scope]);

  /*
   * Medimos al montar y cuando cambie el texto o fuente.
   */
  useEffect(() => {
    measure();

    if (
      typeof document !== "undefined" &&
      document.fonts?.ready
    ) {
      document.fonts.ready
        .then(measure)
        .catch(() => {});
    }
  }, [measure, text, font]);

  /*
   * Animación 3D.
   */
  useEffect(() => {
    const root = scope.current;

    if (!root) return;

    const chars = Array.from(
      root.querySelectorAll(".char-3d")
    );

    const base = {
      duration: 0.75,
      ease: "linear",
      ...(transition ?? {}),
    };

    const baseDuration =
      typeof base.duration === "number"
        ? base.duration
        : 0.75;

    /*
     * 4 cuartos = 360 grados.
     * Esto permite que el inicio y el final
     * sean exactamente iguales.
     */
    const fullDuration = baseDuration * 4;

    const baseDelay =
      typeof base.delay === "number"
        ? base.delay
        : 0;

    const animations = chars.flatMap((char, index) => {
      const animationTransition = {
        ...base,
        duration: fullDuration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        delay: baseDelay + index * stagger,
      };

      const face = (selector) =>
        char.querySelector(selector);

      return [
        /*
         * Rotación del cubo.
         */
        animate(
          char,
          {
            rotateX: [
              0,
              -90 * sign,
              -180 * sign,
              -270 * sign,
              -360 * sign,
            ],
          },
          animationTransition
        ),

        /*
         * Cara superior.
         */
        animate(
          face(".face-top"),
          {
            opacity: [
              side,
              0,
              side,
              1,
              side,
            ],
          },
          animationTransition
        ),

        /*
         * Cara frontal.
         */
        animate(
          face(".face-front"),
          {
            opacity: [
              1,
              side,
              0,
              side,
              1,
            ],
          },
          animationTransition
        ),

        /*
         * Cara inferior.
         */
        animate(
          face(".face-bottom"),
          {
            opacity: [
              side,
              1,
              side,
              0,
              side,
            ],
          },
          animationTransition
        ),

        /*
         * Cara trasera.
         */
        animate(
          face(".face-back"),
          {
            opacity: [
              0,
              side,
              1,
              side,
              0,
            ],
          },
          animationTransition
        ),
      ];
    });

    /*
     * Limpiamos las animaciones
     * cuando el componente se desmonta.
     */
    return () => {
      animations.forEach((animation) => {
        animation?.stop?.();
      });
    };
  }, [
    animate,
    scope,
    text,
    stagger,
    sign,
    side,
    JSON.stringify(transition ?? {}),
  ]);

  const fontStyles = font ?? {};

  const safeTag = TAGS.includes(tag)
    ? tag
    : "p";

  const Tag = safeTag;

  /*
   * Estilos comunes de las caras.
   */
  const faceBase = {
    display: "block",
    fontStyle: "inherit",
    backfaceVisibility: "hidden",
    whiteSpace: "pre",
  };

  let charIndex = 0;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent:
          fontStyles.textAlign === "right"
            ? "flex-end"
            : fontStyles.textAlign === "center"
              ? "center"
              : "flex-start",
        overflow: "visible",
      }}
    >
      <Tag
        ref={scope}
        aria-label={text}
        style={{
          margin: 0,
          display: "inline-block",
          color,

          /*
           * Perspectiva 3D.
           */
          perspective: `${perspective}px`,

          transformStyle: "preserve-3d",

          ...fontStyles,
        }}
      >
        {words.map((word, wordIndex) => {
          /*
           * Conservamos los espacios.
           */
          if (/^\s+$/.test(word)) {
            return (
              <span
                key={`space-${wordIndex}`}
                aria-hidden="true"
              >
                {" "}
              </span>
            );
          }

          return (
            <span
              key={`word-${wordIndex}`}
              aria-hidden="true"
              style={{
                display: "inline-block",
                transformStyle: "preserve-3d",
              }}
            >
              {word.split("").map((character, characterIndex) => {
                const isProbe = charIndex++ === 0;

                return (
                  <span
                    key={characterIndex}
                    className="char-3d"
                    ref={
                      isProbe
                        ? depthRef
                        : undefined
                    }
                    style={{
                      display: "inline-block",
                      position: "relative",
                      transformStyle: "preserve-3d",
                      willChange: "transform",
                    }}
                  >
                    {/* =========================
                        CARA FRONTAL
                    ========================== */}

                    <span
                      className="face-front"
                      style={{
                        ...faceBase,

                        position: "relative",

                        transform:
                          "translateZ(var(--d, 0.5em))",

                        opacity: 1,
                      }}
                    >
                      {character}
                    </span>

                    {/* =========================
                        CARA SUPERIOR
                    ========================== */}

                    <span
                      className="face face-top"
                      style={{
                        ...faceBase,

                        position: "absolute",
                        inset: 0,

                        transform:
                          `rotateX(${
                            -90 * sign
                          }deg) translateZ(var(--d, 0.5em))`,

                        opacity: side,
                      }}
                    >
                      {character}
                    </span>

                    {/* =========================
                        CARA INFERIOR
                    ========================== */}

                    <span
                      className="face face-bottom"
                      style={{
                        ...faceBase,

                        position: "absolute",
                        inset: 0,

                        transform:
                          `rotateX(${
                            90 * sign
                          }deg) translateZ(var(--d, 0.5em))`,

                        opacity: side,
                      }}
                    >
                      {character}
                    </span>

                    {/* =========================
                        CARA TRASERA
                    ========================== */}

                    <span
                      className="face face-back"
                      style={{
                        ...faceBase,

                        position: "absolute",
                        inset: 0,

                        transform:
                          "rotateX(180deg) translateZ(var(--d, 0.5em))",

                        opacity: 0,
                      }}
                    >
                      {character}
                    </span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </Tag>
    </div>
  );
}

export default CubeRoll;