import {useEffect, useState} from "react"
import {Link} from "react-scroll"

const links = [
  {label: "Expertise", to: "Expertise"},
  {label: "Projects", to: "MyPortfolio"},
  {label: "Experience", to: "Experience"},
  {label: "About", to: "AboutMe"},
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const closeOnWideScreen = () => {
      if (window.innerWidth > 900) setOpen(false)
    }
    window.addEventListener("resize", closeOnWideScreen)
    return () => window.removeEventListener("resize", closeOnWideScreen)
  }, [])

  return (
    <header className="site-header">
      <nav className="navbar section-shell" aria-label="Primary navigation">
        <Link
          className="brand"
          to="heroSection"
          smooth
          offset={-72}
          duration={400}
          onClick={() => setOpen(false)}
          aria-label="Kris Wen home"
        >
          KW<span>.</span>
        </Link>
        <button
          className={`nav-toggle ${open ? "is-open" : ""}`}
          type="button"
          aria-expanded={open}
          aria-controls="primary-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((current) => !current)}
        >
          <span /><span />
        </button>
        <div id="primary-menu" className={`nav-menu ${open ? "is-open" : ""}`}>
          <ul>
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  spy
                  smooth
                  offset={-72}
                  duration={400}
                  activeClass="is-active"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            className="button button--small button--primary"
            to="Contact"
            smooth
            offset={-72}
            duration={400}
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
