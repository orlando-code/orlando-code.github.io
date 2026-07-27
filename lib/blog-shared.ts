/** Client-safe blog helpers (no Node fs). */

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
  /** Absolute cover URL, resolved on the server. */
  coverSrc?: string
  coverAlt?: string
  coverFit?: 'cover' | 'contain'
  externalUrl?: string
}

export const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  research: {
    bg: 'bg-[#9be3f9]',
    text: 'text-[#0097c3]',
    border: 'border-[#0097c3]',
  },
  'long read': {
    bg: 'bg-[#0097c3]',
    text: 'text-white',
    border: 'border-[#0097c3]',
  },
  personal: {
    bg: 'bg-[#f24f26]',
    text: 'text-white',
    border: 'border-[#f24f26]',
  },
  tech: {
    bg: 'bg-[#ffef55]',
    text: 'text-gray-900',
    border: 'border-[#ffef55]',
  },
  paper: {
    bg: 'bg-[#0077b6]',
    text: 'text-white',
    border: 'border-[#0077b6]',
  },
  package: {
    bg: 'bg-[#495057]',
    text: 'text-white',
    border: 'border-[#495057]',
  },
  general: {
    bg: 'bg-[#e1c5a3]',
    text: 'text-gray-900',
    border: 'border-[#e1c5a3]',
  },
  weeknote: {
    bg: 'bg-[#e1c5a3]',
    text: 'text-gray-900',
    border: 'border-[#e1c5a3]',
  },
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

export function getCategoryStyle(category?: string) {
  if (!category) return categoryColors.general
  return categoryColors[category.toLowerCase()] || categoryColors.general
}

export function formatCategoryLabel(category?: string): string {
  if (!category) return ''
  return category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
}

export function getCategoryCoverGradient(category?: string): string {
  if (!category) return categoryCoverGradients.general
  return categoryCoverGradients[category.toLowerCase()] || categoryCoverGradients.general
}
