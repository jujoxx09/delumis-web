import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Search, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./TemplatesPage.css";

const templates = [
  {
    id: 1,
    name: "Lumière",
    slug: "lumiere",
    type: "Landing",
    theme: "Belleza",
    image: "/web1.png",
    url: "https://es.wix.com/website-template/view/html/wh-1207?originUrl=https%3A%2F%2Fes.wix.com%2Fwebsite%2Ftemplates%3Fcriteria%3Destetica&esi=8316dfda-95ce-42d3-9f14-bc97ecc82a6b",
  },
  {
    id: 2,
    name: "Sapore",
    slug: "sapore",
    type: "Restaurante",
    theme: "Restaurantes",
    image: "/web2.png",
    url: "https://es.wix.com/website-template/view/html/wh-1221?originUrl=https%3A%2F%2Fes.wix.com%2Fwebsite%2Ftemplates%3Fcriteria%3Dcoches&esi=8e9d2fc4-24fe-4db4-8e16-dc9ffdb949ed",
  },
  {
    id: 3,
    name: "Eterna",
    slug: "eterna",
    type: "Landing",
    theme: "Bodas",
    image: "/web3.png",
    url: "https://es.wix.com/website-template/view/html/wh-1207?originUrl=https%3A%2F%2Fes.wix.com%2Fwebsite%2Ftemplates%3Fcriteria%3Destetica&esi=8316dfda-95ce-42d3-9f14-bc97ecc82a6b",
  },
  {
    id: 4,
    name: "Momentum",
    slug: "momentum",
    type: "Portfolio",
    theme: "Profesionales",
    image: "/web1.png",
    url: "https://es.wix.com/website-template/view/html/wh-1207?originUrl=https%3A%2F%2Fes.wix.com%2Fwebsite%2Ftemplates%3Fcriteria%3Destetica&esi=8316dfda-95ce-42d3-9f14-bc97ecc82a6b",
  },
  {
    id: 5,
    name: "Nova Store",
    slug: "nova-store",
    type: "Ecommerce",
    theme: "Tiendas",
    image: "/web2.png",
    url: "https://es.wix.com/website-template/view/html/wh-1207?originUrl=https%3A%2F%2Fes.wix.com%2Fwebsite%2Ftemplates%3Fcriteria%3Destetica&esi=8316dfda-95ce-42d3-9f14-bc97ecc82a6b",
  },
  {
    id: 6,
    name: "Atlas",
    slug: "atlas",
    type: "Blog",
    theme: "Personal",
    image: "/web3.png",
    url: "https://es.wix.com/website-template/view/html/wh-1207?originUrl=https%3A%2F%2Fes.wix.com%2Fwebsite%2Ftemplates%3Fcriteria%3Destetica&esi=8316dfda-95ce-42d3-9f14-bc97ecc82a6b",
  },
  {
    id: 7,
    name: "Velvet",
    slug: "velvet",
    type: "Landing",
    theme: "Eventos",
    image: "/web1.png",
    url: "https://es.wix.com/website-template/view/html/wh-1207?originUrl=https%3A%2F%2Fes.wix.com%2Fwebsite%2Ftemplates%3Fcriteria%3Destetica&esi=8316dfda-95ce-42d3-9f14-bc97ecc82a6b",
  },
  {
    id: 8,
    name: "Forma",
    slug: "forma",
    type: "Portfolio",
    theme: "Fotografía",
    image: "/web2.png",
    url: "https://es.wix.com/website-template/view/html/wh-1207?originUrl=https%3A%2F%2Fes.wix.com%2Fwebsite%2Ftemplates%3Fcriteria%3Destetica&esi=8316dfda-95ce-42d3-9f14-bc97ecc82a6b",
  },
];

const types = [
  "Todos",
  "Landing",
  "Portfolio",
  "Ecommerce",
  "Blog",
  "Restaurante",
];

const themes = [
  "Todos",
  "Eventos",
  "Restaurantes",
  "Bodas",
  "Belleza",
  "Tiendas",
  "Profesionales",
  "Personal",
  "Fotografía",
];

function TemplatesPage() {
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState("Todos");
  const [selectedTheme, setSelectedTheme] = useState("Todos");
  const [search, setSearch] = useState("");

  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      const matchesType =
        selectedType === "Todos" || template.type === selectedType;

      const matchesTheme =
        selectedTheme === "Todos" || template.theme === selectedTheme;

      const matchesSearch =
        template.name.toLowerCase().includes(search.toLowerCase()) ||
        template.type.toLowerCase().includes(search.toLowerCase()) ||
        template.theme.toLowerCase().includes(search.toLowerCase());

      return matchesType && matchesTheme && matchesSearch;
    });
  }, [selectedType, selectedTheme, search]);

  /*const openTemplate = (slug) => {
    navigate(`/plantillas/${slug}`);
  };*/

  const openTemplate = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

  return (
    <main className="templates-page">

      {/* HERO */}

      <section className="templates-hero">

        <div className="templates-hero-glow glow-one" />
        <div className="templates-hero-glow glow-two" />

        <motion.div
          className="templates-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="templates-badge">
            <Sparkles size={15} />
            <span>Plantillas DELUMIS</span>
          </div>

          <h1>
            Encuentra la web que
            <span> imaginas.</span>
          </h1>

          <p>
            Explora nuestras plantillas, inspírate y encuentra el punto
            de partida perfecto para crear una web que represente tu negocio.
          </p>
        </motion.div>

      </section>


      {/* FILTERS */}

      <section className="templates-filters-section">

        <div className="templates-filters">

          <div className="filter-group">

            <span className="filter-label">
              Tipo de web
            </span>

            <div className="filter-buttons">
              {types.map((type) => (
                <button
                  key={type}
                  className={
                    selectedType === type
                      ? "filter-button active"
                      : "filter-button"
                  }
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </button>
              ))}
            </div>

          </div>


          <div className="filter-group">

            <span className="filter-label">
              Tema
            </span>

            <div className="filter-buttons">
              {themes.map((theme) => (
                <button
                  key={theme}
                  className={
                    selectedTheme === theme
                      ? "filter-button active"
                      : "filter-button"
                  }
                  onClick={() => setSelectedTheme(theme)}
                >
                  {theme}
                </button>
              ))}
            </div>

          </div>


          <div className="templates-search">

            <Search size={18} />

            <input
              type="text"
              placeholder="Buscar plantilla..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

        </div>

      </section>


      {/* RESULTS */}

      <section className="templates-grid-section">

        <div className="templates-results-header">

          <div>
            <span className="results-small">
              INSPIRACIÓN
            </span>

            <h2>
              Nuestras plantillas
            </h2>
          </div>

          <span className="results-count">
            {filteredTemplates.length}{" "}
            {filteredTemplates.length === 1
              ? "plantilla"
              : "plantillas"}
          </span>

        </div>


        <motion.div
          layout
          className="templates-grid"
        >

          <AnimatePresence mode="popLayout">

            {filteredTemplates.map((template) => (

              <motion.article
                layout
                key={template.id}
                className="template-card"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                onClick={() => openTemplate(template.url)}
              >

                <div className="template-image-wrapper">

                  <img
                    src={template.image}
                    alt={`Plantilla ${template.name}`}
                    className="template-image"
                    loading="lazy"
                  />

                  <div className="template-overlay">

                    <span>
                      Ver plantilla
                    </span>

                    <div className="template-arrow">
                      <ArrowUpRight size={19} />
                    </div>

                  </div>

                </div>


                <div className="template-info">

                  <div>

                    <h3>
                      {template.name}
                    </h3>

                    <div className="template-tags">

                      <span>
                        {template.type}
                      </span>

                      <span>
                        {template.theme}
                      </span>

                    </div>

                  </div>

                  <ArrowUpRight
                    className="template-card-arrow"
                    size={21}
                  />

                </div>

              </motion.article>

            ))}

          </AnimatePresence>

        </motion.div>


        {filteredTemplates.length === 0 && (

          <motion.div
            className="templates-empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >

            <Sparkles size={30} />

            <h3>
              No encontramos ninguna plantilla
            </h3>

            <p>
              Prueba a cambiar los filtros o realizar otra búsqueda.
            </p>

            <button
              onClick={() => {
                setSelectedType("Todos");
                setSelectedTheme("Todos");
                setSearch("");
              }}
            >
              Limpiar filtros
            </button>

          </motion.div>

        )}

      </section>


      {/* CTA */}

      <section className="templates-cta">

        <div className="templates-cta-glow" />

        <div className="templates-cta-content">

          <span>
            ¿No encuentras exactamente lo que buscas?
          </span>

          <h2>
            Podemos crear algo
            <br />
            <strong>hecho para ti.</strong>
          </h2>

          <p>
            Utilizamos nuestras plantillas como punto de partida,
            pero podemos adaptar cada detalle a tu marca y necesidades.
          </p>

          <button
            onClick={() => navigate("/contacto")}
            className="templates-cta-button"
          >
            Crear mi web
            <ArrowUpRight size={19} />
          </button>

        </div>

      </section>

    </main>
  );
}

export default TemplatesPage;