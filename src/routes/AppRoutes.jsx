import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";

import MainLayout from "../layout/MainLayout.jsx";

// pages lazy
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const PortfolioPage = lazy(() => import("../pages/PortfolioPage"));
const ServicesPage = lazy(() => import("../pages/ServicesPage"));
const PricingPage = lazy(() => import("../pages/PricingPage"));
const ShowcasePage = lazy(() => import("../pages/ShowcasePage"));
const TemplatesPage = lazy(() => import("../pages/TemplatesPage"));
const BlogPage = lazy(() => import("../pages/BlogPage"));
const BlogArticle = lazy(() => import("../pages/Blog/BlogArticle"));
const Hosteleria = lazy(() => import("../pages/Soluciones/Hosteleria/Hosteleria"));
const BellezaEstetica = lazy(() => import("../pages/Soluciones/BellezaEstetica/BellezaEstetica"));
const MantenimientoReparaciones = lazy(() => import("../pages/Soluciones/MantenimientoReparaciones/MantenimientoReparaciones"));
const Inmobiliaria = lazy(() => import("../pages/Soluciones/Inmobiliaria/Inmobiliaria"));
const Comercio = lazy(() => import("../pages/Soluciones/Comercio/Comercio"));
const Eventos = lazy(() => import("../pages/Soluciones/Eventos/Eventos"));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/precios" element={<PricingPage />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/showcase" element={<ShowcasePage />} /> 
          <Route path="/plantillas" element={<TemplatesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/soluciones/hosteleria" element={<Hosteleria />} />
          <Route path="/soluciones/bellezaestetica" element={<BellezaEstetica />} />
          <Route path="/soluciones/MantenimientoReparaciones" element={<MantenimientoReparaciones />} />
          <Route path="/soluciones/inmobiliaria" element={<Inmobiliaria />} />       
          <Route path="/soluciones/comercio" element={<Comercio />} />
          <Route path="/soluciones/eventos" element={<Eventos />} />
        </Route>

      </Routes>
    </AnimatePresence>
  );
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{ color: "white" }}>Cargando...</div>}>
        <AnimatedRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;