import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import JsonLd from './components/JsonLd'
import Navigation from './components/Navigation'
import { personJsonLd, websiteJsonLd } from '../lib/json-ld'
import { metadataDefaults, PERSON } from '../lib/site'
import 'katex/dist/katex.min.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = metadataDefaults

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="32x32" href="/favicon-32x32.png" />
        {PERSON.sameAs.map((url) => (
          <link key={url} rel="me" href={url} />
        ))}
      </head>
      <body className={inter.className}>
        <JsonLd data={[personJsonLd(), websiteJsonLd()]} />
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}
