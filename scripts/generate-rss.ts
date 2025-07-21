import { Feed } from 'feed'
import fs from 'fs'
import path from 'path'
import { getAllPosts } from '../lib/blog'

const siteUrl = 'https://orlando-code.github.io/' // <-- change to your real domain

const feed = new Feed({
  title: "Orlando Timmerman's Blog",
  description: "Updates and posts",
  id: siteUrl,
  link: siteUrl,
  language: 'en',
  favicon: `${siteUrl}/favicon.ico`,
  copyright: `All rights reserved ${(new Date()).getFullYear()}, Orlando Timmerman`,
  updated: new Date(),
  generator: 'Next.js + feed',
})

const posts = getAllPosts().filter(post => !post.draft)

posts.forEach(post => {
  feed.addItem({
    title: post.title,
    id: `${siteUrl}/blog/${post.slug}`,
    link: `${siteUrl}/blog/${post.slug}`,
    description: post.excerpt || post.description,
    date: new Date(post.date),
  })
})

// Output RSS and Atom feeds
const publicDir = path.join(process.cwd(), 'public')
fs.writeFileSync(path.join(publicDir, 'rss.xml'), feed.rss2())
fs.writeFileSync(path.join(publicDir, 'atom.xml'), feed.atom1())