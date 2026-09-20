import data from "./index.json"

describe("portfolio content", () => {
  test("leads with current, evidence-backed project work", () => {
    expect(data.portfolio.map((project) => project.title)).toEqual([
      "FUHO Operations Hub",
      "Award Flight Finder",
      "PackOptimizer",
      "Heartbeat Quest",
    ])
    expect(data.portfolio[0].technologies).toEqual(
      expect.arrayContaining(["Cloudflare Workers", "ERPNext", "D1", "RAG"])
    )
  })

  test("represents the complete professional timeline", () => {
    expect(data.experience.map((role) => role.company)).toEqual([
      "American Express",
      "Mancini's Sleepworld",
      "Resolve Biosciences",
      "SIIG, Inc.",
    ])
    expect(data.experience[0].period).toBe("May 2024 — Present")
  })

  test("contains no placeholder or coming-soon copy", () => {
    const content = JSON.stringify(data).toLowerCase()
    expect(content).not.toMatch(/lorem ipsum|coming soon|\.\.\.\.\.\./)
  })
})
