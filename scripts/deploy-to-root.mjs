import { rmSync, mkdirSync, readdirSync, statSync, copyFileSync, existsSync, renameSync } from 'fs';
import { join } from 'path';

const repoRoot = process.cwd();
const buildDir = join(repoRoot, 'build');
const publicHtaccess = join(repoRoot, 'public', '.htaccess');

function copyRecursive(src, dest) {
  const entries = readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);
    if (entry.isDirectory()) {
      mkdirSync(destPath, { recursive: true });
      copyRecursive(srcPath, destPath);
    } else if (entry.isFile()) {
      copyFileSync(srcPath, destPath);
    }
  }
}

// Ensure build exists
try {
  const stats = statSync(buildDir);
  if (!stats.isDirectory()) throw new Error();
} catch {
  console.error('Build directory not found. Run "npm run build" first.');
  process.exit(1);
}

// Backup dev index.html once
const devIndex = join(repoRoot, 'index.html');
const backupIndex = join(repoRoot, 'index.dev.html');
if (existsSync(devIndex) && !existsSync(backupIndex)) {
  renameSync(devIndex, backupIndex);
  console.log('Backed up dev index.html -> index.dev.html');
}

// Copy build to repo root (overwrites assets, index.html, etc.)
copyRecursive(buildDir, repoRoot);
console.log('Copied build/ contents to repo root for Cloudways public_html');

// Ensure .htaccess exists at root (copy from public/ if present)
if (existsSync(publicHtaccess)) {
  copyFileSync(publicHtaccess, join(repoRoot, '.htaccess'));
  console.log('Ensured .htaccess at repo root');
}


