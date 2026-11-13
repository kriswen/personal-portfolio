const fs = require("fs")
const path = require("path")

const read = (relativePath) =>
  fs.readFileSync(path.join(__dirname, relativePath), "utf8")

describe("portfolio page integration", () => {
  test("renders skills, projects, experience, about, and contact in order", () => {
    const home = read("Pages/Home/Homescreen/index.jsx")
    const expected = [
      "<HeroSection />",
      "<MySkills />",
      "<MyPortfolio />",
      "<Experience />",
      "<AboutMe />",
      "<ContactMe />",
    ]
    const positions = expected.map((component) => home.indexOf(component))

    expect(positions.every((position) => position >= 0)).toBe(true)
    expect(positions).toEqual([...positions].sort((a, b) => a - b))
  })

  test("project cards use committed GitHub metadata as progressive enrichment", () => {
    const portfolio = read("Pages/Home/MyPortfolio.jsx")
    expect(portfolio).toMatch(/github-projects\.json/)
    expect(portfolio).toMatch(/<article/)
    expect(portfolio).toMatch(/rel="noopener noreferrer"/)
  })

  test("renders earlier work as a visually secondary project collection", () => {
    const portfolio = read("Pages/Home/MyPortfolio.jsx")
    expect(portfolio).toMatch(/data\.earlierPortfolio\.map/)
    expect(portfolio).toMatch(/earlier-work-grid/)
    expect(portfolio).toContain("Earlier work")
    expect(portfolio).toMatch(/project\.thumbnail/)
    expect(portfolio).toMatch(/earlier-work-card__image/)
  })

  test("resume and contact actions use Google Drive and the current address", () => {
    const hero = read("Pages/Home/HeroSection.jsx")
    const contact = read("Pages/Home/ContactMe.jsx")
    expect(hero).toMatch(/data\.profile\.resumes\.map/)
    expect(hero).not.toMatch(/Kris-Wen-AI-Solutions-Resume\.pdf/)
    expect(contact).toMatch(/mailto:kriswen99@gmail\.com/)
    expect(contact).not.toMatch(/document\.getElementById/)
  })

  test("navigation exposes the current major sections", () => {
    const nav = read("Pages/Home/Navbar.jsx")
    for (const label of ["Expertise", "Projects", "Experience", "About"]) {
      expect(nav).toContain(label)
    }
  })

  test("constrains the decorative hero glow on narrow screens", () => {
    const css = read("App.css")
    const narrowRules = css.slice(css.indexOf("@media (max-width: 980px)"), css.indexOf("@media (max-width: 900px)"))
    expect(narrowRules).toMatch(/\.hero__system::before\s*\{\s*inset:\s*0;/)
  })

  test("metadata and supporting copy use the marketing and business automation positioning", () => {
    const html = new DOMParser().parseFromString(read("../public/index.html"), "text/html")
    expect(html.title).toBe("Kris Wen | Marketing Technology & Automation Engineer")
    const person = JSON.parse(html.querySelector('script[type="application/ld+json"]').textContent)
    expect(person.jobTitle).toBe("Marketing Technology & Automation Engineer")
    expect(read("Pages/Home/AboutMe.jsx")).toContain("marketing and business automation")
    expect(read("Pages/Home/ContactMe.jsx")).toContain("marketing technology")
    expect(read("Pages/Home/MySkills.jsx")).toContain("marketing platforms")
  })
})
