import { Feed } from 'feed';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const siteUrl = 'https://orlando-code.github.io/';
const postsDir = path.join(process.cwd(), 'content/blog');

function getAllMarkdownFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(filePath));
    } else if (file.endsWith('.md')) {
      results.push(filePath);
    }
  });
  return results;
}

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
});

const filePaths = getAllMarkdownFiles(postsDir);
filePaths.forEach((fullPath) => {
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  if (matterResult.data.draft) return;
  // Slug: relative path from postsDir, remove .md, replace path separators with '/'
  const relPath = path.relative(postsDir, fullPath);
  const slug = relPath.replace(/\.md$/, '').replace(/\\/g, '/');
  feed.addItem({
    title: matterResult.data.title || slug,
    id: `${siteUrl}/blog/${slug}`,
    link: `${siteUrl}/blog/${slug}`,
    description: matterResult.data.excerpt || matterResult.data.description || '',
    date: new Date(matterResult.data.date),
  });
});

const publicDir = path.join(process.cwd(), 'public');
fs.writeFileSync(path.join(publicDir, 'rss.xml'), feed.rss2());
fs.writeFileSync(path.join(publicDir, 'atom.xml'), feed.atom1()); 