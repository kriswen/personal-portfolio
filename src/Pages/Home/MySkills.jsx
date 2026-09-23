import data from "../../data/index.json"

export default function MySkills() {
  return (
    <section className="section section--muted" id="Expertise">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Expertise</p>
          <h2>From ambiguous workflow to verified system.</h2>
          <p>
            I combine software engineering, enterprise integration, and applied AI
            to deliver tools people can safely use in daily operations.
          </p>
        </div>
        <div className="expertise-grid">
          {data.skills.map((item) => (
            <article key={item.id} className="expertise-card">
              <span className="mono-label">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
