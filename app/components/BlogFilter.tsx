'use client'

import { useMemo, useState } from 'react'
import {
  BlogPostMeta,
  formatCategoryLabel,
  getCategoryStyle,
} from '../../lib/blog-shared'
import BlogPostCard from './BlogPostCard'

function normalizeCategory(category?: string): string {
  return (category || 'general').toLowerCase()
}

interface BlogFilterProps {
  posts: BlogPostMeta[]
}

export default function BlogFilter({ posts }: BlogFilterProps) {
  const categories = useMemo(() => {
    const counts = new Map<string, number>()
    for (const post of posts) {
      const key = normalizeCategory(post.category)
      counts.set(key, (counts.get(key) || 0) + 1)
    }
    return [...counts.entries()]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([key, count]) => ({ key, count }))
  }, [posts])

  const [selected, setSelected] = useState<string[]>(() =>
    categories.map((c) => c.key)
  )

  const filtered = useMemo(
    () => posts.filter((post) => selected.includes(normalizeCategory(post.category))),
    [posts, selected]
  )

  function toggleCategory(key: string) {
    setSelected((prev) => {
      if (prev.includes(key)) {
        if (prev.length === 1) return prev
        return prev.filter((c) => c !== key)
      }
      return [...prev, key]
    })
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">No posts yet</h2>
        <p className="text-gray-600">Check back soon for new content!</p>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 text-center mb-4">
          Filter by type
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map(({ key, count }) => {
            const style = getCategoryStyle(key)
            const isActive = selected.includes(key)
            return (
              <button
                key={key}
                type="button"
                onClick={() => toggleCategory(key)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider border transition-all duration-200 ${
                  isActive
                    ? `${style.bg} ${style.text} ${style.border} shadow-sm`
                    : 'bg-white text-gray-400 border-gray-200 hover:border-gray-300 hover:text-gray-600'
                }`}
              >
                {formatCategoryLabel(key)}
                <span
                  className={`normal-case tracking-normal text-xs font-medium ${
                    isActive ? 'opacity-80' : 'opacity-60'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">No matching posts</h2>
          <p className="text-gray-600">Try selecting a different category.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {filtered.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
