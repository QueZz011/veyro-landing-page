const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const site = "https://veyrayolyardim.com";
const lastmod = "2026-06-28";
const phone = "+90 546 534 20 33";
const phoneHref = "905465342033";
const email = "veyro.iletisim@gmail.com";

const cityData = {
  kocaeli: {
    name: "Kocaeli",
    title: "Kocaeli Çekici | 7/24 Oto Kurtarma ve Yol Yardım",
    h1: "Kocaeli Çekici ve 7/24 Yol Yardım",
    description:
      "Kocaeli'de 7/24 oto çekici, oto kurtarma, akü takviye, lastik değişimi ve yol yardım desteği için Veyra Yol Yardım ile hızlıca iletişime geçin.",
    intro:
      "Kocaeli; D-100, TEM, Kuzey Marmara bağlantıları, sanayi bölgeleri ve yoğun ilçe trafiğiyle yol yardım ihtiyacının sık yaşandığı bir bölgedir.",
    roads: ["D-100", "TEM", "Kuzey Marmara bağlantısı", "İzmit sahil yolu", "Gebze OSB hattı"],
    districts: [
      ["izmit", "İzmit", ["Yahyakaptan", "Alikahya", "Bekirdere", "Yenişehir", "Sanayi"], "D-100, TEM ve İzmit sahil yolu çevresinde şehir içi ve otoyol bağlantılı arızalar sık görülür.", ["Derince", "Kartepe", "Başiskele"]],
      ["gebze", "Gebze", ["Tatlükuyu", "Beylikbağı", "Barış", "Osman Yılmaz", "Arapçeşme"], "Gebze OSB, D-100, TEM ve İstanbul geçiş hattı çekici taleplerinin yoğun olduğu alanlardır.", ["Darıca", "Çayırova", "Dilovası"]],
      ["darica", "Darıca", ["Bağlarbaşı", "Kazım Karabekir", "Osmangazi", "Nenehatun", "Fevzi Çakmak"], "Darıca sahil yolu, Farabi çevresi ve Gebze bağlantılarında net konum paylaşımı önemlidir.", ["Gebze", "Çayırova", "Tuzla"]],
      ["korfez", "Körfez", ["Hereke", "Yarımca", "Tütünçiftlik", "Kirazlıyalı", "Mimar Sinan"], "Körfez sanayi hattı, liman bağlantıları, D-100 ve TEM geçişleri çekici ihtiyacını artırır.", ["Derince", "Gebze", "Dilovası"]],
      ["derince", "Derince", ["Çınarlı", "Sırrıpaşa", "Yenikent", "Sopalı", "Liman"], "Derince liman yolu, D-100 ve TEM bağlantılarında araç arızalarında hızlı yönlendirme gerekir.", ["İzmit", "Körfez", "Kartepe"]],
      ["kartepe", "Kartepe", ["Maşukiye", "Köseköy", "Uzunçiftlik", "Derbent", "Ataşehir"], "Kartepe yolu, D-100 ve yüksek kesimlerde hava koşulları çekici operasyonunu etkileyebilir.", ["İzmit", "Başiskele", "Sapanca"]],
      ["basiskele", "Başiskele", ["Yuvacık", "Barbaros", "Seymen", "Kullar", "Bahçecik"], "D-130, Yuvacık yolu ve sahil bağlantılarında yol yardım talepleri farklı senaryolarla gelir.", ["İzmit", "Gölcük", "Kartepe"]],
      ["cayirova", "Çayırova", ["Şekerpınar", "Emek", "Özgürlük", "İnönü", "Akse"], "TOSB, TEM ve Gebze bağlantısı nedeniyle Çayırova'da sanayi kaynaklı çekici talepleri yoğundur.", ["Gebze", "Darıca", "Tuzla"]],
      ["golcuk", "Gölcük", ["Değirmendere", "İhsaniye", "Hisareyn", "Ulaşlı", "Merkez"], "D-130, sahil yolu ve Başiskele bağlantısı Gölcük çekici taleplerinde öne çıkar.", ["Başiskele", "Karamürsel", "İzmit"]],
      ["karamursel", "Karamürsel", ["Kayacık", "Ereğli", "Dereköy", "4 Temmuz", "Tepeköy"], "Karamürsel sahil yolu ve Yalova yönü uzun mesafe taşıma ihtimalini artırabilir.", ["Gölcük", "Yalova", "Başiskele"]],
      ["kandira", "Kandıra", ["Cebeci", "Kerpe", "Kefken", "Akdurak", "Bağırganlı"], "Kandıra yolu, sahil bağlantıları ve yaz dönemi yoğunluğu doğru konum bilgisini önemli hale getirir.", ["İzmit", "Şile", "Karasu"]],
      ["dilovasi", "Dilovası", ["Tavşancıl", "Mimar Sinan", "Orhangazi", "Diliskelesi", "Cumhuriyet"], "Dilovası OSB, D-100 ve TEM bağlantıları ağır trafik ve sanayi geçişleriyle öne çıkar.", ["Gebze", "Körfez", "Çayırova"]]
    ]
  },
  istanbul: {
    name: "İstanbul",
    title: "İstanbul Çekici | 7/24 Oto Çekici ve Yol Yardım",
    h1: "İstanbul Çekici ve 7/24 Yol Yardım",
    description:
      "İstanbul'da 7/24 oto çekici, araç kurtarma, akü takviye, lastik değişimi ve yol yardım hizmetleri için Veyra Yol Yardım'dan hızlı destek alın.",
    intro:
      "İstanbul'da çekici ihtiyacı köprü bağlantıları, D-100, TEM, otoparklar, sahil yolları ve dar sokaklar nedeniyle bölgeden bölgeye farklılaşır.",
    roads: ["D-100", "TEM", "Kuzey Marmara Otoyolu", "sahil yolu", "köprü bağlantıları"],
    districts: [
      ["kadikoy", "Kadıköy", ["Fikirtepe", "Kozyatağı", "Bostancı", "Göztepe", "Acıbadem"], "Kadıköy'de otopark çıkışları, sahil hattı ve D-100 bağlantısı çekici tipini etkileyebilir.", ["Üsküdar", "Ataşehir", "Maltepe"]],
      ["pendik", "Pendik", ["Kurtköy", "Çamçeşme", "Yenişehir", "Kaynarca", "Velibaba"], "Pendik'te Sabiha Gökçen bağlantısı, D-100 ve TEM hattı yol yardım taleplerinde öne çıkar.", ["Kartal", "Tuzla", "Sultanbeyli"]],
      ["tuzla", "Tuzla", ["İçmeler", "Aydınlı", "Orhanlı", "Mimar Sinan", "Postane"], "Tuzla tersane ve sanayi hattında araç arızalarında uygun ekipman bilgisi önemlidir.", ["Pendik", "Gebze", "Çayırova"]],
      ["uskudar", "Üsküdar", ["Altunizade", "Çengelköy", "Beylerbeyi", "Kısıklı", "Acıbadem"], "Üsküdar'da köprü bağlantıları ve şehir içi trafik nedeniyle güvenli bekleme noktası önemlidir.", ["Kadıköy", "Beykoz", "Ümraniye"]],
      ["kartal", "Kartal", ["Soğanlık", "Yakacık", "Uğur Mumcu", "Esentepe", "Orhantepe"], "Kartal'da D-100, sahil yolu ve Pendik yönü çekici yönlendirme süresini etkileyebilir.", ["Maltepe", "Pendik", "Sancaktepe"]],
      ["maltepe", "Maltepe", ["Cevizli", "Zümrütevler", "Feyzullah", "Altayçeşme", "Küçükyalı"], "Maltepe sahil yolu ve D-100 hattında arızalarda konumun net paylaşılması gerekir.", ["Kadıköy", "Kartal", "Ataşehir"]],
      ["atasehir", "Ataşehir", ["İçerenköy", "Kayışdağı", "Barbaros", "Küçükbakkalköy", "Yeni Sahra"], "Ataşehir'de Finans Merkezi çevresi, D-100 ve TEM bağlantıları yoğun çekici aramalarına neden olur.", ["Kadıköy", "Ümraniye", "Maltepe"]],
      ["avcilar", "Avcılar", ["Ambarlı", "Firuzköy", "Cihangir", "Denizköşkler", "Gümüşpala"], "Avcılar'da D-100, sahil yolu ve yoğun yerleşim çekici taleplerini çeşitlendirir.", ["Küçükçekmece", "Beylikdüzü", "Esenyurt"]],
      ["esenyurt", "Esenyurt", ["Mehterçeşme", "Saadetdere", "Kıraç", "Akçaburgaz", "İncirtepe"], "Esenyurt'ta TEM, D-100 ve Hadımköy bağlantısı uzun bekleme riskini artırabilir.", ["Beylikdüzü", "Avcılar", "Başakşehir"]],
      ["besiktas", "Beşiktaş", ["Levent", "Etiler", "Ortaköy", "Balmumcu", "Abbasağa"], "Beşiktaş'ta dar sokaklar, otoparklar ve köprü bağlantıları uygun çekici seçimini etkiler.", ["Şişli", "Sarıyer", "Beyoğlu"]],
      ["sisli", "Şişli", ["Mecidiyeköy", "Nişantaşı", "Bomonti", "Feriköy", "Esentepe"], "Şişli'de yoğun merkez trafiği ve dar sokak senaryoları çekici operasyonunu hassaslaştırır.", ["Beşiktaş", "Kağıthane", "Beyoğlu"]],
      ["beylikduzu", "Beylikdüzü", ["Adnan Kahveci", "Barış", "Cumhuriyet", "Yakuplu", "Kavaklı"], "Beylikdüzü'nde E-5, marina ve Ambarlı bağlantıları şehir içi ve uzun mesafe taşıma talepleri doğurur.", ["Avcılar", "Esenyurt", "Büyükçekmece"]]
    ]
  }
};

const blogArticles = [
  ["cekici-fiyatlari-2026", "Çekici Fiyatları 2026: Fiyatı Etkileyen Faktörler", "Çekici fiyatları 2026 yılında mesafe, araç tipi, saat, yol koşulu ve kurtarma zorluğuna göre nasıl değişir?"],
  ["yolda-kalinca-ilk-ne-yapilmali", "Yolda Kalınca İlk Ne Yapılmalı?", "Yolda kaldığınızda güvenli bekleme, konum paylaşma ve çekici çağırma adımlarını öğrenin."],
  ["aku-bitince-ne-yapilir", "Akü Bitince Ne Yapılır?", "Akü bitmesi durumunda güvenli kontrol, takviye ve yol yardım kararı için pratik rehber."],
  ["lastik-patlarsa-ne-yapilmali", "Lastik Patlarsa Ne Yapılmalı?", "Lastik patladığında güvenli durma, reflektör kullanımı, stepne ve yol yardım seçenekleri."],
  ["kaza-sonrasi-arac-cekme-sureci", "Kaza Sonrası Araç Çekme Süreci", "Kaza sonrası araç çekme, tutanak, sigorta ve güvenli taşıma sürecinde dikkat edilmesi gerekenler."],
  ["oto-cekici-cagirmadan-once", "Oto Çekici Çağırmadan Önce Bilmeniz Gerekenler", "Çekici çağırmadan önce konum, araç durumu, hedef adres ve fiyat onayı nasıl netleştirilir?"],
  ["sehir-ici-sehirler-arasi-cekici-farki", "Şehir İçi ve Şehirler Arası Çekici Farkı", "Kısa mesafe çekici ile şehirler arası araç taşıma arasındaki planlama ve fiyat farkları."],
  ["whatsapp-konum-paylasarak-yol-yardim", "WhatsApp Konum Paylaşarak Yol Yardım Nasıl Alınır?", "WhatsApp konumu paylaşarak çekici ve yol yardım talebinin daha hızlı ilerlemesini sağlayın."]
];

function ensure(file) {
  fs.mkdirSync(path.dirname(path.join(root, file)), { recursive: true });
}

function write(file, content) {
  ensure(file);
  fs.writeFileSync(path.join(root, file), content, "utf8");
}

function cleanDir(dir) {
  const full = path.join(root, dir);
  if (fs.existsSync(full)) fs.rmSync(full, { recursive: true, force: true });
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));
}

function slugPath(urlPath) {
  if (urlPath.endsWith(".html")) return urlPath.replace(/^\//, "");
  return urlPath === "/" ? "index.html" : `${urlPath.replace(/^\//, "")}/index.html`;
}

function waLink(message = "Merhaba, yolda kaldım. Yol yardım ve çekici desteği almak istiyorum. Konumumu paylaşacağım.") {
  return `https://wa.me/${phoneHref}?text=${encodeURIComponent(message)}`;
}

function schemaTag(data) {
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site}${item.url}`,
    })),
  };
}

function faqSchema(faq) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

function businessSchema(areaServed = ["Kocaeli", "İstanbul"]) {
  return {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: "Veyra Yol Yardım",
    url: `${site}/`,
    telephone: `+${phoneHref}`,
    areaServed,
    openingHours: "Mo-Su 00:00-23:59",
    description:
      "Veyra Yol Yardım, Kocaeli ve İstanbul'da oto çekici, araç kurtarma, akü takviye, lastik değişimi ve yol yardım talepleri için iletişim desteği sunar.",
  };
}

function nav() {
  return `<nav class="nav-links" aria-label="Ana menü">
    <a href="/">Ana Sayfa</a>
    <a href="/hizmetler.html">Hizmetler</a>
    <details class="nav-dropdown">
      <summary>Hizmet Bölgeleri</summary>
      <div class="dropdown-panel">
        <strong>Şehirler</strong>
        <a href="/kocaeli/cekici">Kocaeli Çekici</a>
        <a href="/istanbul/cekici">İstanbul Çekici</a>
        <strong>Kocaeli</strong>
        <a href="/kocaeli/izmit/cekici">İzmit Çekici</a>
        <a href="/kocaeli/gebze/cekici">Gebze Çekici</a>
        <a href="/kocaeli/darica/cekici">Darıca Çekici</a>
        <strong>İstanbul</strong>
        <a href="/istanbul/pendik/cekici">Pendik Çekici</a>
        <a href="/istanbul/tuzla/cekici">Tuzla Çekici</a>
        <a href="/istanbul/kadikoy/cekici">Kadıköy Çekici</a>
      </div>
    </details>
    <a href="/yol-yardim-rehberi">Rehber</a>
    <a href="/iletisim">İletişim</a>
    <a href="/cekici-basvuru.html">Çekici Başvurusu</a>
  </nav>`;
}

function header() {
  return `<header class="site-header">
    <div class="container nav">
      <a class="brand" href="/"><img src="/assets/img/logo.svg" alt="Veyra Yol Yardım logosu"><span>Veyra Yol Yardım</span></a>
      ${nav()}
      <div class="nav-actions"><a class="btn secondary" href="tel:${phoneHref}">Ara</a><button class="menu-btn" data-menu-button aria-label="Menüyü aç" aria-expanded="false">☰</button></div>
    </div>
  </header>`;
}

function footer() {
  return `<footer class="footer"><div class="container footer-grid">
    <div><a class="brand" href="/"><img src="/assets/img/logo.svg" alt=""><span>Veyra Yol Yardım</span></a><p>Kocaeli ve İstanbul merkezli, hizmet ağı genişletilen 7/24 yol yardım ve oto çekici desteği.</p><p><strong>Çalışma saatleri:</strong> 7/24</p></div>
    <div class="footer-links"><strong>Hizmet Bölgeleri</strong><a href="/kocaeli/cekici">Kocaeli Çekici</a><a href="/istanbul/cekici">İstanbul Çekici</a><a href="/kocaeli/izmit/cekici">İzmit Çekici</a><a href="/kocaeli/gebze/cekici">Gebze Çekici</a><a href="/kocaeli/darica/cekici">Darıca Çekici</a></div>
    <div class="footer-links"><strong>Sayfalar</strong><a href="/yol-yardim-rehberi">Blog</a><a href="/iletisim">İletişim</a><a href="/gizlilik-politikasi">Gizlilik Politikası</a><a href="/kvkk-aydinlatma-metni">KVKK Aydınlatma Metni</a><a href="/kullanim-sartlari">Kullanım Şartları</a></div>
    <div class="footer-links"><strong>İletişim</strong><a href="tel:${phoneHref}">${phone}</a><a href="${waLink()}">WhatsApp</a><a href="mailto:${email}">${email}</a></div>
  </div><div class="container copyright">© 2026 Veyra Yol Yardım. Tüm hakları saklıdır.</div></footer>
  <div class="mobile-contact-bar" aria-label="Hızlı iletişim">
    <a href="tel:${phoneHref}">Ara</a>
    <a href="${waLink()}">WhatsApp</a>
    <a href="${waLink("Merhaba, yolda kaldım. Konumumu WhatsApp üzerinden paylaşmak istiyorum.")}">Konum Gönder</a>
  </div>
  <a class="whatsapp-float" href="${waLink()}" aria-label="WhatsApp ile çekici çağır"><img class="icon" src="/assets/img/wpicons.svg" alt="" aria-hidden="true"><strong>Yolda kaldım</strong></a>
  <script src="/assets/js/main.js" defer></script>`;
}

function page({ url, title, description, body, schema = [], robots = "index, follow", type = "website" }) {
  const canonical = `${site}${url === "/" ? "" : url}`;
  const image = `${site}/assets/img/7-24-oto-cekici-yol-yardim-760.jpg`;
  return `<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="robots" content="${robots}">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" href="/assets/img/logo.svg" type="image/svg+xml">
  <meta property="og:locale" content="tr_TR">
  <meta property="og:type" content="${type}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${image}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${image}">
  <link rel="preload" href="/assets/css/style.css" as="style">
  <link rel="stylesheet" href="/assets/css/style.css">
  ${schema.map(schemaTag).join("\n  ")}
</head>
<body>
  ${header()}
  ${body}
  ${footer()}
</body>
</html>
`;
}

function breadcrumb(items) {
  return `<nav class="breadcrumb" aria-label="Breadcrumb">${items.map((item, index) => index === items.length - 1 ? `<span>${esc(item.name)}</span>` : `<a href="${item.url}">${esc(item.name)}</a>`).join("")}</nav>`;
}

function faqBlock(faq) {
  return `<section class="faq-block"><h2>Sık sorulan sorular</h2>${faq.map((item) => `<details><summary>${esc(item.q)}</summary><p>${esc(item.a)}</p></details>`).join("")}</section>`;
}

function ctaBlock(title = "Yolda kaldıysanız beklemeyin") {
  return `<div class="inline-cta"><h3>${title}</h3><p>Telefon veya WhatsApp üzerinden konumunuzu paylaşarak hızlıca yol yardım talebi oluşturabilirsiniz.</p><p><a class="btn lime" href="tel:${phoneHref}">Hemen Ara</a> <a class="btn secondary" href="${waLink()}">WhatsApp'tan Konum Gönder</a></p></div>`;
}

function serviceCards() {
  const services = [
    ["Oto Çekici", "Aracınız arıza, kaza veya mekanik sorun nedeniyle güvenli şekilde hareket edemiyorsa oto çekici desteği gerekebilir. Veyra Yol Yardım üzerinden konumunuzu paylaşarak aracınızın durumuna uygun çekici yönlendirme süreci başlatabilirsiniz."],
    ["Oto Kurtarma", "Araç yol dışına çıktıysa, bulunduğu noktadan kendi imkanlarıyla çıkamıyorsa veya hasar nedeniyle hareket ettirilmesi riskliyse oto kurtarma desteği değerlendirilmelidir. Konum, yol koşulu ve aracın durumu net paylaşıldığında daha doğru destek planlanabilir."],
    ["Akü Takviye", "Marş basmama, zayıf gösterge ışıkları veya merkezi kilit sorunları akü kaynaklı olabilir. Akü takviye ihtimalinin güvenli olup olmadığı araç durumu ve bulunduğunuz konuma göre değerlendirilir; gerekirse çekici desteği önerilir."],
    ["Lastik Değişimi", "Lastik patlaması veya inmesi durumunda öncelik güvenli bir noktada durmak ve trafiği riske atmadan yardım istemektir. Stepne, kriko veya güvenli müdahale alanı yoksa yol yardım desteğiyle süreç daha kontrollü ilerler."],
    ["Yakıt Desteği", "Yakıt bitmesi gibi durumlarda aracın bulunduğu konum, trafik akışı ve en yakın güvenli nokta önemlidir. Telefon veya WhatsApp üzerinden konum paylaşarak yakıt desteği ya da çekici ihtiyacı hızlıca netleştirilebilir."],
    ["Kaza Sonrası Araç Çekme", "Kaza sonrasında araç çalışsa bile fren, direksiyon, lastik veya alt takım hasarı varsa aracı sürmek riskli olabilir. Önce güvenlik sağlanmalı, ardından aracın uygun çekiciyle taşınması için destek süreci başlatılmalıdır."]
  ];
  return `<div class="grid-3">${services.map(([title, text], index) => `<article class="card"><strong>${String(index + 1).padStart(2, "0")}</strong><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>`;
}

const urls = [];
function addPage(url, html) {
  urls.push(url);
  write(slugPath(url), html);
}

function homePage() {
  const faq = [
    ["Çekici fiyatları nasıl belirlenir?", "Çekici fiyatları aracın bulunduğu konum, gidilecek mesafe, aracın durumu, yol şartları ve ihtiyaç duyulan ekipmana göre değişebilir."],
    ["7/24 yol yardım alabilir miyim?", "Veyra Yol Yardım üzerinden acil yol yardım ve çekici talepleri için 7/24 iletişim kurulabilir."],
    ["Konumumu WhatsApp'tan gönderebilir miyim?", "Evet. WhatsApp üzerinden konum paylaşarak daha hızlı destek talebi oluşturabilirsiniz."],
    ["Sadece çekici mi var?", "Hayır. Akü takviye, lastik değişimi, yakıt desteği ve araç kurtarma gibi yol yardım ihtiyaçları için de iletişim kurulabilir."],
    ["Kaza sonrası araç çekme desteği var mı?", "Evet. Kaza sonrası aracın güvenli şekilde taşınması için çekici desteği talep edilebilir."],
    ["Kocaeli'nin hangi ilçelerinde hizmet var?", "İzmit, Gebze, Darıca, Körfez, Derince, Kartepe, Başiskele, Çayırova, Gölcük, Karamürsel, Kandıra ve Dilovası hedef hizmet alanlarıdır."],
    ["İstanbul'da hangi bölgeler için yol yardım talebi oluşturabilirim?", "Kadıköy, Pendik, Tuzla, Üsküdar, Kartal, Maltepe, Ataşehir, Avcılar, Esenyurt, Beşiktaş, Şişli ve Beylikdüzü gibi hedef bölgeler için yol yardım ve çekici talepleri oluşturulabilir."]
  ].map(([q, a]) => ({ q, a }));
  const processSteps = [
    ["Konumunuzu paylaşın", "Bulunduğunuz noktayı telefon veya WhatsApp üzerinden paylaşarak talebin daha hızlı anlaşılmasını sağlayın."],
    ["Araç durumunu belirtin", "Aracın çalışıp çalışmadığını, kaza durumu olup olmadığını, lastik, akü veya yakıt sorununu kısaca açıklayın."],
    ["Uygun destek için iletişim kurulsun", "Paylaştığınız konum ve araç bilgisine göre çekici veya yol yardım ihtiyacı değerlendirilir."],
    ["Çekici veya yol yardım süreci başlatılsın", "Fiyat ve hizmet bilgisi netleştikten sonra uygun destek süreci başlatılır."]
  ];
  const body = `<main>
    <section class="hero"><div class="container hero-grid"><div><p class="eyebrow">Kocaeli ve İstanbul'da aktif yol yardım</p><h1>Kocaeli ve İstanbul'da 7/24 Oto Çekici ve Yol Yardım</h1><p class="lead">Veyra Yol Yardım; yolda kalan sürücüler için oto çekici, araç kurtarma, akü takviye, lastik değişimi ve acil yol yardım taleplerinde hızlı iletişim desteği sunar.</p><div class="hero-actions"><a class="btn round-call" href="tel:${phoneHref}"><small>Yolda mı kaldınız?</small>Hemen Ara</a><a class="btn secondary" href="${waLink()}">WhatsApp'tan Konum Gönder</a></div><div class="trust-row"><div class="trust-item"><strong>7/24</strong><span>Kesintisiz iletişim</span></div><div class="trust-item"><strong>Kocaeli</strong><span>Öncelikli hizmet bölgesi</span></div><div class="trust-item"><strong>İstanbul</strong><span>Aktif hedef bölge</span></div></div></div><div class="photo-frame"><img src="/assets/img/7-24-oto-cekici-yol-yardim-760.jpg" alt="7/24 oto çekici ve yol yardım aracı" width="760" height="1013" fetchpriority="high" decoding="async"></div></div></section>
    <section class="section dark"><div class="container"><div class="section-head"><h2>Yol yardım hizmetleri</h2><p>Kocaeli ve İstanbul merkezli, hizmet ağı genişletilen yol yardım desteği.</p></div>${serviceCards()}</div></section>
    <section class="section"><div class="container"><div class="section-head"><h2>Hizmet bölgeleri</h2><p>Öncelikli hedef Kocaeli ve İstanbul'dur. İlçe sayfaları kullanıcıyı doğrudan bulunduğu bölgeye taşır.</p></div><div class="area-columns">${cityAreaLinks("kocaeli")}${cityAreaLinks("istanbul")}</div></div></section>
    <section class="section dark"><div class="container"><div class="section-head"><h2>Nasıl çalışır?</h2><p>Yolda kalan sürücünün aradığı bilgiye birkaç saniyede ulaşması hedeflenir.</p></div><div class="grid-4">${processSteps.map(([title, text], index) => `<article class="card"><strong>${index + 1}</strong><h3>${title}</h3><p>${text}</p></article>`).join("")}</div></div></section>
    <section class="section"><div class="container">${faqBlock(faq)}${ctaBlock("Hemen yol yardım talebi oluşturun")}</div></section>
  </main>`;
  addPage("/", page({
    url: "/",
    title: "Veyra Yol Yardım | 7/24 Oto Çekici ve Yol Yardım",
    description: "Veyra Yol Yardım; Kocaeli ve İstanbul'da 7/24 oto çekici, araç kurtarma, akü takviye, lastik değişimi ve yol yardım taleplerinde hızlı iletişim desteği sunar.",
    body,
    schema: [
      businessSchema(),
      { "@context": "https://schema.org", "@type": "WebSite", name: "Veyra Yol Yardım", url: `${site}/` },
      faqSchema(faq)
    ],
  }));
}

function cityAreaLinks(citySlug) {
  const city = cityData[citySlug];
  return `<div class="area-card"><h3><a href="/${citySlug}/cekici">${city.name} Çekici</a></h3><p>${city.intro}</p><div class="district-grid">${city.districts.map(([slug, name]) => `<a href="/${citySlug}/${slug}/cekici">${name} Çekici</a>`).join("")}</div></div>`;
}

function cityPage(citySlug) {
  const city = cityData[citySlug];
  const faq = [
    { q: `${city.name} çekici fiyatı neye göre değişir?`, a: "Fiyat; mesafe, aracın durumu, hizmet saati, yol koşulları ve ihtiyaç duyulan çekici tipine göre değişebilir." },
    { q: `${city.name} içinde akü ve lastik desteği alınabilir mi?`, a: "Akü bitmesi, lastik patlaması ve yakıt bitmesi gibi yol yardım ihtiyaçları için iletişim kurulabilir." },
    { q: "WhatsApp ile konum göndermek süreci hızlandırır mı?", a: "Evet. Konum, araç durumu ve hedef adres net paylaşılırsa yönlendirme daha sağlıklı yapılır." },
    { q: "Kaza sonrası araç çekme desteği talep edilebilir mi?", a: "Kaza sonrası aracın güvenli şekilde taşınması için çekici desteği talep edilebilir." }
  ];
  const paragraphs = [
    `${city.name} çekici aramalarında kullanıcıların temel ihtiyacı hızlı iletişim, doğru ekipman ve net fiyat bilgisidir. ${city.intro} Bu nedenle Veyra Yol Yardım sayfaları, panik anında gereksiz bilgi kalabalığı oluşturmadan telefon ve WhatsApp erişimini öne çıkarır.`,
    `${city.name} oto çekici taleplerinde şehir içi trafik, otoyol bağlantısı, sanayi bölgesi, kapalı otopark veya dar sokak gibi detaylar hizmet süresini etkileyebilir. Aracın çalışıp çalışmadığı, otomatik vites olup olmadığı, lastik ya da akü problemi yaşanıp yaşanmadığı baştan belirtilmelidir.`,
    `Akü takviye, lastik değişimi ve yakıt desteği gibi bazı yol yardım ihtiyaçları yerinde çözülebilir. Ancak kaza sonrası araç çekme, teker kilitlenmesi, alt takım hasarı veya güvenli hareket edememe durumlarında oto kurtarma ve çekici yönlendirmesi daha doğru olur.`,
    `${city.roads.join(", ")} gibi ana güzergahlarda konumun net paylaşılması çok önemlidir. Yakın tabela, çıkış numarası, mahalle, cadde veya işletme adı çekicinin sizi daha hızlı bulmasına yardımcı olur.`,
    `Çekici fiyatını etkileyen ana unsurlar mesafe, aracın durumu, gidilecek adres, hizmet saati, trafik yoğunluğu ve kurtarma zorluğudur. Bu yüzden fiyat konuşması yapılırken konum ve hedef adres net olmalı, hizmet başlamadan önce onay verilmelidir.`
  ];
  const body = `<main class="section"><div class="container article-layout"><article class="article-body">${breadcrumb([{ name: "Ana Sayfa", url: "/" }, { name: `${city.name} Çekici`, url: `/${citySlug}/cekici` }])}<p class="eyebrow">${city.name} yol yardım</p><h1>${city.h1}</h1>${paragraphs.map((p) => `<p>${p}</p>`).join("")}<h2>${city.name} ilçe çekici hizmet bölgeleri</h2><p>${city.name} içinde kullanıcılar çoğu zaman doğrudan ilçe adıyla arama yapar. Bu nedenle ilçe sayfaları hem kullanıcıya hem Google'a daha net bir yerel sinyal verir.</p><div class="district-grid">${city.districts.map(([slug, name]) => `<a href="/${citySlug}/${slug}/cekici">${name} Çekici</a>`).join("")}</div>${faqBlock(faq)}${ctaBlock(`${city.name} içinde hızlı destek alın`)}</article><aside class="side-box"><h3>${city.name} 7/24 çekici</h3><p>Konumunuzu, araç durumunuzu ve hedef adresinizi paylaşarak hızlı destek isteyin.</p><a class="btn lime" href="${waLink()}">WhatsApp ile ulaş</a></aside></div></main>`;
  addPage(`/${citySlug}/cekici`, page({
    url: `/${citySlug}/cekici`,
    title: city.title,
    description: city.description,
    body,
    schema: [businessSchema([city.name]), { "@context": "https://schema.org", "@type": "Service", name: `${city.name} çekici ve yol yardım`, areaServed: city.name, serviceType: "Oto çekici ve yol yardım" }, faqSchema(faq), breadcrumbSchema([{ name: "Ana Sayfa", url: "/" }, { name: `${city.name} Çekici`, url: `/${citySlug}/cekici` }])],
  }));
}

function districtPage(citySlug, district) {
  const city = cityData[citySlug];
  const [slug, name, neighborhoods, localNote, nearby] = district;
  const url = `/${citySlug}/${slug}/cekici`;
  const faq = [
    { q: `${name} çekici hizmeti için nasıl iletişim kurabilirim?`, a: "Telefon veya WhatsApp üzerinden konumunuzu paylaşarak hızlı şekilde destek talebi oluşturabilirsiniz." },
    { q: `${name} çekici fiyatı neye göre değişir?`, a: "Fiyat; mesafe, aracın durumu, yol koşulları ve ihtiyaç duyulan çekici tipine göre değişebilir." },
    { q: `${name} bölgesinde akü takviye desteği var mı?`, a: "Akü bitmesi gibi durumlarda yol yardım desteği için iletişim kurulabilir." },
    { q: "Gece çekici talebi oluşturabilir miyim?", a: "Acil çekici ve yol yardım talepleri için 7/24 iletişim kurulabilir." }
  ];
  const nearLinks = nearby.map((nearName) => {
    const found = city.districts.find((item) => item[1] === nearName);
    return found ? `<a href="/${citySlug}/${found[0]}/cekici">${nearName} Çekici</a>` : `<span>${nearName}</span>`;
  }).join("");
  const body = `<main class="section"><div class="container article-layout"><article class="article-body">${breadcrumb([{ name: "Ana Sayfa", url: "/" }, { name: `${city.name} Çekici`, url: `/${citySlug}/cekici` }, { name: `${name} Çekici`, url }])}<p class="eyebrow">${name} yol yardım</p><h1>${name} Çekici ve 7/24 Yol Yardım</h1>
  <p>${name} bölgesinde yolda kalma, arıza, kaza, akü bitmesi, lastik patlaması veya yakıt bitmesi gibi durumlarda Veyra Yol Yardım üzerinden hızlı destek talebi oluşturabilirsiniz.</p>
  <p>${localNote} ${neighborhoods.join(", ")} gibi mahalle ve bölgelerde konumun doğru paylaşılması çekici yönlendirmesini hızlandırır.</p>
  <h2>${name} oto çekici hizmeti</h2><p>${name} oto çekici ihtiyacında aracın hareket edip edemediği, otomatik vites olup olmadığı, bulunduğu yerin kapalı otopark mı açık yol mu olduğu önemlidir. Bu bilgiler doğru ekipman ve gerçekçi varış planı için gereklidir.</p>
  <h2>${name} yol yardım ihtiyaçları</h2><p>Akü takviye, lastik değişimi, yakıt desteği ve basit arıza durumları bazı koşullarda yerinde çözülebilir. Güvenli olmayan yolda, yoğun trafikte veya kaza sonrası hasar şüphesi varsa aracı zorlamadan çekici desteği istemek daha doğru olur.</p>
  <h2>Kaza sonrası araç çekme</h2><p>Kaza sonrası araç çekme sürecinde önce güvenlik sağlanmalı, gerekiyorsa resmi acil hatlardan destek alınmalıdır. Araç hareket edemiyorsa veya yürür durumda olsa bile fren, direksiyon, lastik ya da süspansiyon hasarı varsa çekiciyle taşımak daha güvenlidir.</p>
  <h2>Çekici fiyatını etkileyen faktörler</h2><p>${name} çekici fiyatı; mesafe, aracın durumu, hedef adres, saat, trafik yoğunluğu ve kurtarma zorluğuna göre değişebilir. Fiyat konuşması yapılmadan hizmet başlatılmamalı, kullanıcı fiyatı onayladıktan sonra süreç ilerlemelidir.</p>
  <h2>WhatsApp ile konum gönderme</h2><p>WhatsApp konumu, yakın tabela, cadde adı veya işletme bilgisi çekici ekibinin sizi daha hızlı bulmasına yardımcı olur. Özellikle otoyol, sanayi bölgesi, sahil yolu ve site içi otoparklarda bu bilgi önemlidir.</p>
  <h2>Yakın bölgeler ve iç linkler</h2><p>${name} çevresinde yakın hizmet bağlantıları: <span class="inline-links">${nearLinks}</span>. Ayrıca <a href="/${citySlug}/cekici">${city.name} çekici</a> sayfasından şehir genelindeki diğer bölgelere ulaşabilirsiniz.</p>
  ${faqBlock(faq)}${ctaBlock(`${name} içinde yol yardım talebi oluşturun`)}</article><aside class="side-box"><h3>${name} çekici iletişim</h3><p>Konumunuzu ve araç durumunuzu paylaşın, hızlı iletişim desteği alın.</p><a class="btn lime" href="${waLink()}">WhatsApp ile ulaş</a></aside></div></main>`;
  addPage(url, page({
    url,
    title: `${name} Çekici | 7/24 Oto Kurtarma ve Yol Yardım`,
    description: `${name} bölgesinde 7/24 oto çekici, yol yardım, akü takviye, lastik değişimi ve araç kurtarma desteği için Veyra Yol Yardım ile iletişime geçin.`,
    body,
    schema: [businessSchema([`${name}, ${city.name}`]), { "@context": "https://schema.org", "@type": "Service", name: `${name} çekici ve yol yardım`, areaServed: `${name}, ${city.name}`, serviceType: "Oto çekici ve yol yardım" }, faqSchema(faq), breadcrumbSchema([{ name: "Ana Sayfa", url: "/" }, { name: `${city.name} Çekici`, url: `/${citySlug}/cekici` }, { name: `${name} Çekici`, url }])],
  }));
}

function guideIndex() {
  const body = `<main class="section"><div class="container"><div class="section-head"><div><p class="eyebrow">Yol yardım rehberi</p><h1>Yol Yardım Rehberi</h1></div><p>Yolda kalınca güvenli karar vermek, konum paylaşmak ve doğru destek istemek için hazırlanmış pratik rehberler.</p></div><div class="grid-3">${blogArticles.map(([slug, title, description]) => `<a class="article-card" href="/yol-yardim-rehberi/${slug}"><h3>${title}</h3><p>${description}</p></a>`).join("")}</div>${ctaBlock()}</div></main>`;
  addPage("/yol-yardim-rehberi", page({
    url: "/yol-yardim-rehberi",
    title: "Yol Yardım Rehberi | Veyra Yol Yardım",
    description: "Yolda kalınca yapılacaklar, çekici fiyatları, akü, lastik, kaza sonrası araç çekme ve WhatsApp konum paylaşımı rehberleri.",
    body,
  }));
}

function articlePage(article) {
  const [slug, title, description] = article;
  const url = `/yol-yardim-rehberi/${slug}`;
  const paragraphs = [
    `${title} konusu, yolda kalan sürücünün panik anında doğru karar vermesi için önemlidir. Öncelik her zaman can güvenliği, görünürlük ve konum bilgisinin netleştirilmesidir.`,
    `Araç arızası, kaza, akü bitmesi, lastik patlaması veya yakıt bitmesi gibi durumlarda yapılacak ilk iş bulunduğunuz yolu ve çevre şartlarını değerlendirmektir. Otoyol, köprü bağlantısı, dar sokak veya sanayi bölgesi gibi yerlerde risk seviyesi değişebilir.`,
    `Çekici veya yol yardım talebi oluştururken araç marka/model, aracın çalışıp çalışmadığı, otomatik vites olup olmadığı, gidilecek adres ve telefon bilgisi açıkça paylaşılmalıdır. Bu bilgiler doğru ekipmanın yönlendirilmesini kolaylaştırır.`,
    `Fiyat konusu hizmet başlamadan önce netleştirilmelidir. Mesafe, saat, yol koşulu ve kurtarma zorluğu fiyatı etkileyebilir. Kullanıcı fiyatı onaylamadan sürecin başlatılmaması daha güvenli bir deneyim sağlar.`,
    `Veyra Yol Yardım, Kocaeli ve İstanbul merkezli olarak telefon ve WhatsApp üzerinden hızlı iletişim desteği sunar. Konum paylaşımı, özellikle şehir içi yoğun trafikte ve otoyol bağlantılarında süreci hızlandırır.`
  ];
  const body = `<main class="section"><div class="container article-layout"><article class="article-body">${breadcrumb([{ name: "Ana Sayfa", url: "/" }, { name: "Yol Yardım Rehberi", url: "/yol-yardim-rehberi" }, { name: title, url }])}<p class="eyebrow">Rehber</p><h1>${title}</h1>${paragraphs.map((p) => `<p>${p}</p>`).join("")}<h2>Ne zaman çekici çağırmak gerekir?</h2><p>Araç güvenle hareket edemiyorsa, kaza sonrası hasar şüphesi varsa, lastik veya akü problemi yerinde çözülemiyorsa çekici veya yol yardım desteği istemek daha doğru olur.</p><h2>İlgili hizmet bölgeleri</h2><p><a href="/kocaeli/cekici">Kocaeli çekici</a>, <a href="/istanbul/cekici">İstanbul çekici</a>, <a href="/kocaeli/izmit/cekici">İzmit çekici</a>, <a href="/kocaeli/gebze/cekici">Gebze çekici</a>, <a href="/istanbul/pendik/cekici">Pendik çekici</a> sayfalarından bölgesel bilgilere ulaşabilirsiniz.</p>${ctaBlock("Yolda kaldıysanız hızlı iletişim kurun")}</article><aside class="side-box"><h3>Yol yardım talebi</h3><p>Konumunuzu paylaşın, araç durumunu belirtin.</p><a class="btn lime" href="${waLink()}">WhatsApp ile ulaş</a></aside></div></main>`;
  addPage(url, page({
    url,
    title: `${title} | Veyra Yol Yardım`,
    description,
    body,
    type: "article",
    schema: [{ "@context": "https://schema.org", "@type": "Article", headline: title, description, datePublished: lastmod, dateModified: lastmod, author: { "@type": "Organization", name: "Veyra Yol Yardım" }, publisher: { "@type": "Organization", name: "Veyra Yol Yardım" }, mainEntityOfPage: `${site}${url}` }, breadcrumbSchema([{ name: "Ana Sayfa", url: "/" }, { name: "Yol Yardım Rehberi", url: "/yol-yardim-rehberi" }, { name: title, url }])],
  }));
}

function servicesPage() {
  const body = `<main class="section"><div class="container"><div class="section-head"><div><p class="eyebrow">Hizmetler</p><h1>Yol Yardım Hizmetleri</h1></div><p>Oto çekici, oto kurtarma, akü takviye, lastik değişimi, yakıt desteği ve kaza sonrası araç çekme için hızlı iletişim.</p></div>${serviceCards()}${ctaBlock()}</div></main>`;
  addPage("/hizmetler.html", page({ url: "/hizmetler.html", title: "Yol Yardım Hizmetleri | Oto Çekici, Akü, Lastik", description: "Veyra Yol Yardım ile oto çekici, araç kurtarma, akü takviye, lastik değişimi ve acil yol yardım hizmetleri.", body, schema: [businessSchema()] }));
}

function simplePage(url, title, description, h1, paragraphs) {
  const body = `<main class="section"><div class="container article-body">${breadcrumb([{ name: "Ana Sayfa", url: "/" }, { name: h1, url }])}<h1>${h1}</h1>${paragraphs.map((p) => `<p>${p}</p>`).join("")}${ctaBlock("İletişime geçin")}</div></main>`;
  addPage(url, page({ url, title, description, body }));
}

function legacyRedirect(file, target) {
  write(file, `<!doctype html><html lang="tr"><head><meta charset="utf-8"><meta name="robots" content="noindex, follow"><meta http-equiv="refresh" content="0; url=${target}"><link rel="canonical" href="${site}${target}"><title>Yönlendiriliyor</title></head><body><p>Yeni sayfaya yönlendiriliyorsunuz: <a href="${target}">${target}</a></p></body></html>`);
}

cleanDir("kocaeli");
cleanDir("istanbul");
cleanDir("yol-yardim-rehberi");
cleanDir("iletisim");
cleanDir("gizlilik-politikasi");
cleanDir("kvkk-aydinlatma-metni");
cleanDir("kullanim-sartlari");
cleanDir("blog");
cleanDir("sehirler");
cleanDir("ilceler");

homePage();
servicesPage();
Object.keys(cityData).forEach((citySlug) => {
  cityPage(citySlug);
  cityData[citySlug].districts.forEach((district) => districtPage(citySlug, district));
});
guideIndex();
blogArticles.forEach(articlePage);
simplePage("/hakkimizda.html", "Hakkımızda | Veyra Yol Yardım", "Veyra Yol Yardım'ın 7/24 oto çekici ve yol yardım yaklaşımı hakkında bilgi alın.", "Veyra Yol Yardım Hakkında", [
  "Veyra Yol Yardım, yolda kalan sürücünün hızlı, anlaşılır ve güven veren bir iletişim akışına ulaşması için hazırlanmış yerel yol yardım platformudur.",
  "Öncelikli çalışma odağı Kocaeli ve İstanbul'dur. İlçe bazlı sayfalarla kullanıcıların bulunduğu bölgeye göre daha net bilgi alması hedeflenir.",
  "Ana platform yayına alındığında fiyat onayı, sürücü takibi ve hizmet durumu gibi akışlar aynı SEO URL yapısı korunarak geliştirilecektir."
]);
simplePage("/nasil-calisir.html", "Nasıl Çalışır? | Veyra Yol Yardım", "Veyra Yol Yardım'da konum paylaşma, araç durumu bildirme ve çekici talebi oluşturma sürecini öğrenin.", "Nasıl Çalışır?", [
  "Yolda kaldığınızda telefon veya WhatsApp üzerinden konumunuzu ve araç durumunuzu paylaşırsınız.",
  "Araç çalışıyor mu, kaza var mı, lastik mi patladı, akü mü bitti gibi bilgiler netleşince doğru destek türü belirlenir.",
  "Ana platform açıldığında bu süreç müşteri onayı, sürücü bildirimi ve canlı takip adımlarıyla daha kontrollü hale gelecektir."
]);
simplePage("/cekici-basvuru.html", "Çekici Başvurusu | Veyra Yol Yardım", "Veyra Yol Yardım çekici ve yol yardım ağına katılmak isteyen işletmeler için başvuru bilgileri.", "Çekici Başvurusu", [
  "Çekici işletmeleri ve bireysel sürücüler, Veyra Yol Yardım ağına katılmak için iletişim bilgilerini paylaşabilir.",
  "Sistem açılışına yakın dönemde vergi levhası, sürücü belgesi ve araç evrakları gibi gerekli belgeler ayrıca talep edilecektir.",
  "Onaysız araç ve sürücüler aktif hizmet akışına alınmayacaktır; bu yapı marka güvenliği için önemlidir."
]);
simplePage("/on-kayit.html", "Ön Kayıt | Veyra Yol Yardım", "Veyra Yol Yardım ön kayıt sayfası ile hizmet ağı açılışı öncesinde iletişim bilgilerinizi bırakın.", "Ön Kayıt", [
  "Ön kayıt sayfası, hizmet ağı açılmadan önce çekici işletmeleri ve iş ortaklarıyla iletişime geçmek için hazırlanmıştır.",
  "Müşteri tarafında acil yol yardım ihtiyacı varsa telefon veya WhatsApp üzerinden doğrudan iletişim kurulmalıdır.",
  "Ön kayıt bilgileri yalnızca geri dönüş ve operasyon planlaması amacıyla kullanılacaktır."
]);
simplePage("/iletisim", "İletişim | Veyra Yol Yardım", "Veyra Yol Yardım telefon, WhatsApp ve e-posta iletişim bilgileri.", "İletişim", [
  `Yolda kaldıysanız ${phone} numarası üzerinden telefonla veya WhatsApp ile iletişim kurabilirsiniz.`,
  "Konumunuzu, araç durumunu ve hedef adresi paylaşmanız sürecin daha hızlı ilerlemesine yardımcı olur.",
  `E-posta: ${email}`
]);
simplePage("/gizlilik-politikasi", "Gizlilik Politikası | Veyra Yol Yardım", "Veyra Yol Yardım gizlilik politikası ve iletişim formlarında paylaşılan bilgilerin kullanım amacı.", "Gizlilik Politikası", [
  "Bu metin genel bilgilendirme amacıyla hazırlanmıştır. Site üzerinden paylaşılan ad, telefon, e-posta, şehir ve mesaj bilgileri yalnızca talebinize dönüş yapmak için kullanılabilir.",
  "Acil yol yardım talepleri telefon veya WhatsApp üzerinden alınır. Gerçek hukuki süreçler için profesyonel danışmanlık alınması önerilir."
]);
simplePage("/kvkk-aydinlatma-metni", "KVKK Aydınlatma Metni | Veyra Yol Yardım", "Veyra Yol Yardım KVKK aydınlatma metni ve kişisel veri işleme amaçları hakkında genel bilgi.", "KVKK Aydınlatma Metni", [
  "Bu sayfa, iletişim amacıyla paylaşılan kişisel veriler hakkında genel bilgilendirme sunar. Ad, telefon, e-posta ve mesaj bilgileriniz talebe dönüş yapmak amacıyla işlenebilir.",
  "Bu metin hukuki kesinlik iddiası taşımaz; operasyon başlamadan önce profesyonel hukuki metinlerle güncellenmelidir."
]);
simplePage("/kullanim-sartlari", "Kullanım Şartları | Veyra Yol Yardım", "Veyra Yol Yardım web sitesi kullanım şartları hakkında genel bilgilendirme.", "Kullanım Şartları", [
  "Bu web sitesi, yol yardım ve çekici hizmetlerine ilişkin bilgilendirme ve iletişim amacıyla hazırlanmıştır.",
  "Sitedeki bilgiler genel niteliktedir. Hizmet kapsamı, fiyat ve operasyon detayları konum, araç durumu ve uygunluk koşullarına göre değişebilir."
]);

legacyRedirect("sehirler/kocaeli-cekici.html", "/kocaeli/cekici");
legacyRedirect("sehirler/istanbul-cekici.html", "/istanbul/cekici");
legacyRedirect("kocaeli-cekici.html", "/kocaeli/cekici");
legacyRedirect("istanbul-cekici.html", "/istanbul/cekici");
Object.keys(cityData).forEach((citySlug) => {
  cityData[citySlug].districts.forEach(([slug]) => {
    legacyRedirect(`${citySlug}/${slug}-cekici.html`, `/${citySlug}/${slug}/cekici`);
    legacyRedirect(`ilceler/${citySlug}/${slug}-cekici.html`, `/${citySlug}/${slug}/cekici`);
  });
});
legacyRedirect("blog/yol-yardim-rehberi.html", "/yol-yardim-rehberi");
legacyRedirect("yol-yardim-rehberi.html", "/yol-yardim-rehberi");
legacyRedirect("blog/yolda-kalinca-ne-yapilmali.html", "/yol-yardim-rehberi/yolda-kalinca-ilk-ne-yapilmali");
legacyRedirect("yolda-kalinca-ne-yapilmali.html", "/yol-yardim-rehberi/yolda-kalinca-ilk-ne-yapilmali");
legacyRedirect("blog/cekici-fiyatlari.html", "/yol-yardim-rehberi/cekici-fiyatlari-2026");
legacyRedirect("cekici-fiyatlari.html", "/yol-yardim-rehberi/cekici-fiyatlari-2026");
legacyRedirect("blog/aku-biterse-ne-yapilmali.html", "/yol-yardim-rehberi/aku-bitince-ne-yapilir");
legacyRedirect("aku-biterse-ne-yapilmali.html", "/yol-yardim-rehberi/aku-bitince-ne-yapilir");
legacyRedirect("blog/lastik-patlarsa-ne-yapilmali.html", "/yol-yardim-rehberi/lastik-patlarsa-ne-yapilmali");
legacyRedirect("lastik-patlarsa-ne-yapilmali.html", "/yol-yardim-rehberi/lastik-patlarsa-ne-yapilmali");
legacyRedirect("gizlilik.html", "/gizlilik-politikasi");
legacyRedirect("yasal/gizlilik.html", "/gizlilik-politikasi");

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url, index) => `  <url>
    <loc>${site}${url === "/" ? "" : url}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${index === 0 ? "1.00" : url.includes("/cekici") ? "0.86" : "0.72"}</priority>
  </url>`).join("\n")}
</urlset>
`;
write("sitemap.xml", sitemapXml);
write("sitemap-main.xml", sitemapXml);
write("sitemap.txt", `${urls.map((url) => `${site}${url === "/" ? "" : url}`).join("\n")}\n`);
write("robots.txt", `User-agent: *
Allow: /

Sitemap: ${site}/sitemap.xml
`);
write("README.md", `# Veyra Yol Yardım Landing Page

Statik SEO landing page. Ana frontend ile uyumlu kalıcı URL yapısı kullanır.

Ana sitemap:
https://veyrayolyardim.com/sitemap.xml
`);

console.log(`Generated ${urls.length} indexable SEO URLs.`);
