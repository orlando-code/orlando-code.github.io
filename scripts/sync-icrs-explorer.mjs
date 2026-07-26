#!/usr/bin/env node
/**
 * Sync the ICRS explorer static bundle into public/explore-icrs-2026/ for Next export.
 */

import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.resolve(__dirname, "..");
const DEFAULT_EXPLORER_SRC = path.resolve(
  SITE_ROOT,
  "../../../phd/blogging/icrs-investigation"
);
const EXPLORER_SRC = process.env.ICRS_EXPLORER_SRC || DEFAULT_EXPLORER_SRC;
const TARGET_DIR = path.join(SITE_ROOT, "public", "explore-icrs-2026/");
const BASE_PATH = process.env.ICRS_BASE_PATH || "/explore-icrs-2026/";
const bundleScript = path.join(EXPLORER_SRC, "scripts", "bundle_static_site.mjs");

const result = spawnSync(
  process.execPath,
  [bundleScript, TARGET_DIR, `--base-path=${BASE_PATH}`],
  { stdio: "inherit" }
);

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}
