# Veyro Yol Yardım Landing Page

Statik SEO landing page. Backend, React veya veritabanı gerektirmez.

Canlı adres:

https://veyroyolyardim.vercel.app/

Son deploy kaynağı: GitHub `main` branch.

## Klasör Yapısı

- `/`: Ana sayfa ve temel kurumsal sayfalar
- `/sehirler`: Kocaeli ve İstanbul şehir SEO sayfaları
- `/ilceler`: İlçe bazlı local SEO sayfaları
- `/blog`: Yol yardım rehberleri ve uzun kuyruk SEO içerikleri
- `/yasal`: Gizlilik ve yasal metinler
- `/assets`: CSS, JS, logo ve görseller
- `/scripts`: SEO sayfa üretimi ve link kontrol araçları

## Komutlar

```powershell
npm run generate
npm run check:links
npm run build
```

Google Search Console'a sitemap olarak gönderilecek doğru adres:

```txt
https://veyroyolyardim.vercel.app/sitemap.xml
```

`robots.txt` sitemap değildir. Search Console'a sitemap olarak gönderilmez.
