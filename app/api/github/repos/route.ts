import { NextResponse } from "next/server"
import type { GitHubRepo } from "@/lib/types"

// Cache pour éviter de dépasser les limites de l'API GitHub
let cachedRepos: GitHubRepo[] | null = null
let cacheTimestamp: number | null = null
const CACHE_DURATION = 1000 * 60 * 10 // 10 minutes

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = Number.parseInt(searchParams.get("page") || "1")
  const perPage = Number.parseInt(searchParams.get("per_page") || "6")

  try {
    // Vérifier le cache
    const now = Date.now()
    if (cachedRepos && cacheTimestamp && now - cacheTimestamp < CACHE_DURATION) {
      const start = (page - 1) * perPage
      const end = start + perPage
      const paginatedRepos = cachedRepos.slice(start, end)

      return NextResponse.json({
        repos: paginatedRepos,
        total: cachedRepos.length,
        page,
        perPage,
        hasMore: end < cachedRepos.length,
      })
    }

    // Récupérer depuis GitHub
    const username = process.env.GITHUB_USERNAME || "fpswagg"
    const token = process.env.GITHUB_TOKEN

    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
    }

    if (token) {
      headers.Authorization = `Bearer ${token}`
    }

    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
      headers,
      next: { revalidate: 600 }, // Revalider toutes les 10 minutes
    })

    if (!response.ok) {
      // Si rate limit, utiliser le fallback JSON local
      if (response.status === 403 || response.status === 429) {
        console.warn("GitHub API rate limit reached, using fallback data")
        const fallbackRepos = await import("@/lib/data/github-fallback.json")
        cachedRepos = fallbackRepos.default as GitHubRepo[]
        cacheTimestamp = now

        const start = (page - 1) * perPage
        const end = start + perPage
        const paginatedRepos = cachedRepos.slice(start, end)

        return NextResponse.json({
          repos: paginatedRepos,
          total: cachedRepos.length,
          page,
          perPage,
          hasMore: end < cachedRepos.length,
          fallback: true,
        })
      }

      throw new Error(`GitHub API error: ${response.status}`)
    }

    const repos: GitHubRepo[] = await response.json()

    // Filtrer les repos publics et non-forkés
    cachedRepos = repos.filter((repo) => !repo.fork && repo.visibility === "public")
    cacheTimestamp = now

    const start = (page - 1) * perPage
    const end = start + perPage
    const paginatedRepos = cachedRepos.slice(start, end)

    return NextResponse.json({
      repos: paginatedRepos,
      total: cachedRepos.length,
      page,
      perPage,
      hasMore: end < cachedRepos.length,
    })
  } catch (error) {
    console.error("Error fetching GitHub repos:", error)

    // Fallback sur les données locales en cas d'erreur
    try {
      const fallbackRepos = await import("@/lib/data/github-fallback.json")
      const repos = fallbackRepos.default as GitHubRepo[]

      const start = (page - 1) * perPage
      const end = start + perPage
      const paginatedRepos = repos.slice(start, end)

      return NextResponse.json({
        repos: paginatedRepos,
        total: repos.length,
        page,
        perPage,
        hasMore: end < repos.length,
        fallback: true,
      })
    } catch (fallbackError) {
      return NextResponse.json({ error: "Failed to fetch repositories" }, { status: 500 })
    }
  }
}
