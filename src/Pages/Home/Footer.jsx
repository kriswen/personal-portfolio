import data from "../../data/index.json"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-shell footer__inner">
        <div>
          <a className="brand brand--footer" href="#heroSection" aria-label="Kris Wen home">
            KW<span>.</span>
          </a>
          <p>AI solutions, enterprise integrations, and production workflows.</p>
        </div>
        <div className="footer__links">
          <a href={data.profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={data.profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {data.profile.resumes.map((resume) => (
            <a key={resume.label} href={resume.url} target="_blank" rel="noopener noreferrer">
              {resume.label}
            </a>
          ))}
        </div>
        <p className="footer__copyright">© 2026 Kris Wen</p>
      </div>
    </footer>
  )
}
