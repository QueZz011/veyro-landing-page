const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "public");

const copyItems = [
  "index.html",
  "hizmetler.html",
  "hakkimizda.html",
  "nasil-calisir.html",
  "cekici-basvuru.html",
  "on-kayit.html",
  "kocaeli-cekici.html",
  "istanbul-cekici.html",
  "yol-yardim-rehberi.html",
  "yolda-kalinca-ne-yapilmali.html",
  "cekici-fiyatlari.html",
  "aku-biterse-ne-yapilmali.html",
  "lastik-patlarsa-ne-yapilmali.html",
  "gizlilik.html",
  "config.json",
  "robots.txt",
  "sitemap.xml",
  "sitemap-main.xml",
  "assets",
  "blog",
  "ilceler",
  "sehirler",
  "yasal"
];

function copyRecursive(source, target) {
  const stat = fs.statSync(source);
  if (stat.isDirectory()) {
    fs.mkdirSync(target, { recursive: true });
    for (const item of fs.readdirSync(source)) {
      copyRecursive(path.join(source, item), path.join(target, item));
    }
    return;
  }

  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
}

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const item of copyItems) {
  const source = path.join(root, item);
  if (!fs.existsSync(source)) {
    throw new Error(`Missing deploy item: ${item}`);
  }
  copyRecursive(source, path.join(outDir, item));
}

console.log(`Prepared Vercel static output: ${path.relative(root, outDir)}`);
