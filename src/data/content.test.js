import data from "./index.json"

describe("2026 portfolio content", () => {
  test("positions Kris for marketing and business automation", () => {
    expect(data.profile.role).toBe("Marketing Technology & Automation Engineer")
    expect(data.profile.headline).toBe("Building reliable marketing and business automation.")
    expect(data.profile.summary).toBe("I connect marketing platforms, enterprise systems, and AI-assisted workflows to reduce manual work and improve measurable outcomes.")
  })

  test("features a curated set of current projects", () => {
    expect(data.portfolio.map((project) => project.id)).toEqual([
      "amex-marketing-measurement",
      "mancini-marketing-automation",
      "resolve-campaigns",
      "fuho-operations",
      "controlled-knowledge",
      "award-flight-finder",
      "packoptimizer",
      "heartbeat-quest",
      "line-reminder",
    ])
    expect(data.portfolioGroups.map((group) => group.id)).toEqual(["marketing", "ai-business"])
    expect(data.portfolioGroups.map((group) => group.title)).toEqual(["Marketing technology", "AI and business systems"])
    expect(data.portfolio.filter((project) => project.group === "marketing").map((project) => project.year)).toEqual([2026, 2024, 2023])
    expect(data.portfolio.every((project) => data.portfolioGroups.some((group) => group.id === project.group))).toBe(true)
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
      company: "FUHO",
      role: "AI Solutions Engineer — Independent Consultant",
      period: "August 2026 — Present",
    })
    expect(data.experience[1]).toMatchObject({
      company: "American Express",
      role: "Software Engineer, AdTech",
      period: "May 2024 — August 2026",
    })
  })

  test("bounds AI and privacy claims to confirmed work", () => {
    const ai = data.skills.find((item) => item.id === "applied-ai")
    expect(ai.description).toMatch(/human.review/i)
    expect(ai.description).not.toMatch(/evaluation|observability/i)
    expect(data.portfolio.find((item) => item.id === "packoptimizer").technologies).not.toContain("Zustand")
    expect(JSON.stringify(data)).not.toMatch(/100%.*compliance|privacy-safe/i)
  })

  test("uses Google Drive resume links so updates do not require a site commit", () => {
    expect(data.profile.resumes).toEqual([
      {
        label: "Marketing Technology & Automation Resume",
        url: "https://drive.google.com/file/d/1TwilJ8wcc8jjRpO9CEurCFgxf1rhM1Wa/view?usp=drive_link",
      },
      {
        label: "AI Solutions Resume",
        url: "https://drive.google.com/file/d/1hvGR8tR1qqVjFaxVSWH4yRynv4TkBHXU/view?usp=sharing",
      },
      {
        label: "Software Engineer Resume",
        url: "https://drive.google.com/file/d/10u3TKipZbsC-pBlxpIB6CN2vd3eTV0Oq/view?usp=sharing",
      },
    ])
  })

  test("contains no placeholder copy", () => {
    expect(JSON.stringify(data)).not.toMatch(/lorem ipsum|coming soon|\.\.\.\.\.\./i)
  })
})
