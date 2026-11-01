import { motion } from "framer-motion";
import {
  FaRocket,
  FaLaptopCode,
  FaShoppingCart,
  FaMobileAlt,
  FaSearch,
  FaPalette,
  FaTachometerAlt,
  FaHeadset,
  FaMobile, 
  FaCode
} from "react-icons/fa";

import Services from "../components/Services/Services";
import ContactCTA from "../components/ContactCTA/ContactCTA";
import "./ServicesPage.css";

function ServicesPage() {
  return (
    <motion.div
      className="servicesPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >

      {/* HERO / GANCHO */}
      <section className="servicesPage__hero">
        <h1>
          No creamos solo webs. <br />
          Creamos valor, mejorando la imagen de tu marca.
        </h1>

        <p>
          Diseñamos experiencias digitales enfocadas en conversión, velocidad y diseño moderno.
        </p>
      </section>

      {/* PROBLEMAS */}
      <section className="servicesPage__problems">
        <h2>Problemas que resolvemos</h2>

         <div className="grid">
          <motion.div whileHover={{ scale: 1.05 }} className="card">
            ❌ Webs lentas y poco optimizadas
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="card">
            ❌ Diseño antiguo o poco profesional
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="card">
            ❌ Pérdida de clientes potenciales
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="card">
            ❌ Falta de visibilidad online
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="card">
            ❌ Baja conversión
          </motion.div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="servicesPage__services">
        <h2>Qué hacemos</h2>
        <Services />
      </section>

      {/* QUE INCLUYE */}
      <section className="servicesPage__includes">
        <h2>Qué incluye cada proyecto</h2>

        <div className="grid">
          <motion.div whileHover={{ scale: 1.05 }} className="card iconCard">
            <FaPalette size={24} />
            <p>Diseño moderno y personalizado</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="card iconCard">
            <FaSearch size={24} />
            <p>Desarrollo en React</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="card iconCard">
            <FaTachometerAlt size={24} />
            <p>Optimización de rendimiento</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="card iconCard">
            <FaCode size={24} />
            <p>SEO básico incluido</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="card iconCard">
            <FaMobile size={24} />
            <p>Responsive (móvil, tablet, desktop)</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="card iconCard">
            <FaHeadset size={24} />
            <p>Soporte y revisiones</p>
          </motion.div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="servicesPage__process">
        <h2>Nuestro proceso de trabajo</h2>

        <div className="timeline">

          {[
            "Reunión: Analizamos tu negocio y objetivos.",
            "Propuesta: Te enviamos estructura, diseño y presupuesto.",
            "Diseño: Creamos una experiencia visual moderna.",
            "Desarrollo: Construimos la web en React optimizada.",
            "Pruebas: Revisamos velocidad, diseño y errores.",
            "Lanzamiento: Publicamos tu web y la ponemos online."
          ].map((step, i) => (
            <motion.div
              key={i}
              className="step"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <span>{i + 1}</span>
              <h3>{step}</h3>
            </motion.div>
          ))}

        </div>
      </section>

      {/* SERVICIOS DETALLE */}
      <section className="servicesPage__servicesBlock">
        <h2>Servicios principales</h2>

        <div className="grid">

           <motion.div whileHover={{ scale: 1.05 }} className="card">
            <h3>Web Corporativa</h3>
            <p>Ideal para empresas que quieren presencia profesional.</p>
          </motion.div>


          <motion.div whileHover={{ scale: 1.05 }} className="card">
            <h3>Landing Pages</h3>
            <p>Diseñadas para convertir visitas en clientes.</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="card">
            <h3>E-commerce</h3>
            <p>Tiendas online rápidas, seguras y optimizadas.</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="card">
            <h3>Apps Web</h3>
            <p>Soluciones personalizadas para negocios digitales.</p>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <ContactCTA />

     </motion.div>
  );
}

export default ServicesPage;