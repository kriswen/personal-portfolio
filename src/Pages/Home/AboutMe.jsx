import data from "../../data/index.json"

export default function AboutMe() {
  return (
    <section className="capabilities section" id="Capabilities">
      <div className="section__intro">
        <p className="eyebrow">How I work</p>
        <h2>Engineering across the whole problem.</h2>
        <p>I am most useful where software, operations, and people meet. I translate ambiguous workflows into dependable systems—and stay close enough to production to know whether they actually work.</p>
      </div>
      <div className="capability-grid">
        {data.capabilities.map((item) => (
          <article className="capability-card" key={item.number}>
            <span className="capability-card__number">{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
