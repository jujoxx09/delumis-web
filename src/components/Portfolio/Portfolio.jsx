import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfolio</h2>

      <div className="portfolio__grid">
        <div className="project">Proyecto 1</div>
        <div className="project">Proyecto 2</div>
        <div className="project">Proyecto 3</div>
      </div>
    </section>
  );
}

export default Portfolio;