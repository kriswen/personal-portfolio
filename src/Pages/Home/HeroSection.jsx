const resumeUrl = `${process.env.PUBLIC_URL}/Kris-Wen-Resume-2026.pdf`

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero">
      <div className="hero__content">
        <p className="eyebrow">Software engineer · Applied AI · Business systems</p>
        <h1>I build software that turns <em>complex operations</em> into clear action.</h1>
        <p className="hero__lede">
          I connect product engineering, AI agents, and real business workflows—
          from enterprise measurement at American Express to manufacturing systems
          built around ERPNext and Cloudflare.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#MyPortfolio">Explore selected work <span aria-hidden="true">↘</span></a>
          <a className="button button--secondary" href={resumeUrl} target="_blank" rel="noreferrer">View résumé</a>
        </div>
        <ul className="hero__proof" aria-label="Career highlights">
          <li><strong>40%</strong><span>less manual AI validation review</span></li>
          <li><strong>±2%</strong><span>global impression parity</span></li>
          <li><strong>15 hrs</strong><span>weekly data entry eliminated</span></li>
        </ul>
      </div>
      <div className="hero__portrait">
        <div className="hero__portrait-frame">
          <img src={`${process.env.PUBLIC_URL}/img/hero-img.png`} alt="Kris Wen" />
        </div>
        <div className="hero__status"><span></span> San Francisco Bay Area</div>
      </div>
    </section>
  )
}
