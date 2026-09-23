import data from "../../data/index.json"
import githubMetadata from "../../data/github-projects.json"

function formatUpdatedDate(value) {
  if (!value) return ""
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value))
}

export default function MyPortfolio() {
  return (
    <section className="section" id="MyPortfolio">
      <div className="section-shell">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Selected projects · 2026</p>
            <h2>Operational products, not demo prompts.</h2>
          </div>
          <a
            href={data.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            View all GitHub repositories <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="project-grid">
          {data.portfolio.map((project, index) => {
            const metadata = project.githubRepo
              ? githubMetadata[project.githubRepo]
              : null
            const githubUrl = metadata?.url || ""
            const updated = formatUpdatedDate(metadata?.pushedAt)

            return (
              <article
                key={project.id}
                className={`project-card project-card--${project.accent} ${index === 0 ? "project-card--featured" : ""}`}
              >
                <div className="project-card__visual" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div className="project-card__signal">
                    <i /><i /><i />
                  </div>
                </div>
                <div className="project-card__body">
                  <p className="project-card__kind">{project.kind}</p>
                  <h3>{project.title}</h3>
                  <p className="project-card__description">{project.description}</p>
                  <p className="project-card__outcome">{project.outcome}</p>
                  <ul className="tag-list" aria-label={`${project.title} technologies`}>
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                  <div className="project-card__footer">
                    <div className="project-card__links">
                      {githubUrl && (
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                          GitHub <span aria-hidden="true">↗</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          Live project <span aria-hidden="true">↗</span>
                        </a>
                      )}
                      {!githubUrl && !project.liveUrl && (
                        <span className="private-label">{project.availability}</span>
                      )}
                    </div>
                    {updated && <span className="updated-label">Updated {updated}</span>}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
        <p className="metadata-note">
          Project selection and case-study copy are curated. Public repository
          language and update dates are refreshed from GitHub during each build,
          with committed fallback data for offline builds.
        </p>

        <div className="earlier-work">
          <div className="earlier-work__heading">
            <div>
              <p className="eyebrow">Project archive</p>
              <h3>Earlier work</h3>
            </div>
            <p>
              Previous web, API, and e-commerce projects that document the path
              to my current systems work.
            </p>
          </div>
          <div className="earlier-work-grid">
            {data.earlierPortfolio.map((project) => (
              <article key={project.id} className="earlier-work-card">
                <img
                  className="earlier-work-card__image"
                  src={`${process.env.PUBLIC_URL}/${project.thumbnail}`}
                  alt={`${project.title} original project thumbnail`}
                  loading="lazy"
                />
                <div className="earlier-work-card__body">
                  <div>
                    <p className="earlier-work-card__tech">{project.technologies}</p>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                  </div>
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      View source <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="earlier-work-card__archive">Original project snapshot</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
