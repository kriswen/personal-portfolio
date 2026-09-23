import data from "../../data/index.json"

export default function ContactMe() {
  return (
    <section id="Contact" className="section contact-section">
      <div className="section-shell contact-panel">
        <div>
          <p className="eyebrow">Let's build something useful</p>
          <h2>Have an operational problem that needs a reliable system?</h2>
          <p>
            I am open to AI solutions, forward-deployed, product engineering,
            AdTech / MarTech, and business-systems opportunities.
          </p>
        </div>
        <div className="contact-panel__actions">
          <a className="button button--light" href="mailto:kriswen99@gmail.com">
            Email Kris
          </a>
          <a
            className="button button--ghost-dark"
            href={data.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
