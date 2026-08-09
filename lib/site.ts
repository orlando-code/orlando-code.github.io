import type { Metadata } from 'next'

/** Canonical public site URL (custom domain). */
export const SITE_URL = 'https://orlando-codes.com'

export const SITE_NAME = 'Orlando Timmerman'

export const SITE_TAGLINE =
  'PhD researcher in marine data science at the University of Cambridge'

export const SITE_DESCRIPTION =
  'Orlando Timmerman — marine data science PhD student at the University of Cambridge. Research on coral reefs, remote sensing, climate, and environmental economics. Blog, CV, and interactive projects.'

export const PERSON = {
  name: 'Orlando Timmerman',
  givenName: 'Orlando',
  familyName: 'Timmerman',
  email: 'rt582@cam.ac.uk',
  jobTitle: 'PhD Researcher',
  affiliation: 'University of Cambridge',
  location: 'Cambridge, UK',
  sameAs: [
    'https://github.com/orlando-code',
    'https://www.linkedin.com/in/orlandotimm/',
    'https://scholar.google.com/citations?user=vI-ipk4AAAAJ&hl=en',
    'https://pypi.org/user/orlando-code/',
  ],
} as const

export const DEFAULT_OG_IMAGE = '/favicon.png'

export const metadataDefaults: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Orlando Timmerman',
    'marine data science',
    'University of Cambridge',
    'coral reefs',
    'remote sensing',
    'climate science',
    'environmental economics',
    'Python',
    'research',
  ],
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  publisher: PERSON.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 512,
        height: 512,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: {
    canonical: SITE_URL,
    types: {
      'application/atom+xml': [{ url: '/atom.xml', title: `${SITE_NAME} Blog` }],
      'application/rss+xml': [{ url: '/rss.xml', title: `${SITE_NAME} Blog` }],
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon-32x32.png',
  },
}

type PageMetadataOptions = {
  title: string
  description: string
  path: string
  ogImage?: string
  ogType?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}

/** Build page-level metadata with canonical URL and social tags. */
export function pageMetadata({
  title,
  description,
  path,
  ogImage,
  ogType = 'website',
  publishedTime,
  modifiedTime,
}: PageMetadataOptions): Metadata {
  const canonicalPath = path.startsWith('/') ? path : `/${path}`
  const url = `${SITE_URL}${canonicalPath}`
  const image = ogImage ?? DEFAULT_OG_IMAGE

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: ogType,
      url,
      title,
      description,
      images: [{ url: image, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

export function absoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}
