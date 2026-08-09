import type { Metadata } from 'next'
import { pageMetadata } from '../../lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'Services',
  description:
    'Professional services by Orlando Timmerman — custom map design, data visualisation, and STEM tutoring in Cambridge.',
  path: '/services/',
})

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
