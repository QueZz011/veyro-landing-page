const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const htmlFiles = [];

function walk(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      if (item.name === "node_modules" || item.name === ".git" || item.name === ".vercel") continue;
      walk(full);
    } else if (item.name.endsWith(".html")) {
      htmlFiles.push(full);
    }
  }
}

walk(root);

const missing = [];

for (const file of htmlFiles) {
  const text = fs.readFileSync(file, "utf8");
  for (const match of text.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const ref = match[1];
    if (/^(https?:|mailto:|tel:|#)/.test(ref)) continue;
    const clean = ref.split("#")[0].split("?")[0];
    if (!clean || clean === "/") continue;

    const target = clean.startsWith("/")
      ? path.join(root, clean.slice(1))
      : path.join(path.dirname(file), clean);

    if (!fs.existsSync(target)) {
      missing.push(`${path.relative(root, file)} -> ${ref}`);
    }
  }
}

if (missing.length > 0) {
  console.error("Missing local links:");
  console.error(missing.join("\n"));
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files. No missing local links.`);
