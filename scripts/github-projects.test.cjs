const test = require("node:test")
const assert = require("node:assert/strict")

const {
  normalizeGitHubResponse,
  mergeMetadata,
} = require("./fetch-github-projects.cjs")

test("normalizes trusted metadata for the expected repository", () => {
  const result = normalizeGitHubResponse(
    {
      full_name: "kriswen/award-flight-finder",
      html_url: "https://github.com/kriswen/award-flight-finder",
      description: "AI-powered award flight finder",
      homepage: "",
      language: "TypeScript",
      pushed_at: "2026-09-21T23:09:31Z",
      archived: false,
      fork: false,
    },
    "kriswen/award-flight-finder"
  )

  assert.deepEqual(result, {
    repo: "kriswen/award-flight-finder",
    url: "https://github.com/kriswen/award-flight-finder",
    description: "AI-powered award flight finder",
    homepage: "",
    language: "TypeScript",
    pushedAt: "2026-09-21T23:09:31Z",
  })
})

test("rejects metadata returned for a different repository", () => {
  assert.equal(
    normalizeGitHubResponse(
      {
        full_name: "someone/else",
        html_url: "https://github.com/someone/else",
      },
      "kriswen/award-flight-finder"
    ),
    null
  )
})

test("merges successful updates without dropping offline fallback data", () => {
  const fallback = {
    "kriswen/heartbeat-quest": { language: "TypeScript", pushedAt: "old" },
    "kriswen/LINE-app": { language: "JavaScript", pushedAt: "old" },
  }
  const updates = {
    "kriswen/heartbeat-quest": { language: "TypeScript", pushedAt: "new" },
  }

  assert.deepEqual(mergeMetadata(fallback, updates), {
    "kriswen/heartbeat-quest": { language: "TypeScript", pushedAt: "new" },
    "kriswen/LINE-app": { language: "JavaScript", pushedAt: "old" },
  })
})
