import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'Contact',
  description:
    'Contact Orlando Timmerman — PhD researcher in marine data science at the University of Cambridge. Email, LinkedIn, GitHub, and Google Scholar.',
  path: '/contact/',
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
