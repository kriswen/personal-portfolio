import data from "../../data/index.json"

export default function Experience() {
  return (
    <section className="experience section" id="Experience">
      <div className="section__intro section__intro--light">
        <p className="eyebrow">Experience</p>
        <h2>From customer experience to enterprise platforms.</h2>
      </div>
      <div className="timeline">
        {data.experience.map((item) => (
          <article className="timeline__item" key={`${item.company}-${item.period}`}>
            <div className="timeline__meta">
              <p>{item.period}</p>
              <span>{item.company}</span>
            </div>
            <div className="timeline__content">
              <h3>{item.role}</h3>
              <p>{item.summary}</p>
              <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
