import data from "../../data/index.json"

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero section-shell">
      <div className="hero__content">
        <p className="eyebrow">{data.profile.eyebrow}</p>
        <h1>
          Building AI-enabled systems that work in the <span>real world.</span>
        </h1>
        <p className="hero__lede">{data.profile.summary}</p>
        <div className="button-row">
          <a className="button button--primary" href="#MyPortfolio">
            View selected work
          </a>
          <a
            className="button button--secondary"
            href={data.profile.resumes[0].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            AI Solutions Resume
          </a>
        </div>
        <div className="hero__facts" aria-label="Career highlights">
          <div>
            <strong>Since 2014</strong>
            <span>Software & systems experience</span>
          </div>
          <div>
            <strong>Production-first</strong>
            <span>Security, testing & verification</span>
          </div>
          <div>
            <strong>Human-centered AI</strong>
            <span>Grounded output with review boundaries</span>
          </div>
        </div>
      </div>

      <div className="hero__system" aria-label="How I deliver operational AI systems">
        <div className="system-card">
          <div className="system-card__header">
            <span className="status-dot" aria-hidden="true" />
            <span>operational-system.ts</span>
            <span className="status-pill">verified</span>
          </div>
          <div className="system-flow" role="list">
            <div role="listitem"><span>01</span><strong>Discover</strong><small>Workflow & constraints</small></div>
            <div role="listitem"><span>02</span><strong>Integrate</strong><small>AI, APIs & source data</small></div>
            <div role="listitem"><span>03</span><strong>Guard</strong><small>Approval & failure safety</small></div>
            <div role="listitem"><span>04</span><strong>Verify</strong><small>Tests & production evidence</small></div>
          </div>
          <div className="system-card__footer">
            <code>signal → decision → action → evidence</code>
          </div>
        </div>
      </div>
    </section>
  )
}
