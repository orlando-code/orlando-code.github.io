import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import Navigation from './components/Navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Orlando Timmerman',
  description: 'My personal and academic website',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon-32x32.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="alternate" type="application/atom+xml" title="Orlando's Blog" href="https://orlando-code.github.io/atom.xml" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
      </body>
    </html>
  )
} 