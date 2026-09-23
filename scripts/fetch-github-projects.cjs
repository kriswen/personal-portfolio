const fs = require("node:fs")
const https = require("node:https")
const path = require("node:path")

function normalizeGitHubResponse(response, expectedRepo) {
  if (!response || typeof response !== "object") return null
  if (
    typeof response.full_name !== "string" ||
    response.full_name.toLowerCase() !== expectedRepo.toLowerCase()
  ) {
    return null
  }

  let url
  try {
    url = new URL(response.html_url)
  } catch {
    return null
  }

  if (
    url.protocol !== "https:" ||
    url.hostname !== "github.com" ||
    url.pathname.replace(/^\/+|\/+$/g, "").toLowerCase() !==
      expectedRepo.toLowerCase()
  ) {
    return null
  }

  return {
    repo: expectedRepo,
    url: url.toString().replace(/\/$/, ""),
    description:
      typeof response.description === "string" ? response.description : "",
    homepage: typeof response.homepage === "string" ? response.homepage : "",
    language: typeof response.language === "string" ? response.language : "",
    pushedAt: typeof response.pushed_at === "string" ? response.pushed_at : "",
  }
}

function mergeMetadata(fallback, updates) {
  return {...fallback, ...updates}
}

function fetchRepository(repo) {
  return new Promise((resolve, reject) => {
    const request = https.get(
      `https://api.github.com/repos/${encodeURIComponent(repo.split("/")[0])}/${encodeURIComponent(repo.split("/")[1])}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "kriswen-portfolio-build",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        timeout: 8000,
      },
      (response) => {
        let body = ""
        response.setEncoding("utf8")
        response.on("data", (chunk) => {
          body += chunk
        })
        response.on("end", () => {
          if (response.statusCode !== 200) {
            reject(new Error(`GitHub returned ${response.statusCode} for ${repo}`))
            return
          }
          try {
            resolve(JSON.parse(body))
          } catch {
            reject(new Error(`GitHub returned invalid JSON for ${repo}`))
          }
        })
      }
    )
    request.on("timeout", () => request.destroy(new Error(`Timed out fetching ${repo}`)))
    request.on("error", reject)
  })
}

async function refreshMetadata({rootDir = path.resolve(__dirname, "..")} = {}) {
  const contentPath = path.join(rootDir, "src", "data", "index.json")
  const outputPath = path.join(rootDir, "src", "data", "github-projects.json")
  const content = JSON.parse(fs.readFileSync(contentPath, "utf8"))
  const fallback = fs.existsSync(outputPath)
    ? JSON.parse(fs.readFileSync(outputPath, "utf8"))
    : {}
  const repos = [
    ...new Set(
      content.portfolio
        .map((project) => project.githubRepo)
        .filter((repo) => typeof repo === "string" && repo.includes("/"))
    ),
  ]

  const updates = {}
  const results = await Promise.allSettled(
    repos.map(async (repo) => {
      const response = await fetchRepository(repo)
      const normalized = normalizeGitHubResponse(response, repo)
      if (!normalized) throw new Error(`Rejected unexpected metadata for ${repo}`)
      updates[repo] = normalized
    })
  )

  const failures = results.filter((result) => result.status === "rejected")
  const merged = mergeMetadata(fallback, updates)
  fs.writeFileSync(outputPath, `${JSON.stringify(merged, null, 2)}\n`)

  if (failures.length) {
    for (const failure of failures) {
      console.warn(`[github-metadata] ${failure.reason.message}`)
    }
    console.warn("[github-metadata] Kept committed fallback metadata for failed requests.")
  }
  console.log(
    `[github-metadata] ${Object.keys(updates).length}/${repos.length} repositories refreshed.`
  )
  return {updated: Object.keys(updates).length, total: repos.length, failures}
}

if (require.main === module) {
  refreshMetadata().catch((error) => {
    console.warn(`[github-metadata] ${error.message}`)
    console.warn("[github-metadata] Build will continue with committed fallback metadata.")
  })
}

module.exports = {
  mergeMetadata,
  normalizeGitHubResponse,
  refreshMetadata,
}
