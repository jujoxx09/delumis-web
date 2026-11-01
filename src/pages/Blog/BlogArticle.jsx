import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

import blogArticles from "../../data/blogArticles";

import ComoConseguirClientesGoogle from "../../components/Blog/Articles/ComoConseguirClientesGoogle";
import ComoCrearWebQueConvierta from "../../components/Blog/Articles/ComoCrearWebQueConvierta";
//import TendenciasDisenoWeb from "../../components/Blog/articles/TendenciasDisenoWeb";
//import ComoCrearWebQueConvierta from "../../components/Blog/articles/ComoCrearWebQueConvierta";
//import EstrategiaDigitalNegocio from "../../components/Blog/articles/EstrategiaDigitalNegocio";
//import WebMinimalista from "../../components/Blog/articles/WebMinimalista";
import ErroresPaginaWeb from "../../components/Blog/Articles/ErroresPaginaWeb";
import SeoContenido from "../../components/Blog/Articles/SeoContenido";
//import LandingPagesConversion from "../../components/Blog/articles/LandingPagesConversion";

import "./BlogArticle.css";


/* =====================================================
   SELECTOR DE ARTÍCULOS
===================================================== */

const articleComponents = {
  "como-conseguir-mas-clientes-google":
    ComoConseguirClientesGoogle,

  "como-crear-web-que-convierta":
    ComoCrearWebQueConvierta,

  "errores-pagina-web":
    ErroresPaginaWeb,

  "seo-contenido-2026":
    SeoContenido,

/*"tendencias-diseno-web-2026":
    TendenciasDisenoWeb,

  "como-crear-web-que-convierta":
    ComoCrearWebQueConvierta,

  "estrategia-digital-negocio":
    EstrategiaDigitalNegocio,

  "web-minimalista-2026":
    WebMinimalista,




  "landing-pages-conversion":
    LandingPagesConversion, */
};


const BlogArticle = () => {

  const { slug } = useParams();


  /* =====================================================
     BUSCAR DATOS DEL ARTÍCULO
  ===================================================== */

  const article = blogArticles.find(
    (item) => item.slug === slug
  );


  /* =====================================================
     BUSCAR COMPONENTE DEL ARTÍCULO
  ===================================================== */

  const ArticleComponent = articleComponents[slug];


  /* =====================================================
     ARTÍCULO NO EXISTE
  ===================================================== */

  if (!article || !ArticleComponent) {

    return (
      <main className="blog-article-not-found">

        <div className="blog-article-not-found-content">

          <span>404</span>

          <h1>
            Artículo no encontrado
          </h1>

          <p>
            El artículo que buscas no existe
            o puede que haya sido eliminado.
          </p>

          <Link
            to="/blog"
            className="blog-back-button"
          >
            <ArrowLeft size={18} />

            Volver al blog
          </Link>

        </div>

      </main>
    );
  }


  return (

    <main className="blog-article">


      {/* =================================================
          HERO
      ================================================= */}

      <section className="blog-article-hero">

        <div className="blog-article-hero-background">

          <img
            src={article.image}
            alt={article.title}
          />

        </div>


        <div className="blog-article-hero-overlay" />


        <motion.div
          className="blog-article-hero-content"

          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}
        >

          <Link
            to="/blog"
            className="blog-article-back"
          >
            <ArrowLeft size={18} />

            Volver al blog
          </Link>


          {article.category && (

            <span className="blog-article-category">
              {article.category}
            </span>

          )}


          <h1>
            {article.title}
          </h1>


          {article.excerpt && (

            <p className="blog-article-excerpt">
              {article.excerpt}
            </p>

          )}


          <div className="blog-article-meta">

            {article.date && (

              <span>
                <Calendar size={17} />

                {article.date}
              </span>

            )}


            {article.readTime && (

              <span>
                <Clock size={17} />

                {article.readTime}
              </span>

            )}

          </div>

        </motion.div>

      </section>


      {/* =================================================
          CONTENIDO DEL ARTÍCULO
      ================================================= */}

      <motion.article
        className="blog-article-content"

        initial={{
          opacity: 0,
          y: 25,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.7,
          delay: 0.15,
        }}
      >

        <ArticleComponent />

      </motion.article>


      {/* =================================================
          VOLVER AL BLOG
      ================================================= */}

      <section className="blog-article-footer">

        <Link
          to="/blog"
          className="blog-back-button"
        >
          <ArrowLeft size={18} />

          Ver todos los artículos
        </Link>

      </section>

    </main>
  );
};


export default BlogArticle;


