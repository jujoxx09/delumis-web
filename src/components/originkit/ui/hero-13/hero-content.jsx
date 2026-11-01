"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./button";
import FocusReveal from "./focus-reveal";

const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const FADE_UP_ITEM = {
  hidden: {
    opacity: 0,
    y: 16,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export const HeroContent = ({
  onExploreGallery,
  onBookShoot,
}) => {
  const [headingComplete, setHeadingComplete] = useState(false);

  return (
    <div className="hero-13-content">
      <div className="hero-13-content__inner">
        
        <div className="hero-13-content__heading-wrapper">

          <FocusReveal
            as="h1"
            text="La galería de fotos más original"
            className="hero-13__heading"
            staggerFrom="start"
            blur={20}
            transition={{
              type: "tween",
              duration: 0.4,
              staggerChildren: 0.04,
              ease: "easeOut",
            }}
            onComplete={() => setHeadingComplete(true)}
          />

          <motion.div
            className="hero-13-content__description-wrapper"
            variants={STAGGER_CONTAINER}
            initial="hidden"
            animate={
              headingComplete
                ? "visible"
                : "hidden"
            }
          >

            <motion.p
              variants={FADE_UP_ITEM}
              className="hero-13__description"
            >
              Muestra tu graleria con un estilo original, mostrando tu creatividad de manera única.
            </motion.p>

            <motion.div
              variants={FADE_UP_ITEM}
              className="hero-13-buttons"
            >

            

            </motion.div>

          </motion.div>

        </div>

      </div>
    </div>
  );
};
