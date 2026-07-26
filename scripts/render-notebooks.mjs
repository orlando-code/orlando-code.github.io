#!/usr/bin/env node
/**
 * Render .ipynb files from content/blog into static HTML in public/blog/.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.resolve(__dirname, '..');
const SOURCE_DIR = path.join(SITE_ROOT, 'content', 'blog');
const TARGET_DIR = path.join(SITE_ROOT, 'public', 'blog');

const HTML_TEMPLATE = (title, body) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <style>
    :root {
      color-scheme: light;
      --bg: #ffffff;
      --text: #1f2937;
      --muted: #6b7280;
      --code-bg: #111827;
      --code-text: #e5e7eb;
      --border: #e5e7eb;
      --stderr: #9a3412;
      --stdout: #374151;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 1.5rem 1.25rem 3rem;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 16px;
      line-height: 1.6;
      color: var(--text);
      background: var(--bg);
    }
    .notebook { max-width: 960px; margin: 0 auto; }
    .cell { margin: 0 0 1.25rem; }
    .markdown-cell :is(h1, h2, h3, h4) {
      color: #111827;
      line-height: 1.25;
      margin: 1.5rem 0 0.75rem;
    }
    .markdown-cell p { margin: 0.75rem 0; }
    .markdown-cell ul, .markdown-cell ol { margin: 0.75rem 0; padding-left: 1.5rem; }
    .markdown-cell a { color: #0284c7; }
    .markdown-cell table {
      width: 100%;
      border-collapse: collapse;
      margin: 1rem 0;
      font-size: 0.95rem;
    }
    .markdown-cell th, .markdown-cell td {
      border: 1px solid var(--border);
      padding: 0.4rem 0.6rem;
      text-align: left;
    }
    .markdown-cell th { background: #f9fafb; }
    pre {
      margin: 0;
      padding: 0.9rem 1rem;
      overflow-x: auto;
      border-radius: 0.5rem;
      background: var(--code-bg);
      color: var(--code-text);
      font-size: 0.875rem;
      line-height: 1.5;
    }
    code { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
    .code-cell pre { margin-bottom: 0.75rem; }
    .stream, .text-output {
      margin: 0.5rem 0 0;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      background: #f9fafb;
      border: 1px solid var(--border);
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 0.85rem;
      white-space: pre-wrap;
      overflow-x: auto;
    }
    .stream.stderr { color: var(--stderr); background: #fff7ed; border-color: #fed7aa; }
    .stream.stdout { color: var(--stdout); }
    .html-output { margin-top: 0.75rem; overflow-x: auto; }
    .html-output table { font-size: 0.9rem; }
    img.plot-output {
      display: block;
      max-width: 100%;
      height: auto;
      margin: 0.75rem auto 0;
      border-radius: 0.5rem;
      border: 1px solid var(--border);
    }
  </style>
</head>
<body>
  <main class="notebook">
${body}
  </main>
</body>
</html>
`;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function cellSource(source) {
  return Array.isArray(source) ? source.join('') : (source ?? '');
}

function mimeData(data, ...types) {
  if (!data) return '';
  for (const type of types) {
    if (data[type] !== undefined) {
      const value = data[type];
      return Array.isArray(value) ? value.join('') : value;
    }
  }
  return '';
}

async function markdownToHtml(content) {
  const result = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(content);
  return result.toString();
}

function renderOutput(output) {
  const type = output.output_type;

  if (type === 'stream') {
    const streamClass = output.name === 'stderr' ? 'stderr' : 'stdout';
    return `<pre class="stream ${streamClass}">${escapeHtml(cellSource(output.text))}</pre>`;
  }

  if (type === 'execute_result' || type === 'display_data') {
    const html = mimeData(output.data, 'text/html');
    if (html) {
      return `<div class="html-output">${html}</div>`;
    }

    const png = mimeData(output.data, 'image/png');
    if (png) {
      return `<img class="plot-output" alt="Notebook plot output" src="data:image/png;base64,${png.trim()}" />`;
    }

    const jpeg = mimeData(output.data, 'image/jpeg');
    if (jpeg) {
      return `<img class="plot-output" alt="Notebook plot output" src="data:image/jpeg;base64,${jpeg.trim()}" />`;
    }

    const text = mimeData(output.data, 'text/plain');
    if (text) {
      return `<pre class="text-output">${escapeHtml(text)}</pre>`;
    }
  }

  if (type === 'error') {
    const trace = cellSource(output.traceback ?? output.evalue ?? 'Execution error');
    return `<pre class="stream stderr">${escapeHtml(trace)}</pre>`;
  }

  return '';
}

async function renderNotebook(sourcePath, targetPath) {
  const notebook = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));
  const title = path.basename(sourcePath, '.ipynb');
  const parts = [];

  for (const cell of notebook.cells ?? []) {
    if (cell.cell_type === 'markdown') {
      const html = await markdownToHtml(cellSource(cell.source));
      parts.push(`<section class="cell markdown-cell">${html}</section>`);
      continue;
    }

    if (cell.cell_type === 'code') {
      const code = escapeHtml(cellSource(cell.source));
      let block = `<section class="cell code-cell"><pre><code>${code}</code></pre>`;
      for (const output of cell.outputs ?? []) {
        block += renderOutput(output);
      }
      block += '</section>';
      parts.push(block);
    }
  }

  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, HTML_TEMPLATE(title, parts.join('\n')));
}

function walkNotebooks(dir, notebooks = []) {
  if (!fs.existsSync(dir)) return notebooks;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkNotebooks(fullPath, notebooks);
    } else if (entry.name.endsWith('.ipynb')) {
      notebooks.push(fullPath);
    }
  }
  return notebooks;
}

const notebooks = walkNotebooks(SOURCE_DIR);
if (notebooks.length === 0) {
  console.log('No notebooks to render.');
  process.exit(0);
}

for (const sourcePath of notebooks) {
  const relPath = path.relative(SOURCE_DIR, sourcePath).replace(/\.ipynb$/, '.html');
  const targetPath = path.join(TARGET_DIR, relPath);
  await renderNotebook(sourcePath, targetPath);
  console.log(`Rendered ${relPath}`);
}
