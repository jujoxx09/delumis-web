import { motion } from "framer-motion";

import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Portfolio from "../components/Portfolio/Portfolio";
import Pricing from "../components/Pricing/Pricing";
import Testimonials from "../components/Testimonials/Testimonials";
import ContactCTA from "../components/ContactCTA/ContactCTA";
import Prueba from "../components/Prueba/Prueba";
import Carrucel from "../components/Carrucel/Carrucel";
import Caracteristicas from "../components/Caracteristicas/Caracteristicas";
import Hero13 from "../components/originkit/Hero-13";
import ExploraPlantilla from "../components/ExploraPlantilla/ExploraPlantilla";
import CreacionPasos from "../components/CreacionPasos/CreacionPasos";
import Dominio from "../components/Dominio/Dominio";
import BlogPreview from "../components/BlogPreview/BlogPreview";
import FAQ from "../components/FAQ/FAQ";

import "./Home.css";

function SectionTransition({ children, className = "" }) {
  return (
    <motion.section
      className={`homePage__section ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.section>
  );
}

function Home() {
  return (
    <motion.div
      className="homePage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="homePage__hero">
        <Hero />
      </section>


      {/* =====================================================
          CARACTERÍSTICAS
      ===================================================== */}

      <SectionTransition className="homePage__dark-section">
        <Caracteristicas />
      </SectionTransition>


  {/* =====================================================
          EXPLORA PLANTILLA
      ===================================================== */} 

      <SectionTransition>
        <ExploraPlantilla />
      </SectionTransition>


  {/* =====================================================
          SERVICIOS
      ===================================================== */}

      <SectionTransition>
        <Services />
      </SectionTransition>

    {/* =====================================================
          CREACION DE PASOS
      ===================================================== */}

      <SectionTransition>
        <CreacionPasos />
      </SectionTransition>

    {/* =====================================================
         PRICING
      ===================================================== */}

      <SectionTransition>
        <Pricing />
      </SectionTransition>
      
    {/* =====================================================
          GALERIA
      ===================================================== */}

      <SectionTransition>
        <Hero13 />
      </SectionTransition>

    {/* =====================================================
          DOMINIO
      ===================================================== */}

      <SectionTransition>
        <Dominio />
      </SectionTransition>

  
    {/* =====================================================
          BLOG PREVIEW
      ===================================================== */}

      <SectionTransition>
        <BlogPreview />
      </SectionTransition>

    {/* =====================================================
          FAQ
      ===================================================== */}

      <SectionTransition>
        <FAQ />
      </SectionTransition>

  

      {/* =====================================================
          PRUEBA
      ===================================================== 

      <SectionTransition>
        <Prueba />
      </SectionTransition>


      {/* =====================================================
          CARRUCEL
      ===================================================== 

      <SectionTransition>
        <Carrucel />
      </SectionTransition>

       =====================================================
          PORTFOLIO
      ===================================================== 

      <SectionTransition>
        <Portfolio />
      </SectionTransition>







       =====================================================
          TESTIMONIALS
      ===================================================== 

      <SectionTransition>
        <Testimonials />
      </SectionTransition>


       =====================================================
          FINAL CTA
      ===================================================== */}

      <SectionTransition>
        <ContactCTA />
      </SectionTransition>

    </motion.div>
  );
}

export default Home;
