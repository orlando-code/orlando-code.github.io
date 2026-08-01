#!/usr/bin/env node
/**
 * Sync static subproject bundles into public/ for same-origin hosting on orlando-codes.com.
 */

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.resolve(__dirname, '..');

const CORAL_SRC =
  process.env.CORAL_COVER_SRC ||
  path.resolve(SITE_ROOT, '../thesis/coral-cover-economics');
const CENTRE_SRC = process.env.CENTRE_OF_MASS_SRC;

function resolveCentreSrc() {
  if (CENTRE_SRC && fs.existsSync(CENTRE_SRC)) return CENTRE_SRC;

  const cacheDir = path.join(SITE_ROOT, '.cache', 'centre-of-mass');
  if (!fs.existsSync(path.join(cacheDir, 'index.html'))) {
    fs.mkdirSync(path.dirname(cacheDir), { recursive: true });
    if (fs.existsSync(cacheDir)) fs.rmSync(cacheDir, { recursive: true });
    const result = spawnSync(
      'git',
      ['clone', '--depth', '1', 'https://github.com/orlando-code/centre-of-mass.git', cacheDir],
      { stdio: 'inherit' }
    );
    if (result.status !== 0) process.exit(result.status ?? 1);
  }
  return cacheDir;
}

function resolveCoralSrc() {
  if (!fs.existsSync(CORAL_SRC)) {
    console.error(`Missing coral-cover-economics source directory: ${CORAL_SRC}`);
    process.exit(1);
  }
  return CORAL_SRC;
}

function copyDir(source, target, { sourceSubdir = '' } = {}) {
  const from = sourceSubdir ? path.join(source, sourceSubdir) : source;
  if (!fs.existsSync(from)) {
    console.error(`Missing source directory: ${from}`);
    process.exit(1);
  }

  fs.rmSync(target, { recursive: true, force: true });
  fs.mkdirSync(target, { recursive: true });
  fs.cpSync(from, target, { recursive: true });
}

function copyCentreOfMass(source) {
  const target = path.join(SITE_ROOT, 'public', 'centre-of-mass');
  fs.rmSync(target, { recursive: true, force: true });
  fs.mkdirSync(target, { recursive: true });

  const skip = new Set(['.git', '.cursor', 'node_modules']);
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    if (skip.has(entry.name)) continue;
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);
    fs.cpSync(sourcePath, targetPath, { recursive: true });
  }
}

copyDir(resolveCoralSrc(), path.join(SITE_ROOT, 'public', 'coral-cover-economics'), {
  sourceSubdir: 'docs',
});
console.log('Synced coral-cover-economics -> public/coral-cover-economics/');

copyCentreOfMass(resolveCentreSrc());
console.log('Synced centre-of-mass -> public/centre-of-mass/');
