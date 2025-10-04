"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Star, GitFork, AlertCircle } from "lucide-react"
import type { GitHubRepo } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

export function GitHubRepos() {
  const [repos, setRepos] = React.useState<GitHubRepo[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)
  const [page, setPage] = React.useState(1)
  const [hasMore, setHasMore] = React.useState(false)
  const [isFallback, setIsFallback] = React.useState(false)

  React.useEffect(() => {
    fetchRepos()
  }, [page])

  const fetchRepos = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/github/repos?page=${page}&per_page=6`)

      if (!response.ok) {
        throw new Error("Failed to fetch repositories")
      }

      const data = await response.json()
      setRepos((prev) => (page === 1 ? data.repos : [...prev, ...data.repos]))
      setHasMore(data.hasMore)
      setIsFallback(data.fallback || false)
      setError(null)
    } catch (err) {
      setError("Impossible de charger les dépôts GitHub")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const loadMore = () => {
    setPage((prev) => prev + 1)
  }

  if (loading && page === 1) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-6 bg-muted rounded w-3/4 mb-2" />
              <div className="h-4 bg-muted rounded w-full" />
            </CardHeader>
            <CardContent>
              <div className="h-4 bg-muted rounded w-1/2" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (error && repos.length === 0) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="space-y-6">
      {isFallback && (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Affichage des données en cache. Les dépôts GitHub en temps réel seront disponibles prochainement.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo, index) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <Card className="h-full flex flex-col hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg flex items-start gap-2">
                  <Github className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{repo.name}</span>
                </CardTitle>
                {repo.description && <CardDescription className="line-clamp-2">{repo.description}</CardDescription>}
              </CardHeader>

              <CardContent className="flex-1">
                {/* Topics */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  {repo.language && (
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <span>{repo.language}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
                  <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Voir le code
                  </Link>
                </Button>
                {repo.homepage && (
                  <Button asChild size="sm" className="flex-1">
                    <Link href={repo.homepage} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <Button onClick={loadMore} disabled={loading} variant="outline">
            {loading ? "Chargement..." : "Charger plus"}
          </Button>
        </div>
      )}
    </div>
  )
}
