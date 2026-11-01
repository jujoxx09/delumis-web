import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./BlogPreview.css";

const blogs = [
  {
    id: 1,
    category: "Web",
    title: "¿Qué tipo de página web necesita tu negocio?",
    description:
      "Landing page, web corporativa, carta digital o tienda online. Descubre cuál se adapta mejor a lo que necesitas.",
    image: "/web1.png",
    date: "5 min de lectura",
    link: "/blog/tipos-paginas-web",
  },
  {
    id: 2,
    category: "Consejos",
    title: "7 claves para tener una página web profesional",
    description:
      "Los elementos que no deberían faltar en una web que quiera transmitir confianza y conseguir clientes.",
    image: "/public/web2.png",
    date: "6 min de lectura",
    link: "/blog/web-profesional",
  },
  {
    id: 3,
    category: "Guía",
    title: "Dominio, hosting y SSL: ¿qué significa cada cosa?",
    description:
      "Todo lo que necesitas saber para entender qué hay detrás de una página web y por qué es necesario.",
    image: "/public/web3.png",
    date: "4 min de lectura",
    link: "/blog/dominio-hosting-ssl",
  },
];

function BlogPreview() {
  return (
    <section className="blog-preview" id="blog">
      <div className="blog-preview-container">

        {/* HEADER */}
        <motion.div
          className="blog-preview-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="blog-preview-heading">

            <span className="blog-preview-label">
              Nuestro blog
            </span>

            <h2>
              Aprende e
              <span> inspírate.</span>
            </h2>

            <p>
              Explora tendencias, consejos y recursos para llevar
              tu negocio al siguiente nivel.
            </p>

          </div>

          <motion.a
            href="/blog"
            className="blog-preview-button"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            Ver todos los blogs
            <ArrowUpRight size={17} />
          </motion.a>

        </motion.div>

        {/* BLOGS */}
        <div className="blog-preview-grid">

          {/* BLOG PRINCIPAL */}
          <motion.a
            href={blogs[0].link}
            className="blog-card blog-card-featured"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="blog-image">

              <img
                src={blogs[0].image}
                alt={blogs[0].title}
              />

              <div className="blog-image-overlay" />

              <div className="blog-card-number">
                01
              </div>

              <div className="blog-card-arrow">
                <ArrowUpRight size={22} />
              </div>

            </div>

            <div className="blog-card-content">

              <div className="blog-card-meta">
                <span>{blogs[0].category}</span>
                <span>{blogs[0].date}</span>
              </div>

              <h3>
                {blogs[0].title}
              </h3>

              <p>
                {blogs[0].description}
              </p>

              <span className="blog-read">
                Leer artículo
                <ArrowUpRight size={15} />
              </span>

            </div>
          </motion.a>

          {/* BLOGS SECUNDARIOS */}
          <div className="blog-secondary">

            {blogs.slice(1).map((blog, index) => (
              <motion.a
                href={blog.link}
                className="blog-card blog-card-small"
                key={blog.id}
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                }}
              >

                <div className="blog-small-image">

                  <img
                    src={blog.image}
                    alt={blog.title}
                  />

                  <div className="blog-image-overlay" />

                  <div className="blog-card-arrow">
                    <ArrowUpRight size={19} />
                  </div>

                </div>

                <div className="blog-small-content">

                  <div className="blog-card-meta">
                    <span>{blog.category}</span>
                    <span>{blog.date}</span>
                  </div>

                  <h3>
                    {blog.title}
                  </h3>

                  <p>
                    {blog.description}
                  </p>

                  <span className="blog-read">
                    Leer artículo
                    <ArrowUpRight size={15} />
                  </span>

                </div>

              </motion.a>
            ))}

          </div>

        </div>

        {/* FINAL */}
        <motion.div
          className="blog-preview-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>
            DELUMIS / BLOG
          </span>

          <p>
            Ideas para crear, mejorar y hacer crecer tu presencia digital.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default BlogPreview;