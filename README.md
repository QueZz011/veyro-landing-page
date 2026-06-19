# Veyro Yol Yardim Landing Page

Static SEO landing page. No backend, React, or database required.

Live URL:

https://veyroyolyardim.vercel.app/

Deployment source: GitHub main branch.

## Structure

- /: Homepage and core pages
- /sehirler: City SEO pages
- /ilceler: District local SEO pages
- /blog: Road assistance guides
- /yasal: Legal pages
- /assets: CSS, JS, logo, and images
- /scripts: SEO generation and link checks

## Commands

```powershell
npm run generate
npm run check:links
npm run build
```

Primary sitemap for Google Search Console:

```txt
https://veyroyolyardim.vercel.app/sitemap.xml
```

Alternative sitemap if Google caches an old result:

```txt
https://veyroyolyardim.vercel.app/sitemap-main.xml
```

robots.txt is not a sitemap. Do not submit robots.txt as a sitemap in Search Console.
