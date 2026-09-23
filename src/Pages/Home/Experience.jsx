import data from "../../data/index.json"

export default function Experience() {
  return (
    <section className="section section--dark" id="Experience">
      <div className="section-shell">
        <div className="section-heading section-heading--dark">
          <p className="eyebrow">Experience</p>
          <h2>Engineering across product, marketing, and business systems.</h2>
        </div>
        <div className="timeline">
          {data.experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="timeline__item">
              <div className="timeline__meta">
                <p>{item.period}</p>
                <span>{item.company}</span>
              </div>
              <div className="timeline__content">
                <h3>{item.role}</h3>
                <p>{item.summary}</p>
                <strong>{item.proof}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
