import React from "react"
import { renderToStaticMarkup } from "react-dom/server.node"
import data from "./data/index.json"
import HeroSection from "./Pages/Home/HeroSection"
import MyPortfolio from "./Pages/Home/MyPortfolio"

const render = (component) => {
  const root = document.createElement("div")
  root.innerHTML = renderToStaticMarkup(component)
  return root
}

test("hero renders the approved headline and all three exact resume destinations", () => {
  const root = render(<HeroSection />)
  expect(root.querySelector("h1").textContent).toBe(data.profile.headline)
  for (const resume of data.profile.resumes) {
    const link = [...root.querySelectorAll("a")].find((item) => item.textContent === resume.label)
    expect(link).toBeDefined()
    expect(link.getAttribute("href")).toBe(resume.url)
    expect(link.getAttribute("rel")).toBe("noopener noreferrer")
  }
})

test("selected work renders marketing before AI and keeps the archive below both", () => {
  const root = render(<MyPortfolio />)
  const groups = [...root.querySelectorAll("[data-project-group]")]
  expect(groups.map((group) => group.dataset.projectGroup)).toEqual(["marketing", "ai-business"])
  expect(groups.map((group) => group.querySelector("h3").textContent)).toEqual(["Marketing technology", "AI and business systems"])
  expect(groups.map((group) => group.querySelectorAll("article").length)).toEqual([3, 6])
  expect(root.querySelectorAll(".project-card").length).toBe(data.portfolio.length)
  expect(root.querySelectorAll(".earlier-work-card").length).toBe(8)
  expect(groups[1].compareDocumentPosition(root.querySelector(".earlier-work")) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  const titles = [...root.querySelectorAll(".project-card h4")].map((heading) => heading.textContent)
  expect(titles).toEqual(data.portfolio.map((project) => project.title))
})
