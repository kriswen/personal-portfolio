import data from "./index.json"

describe("2026 portfolio content", () => {
  test("positions Kris for AI solutions and production engineering", () => {
    expect(data.profile.role).toBe("AI Solutions Engineer")
    expect(data.profile.summary).toMatch(/secure, testable production systems/i)
  })

  test("features a curated set of current projects", () => {
    expect(data.portfolio.map((project) => project.id)).toEqual([
      "fuho-operations",
      "award-flight-finder",
      "packoptimizer",
      "heartbeat-quest",
      "line-reminder",
    ])
    expect(data.portfolio.every((project) => project.year === 2026)).toBe(true)
  })

  test("preserves all eight earlier projects in a secondary collection", () => {
    expect(data.earlierPortfolio.map((project) => project.title)).toEqual([
      "Daily Cat",
      "Weather Search",
      "Todo List App",
      "Tindog",
      "Travel Site",
      "Resolve Biosciences",
      "SIIG, Inc.",
      "Crystal Lighting Palace",
    ])
  })

  test("uses archived thumbnails and does not link former client work to current sites", () => {
    expect(data.earlierPortfolio.every((project) => project.thumbnail)).toBe(true)
    expect(
      data.earlierPortfolio
        .filter((project) => ["resolve-biosciences", "siig"].includes(project.id))
        .every((project) => project.url === "")
    ).toBe(true)
  })

  test("keeps public GitHub enrichment explicit", () => {
    expect(
      data.portfolio
        .filter((project) => project.githubRepo)
        .map((project) => project.githubRepo)
    ).toEqual([
      "kriswen/award-flight-finder",
      "kriswen/container-wood-case-calculator",
      "kriswen/heartbeat-quest",
      "kriswen/LINE-app",
    ])
  })

  test("uses the authoritative 2026 employment timeline", () => {
    expect(data.experience[0]).toMatchObject({
      company: "American Express",
      role: "Software Engineer, AdTech",
      period: "May 2024 — August 2026",
    })
  })

  test("uses Google Drive resume links so updates do not require a site commit", () => {
    expect(data.profile.resumes).toEqual([
      {
        label: "AI Solutions Resume",
        url: "https://drive.google.com/file/d/1hvGR8tR1qqVjFaxVSWH4yRynv4TkBHXU/view?usp=sharing",
      },
      {
        label: "AdTech / MarTech Resume",
        url: "https://drive.google.com/file/d/10u3TKipZbsC-pBlxpIB6CN2vd3eTV0Oq/view?usp=sharing",
      },
    ])
  })

  test("contains no placeholder copy", () => {
    expect(JSON.stringify(data)).not.toMatch(/lorem ipsum|coming soon|\.\.\.\.\.\./i)
  })
})
