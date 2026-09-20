import data from "../../data/index.json"

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>
}

export default function MyPortfolio() {
  return (
    <section className="work section" id="MyPortfolio">
      <div className="section__heading-row">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>Products built for real use.</h2>
        </div>
        <a className="text-link" href="https://github.com/kriswen" target="_blank" rel="noreferrer">All GitHub projects <ArrowIcon /></a>
      </div>
      <div className="project-grid">
        {data.portfolio.map((project, index) => (
          <article className={`project-card project-card--${project.id}`} key={project.id}>
            <div className="project-card__visual" aria-hidden="true">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div className="project-card__diagram"><i></i><i></i><i></i></div>
            </div>
            <div className="project-card__body">
              <p className="project-card__eyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="project-card__outcome"><span>Impact</span>{project.outcome}</p>
              <ul className="tag-list" aria-label={`${project.title} technologies`}>
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              <div className="project-card__links">
                {project.url ? <a href={project.url} target="_blank" rel="noreferrer">{project.link} <ArrowIcon /></a> : <span>{project.link}</span>}
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live demo <ArrowIcon /></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
