import {useEffect, useState} from "react"

const links = [
  ["Work", "#MyPortfolio"],
  ["Capabilities", "#Capabilities"],
  ["Experience", "#Experience"],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener("resize", close)
    return () => window.removeEventListener("resize", close)
  }, [])

  return (
    <header className="site-header">
      <a className="wordmark" href="#heroSection" aria-label="Kris Wen, home"><span>KW</span>Kris Wen</a>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
        <span></span><span></span><span></span><span className="sr-only">Toggle navigation</span>
      </button>
      <nav id="site-nav" className={open ? "site-nav site-nav--open" : "site-nav"} aria-label="Primary navigation">
        {links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <a className="header-contact" href="#Contact">Let’s talk <span aria-hidden="true">↗</span></a>
    </header>
  )
}
