import { PERSON, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from './site'

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: PERSON.name,
    givenName: PERSON.givenName,
    familyName: PERSON.familyName,
    url: SITE_URL,
    email: `mailto:${PERSON.email}`,
    jobTitle: PERSON.jobTitle,
    worksFor: {
      '@type': 'Organization',
      name: PERSON.affiliation,
      url: 'https://www.cam.ac.uk/',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cambridge',
      addressCountry: 'GB',
    },
    sameAs: [...PERSON.sameAs],
    description: SITE_DESCRIPTION,
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#person` },
    inLanguage: 'en-GB',
  }
}

export function blogPostingJsonLd({
  title,
  description,
  slug,
  date,
  image,
}: {
  title: string
  description: string
  slug: string
  date: string
  image?: string
}) {
  const url = `${SITE_URL}/blog/${slug}/`

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    datePublished: date,
    dateModified: date,
    author: { '@id': `${SITE_URL}/#person` },
    publisher: { '@id': `${SITE_URL}/#person` },
    image: image ? [image] : undefined,
    inLanguage: 'en-GB',
  }
}
