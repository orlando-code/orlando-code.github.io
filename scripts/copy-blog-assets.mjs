#!/usr/bin/env node
/**
 * Copy non-markdown assets from content/blog into public/blog for static export.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.resolve(__dirname, '..');
const SOURCE_DIR = path.join(SITE_ROOT, 'content', 'blog');
const TARGET_DIR = path.join(SITE_ROOT, 'public', 'blog');

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.avif']);

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const sourcePath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(sourcePath);
      continue;
    }
    const ext = path.extname(entry.name).toLowerCase();
    if (!IMAGE_EXT.has(ext)) continue;

    const relPath = path.relative(SOURCE_DIR, sourcePath);
    const targetPath = path.join(TARGET_DIR, relPath);
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.copyFileSync(sourcePath, targetPath);
  }
}

if (fs.existsSync(TARGET_DIR)) {
  fs.rmSync(TARGET_DIR, { recursive: true, force: true });
}
walk(SOURCE_DIR);
