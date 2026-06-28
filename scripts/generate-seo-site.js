const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const site = "https://veyrayolyardim.com";
const lastmod = "2026-06-19";
const phone = "+90 546 534 20 33";
const phoneHref = "905465342033";
const email = "veyro.iletisim@gmail.com";

const kocaeli = [
  ["izmit", "İzmit", "Kocaeli merkez trafiği, D-100 bağlantısı ve sanayi bölgeleri nedeniyle İzmit çekici aramaları gün içinde sıklaşır."],
  ["gebze", "Gebze", "Gebze OSB, TEM bağlantısı ve İstanbul geçiş hattı nedeniyle Gebze oto çekici talepleri özellikle iş çıkış saatlerinde önem kazanır."],
  ["darica", "Darıca", "Darıca sahil, Farabi çevresi ve Gebze bağlantıları için konumun doğru paylaşılması çekici yönlendirmesini hızlandırır."],
  ["korfez", "Körfez", "Körfez ilçesinde D-100, otoyol bağlantıları ve sanayi hattında yaşanan arızalar için hızlı yol yardım iletişimi gerekir."],
  ["derince", "Derince", "Derince liman ve şehir içi geçişleri çevresinde arıza yaşayan araçlar için güvenli bekleme ve net konum paylaşımı kritiktir."],
  ["kartepe", "Kartepe", "Kartepe yol yardım taleplerinde özellikle yüksek kesimler, kış şartları ve servis mesafesi fiyatı etkileyebilir."],
  ["basiskele", "Başiskele", "Başiskele sahil yolu ve şehir bağlantılarında yolda kalan sürücüler için 7/24 çekici iletişimi önemlidir."]
];

const istanbul = [
  ["kadikoy", "Kadıköy", "Kadıköy şehir içi yoğunluğu, otopark çıkışları ve sahil hattı nedeniyle doğru araç tipi bilgisi önemlidir."],
  ["pendik", "Pendik", "Pendik sahil yolu, E-5 ve TEM bağlantıları çevresinde çekici yönlendirmesi için konum netliği gerekir."],
  ["tuzla", "Tuzla", "Tuzla tersane ve sanayi hattında araç arızalarında çekici ekipmanı ihtiyaca göre seçilmelidir."],
  ["uskudar", "Üsküdar", "Üsküdar şehir içi trafiğinde yolda kalan araçlar için güvenli durma noktası ve hızlı iletişim önemlidir."],
  ["avcilar", "Avcılar", "Avcılar E-5 ve sahil bağlantılarında çekici ihtiyacı çoğu zaman yoğun trafikle birlikte yaşanır."],
  ["esenyurt", "Esenyurt", "Esenyurt ve çevresinde yoğun yerleşim, sanayi ve bağlantı yolları nedeniyle çekici talepleri çeşitlenir."],
  ["besiktas", "Beşiktaş", "Beşiktaş merkez ve sahil hattında çekici çağırırken aracın durduğu nokta özellikle net tarif edilmelidir."],
  ["sisli", "Şişli", "Şişli gibi dar ve yoğun bölgelerde uygun çekici tipi ve varış rotası önceden netleştirilmelidir."]
];

const articles = [
  {
    file: "blog/yol-yardim-rehberi.html",
    title: "Yol Yardım Rehberi | Veyra Yol Yardım",
    description: "Yolda kalınca yapılacaklar, çekici fiyatları, akü bitmesi ve lastik patlaması için pratik yol yardım rehberleri.",
    h1: "Yol yardım rehberi",
    intro: "Yolda kalan sürücüler genellikle hızlı karar vermek zorunda kalır. Bu rehber; güvenli bekleme, konum paylaşma, çekici çağırma ve fiyat konuşması gibi temel adımları sade şekilde anlatır.",
    points: [
      "İlk adım aracı güvenli bir noktaya almak ve görünür olmaktır.",
      "Çekici çağırırken konum, araç tipi, gidilecek adres ve arıza bilgisi paylaşılmalıdır.",
      "Fiyat konuşması hizmet başlamadan önce yapılmalı, belirsiz ifadeler yerine net mesafe ve nokta belirtilmelidir.",
      "Otoyol, köprü bağlantısı veya yoğun trafik hattında araç çevresinde gereksiz beklemekten kaçınılmalıdır."
    ]
  },
  {
    file: "blog/yolda-kalinca-ne-yapilmali.html",
    title: "Yolda Kalınca Ne Yapılmalı? | Güvenli Yol Yardım Rehberi",
    description: "Yolda kalınca güvenli bekleme, konum paylaşma, çekici çağırma, reflektör kullanımı ve fiyat onayı adımları.",
    h1: "Yolda kalınca ne yapılmalı?",
    intro: "Aracınız yolda kaldığında ilk amaç panik yapmadan güvenliği sağlamaktır. Çekici çağırmadan önce bulunduğunuz yer, trafik akışı ve yol güvenliği değerlendirilmelidir.",
    points: [
      "Aracı mümkünse emniyet şeridine, cep alanına veya trafiği engellemeyen güvenli bir noktaya alın.",
      "Dörtlüleri yakın, reflektör kullanın ve araç içinde riskli şekilde beklemeyin.",
      "WhatsApp konumu, yakın tabela, çıkış numarası veya işletme adı paylaşın.",
      "Araç çalışıyor mu, kazalı mı, otomatik vites mi, lastik mi patladı gibi bilgileri kısa yazın."
    ]
  },
  {
    file: "blog/cekici-fiyatlari.html",
    title: "Çekici Fiyatları Neye Göre Değişir? | 7/24 Oto Çekici",
    description: "Çekici fiyatları mesafe, araç tipi, saat, yol koşulları ve kurtarma ihtiyacına göre değişir.",
    h1: "Çekici fiyatları neye göre değişir?",
    intro: "Çekici ücretleri sabit değildir. Aynı şehirde bile konum, mesafe, araç tipi, hizmet saati ve kurtarma zorluğu fiyatı değiştirebilir.",
    points: [
      "Şehir içi kısa mesafe ile şehir dışı taşıma aynı şekilde hesaplanmaz.",
      "Binek araç, hafif ticari, SUV veya düşük araç için ekipman ihtiyacı farklı olabilir.",
      "Gece saatleri, yoğun trafik ve otoyol bağlantıları fiyatı etkileyebilir.",
      "En doğru fiyat için konum, hedef adres ve araç durumu net paylaşılmalıdır."
    ]
  },
  {
    file: "blog/aku-biterse-ne-yapilmali.html",
    title: "Akü Biterse Ne Yapılmalı? | Akü Takviye ve Yol Yardım",
    description: "Akü bittiğinde yapılması gerekenler, güvenli akü takviye adımları ve çekici/yol yardım çağırma önerileri.",
    h1: "Akü biterse ne yapılmalı?",
    intro: "Araç marş basmıyor, göstergeler zayıf yanıyor veya merkezi kilit zor çalışıyorsa sorun akü kaynaklı olabilir. Ancak marş motoru veya alternatör arızası da benzer belirti verebilir.",
    points: [
      "Takviye kablosu yanlış bağlanırsa araç elektroniği zarar görebilir.",
      "Akü şişmiş, çatlamış veya sıvı sızdırıyorsa müdahale etmeyin.",
      "Takviye sonrası araç çalışmıyorsa çekici gerekebilir.",
      "Konumunuzu ve aracın marka/model bilgisini paylaşmak yardım süresini kısaltır."
    ]
  },
  {
    file: "blog/lastik-patlarsa-ne-yapilmali.html",
    title: "Lastik Patlarsa Ne Yapılmalı? | Lastik Değişimi ve Yol Yardım",
    description: "Lastik patladığında güvenli durma, reflektör kullanımı, stepne kontrolü ve yol yardım çağırma adımları.",
    h1: "Lastik patlarsa ne yapılmalı?",
    intro: "Lastik patlaması sürüş güvenliğini doğrudan etkiler. Direksiyonu sakin tutmak, ani fren yapmamak ve güvenli bir noktada durmak ilk adımdır.",
    points: [
      "Aracı yol dışına alın, dörtlüleri yakın ve reflektör yerleştirin.",
      "Stepne, kriko ve bijon anahtarı yoksa yardım isteyin.",
      "Jant hasarlıysa veya birden fazla lastik zarar gördüyse çekici çağırın.",
      "Otoyolda araç çevresinde gereksiz beklemek risklidir."
    ]
  }
];

function ensure(file) {
  fs.mkdirSync(path.dirname(path.join(root, file)), { recursive: true });
}

function write(file, content) {
  ensure(file);
  fs.writeFileSync(path.join(root, file), content, "utf8");
}

function nav() {
  return `<nav class="nav-links" aria-label="Ana menü">
        <a href="/">Ana Sayfa</a>
        <a href="/hizmetler.html">Hizmetler</a>
        <details class="nav-dropdown">
          <summary>Sayfalar</summary>
          <div class="dropdown-panel">
            <strong>Şehir Sayfaları</strong>
            <a href="/sehirler/kocaeli-cekici.html">Kocaeli 7/24 Yol Yardım</a>
            <a href="/sehirler/istanbul-cekici.html">İstanbul 7/24 Yol Yardım</a>
            <strong>Kocaeli İlçeleri</strong>
            <a href="/ilceler/kocaeli/izmit-cekici.html">İzmit Çekici</a>
            <a href="/ilceler/kocaeli/gebze-cekici.html">Gebze Çekici</a>
            <a href="/ilceler/kocaeli/darica-cekici.html">Darıca Çekici</a>
            <strong>Blog ve Rehberler</strong>
            <a href="/blog/yol-yardim-rehberi.html">Yol Yardım Rehberi</a>
            <a href="/blog/yolda-kalinca-ne-yapilmali.html">Yolda Kalınca Ne Yapılır?</a>
            <a href="/blog/cekici-fiyatlari.html">Çekici Fiyatları</a>
            <a href="/blog/aku-biterse-ne-yapilmali.html">Akü Biterse Ne Yapılır?</a>
            <a href="/blog/lastik-patlarsa-ne-yapilmali.html">Lastik Patlarsa Ne Yapılır?</a>
          </div>
        </details>
        <a href="/hakkimizda.html">Hakkımızda</a>
        <a href="/cekici-basvuru.html">Başvuru</a>
      </nav>`;
}

function header() {
  return `<header class="site-header">
    <div class="container nav">
      <a class="brand" href="/"><img src="/assets/img/logo.svg" alt="Veyra Yol Yardım logosu"><span data-brand>Veyra Yol Yardım</span></a>
      ${nav()}
      <div class="nav-actions"><a class="btn secondary" data-phone-link href="tel:${phoneHref}">Ara</a><button class="menu-btn" data-menu-button aria-label="Menüyü aç" aria-expanded="false">☰</button></div>
    </div>
  </header>`;
}

function footer() {
  return `<footer class="footer"><div class="container footer-grid"><div><a class="brand" href="/"><img src="/assets/img/logo.svg" alt=""><span data-brand>Veyra Yol Yardım</span></a><p>7/24 yol yardım, oto çekici ve güvenilir çekici ağı.</p></div><div class="footer-links"><strong>Sayfalar</strong><a href="/sehirler/kocaeli-cekici.html">Kocaeli Çekici</a><a href="/sehirler/istanbul-cekici.html">İstanbul Çekici</a><a href="/blog/yol-yardim-rehberi.html">Yol Yardım Rehberi</a><a href="/yasal/gizlilik.html">Gizlilik</a></div><div class="footer-links"><strong>İletişim</strong><a data-phone-link href="tel:${phoneHref}" data-phone>${phone}</a><a data-email-link href="mailto:${email}" data-email>${email}</a></div></div><div class="container copyright">© 2026 Veyra Yol Yardım. Tüm hakları saklıdır.</div></footer>
  <a class="whatsapp-float" data-wa-customer href="#" aria-label="WhatsApp ile çekici çağır"><img class="icon" src="/assets/img/wpicons.svg" alt="" aria-hidden="true"><strong>Yolda kaldım</strong></a>
  <script src="/assets/js/main.js" defer></script>`;
}

function page({ title, description, canonical, body, schema = "" }) {
  return `<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${site}${canonical}">
  <link rel="icon" href="/assets/img/logo.svg" type="image/svg+xml">
  <link rel="preload" href="/assets/css/style.css" as="style">
  <link rel="stylesheet" href="/assets/css/style.css">
  ${schema}
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
  return `<nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Ana Sayfa</a>${items.map((item) => item.href ? `<a href="${item.href}">${item.label}</a>` : `<span>${item.label}</span>`).join("")}</nav>`;
}

function districtGrid(districts, citySlug) {
  return `<div class="district-grid">${districts.map(([slug, name]) => `<a href="/ilceler/${citySlug}/${slug}-cekici.html">${name} Çekici</a>`).join("")}</div>`;
}

function cityPage({ city, slug, districts, intro }) {
  const canonical = `/sehirler/${slug}-cekici.html`;
  write(`sehirler/${slug}-cekici.html`, page({
    title: `${city} Çekici | 7/24 Yol Yardım ve Oto Kurtarma`,
    description: `${city} çekici ve 7/24 yol yardım. Oto kurtarma, araç çekme, akü takviye ve lastik desteği için hızlı iletişim.`,
    canonical,
    schema: `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "LocalBusiness", name: `Veyra Yol Yardım ${city}`, url: `${site}${canonical}`, telephone: phone, areaServed: city, openingHours: "Mo-Su 00:00-23:59", priceRange: "₺₺" })}</script>`,
    body: `<main class="section"><div class="container article-layout"><article class="article-body">${breadcrumb([{ label: "Şehir Sayfaları" }, { label: `${city} Çekici` }])}<p class="eyebrow">${city} yol yardım</p><h1>${city} çekici ve 7/24 oto kurtarma</h1><p>${intro}</p><p>${city} genelinde çekici çağırırken en önemli konu konumu net paylaşmak, araç tipini doğru söylemek ve gidilecek noktayı baştan belirtmektir. Veyra Yol Yardım, yolda kalan sürücünün telefon veya WhatsApp üzerinden hızlıca destek alabileceği net bir iletişim deneyimi sunar.</p><h2>${city} çekici hizmetleri</h2><p>Arıza, kaza, akü bitmesi, lastik patlaması, yakıt bitmesi veya aracın çalışmaması gibi durumlarda çekici ve yol yardım ihtiyacı oluşabilir. Her talepte fiyat, varış süresi ve taşıma noktası konuşularak netleştirilmelidir.</p><h2>${city} ilçe çekici sayfaları</h2><p>Google'da kullanıcılar genellikle doğrudan bulundukları ilçeyi arar. Bu yüzden ${city} için ayrı ilçe sayfaları hazırlanmıştır.</p>${districtGrid(districts, slug)}<div class="inline-cta"><h3>${city} içinde yolda mı kaldınız?</h3><p>WhatsApp üzerinden konumunuzu gönderin, hızlı dönüş alın.</p><p><a class="btn lime" data-wa-customer href="#">Hemen destek iste</a></p></div></article><aside class="side-box"><h3>${city} 7/24 çekici</h3><p>Konumunuzu ve araç bilgisini paylaşarak hızlı destek isteyin.</p><a class="btn lime" data-wa-customer href="#">WhatsApp ile ulaş</a></aside></div></main>`
  }));
}

function districtPage(city, citySlug, slug, name, note) {
  const canonical = `/ilceler/${citySlug}/${slug}-cekici.html`;
  write(`ilceler/${citySlug}/${slug}-cekici.html`, page({
    title: `${name} Çekici | ${city} 7/24 Yol Yardım`,
    description: `${name} çekici ve yol yardım hizmeti. ${city} ${name} bölgesinde 7/24 oto çekici, oto kurtarma ve acil yol yardım iletişimi.`,
    canonical,
    schema: `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: `${name} çekici ve yol yardım`, areaServed: `${name}, ${city}`, serviceType: "Oto çekici ve yol yardım" })}</script>`,
    body: `<main class="section"><div class="container article-layout"><article class="article-body">${breadcrumb([{ label: city, href: `/sehirler/${citySlug}-cekici.html` }, { label: `${name} Çekici` }])}<p class="eyebrow">${name} yol yardım</p><h1>${name} çekici ve 7/24 yol yardım</h1><p>${note}</p><p>${name} bölgesinde yolda kalan bir sürücü için en önemli konu hızlı ve anlaşılır iletişimdir. Aracın bulunduğu cadde, mahalle, yakın tabela veya harita konumu paylaşılırsa çekici yönlendirmesi daha sağlıklı yapılır.</p><h2>${name} oto çekici hangi durumlarda gerekir?</h2><p>Aracınız çalışmıyorsa, kazadan sonra güvenli şekilde hareket edemiyorsa, otomatik vites nedeniyle itilmesi riskliyse veya lastik/akü sorunu yerinde çözülemiyorsa çekici çağırmak gerekir. Yol yardım ihtiyacı basit görünse bile trafik güvenliği her zaman ilk sırada olmalıdır.</p><h2>${name} çekici fiyatı nasıl netleşir?</h2><p>Fiyat; aracın alınacağı nokta, bırakılacağı adres, mesafe, araç tipi, hizmet saati ve kurtarma zorluğuna göre değişir. En doğru fiyat için konum, hedef adres ve araç durumu net paylaşılmalıdır.</p><h2>Çekici çağırmadan önce ne yapmalısınız?</h2><ul><li>Aracı güvenli bir noktaya alın ve dörtlüleri yakın.</li><li>Konumunuzu WhatsApp üzerinden paylaşın.</li><li>Araç marka/model ve arıza bilgisini kısa yazın.</li><li>Fiyat ve varış süresini konuşarak onaylayın.</li></ul><div class="inline-cta"><h3>${name} içinde hızlı destek</h3><p>Yolda kaldıysanız konumunuzu gönderin, yol yardım talebinizi hemen iletin.</p><p><a class="btn lime" data-wa-customer href="#">WhatsApp ile çekici çağır</a></p></div></article><aside class="side-box"><h3>${name} çekici iletişim</h3><p>7/24 yol yardım için konum ve araç bilgisini paylaşın.</p><a class="btn lime" data-wa-customer href="#">Hemen ulaş</a></aside></div></main>`
  }));
}

function articlePage(article) {
  const canonical = `/${article.file}`;
  write(article.file, page({
    title: article.title,
    description: article.description,
    canonical,
    schema: `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: article.h1, datePublished: lastmod, dateModified: lastmod, author: { "@type": "Organization", name: "Veyra Yol Yardım" }, publisher: { "@type": "Organization", name: "Veyra Yol Yardım" }, mainEntityOfPage: `${site}${canonical}` })}</script>`,
    body: `<main class="section"><div class="container article-layout"><article class="article-body">${breadcrumb([{ label: "Blog", href: "/blog/yol-yardim-rehberi.html" }, { label: article.h1 }])}<p class="eyebrow">Yol yardım rehberi</p><h1>${article.h1}</h1><p>${article.intro}</p><h2>Önemli adımlar</h2><ul>${article.points.map((point) => `<li>${point}</li>`).join("")}</ul><h2>Çekici çağırırken hangi bilgiler gerekir?</h2><p>Konum, araç marka/model, arıza türü, gidilecek adres ve iletişim numarası paylaşılmalıdır. Bu bilgiler çekicinin doğru ekipmanla ve gerçekçi fiyat bilgisiyle dönüş yapmasına yardımcı olur.</p><h2>Güvenlik neden önce gelir?</h2><p>Yol yardım taleplerinde hız önemlidir ama güvenlik daha önemlidir. Araçtan inmek, reflektör koymak veya lastik değiştirmek bulunduğunuz yolun durumuna göre riskli olabilir. Şüphede kaldığınızda profesyonel destek istemek daha doğru olur.</p><div class="inline-cta"><h3>Yolda kaldıysanız beklemeyin</h3><p>Konumunuzu WhatsApp üzerinden paylaşarak hızlı destek isteyin.</p><p><a class="btn lime" data-wa-customer href="#">WhatsApp ile ulaş</a></p></div></article><aside class="side-box"><h3>7/24 yol yardım</h3><p>Konumunuzu ve araç durumunuzu gönderin.</p><a class="btn lime" data-wa-customer href="#">Hemen ulaş</a></aside></div></main>`
  }));
}

function redirect(file, target) {
  write(file, `<!doctype html><html lang="tr"><head><meta charset="utf-8"><meta name="robots" content="noindex, follow"><meta http-equiv="refresh" content="0; url=${target}"><link rel="canonical" href="${site}${target}"><title>Yönlendiriliyor</title></head><body><p>Yeni sayfaya yönlendiriliyorsunuz: <a href="${target}">${target}</a></p></body></html>`);
}

cityPage({ city: "Kocaeli", slug: "kocaeli", districts: kocaeli, intro: "Kocaeli; İzmit, Gebze, Darıca, Körfez, Derince, Kartepe ve Başiskele gibi yoğun ulaşım hatlarına sahip bir şehir olduğu için oto çekici aramaları çoğu zaman acil ihtiyaçtan doğar." });
cityPage({ city: "İstanbul", slug: "istanbul", districts: istanbul, intro: "İstanbul çekici talepleri Avrupa Yakası ve Anadolu Yakası boyunca trafik, köprü bağlantıları, E-5, TEM ve sahil yollarında farklı ihtiyaçlarla ortaya çıkar." });
kocaeli.forEach(([slug, name, note]) => districtPage("Kocaeli", "kocaeli", slug, name, note));
istanbul.forEach(([slug, name, note]) => districtPage("İstanbul", "istanbul", slug, name, note));
articles.forEach(articlePage);

write("index.html", page({
  title: "7/24 Yol Yardım ve Oto Çekici | Veyra Yol Yardım",
  description: "Kocaeli ve İstanbul başta olmak üzere 7/24 oto çekici, yol yardım, akü takviye, lastik değişimi ve araç kurtarma desteği.",
  canonical: "/",
  schema: `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "LocalBusiness", name: "Veyra Yol Yardım", url: site, image: `${site}/assets/img/logo.svg`, telephone: phone, areaServed: ["Kocaeli", "İstanbul", "İzmir", "Ankara", "Antalya"], priceRange: "₺₺", openingHours: "Mo-Su 00:00-23:59", description: "7/24 oto çekici, yol yardım ve araç kurtarma ağı." })}</script>`,
  body: `<main><section class="hero"><div class="container hero-grid"><div><p class="eyebrow">Kocaeli ve İstanbul'da hızlı yol yardım</p><h1>7/24 oto çekici ve yol yardım desteği</h1><p class="lead">Yolda kaldığınızda en yakın çekiciyle hızlıca iletişime geçin. Veyra, hizmet ağını büyütürken klasik yol yardım modeliyle destek vermeye başladı.</p><div class="hero-actions"><a class="btn round-call" data-wa-customer href="#"><small>Yolda mı kaldınız?</small>Hemen Çekici Çağır</a><a class="btn secondary" href="/cekici-basvuru.html">Çekici Başvurusu</a></div><div class="trust-row"><div class="trust-item"><strong>7/24</strong><span>Kesintisiz iletişim</span></div><div class="trust-item"><strong>81 İl</strong><span>Genişleyen hizmet ağı</span></div><div class="trust-item"><strong>Hızlı</strong><span>Konuma göre yönlendirme</span></div></div></div><div class="photo-frame"><img src="/assets/img/7-24-oto-cekici-yol-yardim.png" alt="7/24 oto çekici ve yol yardım aracı" width="1200" height="760" data-fallback></div></div></section><section class="section dark"><div class="container"><div class="section-head"><h2>Yolda kalınca tek hedef hızlı çözüm</h2><p>Kullanıcı aradığı bilgiyi hemen görmeli: telefon, WhatsApp, hizmet bölgesi ve güven veren açıklama.</p></div><div class="grid-3"><article class="card"><strong>Oto Çekici</strong><h3>Aracınız güvenle taşınır</h3><p>Arıza, kaza, akü bitmesi veya çalışmayan araç durumlarında çekici yönlendirmesi yapılır.</p></article><article class="card"><strong>Yol Yardım</strong><h3>Yerinde çözüm odaklı destek</h3><p>Akü takviye, lastik değişimi, yakıt desteği ve basit yol yardım talepleri için hızlı iletişim.</p></article><article class="card"><strong>Platform</strong><h3>Veyra ağı büyüyor</h3><p>Onaylı çekici ve şirket başvurularıyla güvenilir bir yol yardım ağı kuruluyor.</p></article></div></div></section><section class="section"><div class="container"><div class="section-head"><h2>Öne çıkan bölgeler</h2><p>Kocaeli ve İstanbul için şehir sayfaları, ilçe sayfaları ve rehber içerikleriyle güçlü local SEO yapısı.</p></div><div class="grid-2"><article class="article-card"><h3>Kocaeli oto çekici</h3><p>İzmit, Gebze, Darıca, Körfez, Derince, Kartepe ve Başiskele için ayrı ilçe sayfaları hazırlandı.</p><p><a class="btn secondary" href="/sehirler/kocaeli-cekici.html">Kocaeli sayfası</a></p></article><article class="article-card"><h3>İstanbul oto çekici</h3><p>Kadıköy, Pendik, Tuzla, Üsküdar, Avcılar, Esenyurt, Beşiktaş ve Şişli için hedefli sayfalar oluşturuldu.</p><p><a class="btn secondary" href="/sehirler/istanbul-cekici.html">İstanbul sayfası</a></p></article></div></div></section><section class="section"><div class="container"><div class="section-head"><h2>Yol yardım rehberleri</h2><p>Google'da aranan gerçek sorulara cevap veren rehber içerikler organik trafiği güçlendirir.</p></div><div class="grid-3"><a class="article-card" href="/blog/yolda-kalinca-ne-yapilmali.html"><h3>Yolda kalınca ne yapılmalı?</h3><p>Güvenli bekleme, konum paylaşma ve çekici çağırma adımları.</p></a><a class="article-card" href="/blog/cekici-fiyatlari.html"><h3>Çekici fiyatları neye göre değişir?</h3><p>Mesafe, araç tipi, saat ve yol koşullarının etkisi.</p></a><a class="article-card" href="/blog/aku-biterse-ne-yapilmali.html"><h3>Akü biterse ne yapılmalı?</h3><p>Akü takviye ve güvenli müdahale önerileri.</p></a></div></div></section></main>`
}));

write("hizmetler.html", page({
  title: "Yol Yardım Hizmetleri | Oto Çekici, Akü, Lastik",
  description: "Veyra Yol Yardım ile oto çekici, araç kurtarma, akü takviye, lastik değişimi ve acil yol yardım hizmetleri.",
  canonical: "/hizmetler.html",
  body: `<main><section class="section"><div class="container"><div class="section-head"><h1>Yol yardım hizmetleri</h1><p>Yolda kalan sürücüler için pratik, anlaşılır ve hızlı iletişim odaklı hizmet başlıkları.</p></div><div class="grid-3"><article class="card"><strong>01</strong><h3>Oto çekici</h3><p>Çalışmayan veya güvenle hareket edemeyen araçlar için çekici yönlendirmesi.</p></article><article class="card"><strong>02</strong><h3>Araç kurtarma</h3><p>Kaza, yol dışına çıkma veya zor konumda kalma durumları için destek.</p></article><article class="card"><strong>03</strong><h3>Akü takviye</h3><p>Aküsü biten araçlar için yerinde çözüm ihtimalini değerlendirme.</p></article><article class="card"><strong>04</strong><h3>Lastik değişimi</h3><p>Patlayan veya inen lastiklerde güvenli müdahale ve yönlendirme.</p></article><article class="card"><strong>05</strong><h3>Yakıt desteği</h3><p>Yakıt bitmesi gibi basit ama acil durumlarda iletişim desteği.</p></article><article class="card"><strong>06</strong><h3>Çekici ağı</h3><p>Onaylı çekici ve şirket başvurularıyla büyüyen operasyon modeli.</p></article></div></div></section></main>`
}));

write("hakkimizda.html", page({
  title: "Veyra Kimdir? | Veyra Yol Yardım",
  description: "Veyra Yol Yardım, Türkiye genelinde güvenilir çekici ve yol yardım ağı kurmayı hedefleyen modern bir platformdur.",
  canonical: "/hakkimizda.html",
  body: `<main class="section"><div class="container article-layout"><article class="article-body">${breadcrumb([{ label: "Hakkımızda" }])}<p class="eyebrow">Hakkımızda</p><h1>Veyra, yol yardımda güvenilir ağ kurmak için geliştiriliyor</h1><p>Veyra Yol Yardım, yolda kalan sürücüler ile güvenilir çekici hizmetlerini daha düzenli bir yapıda buluşturmayı hedefleyen bir platformdur. İlk aşamada klasik iletişim modeliyle hizmet talepleri alınır; sistem açıldığında sürücü, şirket ve müşteri akışları dijital olarak yönetilecektir.</p><h2>Ne zaman açılacak?</h2><p>Platform kademeli olarak yayına hazırlanıyor. Bu geçiş döneminde müşteri talepleri telefon ve WhatsApp üzerinden alınır, çekici ve şirket başvuruları ise ayrı formlar üzerinden toplanır.</p><h2>Hedeflenen özellikler</h2><ul><li>Onaylı çekici ve şirket ağı</li><li>Canlı konum ve iş takibi</li><li>Müşteri yorumları ve kalite kontrolü</li><li>Admin onay sistemi ve finans raporları</li><li>Mobil sürücü uygulaması</li></ul></article><aside class="side-box"><h3>Çekici işletmesi misiniz?</h3><p>Başvuru sayfasından bilgilerinizi bırakın, sistem açılmadan önce sizinle iletişime geçelim.</p><a class="btn lime" href="/cekici-basvuru.html">Başvuru yap</a></aside></div></main>`
}));

write("nasil-calisir.html", page({
  title: "Veyra Nasıl Çalışır? | Yol Yardım Platformu",
  description: "Veyra Yol Yardım çalışma modeli: müşteri iletişimi, çekici yönlendirme, onaylı çekici ağı ve dijital platform süreci.",
  canonical: "/nasil-calisir.html",
  body: `<main><section class="section"><div class="container"><div class="section-head"><h1>Veyra nasıl çalışır?</h1><p>Geçiş döneminde klasik iletişim, platform açıldığında dijital takip ve onaylı çekici ağı.</p></div><div class="grid-3"><article class="card"><strong>1</strong><h3>Müşteri ulaşır</h3><p>Yolda kalan müşteri telefon veya WhatsApp ile konumunu paylaşır.</p></article><article class="card"><strong>2</strong><h3>Uygun destek bulunur</h3><p>Konuma, araç tipine ve ihtiyaca göre uygun çekici yönlendirilir.</p></article><article class="card"><strong>3</strong><h3>İş tamamlanır</h3><p>Fiyat anlaşması ve hizmet süreci şeffaf şekilde yürütülür.</p></article></div></div></section></main>`
}));

write("cekici-basvuru.html", page({
  title: "Çekici Başvuru Paneli | Veyra Yol Yardım",
  description: "Çekici veya yol yardım işletmesiyseniz Veyra ağına katılmak için başvuru bilgilerinizi bırakın.",
  canonical: "/cekici-basvuru.html",
  body: `<main class="section"><div class="container grid-2"><div><p class="eyebrow">Onaylı ağ</p><h1>Çekici ve şirket başvurusu</h1><p class="lead">Veyra ağına katılmak isteyen çekici sahipleri ve şirketler ön başvuru bırakabilir. Resmi evraklar sistem açılmadan önce ayrıca talep edilir.</p><div class="card" style="margin-top:20px"><h3>İstenen evraklar</h3><p>Vergi levhası, SRC belgesi, K belgesi, sürücü belgesi ve araç bilgileri onay sürecinde kontrol edilebilir.</p></div></div><form class="form-card" data-application-form="Çekici başvurusu"><div class="form-grid"><div class="field"><label>Ad soyad / Firma</label><input name="name" required></div><div class="field"><label>Telefon</label><input name="phone" required></div><div class="field"><label>E-posta</label><input name="email" type="email"></div><div class="field"><label>Şehir</label><input name="city"></div><div class="field"><label>Araç sayısı</label><input name="vehicle_count" inputmode="numeric"></div><div class="field"><label>Başvuru tipi</label><select name="type"><option>Tek çekici</option><option>Şirket / filo</option></select></div><div class="field full"><label>Not</label><textarea name="message" placeholder="Araç plakaları, hizmet bölgesi veya kısa açıklama"></textarea></div></div><button class="btn" type="submit" style="margin-top:16px">Başvuruyu WhatsApp ile gönder</button><p class="notice">Bu form müşteri acil yardım hattından ayrıdır. Yolda kaldıysanız sağ alttaki WhatsApp butonunu kullanın.</p></form></div></main>`
}));

write("on-kayit.html", page({
  title: "Ön Kayıt | Veyra Yol Yardım",
  description: "Veyra Yol Yardım platformu açılmadan önce bilgilendirme almak veya iş birliği için ön kayıt bırakın.",
  canonical: "/on-kayit.html",
  body: `<main class="section"><div class="container grid-2"><div><p class="eyebrow">Bilgilendirme listesi</p><h1>Veyra açılışından önce haberdar olun</h1><p class="lead">Müşteri, çekici işletmesi veya iş ortağı olarak gelişmeleri takip etmek için ön kayıt bırakabilirsiniz.</p></div><form class="form-card" data-application-form="Ön kayıt"><div class="form-grid"><div class="field"><label>Ad soyad</label><input name="name" required></div><div class="field"><label>Telefon</label><input name="phone" required></div><div class="field"><label>E-posta</label><input name="email" type="email"></div><div class="field"><label>Şehir</label><input name="city"></div><div class="field full"><label>Not</label><textarea name="message"></textarea></div></div><button class="btn" type="submit" style="margin-top:16px">Ön kaydı gönder</button></form></div></main>`
}));

write("yasal/gizlilik.html", page({
  title: "Gizlilik Politikası | Veyra Yol Yardım",
  description: "Veyra Yol Yardım gizlilik politikası ve iletişim formlarında paylaşılan kişisel verilerin kullanım amacı.",
  canonical: "/yasal/gizlilik.html",
  body: `<main class="section"><div class="container article-body">${breadcrumb([{ label: "Gizlilik" }])}<h1>Gizlilik politikası</h1><p>Bu statik tanıtım sitesinde paylaştığınız ad, telefon, e-posta, şehir ve mesaj bilgileri yalnızca talebinize dönüş yapmak amacıyla kullanılır. Acil yol yardım talepleri WhatsApp veya telefon üzerinden alınır.</p><h2>Başvuru bilgileri</h2><p>Çekici veya şirket başvurularında paylaşılan bilgiler ön değerlendirme ve iletişim amacıyla işlenir. Resmi belgeler platform açılış sürecinde ayrıca talep edilebilir.</p><h2>İletişim</h2><p>Gizlilik talepleri için <a data-email-link href="mailto:${email}" data-email>${email}</a> adresinden ulaşabilirsiniz.</p></div></main>`
}));

redirect("kocaeli-cekici.html", "/sehirler/kocaeli-cekici.html");
redirect("istanbul-cekici.html", "/sehirler/istanbul-cekici.html");
redirect("yol-yardim-rehberi.html", "/blog/yol-yardim-rehberi.html");
redirect("yolda-kalinca-ne-yapilmali.html", "/blog/yolda-kalinca-ne-yapilmali.html");
redirect("cekici-fiyatlari.html", "/blog/cekici-fiyatlari.html");
redirect("aku-biterse-ne-yapilmali.html", "/blog/aku-biterse-ne-yapilmali.html");
redirect("lastik-patlarsa-ne-yapilmali.html", "/blog/lastik-patlarsa-ne-yapilmali.html");
redirect("gizlilik.html", "/yasal/gizlilik.html");

const urls = [
  "/",
  "/hizmetler.html",
  "/sehirler/kocaeli-cekici.html",
  "/sehirler/istanbul-cekici.html",
  "/ilceler/kocaeli/izmit-cekici.html",
  "/ilceler/kocaeli/gebze-cekici.html",
  "/ilceler/kocaeli/darica-cekici.html",
  "/blog/yol-yardim-rehberi.html",
  "/blog/yolda-kalinca-ne-yapilmali.html",
  "/blog/cekici-fiyatlari.html",
  "/blog/aku-biterse-ne-yapilmali.html",
  "/blog/lastik-patlarsa-ne-yapilmali.html",
  "/hakkimizda.html",
  "/cekici-basvuru.html",
  "/yasal/gizlilik.html",
  "/ilceler/kocaeli/korfez-cekici.html",
  "/ilceler/kocaeli/derince-cekici.html",
  "/ilceler/kocaeli/kartepe-cekici.html",
  "/ilceler/kocaeli/basiskele-cekici.html",
  ...istanbul.map(([slug]) => `/ilceler/istanbul/${slug}-cekici.html`)
];

function sitemapPriority(url, index) {
  if (index === 0) return "1.00";
  const highPriorityUrls = new Set([
    "/hizmetler.html",
    "/sehirler/kocaeli-cekici.html",
    "/sehirler/istanbul-cekici.html",
    "/ilceler/kocaeli/izmit-cekici.html",
    "/ilceler/kocaeli/gebze-cekici.html",
    "/ilceler/kocaeli/darica-cekici.html",
    "/blog/yol-yardim-rehberi.html",
    "/blog/yolda-kalinca-ne-yapilmali.html",
    "/blog/cekici-fiyatlari.html",
    "/blog/aku-biterse-ne-yapilmali.html",
    "/blog/lastik-patlarsa-ne-yapilmali.html",
    "/hakkimizda.html",
    "/cekici-basvuru.html",
    "/yasal/gizlilik.html"
  ]);
  return highPriorityUrls.has(url) ? "0.80" : "0.64";
}

function sitemapLastmod(index) {
  const second = String(11 + Math.floor(index / 2)).padStart(2, "0");
  return `2026-06-19T21:56:${second}+00:00`;
}

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url, index) => `  <url>
    <loc>${site}${url}</loc>
    <lastmod>${sitemapLastmod(index)}</lastmod>
    <priority>${sitemapPriority(url, index)}</priority>
  </url>`).join("\n")}
</urlset>
`;

write("sitemap.xml", sitemapXml);
write("sitemap-main.xml", sitemapXml);
write("sitemap.txt", `${urls.map((url) => `${site}${url}`).join("\n")}\n`);

write("robots.txt", `User-agent: *
Allow: /

Sitemap: ${site}/sitemap.xml
Sitemap: ${site}/sitemap-main.xml
Sitemap: ${site}/sitemap.txt
`);

const readmeMd = [
  "# Veyra Yol Yardım Landing Page",
  "",
  "Statik SEO landing page. Backend, React veya veritabanı gerektirmez.",
  "",
  "Canlı URL:",
  "",
  "https://veyrayolyardim.com/",
  "",
  "Deployment source: GitHub main branch.",
  "",
  "## Structure",
  "",
  "- /: Ana sayfa ve temel sayfalar",
  "- /sehirler: Şehir SEO sayfaları",
  "- /ilceler: İlçe local SEO sayfaları",
  "- /blog: Yol yardım rehberleri",
  "- /yasal: Yasal sayfalar",
  "- /assets: CSS, JS, logo ve görseller",
  "- /scripts: SEO üretimi ve link kontrolleri",
  "",
  "## Commands",
  "",
  "```powershell",
  "npm run generate",
  "npm run check:links",
  "npm run build",
  "```",
  "",
  "Google Search Console için ana sitemap:",
  "",
  "```txt",
  "https://veyrayolyardim.com/sitemap.xml",
  "```",
  "",
  "robots.txt sitemap olarak gönderilmez.",
  ""
].join("\n");
write("README.md", readmeMd);

console.log(`Generated ${urls.length} indexable SEO URLs.`);
