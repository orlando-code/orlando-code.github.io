import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import { remark } from 'remark'
import remarkRehype from 'remark-rehype'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  description: string
  category?: string
  readTime?: string
  cover?: string
  coverAlt?: string
  coverFit?: 'cover' | 'contain'
  externalUrl?: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  description: string
  category?: string
  readTime?: string
  draft?: boolean
  cover?: string
  coverAlt?: string
  coverFit?: 'cover' | 'contain'
  externalUrl?: string
}

async function markdownToHtml(content: string): Promise<string> {
  const result = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(content)
  return result.toString()
}

function parseExternalUrl(value: unknown): string | undefined {
  if (typeof value !== 'string' || !value.trim()) return undefined
  return value.trim()
}

function parseCoverFit(value: unknown): 'cover' | 'contain' | undefined {
  if (value === 'contain' || value === 'cover') return value
  return undefined
}

// Category color mapping
export const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'research': {
    bg: 'bg-[#9be3f9]',
    text: 'text-[#0097c3]',
    border: 'border-[#0097c3]'
  },
  'long read': {
    bg: 'bg-[#0097c3]',
    text: 'text-white',
    border: 'border-[#0097c3]'
  },
  'personal': {
    bg: 'bg-[#f24f26]',
    text: 'text-white',
    border: 'border-[#f24f26]'
  },
  'tech': {
    bg: 'bg-[#ffef55]',
    text: 'text-gray-900',
    border: 'border-[#ffef55]'
  },
  'paper': {
    bg: 'bg-[#0077b6]',
    text: 'text-white',
    border: 'border-[#0077b6]'
  },
  'package': {
    bg: 'bg-[#495057]',
    text: 'text-white',
    border: 'border-[#495057]'
  },
  'general': {
    bg: 'bg-[#e1c5a3]',
    text: 'text-gray-900',
    border: 'border-[#e1c5a3]'
  },
  'weeknote': {
    bg: 'bg-[#e1c5a3]',
    text: 'text-gray-900',
    border: 'border-[#e1c5a3]'
  }
}

export function getCategoryStyle(category?: string) {
  if (!category) return categoryColors['general']
  return categoryColors[category.toLowerCase()] || categoryColors['general']
}

export function formatCategoryLabel(category?: string): string {
  if (!category) return ''
  return category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
}

function isDraft(value: unknown): boolean {
  return value === true || value === 'true'
}

function parsePostDate(value: unknown): string {
  if (typeof value !== 'string' || !value.trim()) return '1970-01-01'
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? '1970-01-01' : value
}

/** Resolve cover image for static export (run copy-blog-assets before build). */
function getPostDir(slug: string): string {
  return slug.includes('/') ? slug.slice(0, slug.lastIndexOf('/')) : slug
}

const COVER_IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.avif'])

function discoverCoverImage(slug: string): string | undefined {
  const postDir = getPostDir(slug)
  const dirPath = path.join(postsDirectory, postDir)
  if (!fs.existsSync(dirPath)) return undefined

  const matches = fs.readdirSync(dirPath)
    .filter((name) => {
      const ext = path.extname(name).toLowerCase()
      if (!COVER_IMAGE_EXT.has(ext)) return false
      const base = path.basename(name, ext).toLowerCase()
      return base.includes('cover')
    })
    .sort()

  if (matches.length === 0) return undefined
  return `/blog/${postDir}/${matches[0]}`
}

export function resolveCoverImage(slug: string, cover?: string): string | undefined {
  if (cover && typeof cover === 'string') {
    const trimmed = cover.trim()
    if (trimmed) {
      if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('/')) {
        return trimmed
      }
      const postDir = getPostDir(slug)
      return `/blog/${postDir}/${trimmed.replace(/^\.\//, '')}`
    }
  }
  return discoverCoverImage(slug)
}

const categoryCoverGradients: Record<string, string> = {
  research: 'from-[#0097c3] via-[#48cae4] to-[#90e0ef]',
  tech: 'from-[#495057] via-[#6c757d] to-[#ffef55]',
  paper: 'from-[#0077b6] via-[#0096c7] to-[#48cae4]',
  package: 'from-[#343a40] via-[#495057] to-[#6c757d]',
  personal: 'from-[#f24f26] via-[#ff6b4a] to-[#ffb4a2]',
  general: 'from-[#a68a64] via-[#e1c5a3] to-[#f5ebe0]',
  weeknote: 'from-[#5c677d] via-[#7d8597] to-[#bdc3c7]',
  'long read': 'from-[#0077b6] via-[#0096c7] to-[#48cae4]',
}

export function getCategoryCoverGradient(category?: string): string {
  if (!category) return categoryCoverGradients.general
  return categoryCoverGradients[category.toLowerCase()] || categoryCoverGradients.general
}

// Recursively find all .md files in a directory
function getAllMarkdownFiles(dir: string): string[] {
  let results: string[] = []
  const list = fs.readdirSync(dir)
  list.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(filePath))
    } else if (file.endsWith('.md')) {
      results.push(filePath)
    }
  })
  return results
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  const filePaths = getAllMarkdownFiles(postsDirectory)
  const allPostsData = filePaths.flatMap((fullPath) => {
    try {
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)
      if (isDraft(matterResult.data.draft)) return []

      const relPath = path.relative(postsDirectory, fullPath)
      const slug = relPath.replace(/\.md$/, '').replace(/\\/g, '/')
      return [{
        slug,
        title: matterResult.data.title || slug,
        date: parsePostDate(matterResult.data.date),
        excerpt: matterResult.data.excerpt || '',
        description: matterResult.data.description || '',
        category: matterResult.data.category || '',
        readTime: matterResult.data.readTime || '',
        cover: typeof matterResult.data.cover === 'string' ? matterResult.data.cover : undefined,
        coverAlt: typeof matterResult.data.coverAlt === 'string' ? matterResult.data.coverAlt : undefined,
        coverFit: parseCoverFit(matterResult.data.coverFit),
        externalUrl: parseExternalUrl(matterResult.data.externalUrl),
        draft: false,
      }]
    } catch {
      return []
    }
  })
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    // Find the .md file matching the slug (with possible subdirectories)
    const filePaths = getAllMarkdownFiles(postsDirectory)
    const match = filePaths.find((fullPath) => {
      const relPath = path.relative(postsDirectory, fullPath)
      return relPath.replace(/\.md$/, '').replace(/\\/g, '/') === slug
    })
    if (!match) return null
    const fileContents = fs.readFileSync(match, 'utf8')
    const matterResult = matter(fileContents)
    const contentHtml = await markdownToHtml(matterResult.content)
    if (isDraft(matterResult.data.draft)) return null

    return {
      slug,
      title: matterResult.data.title || slug,
      date: parsePostDate(matterResult.data.date),
      excerpt: matterResult.data.excerpt || '',
      content: contentHtml,
      description: matterResult.data.description || '',
      category: matterResult.data.category || '',
      readTime: matterResult.data.readTime || '',
      cover: typeof matterResult.data.cover === 'string' ? matterResult.data.cover : undefined,
      coverAlt: typeof matterResult.data.coverAlt === 'string' ? matterResult.data.coverAlt : undefined,
      coverFit: parseCoverFit(matterResult.data.coverFit),
      externalUrl: parseExternalUrl(matterResult.data.externalUrl),
    }
  } catch (error) {
    return null
  }
}

export function getAllPostSlugs(): { params: { slug: string } }[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  const filePaths = getAllMarkdownFiles(postsDirectory)
  return filePaths.flatMap((fullPath) => {
    try {
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)
      if (isDraft(matterResult.data.draft)) return []

      const relPath = path.relative(postsDirectory, fullPath)
      return [{
        params: {
          slug: relPath.replace(/\.md$/, '').replace(/\\/g, '/'),
        },
      }]
    } catch {
      return []
    }
  })
} 