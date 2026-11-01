import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import blogArticles from "../data/blogArticles";
import {
  ArrowUpRight,
  Search,
  Sparkles,
  Clock3,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./BlogPage.css";

const categories = [
  "Todos",
  "Web",
  "Marketing",
  "Estrategias",
  "Trend",
];

function BlogPage() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  const filteredArticles = useMemo(() => {
    return blogArticles.filter((article) => {
      const matchesCategory =
        category === "Todos" || article.category === category;

      const matchesSearch =
        article.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        article.author
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const featuredArticle =
    filteredArticles.find((article) => article.featured) ||
    filteredArticles[0];

  const regularArticles = filteredArticles.filter(
    (article) => article.id !== featuredArticle?.id
  );

  const bestArticles = regularArticles.slice(0, 3);

  const trendArticles = regularArticles.filter(
    (article) => article.category === "Trend"
  );

  const seoArticles = regularArticles.filter(
    (article) =>
      article.category === "Marketing" ||
      article.title.toLowerCase().includes("seo")
  );

  const openArticle = (slug) => {
    navigate(`/blog/${slug}`);
  };

  const resetFilters = () => {
    setSearch("");
    setCategory("Todos");
  };

  return (
    <main className="blog-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="blog-hero">

        <div className="blog-orb blog-orb-one" />
        <div className="blog-orb blog-orb-two" />

        <motion.div
          className="blog-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <div className="blog-badge">
            <Sparkles size={15} />
            Ideas, estrategias e inspiración
          </div>

          <h1>
            Ideas que hacen
            <br />
            <span>crecer tu web.</span>
          </h1>

          <p>
            Descubre consejos, estrategias y tendencias para crear
            mejores experiencias digitales y hacer crecer tu negocio.
          </p>

        </motion.div>


        {/* SEARCH */}

        <motion.div
          className="blog-search-wrapper"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >

          <Search size={20} />

          <input
            type="text"
            placeholder="Buscar un artículo..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              onClick={() => setSearch("")}
              className="blog-search-clear"
            >
              ×
            </button>
          )}

        </motion.div>

      </section>


      {/* =========================
          CATEGORIES
      ========================= */}

      <section className="blog-category-section">

        <div className="blog-category-container">

          <span className="blog-category-label">
            Explora por categoría
          </span>

          <div className="blog-category-buttons">

            {categories.map((item) => (

              <button
                key={item}
                onClick={() => setCategory(item)}
                className={
                  category === item
                    ? "blog-category-button active"
                    : "blog-category-button"
                }
              >
                {item}
              </button>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          CONTENT
      ========================= */}

      <div className="blog-content">

        {filteredArticles.length === 0 ? (

          <motion.div
            className="blog-empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >

            <Search size={35} />

            <h2>
              No encontramos artículos
            </h2>

            <p>
              Prueba con otra búsqueda o cambia la categoría.
            </p>

            <button onClick={resetFilters}>
              Ver todos los artículos
            </button>

          </motion.div>

        ) : (

          <>

            {/* =========================
                FEATURED
            ========================= */}

            {featuredArticle && (

              <section className="blog-featured-section">

                <div className="blog-section-heading">

                  <div>
                    <span>DESTACADO</span>
                    <h2>
                      El artículo que no te puedes perder
                    </h2>
                  </div>

                </div>


                <motion.article
                  className="blog-featured-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  onClick={() =>
                    openArticle(featuredArticle.slug)
                  }
                >

                  <div className="blog-featured-image">

                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                    />

                    <div className="blog-featured-image-overlay">

                      <div className="blog-featured-read">
                        Leer artículo
                        <ArrowUpRight size={18} />
                      </div>

                    </div>

                  </div>


                  <div className="blog-featured-info">

                    <span className="article-category">
                      {featuredArticle.category}
                    </span>

                    <h2>
                      {featuredArticle.title}
                    </h2>

                    <p>
                      {featuredArticle.excerpt}
                    </p>

                    <div className="article-meta">

                      <div className="article-author">
                        <div className="author-avatar">
                          {featuredArticle.author.charAt(0)}
                        </div>

                        <div>
                          <strong>
                            {featuredArticle.author}
                          </strong>

                          <span>
                            {featuredArticle.date}
                          </span>
                        </div>
                      </div>

                      <div className="article-time">
                        <Clock3 size={15} />
                        {featuredArticle.readTime}
                      </div>

                    </div>

                  </div>

                </motion.article>

              </section>

            )}


            {/* =========================
                BEST ARTICLES
            ========================= */}

            {bestArticles.length > 0 && (

              <BlogArticleSection
                title="Los mejores artículos"
                subtitle="Nuestros favoritos"
                articles={bestArticles}
                openArticle={openArticle}
              />

            )}


            {/* =========================
                TRENDS
            ========================= */}

            {trendArticles.length > 0 && (

              <BlogArticleSection
                title="Tendencias de páginas web en 2026"
                subtitle="Lo que está cambiando"
                articles={trendArticles}
                openArticle={openArticle}
                variant="dark"
              />

            )}


            {/* =========================
                SEO
            ========================= */}

            {seoArticles.length > 0 && (

              <BlogArticleSection
                title="SEO y posicionamiento"
                subtitle="Haz que te encuentren"
                articles={seoArticles}
                openArticle={openArticle}
              />

            )}

          </>

        )}

      </div>


      {/* =========================
          CTA
      ========================= */}

      <section className="blog-cta">

        <div className="blog-cta-glow" />

        <div className="blog-cta-content">

          <span>
            TU PRÓXIMO PASO
          </span>

          <h2>
            Tu negocio también
            <br />
            <strong>merece una gran web.</strong>
          </h2>

          <p>
            Si después de leer nuestros artículos tienes claro que
            necesitas mejorar tu presencia digital, nosotros podemos
            ayudarte.
          </p>

          <button
            onClick={() => navigate("/contacto")}
          >
            Hablemos de tu proyecto
            <ArrowUpRight size={18} />
          </button>

        </div>

      </section>

    </main>
  );
}


/* =====================================================
   ARTICLE SECTION COMPONENT
===================================================== */

function BlogArticleSection({
  title,
  subtitle,
  articles,
  openArticle,
  variant = "light",
}) {
  return (
    <section
      className={
        variant === "dark"
          ? "blog-article-section blog-section-dark"
          : "blog-article-section"
      }
    >

      <div className="blog-section-heading">

        <div>
          <span>{subtitle}</span>
          <h2>{title}</h2>
        </div>

        <ArrowUpRight
          className="section-decoration-arrow"
          size={28}
        />

      </div>


      <div className="blog-articles-grid">

        <AnimatePresence>

          {articles.slice(0, 3).map((article) => (

            <motion.article
              layout
              key={article.id}
              className="blog-article-card"
              onClick={() => openArticle(article.slug)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >

              <div className="blog-article-image">

                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                />

                <span className="article-image-category">
                  {article.category}
                </span>

                <div className="article-image-arrow">
                  <ArrowUpRight size={18} />
                </div>

              </div>


              <div className="blog-article-info">

                <div className="small-article-meta">
                  <span>
                    {article.author}
                  </span>

                  <span>
                    {article.date}
                  </span>
                </div>

                <h3>
                  {article.title}
                </h3>

                <p>
                  {article.excerpt}
                </p>

                <div className="article-read-link">
                  Leer más
                  <ArrowUpRight size={16} />
                </div>

              </div>

            </motion.article>

          ))}

        </AnimatePresence>

      </div>

    </section>
  );
}

export default BlogPage;