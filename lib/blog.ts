import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  readTime?: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  readTime?: string
  draft?: boolean
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
  const allPostsData = filePaths.map((fullPath) => {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    // Slug: relative path from postsDirectory, remove .md, replace path separators with '/'
    const relPath = path.relative(postsDirectory, fullPath)
    const slug = relPath.replace(/\.md$/, '').replace(/\\/g, '/')
    return {
      slug,
      title: matterResult.data.title || slug,
      date: matterResult.data.date || '1970-01-01',
      excerpt: matterResult.data.excerpt || '',
      readTime: matterResult.data.readTime || '',
      draft: matterResult.data.draft ?? false,
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
    const processedContent = await remark().use(html).process(matterResult.content)
    const contentHtml = processedContent.toString()
    return {
      slug,
      title: matterResult.data.title || slug,
      date: matterResult.data.date || '1970-01-01',
      excerpt: matterResult.data.excerpt || '',
      content: contentHtml,
      readTime: matterResult.data.readTime || '',
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
  return filePaths.map((fullPath) => {
    const relPath = path.relative(postsDirectory, fullPath)
    return {
      params: {
        slug: relPath.replace(/\.md$/, '').replace(/\\/g, '/'),
      },
    }
  })
} 