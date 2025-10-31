import { rmSync, mkdirSync, readdirSync, statSync, copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const repoRoot = join(__dirname, '..');
const buildDir = join(repoRoot, 'build');
const targetDir = join(repoRoot, 'public_html');

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

// Clean and recreate target directory
rmSync(targetDir, { recursive: true, force: true });
mkdirSync(targetDir, { recursive: true });

// Ensure build exists
try {
  const stats = statSync(buildDir);
  if (!stats.isDirectory()) throw new Error();
} catch {
  console.error('Build directory not found. Run "npm run build" first.');
  process.exit(1);
}

// Copy build -> public_html
copyRecursive(buildDir, targetDir);
console.log('Copied build/ to public_html/');


