/* ============================================================
   Static site generator for Luxe Dentistry, Los Algodones
   Builds home, about, clinic, team, testimonials, booking and
   one page per service and per area, following the ProfResults
   local SEO on-page spec (long titles, H1 = category + city,
   NAP + map on home, 30+ interlinked pages, schema).
   Run:  node build.js
   ============================================================ */
const fs = require("fs");
const path = require("path");
const {
  business: B, services, areas,
  serviceCategories, team, supportTeam, clinic, videoReviews, reviews, beforeAfter, credentials,
} = require("./data.js");

const OUT = __dirname;
const IMG = path.join(OUT, "assets", "img");
const CITY = `${B.city}, ${B.country}`;
const svc = (s) => services.find((x) => x.slug === s);
const enc = encodeURIComponent;
const hasImg = (f) => { try { return fs.existsSync(path.join(IMG, f)); } catch { return false; } };

/* ---------------- inline SVG icons (no emoji) ---------------- */
const I = {
  star: `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5 21.2l1.4-6.8L1.3 9.9l6.9-.7z"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/></svg>`,
  wa: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1s-.7.8-.8 1c-.2.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.5 7.5 0 0 1-1.4-1.7c-.1-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5s0-.4 0-.5-.6-1.5-.8-2c-.2-.5-.4-.5-.6-.5h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.2 5.3 5.3 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4c.6.3 1.1.5 1.5.6a3.6 3.6 0 0 0 1.6.1c.5-.1 1.5-.6 1.7-1.2s.2-1.1.2-1.2-.2-.2-.4-.3z"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
  cosmetic: `<svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26" aria-hidden="true"><path d="M12 2l1.7 5L19 8.7 13.7 10.4 12 15l-1.7-4.6L5 8.7 10.3 7z"/><circle cx="18.5" cy="16.5" r="1.6"/><circle cx="6" cy="17" r="1.1"/></svg>`,
  implants: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" width="26" height="26" aria-hidden="true"><path d="M12 3c-3 0-4.5 1.5-6 1.5S3 6 3 9c0 4 1.5 6 2.5 9 .5 1.6 1.1 2 1.6 2 .8 0 1-1 1.3-2.5C9.7 15.5 10 15 12 15s2.3.5 2.6 2.5c.3 1.5.5 2.5 1.3 2.5.5 0 1.1-.4 1.6-2C20.5 15 21 13 21 9c0-3-1.5-3-3-4.5S15 3 12 3z"/></svg>`,
  general: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="26" height="26" aria-hidden="true"><path d="M12 3l7 3v5c0 4.6-3 8.2-7 10-4-1.8-7-5.4-7-10V6z"/><path d="M9 12l2 2 4-4"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>`,
};
const catIcon = (key) => I[key] || I.implants;
const catOf = (slug) => (serviceCategories.find((c) => c.slugs.includes(slug)) || serviceCategories[1]);
function stars(n = 5) { return `<span class="stars" aria-label="${n} out of 5 stars">${I.star.repeat(n)}</span>`; }

/* ---------------- utils ---------------- */
function esc(s){return String(s).replace(/"/g,"&quot;");}
function cap(s){return s.charAt(0).toUpperCase()+s.slice(1);}
function deEmDash(s){return s.replace(/\s*—\s*/g, ", ");}   // remove em dashes site-wide
// make internal href/src/action paths relative (leading slash removed) so the
// site works when opened straight from the folder (file://) as well as when hosted.
function relativize(s){return s.replace(/(href|src|action)="\/(?!\/)/g, '$1="');}
function write(file, html){let out=deEmDash(html);if(file.endsWith(".html"))out=relativize(out);fs.writeFileSync(path.join(OUT,file),out);console.log("  ok  "+file);}
function paras(arr){return arr.map((p)=>`<p>${p}</p>`).join("\n");}

/* ---------------- <head> ---------------- */
function head(title, desc, canonical) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="canonical" href="https://${B.domain}/${canonical}">
<meta name="robots" content="index,follow">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:type" content="website">
<meta property="og:locale" content="en_US">
<meta property="og:site_name" content="${esc(B.name)}">
<meta property="og:url" content="https://${B.domain}/${canonical}">
<meta property="og:image" content="https://${B.domain}/assets/img/clinic-building.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/jpeg" href="/assets/img/logo.jpeg">
<link rel="apple-touch-icon" href="/assets/img/logo.jpeg">
<link rel="stylesheet" href="/assets/css/styles.css">
<link rel="preconnect" href="https://www.google.com">
</head>
<body>`;
}

/* ---------------- schema ---------------- */
function businessSchema() {
  // No aggregateRating: we never mark up the clinic's own reviews. The 4.9 is
  // displayed and linked to Google instead.
  const s = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalClinic"],
    "@id": `https://${B.domain}/#clinic`,
    name: B.name,
    alternateName: "Luxe Dentistry",
    image: [`https://${B.domain}/assets/img/clinic-building.jpg`, `https://${B.domain}/assets/img/patient-03.jpg`],
    url: `https://${B.domain}/`,
    telephone: B.phone,
    email: B.email,
    priceRange: "$$",
    currenciesAccepted: "USD, MXN",
    paymentAccepted: "Cash, Credit Card, Payment Plans, US PPO Dental Insurance",
    address: {
      "@type": "PostalAddress",
      streetAddress: B.street, addressLocality: B.city, addressRegion: B.region,
      postalCode: B.postal, addressCountry: "MX",
    },
    hasMap: B.gbp,
    areaServed: areas.map((a) => a.place),
    medicalSpecialty: ["Cosmetic Dentistry", "Implant Dentistry", "Restorative Dentistry", "Oral Surgery"],
    availableService: services.map((x) => ({ "@type": "MedicalProcedure", name: x.name })),
    memberOf: { "@type": "Organization", name: "Mexican Dental Association (ADM)" },
    award: clinic.awards,
    founder: { "@type": "Person", name: B.doctor, jobTitle: "Doctor of Dental Surgery" },
    employee: team.map((t) => ({ "@type": "Person", name: t.name.replace(/, DDS$/, ""), jobTitle: t.role })),
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "08:00", closes: "16:00" },
    ],
    sameAs: [B.facebook, B.facebookProfile],
  };
  return `<script type="application/ld+json">${JSON.stringify(s)}</script>`;
}
function personSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: B.doctor,
    jobTitle: "Cosmetic & Implant Dentist",
    worksFor: { "@type": "Dentist", name: B.name },
    knowsLanguage: ["English", "Spanish"],
    image: `https://${B.domain}/assets/img/dr-jimenez.jpg`,
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Harvard School of Dental Medicine" },
      { "@type": "CollegeOrUniversity", name: "Autonomous University of Baja California" },
      { "@type": "CollegeOrUniversity", name: "University of Michoacana de San Nicolas de Hidalgo" },
    ],
  };
  return `<script type="application/ld+json">${JSON.stringify(s)}</script>`;
}
function breadcrumbSchema(items) {
  const s = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem", position: i + 1, name: it[0],
      item: `https://${B.domain}/${it[1]}`,
    })),
  };
  return `<script type="application/ld+json">${JSON.stringify(s)}</script>`;
}
function serviceSchema(s) {
  const j = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: s.name,
    description: s.lead,
    procedureType: catOf(s.slug).name,
    url: `https://${B.domain}/${s.slug}.html`,
    provider: { "@type": "Dentist", name: B.name, telephone: B.phone },
    areaServed: areas.slice(0, 8).map((a) => a.place),
  };
  return `<script type="application/ld+json">${JSON.stringify(j)}</script>`;
}
function faqSchema(faqs) {
  const s = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  return `<script type="application/ld+json">${JSON.stringify(s)}</script>`;
}

/* ---------------- header / footer ---------------- */
function header(active) {
  const svcMenu = serviceCategories.map((c) => `
    <div class="dd-group">
      <div class="dd-head">${catIcon(c.key)} ${c.name}</div>
      ${c.slugs.map((sl)=>{const s=svc(sl);return `<a href="/${s.slug}.html">${s.nav}</a>`;}).join("")}
    </div>`).join("");
  const areaLinks = areas.map((a) => `<a href="/dentist-${a.slug}.html">${a.nav}</a>`).join("");
  return `
<header class="site-header">
  <nav class="nav" aria-label="Primary">
    <a class="brand" href="/index.html" aria-label="Luxe Dentistry home">
      <span class="brand-mark"><img src="/assets/img/logo.jpeg" alt="Luxe Dentistry" class="brand-logo" width="150" height="63"></span>
      <span class="brand-tag">Cosmetic &amp; Implant Dentist<small>Los Algodones, Mexico</small></span>
    </a>
    <ul class="menu">
      <li><a href="/index.html"${active==="home"?' aria-current="page"':""}>Home</a></li>
      <li><a href="/about.html"${active==="about"?' aria-current="page"':""}>About</a></li>
      <li class="has-dd"><a href="/services.html"${active==="services"?' aria-current="page"':""}>Services <span class="caret"></span></a>
        <div class="dropdown dropdown-svc">${svcMenu}</div></li>
      <li class="has-dd"><a href="/dentist-los-algodones.html"${active==="areas"?' aria-current="page"':""}>Areas We Serve <span class="caret"></span></a>
        <div class="dropdown dropdown-areas">${areaLinks}</div></li>
      <li><a href="/testimonials.html"${active==="testimonials"?' aria-current="page"':""}>Testimonials</a></li>
      <li><a href="/team.html"${active==="team"?' aria-current="page"':""}>Team</a></li>
      <li><a href="/contact.html"${active==="contact"?' aria-current="page"':""}>Contact</a></li>
      <li><a href="/terms.html"${active==="terms"?' aria-current="page"':""}>Terms</a></li>
      <li class="menu-cta">
        <a class="btn btn-gold" href="/booking.html">Book Appointment</a>
        <div class="menu-contact">
          <a href="tel:${B.phoneHref}">${I.phone} Call</a>
          <a href="https://wa.me/${B.whatsappHref}" target="_blank" rel="noopener">${I.wa} WhatsApp</a>
        </div>
      </li>
    </ul>
    <div class="nav-cta">
      <div id="google_translate_element" class="notranslate" translate="no" aria-label="Translate this site"></div>
      <a class="btn btn-gold" href="/booking.html">Book Appointment</a>
      <button class="hamburger" aria-label="Open menu" aria-expanded="false">&#9776;</button>
    </div>
  </nav>
</header>`;
}

function footer() {
  const catCols = serviceCategories.map((c) => `
    <div><h4>${c.name}</h4><ul>${c.slugs.map((sl)=>{const s=svc(sl);return `<li><a href="/${s.slug}.html">${s.name}</a></li>`;}).join("")}</ul></div>`).join("");
  const areaCols = areas.map((a) => `<li><a href="/dentist-${a.slug}.html">${a.name}</a></li>`).join("");
  return `
<section class="cta-band">
  <div class="wrap">
    <h2>Ready for the smile you deserve?</h2>
    <p>Get a free, no-obligation consultation and quote with Dr. Jose Manuel Jimenez. Serving Los Algodones and patients from across Arizona, California, Nevada and beyond.</p>
    <div class="cta-actions">
      <a class="btn btn-ghost" href="/booking.html">Book an Appointment</a>
      <a class="btn btn-gold" href="https://wa.me/${B.whatsappHref}" target="_blank" rel="noopener">${I.wa} Message on WhatsApp</a>
    </div>
  </div>
</section>
<footer class="footer">
  <div class="wrap">
    <div class="cols">
      <div class="footer-brand">
        <div class="footer-logo"><img src="/assets/img/logo.jpeg" alt="Luxe Dentistry" width="150" height="63"></div>
        <p>Family-owned cosmetic and implant dentistry in ${CITY}, the world-famous "Molar City." ${cap(B.reviewWord)} patients from across the US, Canada and Mexico trust us with their smiles.</p>
        <p class="fcontact">
          <span>${I.pin} ${B.street}, ${B.city}, ${B.regionCode} ${B.postal}</span>
          <span>${I.phone} <a href="tel:${B.phoneHref}">${B.phone}</a></span>
          <span>${I.wa} <a href="https://wa.me/${B.whatsappHref}">WhatsApp</a></span>
          <span>${I.mail} <a href="mailto:${B.email}">${B.email}</a></span>
        </p>
        <p><a href="${B.gbp}" target="_blank" rel="noopener">${stars(5)} ${B.rating} on Google</a> &middot; <a href="${B.facebook}" target="_blank" rel="noopener">Facebook</a></p>
      </div>
      ${catCols}
      <div><h4>Areas We Serve</h4><ul>${areaCols}</ul></div>
    </div>
    <div class="footer-map">
      <div class="footer-map-label">${I.pin} Find us in ${B.city}: ${B.street}, ${B.regionCode} ${B.postal}</div>
      <iframe src="${B.mapEmbed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map to Luxe Dentistry in Los Algodones"></iframe>
    </div>
    <div class="foot-links">
      <a href="/about.html">About</a><a href="/team.html">Team</a><a href="/services.html">Services</a>
      <a href="/testimonials.html">Reviews</a><a href="/booking.html">Book</a><a href="/contact.html">Contact</a>
      <a href="/terms.html">Terms</a><a href="${B.gbp}" target="_blank" rel="noopener">Google Profile</a>
    </div>
    <div class="footer-bottom">
      <span>&copy; <span id="year">2026</span> ${B.name}. All rights reserved. &middot; <a href="/terms.html">Terms &amp; Conditions</a></span>
      <span>${B.street}, ${B.city}, ${B.regionCode} ${B.postal}, ${B.country} &middot; Se habla espa&ntilde;ol</span>
    </div>
  </div>
</footer>
<div class="floaters">
  <a class="fab-wa" href="https://wa.me/${B.whatsappHref}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${I.wa}</a>
  <a class="fab-call" href="tel:${B.phoneHref}" aria-label="Call the clinic">${I.phone}</a>
</div>
<script type="text/javascript">
function googleTranslateElementInit(){
  new google.translate.TranslateElement({pageLanguage:'en',includedLanguages:'en,es',autoDisplay:false},'google_translate_element');
}
</script>
<script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
<script src="/assets/js/main.js"></script>
</body></html>`;
}

/* ---------------- reusable blocks ---------------- */
function videoBlock(idxs) {
  const list = idxs ? idxs.map((i) => videoReviews[i]).filter(Boolean) : videoReviews;
  const cards = list.map((v, i) => `
    <figure class="video-card">
      <div class="video-embed">
        <iframe src="https://www.facebook.com/plugins/video.php?href=${enc(v.url)}&show_text=false&width=380&height=680" scrolling="no" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" title="Patient video review: ${esc(v.treatment)}"></iframe>
      </div>
      <figcaption class="video-meta">
        ${stars(5)}
        <h3>${v.name}</h3>
        <p class="muted"><strong>${v.treatment}</strong><br>A patient shares their experience before and after treatment with Dr. Jimenez. <a href="${v.url}" target="_blank" rel="noopener">Watch on Facebook ${I.arrow}</a></p>
      </figcaption>
    </figure>`).join("");
  return `<div class="video-grid">${cards}</div>`;
}

function beforeAfterBlock() {
  const cards = beforeAfter.map((c) => {
    const inner = hasImg(c.img)
      ? `<img src="/assets/img/${c.img}" alt="${esc(c.cat)} before and after at Luxe Dentistry" loading="lazy">`
      : `<div class="placeholder-img">Luxe before &amp; after<br>${esc(c.cat)}</div>`;
    return `
    <figure class="ba">
      <div class="ba-media">${inner}<span class="ba-tag${c.tag==="Before"?" tag-before":c.tag==="After"?" tag-after":""}">${c.tag||"Before &amp; After"}</span></div>
      <figcaption class="ba-cap"><strong>${c.title}</strong> <span class="muted">${c.cat}</span></figcaption>
    </figure>`;
  }).join("");
  return `<div class="ba-grid">${cards}</div>`;
}

function patientPhotos() {
  const shots = [
    ["patient-01.jpg", "Patient with Dr. Jimenez at Luxe Dentistry"],
    ["patient-04.jpg", "Patients with Dr. Jimenez at Luxe Dentistry"],
    ["patient-02.jpg", "Patient at Luxe Dentistry treatment room"],
    ["patient-05.jpg", "Patients with Dr. Jimenez at Luxe Dentistry"],
    ["patient-03.jpg", "Patient at the Luxe Dentistry reception"],
  ];
  return `<div class="photo-grid">${shots.map((s)=>`
    <figure class="photo"><img src="/assets/img/${s[0]}" alt="${esc(s[1])}" loading="lazy"></figure>`).join("")}</div>`;
}

function clinicGallery() {
  const shots = [
    ["clinic-building.jpg", "Luxe Dentistry clinic building in Los Algodones"],
    ["patient-03.jpg", "Luxe Dentistry reception"],
    ["dental-technology.jpg", "Digital dental technology at Luxe Dentistry"],
    ["clinic-parking.jpg", "On-site patient parking at Luxe Dentistry"],
  ];
  return `<div class="photo-grid photo-grid-4">${shots.map((s)=>`
    <figure class="photo"><img src="/assets/img/${s[0]}" alt="${esc(s[1])}" loading="lazy"></figure>`).join("")}</div>`;
}

function reviewCards() {
  return reviews.map((r) => `
    <figure class="quote">
      ${stars(r.stars)}
      <blockquote>"${r.text}"</blockquote>
      <figcaption><span class="who">${r.name}</span><span class="muted">${r.treatment} &middot; ${r.place}</span></figcaption>
    </figure>`).join("");
}

/* category service cards */
function categorySections() {
  return serviceCategories.map((c) => `
    <div class="cat-block">
      <div class="cat-head">
        <div class="cat-ico cat-${c.key}">${catIcon(c.key)}</div>
        <div>
          <h3>${c.name}</h3>
          <p class="muted">${c.blurb}</p>
        </div>
      </div>
      <div class="grid grid-3">
        ${c.slugs.map((sl)=>{const s=svc(sl);return `
        <a class="card" href="/${s.slug}.html">
          <div class="ico cat-${c.key}">${catIcon(c.key)}</div>
          <h4>${s.name}</h4>
          <p>${s.lead}</p>
          <span class="more">Learn more ${I.arrow}</span>
        </a>`;}).join("")}
      </div>
    </div>`).join("");
}

/* ============================================================
   HOMEPAGE
   ============================================================ */
function buildHome() {
  const title = `BEST Dental Clinic in ${CITY} | ${B.name} — Dental Implants, All-on-4, Veneers, Smile Makeover, Crowns & Dentures | Dental Clinic Near Me`;
  const desc = `If you're looking for a dental clinic near me, Luxe Dentistry by Dr. Jose Manuel Jimenez is the BEST dental clinic in ${CITY}: dental implants, All-on-4, veneers, crowns and smile makeovers. ${B.rating} on Google. Serving Yuma, Phoenix, San Diego and beyond.`;
  const areaChips = areas.map((a)=>`<a class="chip" href="/dentist-${a.slug}.html">${a.nav}</a>`).join("");

  const html = head(title, desc, "index.html")
  + businessSchema()
  + header("home")
  + `
<section class="hero">
  <div class="wrap">
    <div class="hero-text">
      <div class="rating">${stars(5)} <strong>${B.rating}</strong> on Google &middot; ${cap(B.reviewWord)} reviews</div>
      <h1>Dental Clinic in ${CITY}</h1>
      <p class="lead">If you are looking for a <strong>dental clinic near me</strong>, you have found the best in Los Algodones. Luxe Dentistry by <strong>Dr. Jose Manuel Jimenez, DDS</strong> is a family-owned cosmetic and implant clinic in the heart of "Molar City." From dental implants and All-on-4 to porcelain veneers and complete smile makeovers, we help patients from across the US, Canada and Mexico smile with confidence, for a fraction of home prices.</p>
      <div class="hero-actions">
        <a class="btn btn-gold" href="/booking.html">Book Your Free Consultation</a>
        <a class="btn btn-ghost" href="/testimonials.html">Watch Patient Reviews</a>
      </div>
      <div class="hero-badges">
        <span>${I.check} 25 years of experience</span>
        <span>${I.check} Cosmetic &amp; implant specialist</span>
        <span>${I.check} Free consultation &amp; quote</span>
      </div>
    </div>
    <div class="hero-right">
      <div class="hero-visual">
        <img class="hero-img" src="/assets/img/patient-04.jpg" alt="Happy patients with Dr. Jimenez at Luxe Dentistry in Los Algodones" width="450" height="560" loading="eager">
        <div class="hero-float float-rating">${stars(5)}<span><strong>4.9</strong> on Google</span></div>
        <div class="hero-float float-cred">${I.check}<span>25 years<br>experience</span></div>
      </div>
      <div class="hero-card">
        <h3>Why patients choose Luxe Dentistry</h3>
        <ul>
          <li>25 years of experience, 15 in Los Algodones</li>
          <li>Implant certificate, Autonomous University of Baja California</li>
          <li>Hundreds of smile makeovers performed</li>
          <li>Save up to 70% versus US and Canada prices</li>
          <li>Walk across the border, steps from the Andrade crossing</li>
        </ul>
        <a class="btn btn-gold" href="/team.html" style="width:100%;margin-top:6px">Meet the Dentist</a>
      </div>
    </div>
  </div>
  <div class="hero-wave"><svg viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true"><path d="M0,38 C300,74 720,6 1080,28 C1260,39 1380,54 1440,44 L1440,70 L0,70 Z"></path></svg></div>
</section>

<section class="video-strip">
  <div class="wrap center">
    <div class="fb-video">
      <iframe src="https://www.facebook.com/plugins/video.php?href=${enc(B.clinicReel)}&show_text=false&width=476&height=476" scrolling="no" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" title="Luxe Dentistry clinic video"></iframe>
    </div>
  </div>
</section>

<div class="trust"><div class="wrap">
  <div class="item"><div class="num">25+</div><div class="lbl">Years Experience</div></div>
  <div class="item"><div class="num">${B.rating}</div><div class="lbl">Google Rating</div></div>
  <div class="item"><div class="num">100s</div><div class="lbl">Smile Makeovers</div></div>
  <div class="item"><div class="num">13</div><div class="lbl">Treatments</div></div>
  <div class="item"><div class="num">ADM</div><div class="lbl">Member Clinic</div></div>
</div></div>

<section>
  <div class="wrap center">
    <div class="eyebrow">Our Dental Services</div>
    <h2>Complete Dental Care, Organized by Category</h2>
    <p class="section-intro">Everything you need under one roof in Los Algodones, grouped by category. Start with cosmetic dentistry, then implants and restorative, then general and preventive care.</p>
    ${categorySections()}
  </div>
</section>

<section class="section-dark">
  <div class="wrap split">
    <div>
      <div class="eyebrow light">Meet Your Dentist</div>
      <h2>Dr. Jose Manuel Jimenez, DDS</h2>
      <p>With 25 years of experience, 15 of them in Los Algodones, Dr. Jimenez has continually advanced his training in cosmetic dentistry, implantology, oral surgery and complete restorative rehabilitation. His greatest passion is cosmetic dentistry, and he is recognized as one of the best dentists for smile makeovers in Los Algodones.</p>
      <ul class="credentials">
        <li>Doctor of Dental Surgery, University of Michoacana de San Nicolas de Hidalgo</li>
        <li>Advanced training in implantology and full-mouth rehabilitation</li>
        <li>Implant Certificate, Autonomous University of Baja California</li>
        <li>Member, Mexican Dental Association (ADM)</li>
      </ul>
      <div class="hero-actions">
        <a class="btn btn-gold" href="/about.html">Read His Full Story</a>
        <a class="btn btn-outline light" href="/team.html">Meet the Dentist</a>
      </div>
    </div>
    <div class="doc-photo">
      <img src="/assets/img/dr-jimenez.jpg" alt="Dr. Jose Manuel Jimenez, DDS, cosmetic and implant dentist at Luxe Dentistry" width="300" height="398" loading="lazy">
      <blockquote>"Cosmetic dentistry is where science meets art. Every smile I design is made to suit the person in front of me: natural, healthy, and something they are proud to show the world."</blockquote>
    </div>
  </div>
</section>

<section>
  <div class="wrap center">
    <div class="eyebrow">Welcome to Luxe Dentistry</div>
    <h2>A Modern, Family-Owned Clinic in "Molar City"</h2>
    <p class="section-intro">Our purpose-built clinic in Los Algodones is spacious, modern and comfortable, with digital technology, an on-site pharmacy, and exclusive on-site parking. Walk across the border and you are only steps away.</p>
    ${clinicGallery()}
    <p style="margin-top:28px"><a class="btn btn-outline" href="/about.html">More About Our Clinic</a></p>
  </div>
</section>

<section id="video" class="section-alt">
  <div class="wrap center">
    <div class="eyebrow">Patient Video Reviews</div>
    <h2>Hear From Our Patients</h2>
    <p class="section-intro">Real video reviews shared from our Facebook page. Watch patients describe their experience before and after treatment with Dr. Jimenez.</p>
    ${videoBlock([1])}
    <p style="margin-top:26px"><a class="btn btn-outline" href="/testimonials.html">See More Reviews &amp; Before/After Cases</a></p>
  </div>
</section>

<section>
  <div class="wrap center">
    <div class="eyebrow">Smile Transformations</div>
    <h2>Before &amp; After Working With Our Patients</h2>
    <p class="section-intro">Real cases from Luxe Dentistry, planned around each patient for a natural, lasting result.</p>
    ${beforeAfterBlock()}
  </div>
</section>

<section class="section-alt">
  <div class="wrap center">
    <div class="eyebrow">Happy Patients</div>
    <h2>Real Patients at Luxe Dentistry</h2>
    <p class="section-intro">Patients travel from across Arizona, California and beyond, and leave smiling. Rated <a href="${B.gbp}" target="_blank" rel="noopener"><strong>${B.rating} on Google</strong></a>.</p>
    ${patientPhotos()}
    <div class="quote-grid" style="margin-top:34px">${reviewCards()}</div>
  </div>
</section>

<section>
  <div class="wrap center">
    <div class="eyebrow">Areas We Serve</div>
    <h2>Trusted by Patients Across the Southwest</h2>
    <p class="section-intro">Located steps from the US border, Luxe Dentistry welcomes patients from across Arizona, California, Nevada and northern Mexico. Find your city below.</p>
    <div class="chips" style="justify-content:center">${areaChips}</div>
  </div>
</section>

<section id="contact">
  <div class="wrap">
    <div class="center"><div class="eyebrow">Visit Luxe Dentistry</div><h2>Find Us in Los Algodones</h2></div>
    <div class="map-wrap" style="margin-top:24px">
      <iframe src="${B.mapEmbed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map to Luxe Dentistry in Los Algodones"></iframe>
      <div class="nap">
        <h3>${B.name}</h3>
        <dl>
          <dt>${I.pin} Address</dt>
          <dd>${B.street}<br>${B.city}, ${B.regionCode} ${B.postal}, ${B.country}</dd>
          <dt>${I.phone} Phone</dt><dd><a href="tel:${B.phoneHref}">${B.phone}</a></dd>
          <dt>${I.wa} WhatsApp</dt><dd><a href="https://wa.me/${B.whatsappHref}">${B.whatsapp}</a></dd>
          <dt>${I.mail} Email</dt><dd><a href="mailto:${B.email}">${B.email}</a></dd>
          <dt>${I.clock} Hours</dt><dd>${B.hours.map((h)=>`${h[0]}: ${h[1]}`).join("<br>")}</dd>
        </dl>
        <a class="btn btn-gold" href="/booking.html">Book an Appointment</a>
      </div>
    </div>
  </div>
</section>
`
  + footer();
  write("index.html", html);
}

/* ============================================================
   SERVICES INDEX
   ============================================================ */
function buildServicesIndex() {
  const title = `Dental Services in ${CITY} | ${B.name} — Cosmetic, Implant & General Dentistry | Best Dental Clinic Near Me`;
  const desc = `Explore all dental services at Luxe Dentistry in ${CITY}: cosmetic dentistry, dental implants, All-on-4, veneers, crowns, dentures, root canals and more. ${B.rating} on Google. Book a free consultation.`;
  const html = head(title, desc, "services.html")
  + breadcrumbSchema([["Home","index.html"],["Services","services.html"]])
  + businessSchema()
  + header("services")
  + `
<div class="page-head"><div class="wrap">
  <div class="crumb"><a href="/index.html">Home</a> &rsaquo; Services</div>
  <h1>Dental Services in ${CITY}</h1>
  <p>Complete cosmetic, implant and general dentistry under one roof, organized by category so you can find exactly what you need.</p>
</div></div>
<section><div class="wrap">${categorySections()}</div></section>
`
  + footer();
  write("services.html", html);
}

/* ============================================================
   SERVICE PAGE
   ============================================================ */
function buildService(s) {
  const cat = catOf(s.slug);
  const title = `BEST ${s.kw} in ${CITY} | ${B.name} — Affordable ${s.name} Near Me for Patients from Yuma, Phoenix, San Diego & Beyond`;
  const desc = `${s.name} in ${CITY} by Dr. Jose Manuel Jimenez, DDS. ${s.lead} Trusted by patients from Arizona, California and Nevada. ${B.rating} on Google. Book your free consultation.`;
  const inTextAreas = areas.slice(1, 4);
  const relatedServices = s.related.map(svc).filter(Boolean);
  const faqHtml = s.faqs.map(([q,a])=>`<details class="faq"><summary>${q}</summary><div class="body">${a}</div></details>`).join("");

  const html = head(title, desc, `${s.slug}.html`)
  + breadcrumbSchema([["Home","index.html"],["Services","services.html"],[s.name,`${s.slug}.html`]])
  + serviceSchema(s)
  + faqSchema(s.faqs)
  + header("services")
  + `
<div class="page-head"><div class="wrap">
  <div class="crumb"><a href="/index.html">Home</a> &rsaquo; <a href="/services.html">Services</a> &rsaquo; <a href="/services.html">${cat.name}</a> &rsaquo; ${s.name}</div>
  <div class="ph-cat">${catIcon(cat.key)} ${cat.name}</div>
  <h1>${s.name} in ${CITY}</h1>
  <p>${s.lead}</p>
</div></div>

<section><div class="wrap layout">
  <article class="prose">
    ${paras(s.intro)}
    ${s.sections.map((sec)=>`<h2>${sec.h2}</h2>\n${paras(sec.paras)}`).join("\n")}

    <div class="callout">
      <strong>Travelling for treatment?</strong> Luxe Dentistry welcomes ${s.name.toLowerCase()} patients from
      <a href="/dentist-${inTextAreas[0].slug}.html">${inTextAreas[0].name}</a>,
      <a href="/dentist-${inTextAreas[1].slug}.html">${inTextAreas[1].name}</a> and
      <a href="/dentist-${inTextAreas[2].slug}.html">${inTextAreas[2].name}</a>.
      We schedule visits efficiently so you can make the most of your trip across the border.
    </div>

    <h2>Why choose Luxe Dentistry for ${s.name.toLowerCase()}?</h2>
    <p>Dr. Jose Manuel Jimenez brings 25 years of experience and advanced training, including a Harvard School of Dental Medicine diploma in Evidence-Based Implant Dentistry and an implant certificate from the Autonomous University of Baja California. His combination of cosmetic artistry and restorative expertise means your ${s.name.toLowerCase()} is planned for both beauty and long-term health.</p>
    <ul class="ticks">
      <li>${I.check} <span>Experienced specialist with hundreds of successful cases</span></li>
      <li>${I.check} <span>A clear plan and quote before any treatment begins</span></li>
      <li>${I.check} <span>Los Algodones prices, a fraction of US and Canadian fees</span></li>
      <li>${I.check} <span>A calm, unhurried experience with English and Spanish spoken</span></li>
    </ul>

    <h3>Related treatments</h3>
    <div class="chips">${relatedServices.map((r)=>`<a class="chip" href="/${r.slug}.html">${r.name}</a>`).join("")}</div>

    <h2>Frequently asked questions about ${s.name.toLowerCase()}</h2>
    ${faqHtml}

    <div class="callout gold">
      <h3 style="margin-top:0">Ready to get started?</h3>
      <p style="margin-bottom:14px">Request a free consultation and personalized quote for ${s.name.toLowerCase()} with Dr. Jimenez. You can even send photos of your smile with the booking form.</p>
      <a class="btn btn-gold" href="/booking.html">Book Your Free Consultation</a>
    </div>
  </article>
  ${serviceSidebar(s)}
</div></section>
`
  + footer();
  write(`${s.slug}.html`, html);
}

function serviceSidebar(s) {
  return `<aside class="sidebar">
    <div class="box cta-box">
      <img src="/assets/img/logo.jpeg" alt="Luxe Dentistry" width="150" height="63" loading="lazy" class="cta-logo">
      <h4>Free Consultation &amp; Quote</h4>
      <p>Ask us anything about ${s.name.toLowerCase()} and get a personalized quote.</p>
      <a class="btn btn-gold" href="/booking.html" style="width:100%">Book Now</a>
      <a class="wa-link" href="https://wa.me/${B.whatsappHref}">${I.wa} WhatsApp us</a>
    </div>
    <div class="box">
      <h4>Services</h4>
      ${serviceCategories.map((c)=>`<div class="side-cat">${c.name}</div><ul>${c.slugs.map((sl)=>{const x=svc(sl);return `<li><a href="/${x.slug}.html"${x.slug===s.slug?' class="on"':""}>${x.nav}</a></li>`;}).join("")}</ul>`).join("")}
    </div>
    <div class="box">
      <h4>Areas We Serve</h4>
      <ul class="cols2">${areas.slice(0,10).map((a)=>`<li><a href="/dentist-${a.slug}.html">${a.nav}</a></li>`).join("")}</ul>
    </div>
    <div class="box review-box">
      ${stars(5)}
      <p><strong>${B.rating} on Google</strong><br><span class="muted">Rated by ${B.reviewWord} patients.</span> <a href="${B.gbp}" target="_blank" rel="noopener">Read reviews ${I.arrow}</a></p>
    </div>
  </aside>`;
}

/* ============================================================
   AREA PAGE
   ============================================================ */
function buildArea(a) {
  const title = `BEST Dental Clinic for ${a.name} Patients | ${B.name} in ${CITY} — Implants, All-on-4, Veneers, Crowns & Smile Makeovers Near Me`;
  const desc = `Top-rated dental clinic for ${a.place} patients: Luxe Dentistry by Dr. Jose Manuel Jimenez in ${CITY}. Affordable implants, veneers, All-on-4 and smile makeovers. ${B.rating} on Google. ${a.travel.split(".")[0]}.`;
  const featured = ["dental-implants","all-on-4-dental-implants","porcelain-veneers","smile-makeover","dentures"].map(svc);
  const nearby = areas.filter((x)=>x.slug!==a.slug).slice(0,6);
  const faqs = [
    [`How far is Luxe Dentistry from ${a.name}?`, a.travel],
    [`How much can ${a.name} patients save in Los Algodones?`, `Patients travelling from ${a.name} typically save 50 to 70% compared with US and Canadian prices, often more on major treatments like dental implants, All-on-4 and full-mouth restoration. The savings on larger cases usually far exceed the cost of the trip.`],
    [`Does Dr. Jimenez speak English?`, `Yes. Dr. Jimenez and the Luxe Dentistry team speak both English and Spanish, so ${a.name} patients can communicate comfortably throughout their care.`],
    [`Can I complete treatment in one trip from ${a.name}?`, `In many cases, yes. We schedule travelling patients efficiently and tell you in advance how many visits your treatment needs, so you can plan your trip from ${a.name} with confidence.`],
  ];
  const faqHtml = faqs.map(([q,ans])=>`<details class="faq"><summary>${q}</summary><div class="body">${ans}</div></details>`).join("");

  const html = head(title, desc, `dentist-${a.slug}.html`)
  + breadcrumbSchema([["Home","index.html"],["Areas","dentist-los-algodones.html"],[a.name,`dentist-${a.slug}.html`]])
  + faqSchema(faqs)
  + header("areas")
  + `
<div class="page-head"><div class="wrap">
  <div class="crumb"><a href="/index.html">Home</a> &rsaquo; <a href="/dentist-los-algodones.html">Areas</a> &rsaquo; ${a.name}</div>
  <h1>Dental Clinic for ${a.name} Patients</h1>
  <p>${a.lead}</p>
</div></div>

<section><div class="wrap layout">
  <article class="prose">
    <p class="lead">${a.lead}</p>
    ${paras(a.body)}

    <div class="callout"><strong>Getting here from ${a.name}:</strong> ${a.travel}</div>

    <h2>Dental services for ${a.name} patients</h2>
    <p>Whatever brings you across the border, Dr. Jimenez offers a complete range of cosmetic, implant and restorative dentistry under one roof. ${a.name} patients most often visit us for:</p>
    <ul class="ticks">
      ${featured.map((f)=>`<li>${I.check} <span><a href="/${f.slug}.html"><strong>${f.name}</strong></a>: ${f.lead}</span></li>`).join("\n      ")}
    </ul>
    <p>Explore all of our <a href="/services.html">dental services</a>, or <a href="/booking.html">request a free quote</a> tailored to your needs.</p>

    <h2>Why ${a.name} patients choose Luxe Dentistry</h2>
    <p>For patients from ${a.place}, Luxe Dentistry offers a rare combination: the expertise of a Harvard-trained implantologist with 25 years of experience, the artistry of a cosmetic dentist known for beautiful smile makeovers, and the affordability that has made Los Algodones a world-famous dental destination.</p>
    <ul class="ticks">
      <li>${I.check} <span>Save 50 to 70% versus US and Canadian dental prices</span></li>
      <li>${I.check} <span>Rated ${B.rating} on Google by ${B.reviewWord} patients</span></li>
      <li>${I.check} <span>English and Spanish spoken, with border and airport pickup</span></li>
      <li>${I.check} <span>Efficient scheduling for travelling patients from ${a.name}</span></li>
    </ul>

    <h3>Nearby areas we also serve</h3>
    <div class="chips">${nearby.map((n)=>`<a class="chip" href="/dentist-${n.slug}.html">${n.nav}</a>`).join("")}</div>

    <h2>Frequently asked questions, ${a.name}</h2>
    ${faqHtml}

    <div class="callout gold">
      <h3 style="margin-top:0">Planning a trip from ${a.name}?</h3>
      <p style="margin-bottom:14px">Message us for a free consultation and quote before you travel, and send photos of your smile with the booking form.</p>
      <a class="btn btn-gold" href="/booking.html">Book Your Free Consultation</a>
    </div>
  </article>

  <aside class="sidebar">
    <div class="box cta-box">
      <img src="/assets/img/logo.jpeg" alt="Luxe Dentistry" width="150" height="63" loading="lazy" class="cta-logo">
      <h4>Free Quote for ${a.name} Patients</h4>
      <p>Plan your visit with confidence.</p>
      <a class="btn btn-gold" href="/booking.html" style="width:100%">Get Your Quote</a>
      <a class="wa-link" href="https://wa.me/${B.whatsappHref}">${I.wa} WhatsApp us</a>
    </div>
    <div class="box">
      <h4>Popular Services</h4>
      <ul>${services.slice(0,8).map((x)=>`<li><a href="/${x.slug}.html">${x.nav}</a></li>`).join("")}</ul>
    </div>
    <div class="box">
      <h4>Other Areas</h4>
      <ul class="cols2">${areas.filter((x)=>x.slug!==a.slug).slice(0,10).map((x)=>`<li><a href="/dentist-${x.slug}.html">${x.nav}</a></li>`).join("")}</ul>
    </div>
  </aside>
</div></section>
`
  + footer();
  write(`dentist-${a.slug}.html`, html);
}

/* ============================================================
   ABOUT (+ clinic section)
   ============================================================ */
function buildAbout() {
  const title = `About Luxe Dentistry & Dr. Jose Manuel Jimenez, DDS | Family-Owned Dental Clinic in ${CITY} — 25 Years' Experience, Harvard-Trained`;
  const desc = `About Luxe Dentistry, a family-owned dental clinic in ${CITY} led by Dr. Jose Manuel Jimenez, DDS: 25 years' experience, Harvard-trained implantologist, on-site pharmacy, border pickup and PPO insurance accepted. ${B.rating} on Google.`;
  const html = head(title, desc, "about.html")
  + breadcrumbSchema([["Home","index.html"],["About","about.html"]])
  + businessSchema()
  + personSchema()
  + header("about")
  + `
<div class="page-head"><div class="wrap">
  <div class="crumb"><a href="/index.html">Home</a> &rsaquo; About</div>
  <h1>About Luxe Dentistry</h1>
  <p>A family-owned dental clinic in Los Algodones, led by a Harvard-trained cosmetic and implant dentist with 25 years of experience.</p>
</div></div>

<section><div class="wrap layout">
  <article class="prose">
    <img src="/assets/img/dr-jimenez.jpg" alt="Dr. Jose Manuel Jimenez, DDS" width="300" height="398" class="float-portrait">
    <p class="lead">Luxe Dentistry is a family-owned and operated clinic providing the full range of dental services in the heart of Los Algodones. It is led by Dr. Jose Manuel Jimenez, DDS, who has 25 years of experience, 15 of them right here, and who founded the clinic to bring world-class cosmetic and implant care to the patients who travel here from across North America.</p>
    <p>Dr. Jimenez's true passion is cosmetic dentistry. He is recognized as one of the best dentists for smile makeovers in Los Algodones, having performed makeovers for hundreds of patients from across the United States, Canada and Mexico. His approach blends technical precision with an artist's eye, designing each smile to suit the individual person for a natural, healthy, confident result.</p>

    <h2>Education and training</h2>
    <ul class="ticks">
      <li>${I.check} <span><strong>Doctor of Dental Surgery (DDS)</strong>, University of Michoacana de San Nicolas de Hidalgo. Cosmetic Dentistry and Restorative Rehabilitation.</span></li>
      <li>${I.check} <span><strong>Implantology Diploma</strong>, Evidence-Based Implant Dentistry, Harvard School of Dental Medicine (Boston, USA campus).</span></li>
      <li>${I.check} <span><strong>Implant Certificate</strong>, Autonomous University of Baja California.</span></li>
      <li>${I.check} <span><strong>Member</strong>, Mexican Dental Association (ADM).</span></li>
    </ul>

    <h2>Professional experience</h2>
    <ul class="ticks">
      <li>${I.check} <span><strong>2007 to 2018:</strong> Cosmetic Dentistry and Implantology Expert, Sani Dental Group, Los Algodones.</span></li>
      <li>${I.check} <span><strong>2007:</strong> Dr. Chona Pua Dental Clinic, Salinas, California.</span></li>
      <li>${I.check} <span><strong>1998 to 2006:</strong> La Ceyba Dental, Salinas, California.</span></li>
    </ul>

    <div class="callout gold">
      <h3 style="margin-top:0">The Harvard difference</h3>
      <p style="margin:0">Dr. Jimenez received the ultimate accomplishment as a diplomate of Harvard University for his continuing education in Evidence-Based Implant Dentistry, a mark of his commitment to placing implants using the most current, research-backed techniques.</p>
    </div>

    <h2>Verified credentials</h2>
    <p>His qualifications are backed by verified certificates. Tap any certificate to view it in full.</p>
    <div class="cred-grid">
      ${credentials.filter((c)=>hasImg(c.img)).map((c)=>`<figure class="cred"><a href="/assets/img/${c.img}" target="_blank" rel="noopener"><img src="/assets/img/${c.img}" alt="${esc(c.label)}" loading="lazy"></a><figcaption>${c.label}</figcaption></figure>`).join("")}
    </div>

    <h2 id="clinic">The clinic</h2>
    <img src="/assets/img/clinic-building.jpg" alt="The Luxe Dentistry clinic building in Los Algodones, Baja California" width="700" height="700" loading="lazy" class="wide-img">
    <p>${clinic.intro}</p>
    <div class="feature-cols">
      <div class="feature">
        <h3>Clinic &amp; comfort</h3>
        <ul class="ticks">${clinic.facilities.map((f)=>`<li>${I.check} <span>${f}</span></li>`).join("")}</ul>
      </div>
      <div class="feature">
        <h3>Travel &amp; access</h3>
        <ul class="ticks">${clinic.travel.map((f)=>`<li>${I.check} <span>${f}</span></li>`).join("")}</ul>
      </div>
      <div class="feature">
        <h3>Payments &amp; insurance</h3>
        <ul class="ticks">${clinic.payments.map((f)=>`<li>${I.check} <span>${f}</span></li>`).join("")}</ul>
      </div>
    </div>
    <div class="callout">
      <strong>Dental emergency after hours?</strong> Call our US line on <a href="tel:${clinic.emergencyHref}">${clinic.emergency}</a> for help outside our regular Monday to Saturday hours.
    </div>

    <h2>Why patients travel to Luxe Dentistry</h2>
    <p>Los Algodones, "Molar City," is one of the world's most popular destinations for quality, affordable dental care, and Luxe Dentistry is among its most trusted names. Patients from <a href="/dentist-yuma-az.html">Yuma</a>, <a href="/dentist-phoenix-az.html">Phoenix</a>, <a href="/dentist-san-diego-ca.html">San Diego</a> and beyond choose us for the rare combination of expert, Harvard-trained care and exceptional value.</p>
    <p><a class="btn btn-gold" href="/team.html">Meet The Dentist</a> <a class="btn btn-outline" href="/booking.html">Book an Appointment</a></p>
  </article>

  <aside class="sidebar">
    <div class="box cta-box">
      <img src="/assets/img/logo.jpeg" alt="Luxe Dentistry" width="150" height="63" loading="lazy" class="cta-logo">
      <h4>Book an Appointment</h4>
      <p>Free consultation and quote.</p>
      <a class="btn btn-gold" href="/booking.html" style="width:100%">Book Now</a>
    </div>
    <div class="box">
      <h4>Credentials at a glance</h4>
      <ul class="ticks small">
        <li>${I.check} <span>25 years of experience</span></li>
        <li>${I.check} <span>Harvard implant diploma</span></li>
        <li>${I.check} <span>Implant certificate, UABC</span></li>
        <li>${I.check} <span>ADM member clinic</span></li>
        <li>${I.check} <span>Customer Service Award 2025</span></li>
      </ul>
    </div>
    <div class="box review-box">${stars(5)}<p><strong>${B.rating} on Google</strong><br><a href="${B.gbp}" target="_blank" rel="noopener">Read reviews ${I.arrow}</a></p></div>
  </aside>
</div></section>
`
  + footer();
  write("about.html", html);
}

/* ============================================================
   TEAM
   ============================================================ */
function buildTeam() {
  const title = `Our Team | ${B.name} — Meet Dr. Jose Manuel Jimenez, DDS & the Luxe Dentistry Team in ${CITY}`;
  const desc = `Meet the Luxe Dentistry team in ${CITY}, led by Dr. Jose Manuel Jimenez, DDS: a friendly, bilingual team with 25 years of experience. English and Spanish spoken. ${B.rating} on Google.`;
  const t = team[0];
  const teamCard = `
    <div class="team-card">
      <div class="team-photo">${hasImg(t.photo) ? `<img src="/assets/img/${t.photo}" alt="${esc(t.name)}, ${esc(t.role)} at Luxe Dentistry" loading="lazy">` : `<div class="team-initials">${t.name.split(" ").map(w=>w[0]).slice(0,2).join("")}</div>`}</div>
      <div class="team-info">
        <h3>${t.name}</h3>
        <div class="team-role">${t.role}</div>
        <div class="team-langs">${I.check} Speaks ${t.langs}</div>
        ${t.bio.map((p)=>`<p>${p}</p>`).join("")}
        <p><a class="btn btn-gold" href="/about.html">Full Bio &amp; Credentials</a> <a class="btn btn-outline" href="/booking.html">Book With Dr. Jimenez</a></p>
      </div>
    </div>`;
  const atWork = [
    ["patient-02.jpg", "Dr. Jimenez with a patient in the treatment room"],
    ["patient-04.jpg", "Dr. Jimenez with patients at the Luxe Dentistry reception"],
    ["patient-01.jpg", "Dr. Jimenez welcoming a patient to the clinic"],
  ].filter((s)=>hasImg(s[0]));

  const html = head(title, desc, "team.html")
  + breadcrumbSchema([["Home","index.html"],["Meet the Dentist","team.html"]])
  + personSchema()
  + header("team")
  + `
<div class="page-head"><div class="wrap">
  <div class="crumb"><a href="/index.html">Home</a> &rsaquo; Our Team</div>
  <h1>Meet the Luxe Dentistry Team</h1>
  <p>Led by Dr. Jose Manuel Jimenez, DDS, our friendly, bilingual team is dedicated to making your visit to Los Algodones comfortable, honest and rewarding, from your first message to your final smile.</p>
</div></div>

<section><div class="wrap">
  <div class="team-list">${teamCard}</div>

  <div class="center" style="margin-top:56px">
    <div class="eyebrow">The Full Team</div>
    <h2>Our Luxe Dentistry Team</h2>
    <p class="section-intro">The friendly, bilingual team that will look after you at our clinic in Los Algodones.</p>
  </div>
  ${hasImg("team-group.jpg") ? `<figure class="team-hero"><img src="/assets/img/team-group.jpg" alt="The Luxe Dentistry team with Dr. Jose Manuel Jimenez at the clinic in Los Algodones" loading="lazy"></figure>` : ""}
  <div class="photo-grid photo-grid-3" style="margin-top:22px">
    ${hasImg("team-two.jpg") ? `<figure class="photo"><img src="/assets/img/team-two.jpg" alt="Luxe Dentistry team members at the clinic" loading="lazy"></figure>` : ""}
    <figure class="photo"><img src="/assets/img/patient-02.jpg" alt="Dr. Jimenez with a patient in the treatment room" loading="lazy"></figure>
    <figure class="photo"><img src="/assets/img/patient-04.jpg" alt="Patients with the Luxe Dentistry team" loading="lazy"></figure>
  </div>

  <div class="callout gold" style="max-width:760px;margin:48px auto 0;text-align:center">
    <h3 style="margin-top:0">Come and meet Dr. Jimenez</h3>
    <p style="margin-bottom:14px">Book a free consultation, or message us on WhatsApp with any questions about travelling to Los Algodones.</p>
    <a class="btn btn-gold" href="/booking.html">Book an Appointment</a>
    <a class="btn btn-outline" href="https://wa.me/${B.whatsappHref}" target="_blank" rel="noopener">Message on WhatsApp</a>
  </div>
</div></section>
`
  + footer();
  write("team.html", html);
}

/* ============================================================
   TESTIMONIALS
   ============================================================ */
function buildTestimonials() {
  const title = `Patient Reviews, Video Testimonials & Before/After | ${B.name} in ${CITY} — Real Results for Implants, Veneers & Smile Makeovers`;
  const desc = `Watch real patient video reviews and see before and after smile transformations at Luxe Dentistry in ${CITY}. Rated ${B.rating} on Google. Cosmetic and implant dentistry by Dr. Jose Manuel Jimenez.`;
  const html = head(title, desc, "testimonials.html")
  + breadcrumbSchema([["Home","index.html"],["Reviews","testimonials.html"]])
  + header("testimonials")
  + `
<div class="page-head"><div class="wrap">
  <div class="crumb"><a href="/index.html">Home</a> &rsaquo; Reviews</div>
  <h1>Patient Reviews &amp; Before/After Results</h1>
  <p>Real stories from patients who trusted Luxe Dentistry with their smiles, before and after their treatment.</p>
</div></div>

<section>
  <div class="wrap center">
    <div class="eyebrow">Video Reviews</div>
    <h2>Hear From Our Patients</h2>
    <p class="section-intro">These real patient video reviews are shared from our <a href="${B.facebook}" target="_blank" rel="noopener">Facebook page</a>. Watch patients describe their experience before and after treatment with Dr. Jimenez.</p>
    ${videoBlock()}
  </div>
</section>

<section class="section-alt">
  <div class="wrap center">
    <div class="eyebrow">Smile Transformations</div>
    <h2>Before &amp; After Working With Our Patients</h2>
    <p class="section-intro">Real cases completed at Luxe Dentistry, planned around each patient for a natural, lasting result.</p>
    ${beforeAfterBlock()}
  </div>
</section>

<section>
  <div class="wrap center">
    <div class="eyebrow">At the Clinic</div>
    <h2>Real Patients in Los Algodones</h2>
    <p class="section-intro">Patients photographed at our reception, from across the US border and beyond.</p>
    ${patientPhotos()}
  </div>
</section>

<section class="section-alt">
  <div class="wrap center">
    <div class="eyebrow">Written Reviews</div>
    <h2>Rated ${B.rating} by ${cap(B.reviewWord)} Patients</h2>
    <p class="section-intro">A few words from verified patients. Read more on our <a href="${B.gbp}" target="_blank" rel="noopener">Google Business Profile</a>.</p>
    <div class="quote-grid">${reviewCards()}</div>
    <p style="margin-top:34px"><a class="btn btn-gold" href="/booking.html">Start Your Own Transformation</a></p>
  </div>
</section>
`
  + footer();
  write("testimonials.html", html);
}

/* ============================================================
   BOOKING (form + document upload)
   ============================================================ */
function bookingForm() {
  const treatmentOptions = serviceCategories.map((c)=>`<optgroup label="${c.name}">${c.slugs.map((sl)=>`<option>${svc(sl).name}</option>`).join("")}</optgroup>`).join("");
  return `<form action="https://formsubmit.co/${B.email}" method="POST" enctype="multipart/form-data" class="booking-form">
      <input type="hidden" name="_subject" value="New appointment request from the Luxe Dentistry website">
      <input type="hidden" name="_template" value="table">
      <input type="hidden" name="_captcha" value="false">
      <input type="hidden" name="_next" value="https://${B.domain}/thanks.html">
      <input type="text" name="_honey" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
      <div class="frow">
        <label>Full name*<input type="text" name="name" required></label>
        <label>Email*<input type="email" name="email" required></label>
      </div>
      <div class="frow">
        <label>Phone / WhatsApp*<input type="tel" name="phone" required></label>
        <label>Where are you travelling from?<input type="text" name="from" placeholder="e.g. Yuma, AZ"></label>
      </div>
      <div class="frow">
        <label>Treatment of interest<select name="treatment"><option>Not sure yet, please advise</option>${treatmentOptions}</select></label>
        <label>Preferred date(s)<input type="text" name="dates" placeholder="e.g. week of Sept 15, or flexible"></label>
      </div>
      <label>Tell us about your smile or concern<textarea name="message" rows="4" placeholder="What would you like to improve? Any pain, missing teeth or past dental work?"></textarea></label>
      <label class="file-field">Send photos or documents of your dental condition
        <span class="file-hint">Upload smile photos, x-rays or a treatment plan (JPG, PNG or PDF, up to ~10&nbsp;MB total). This helps Dr. Jimenez give you a more accurate quote before you travel.</span>
        <input type="file" name="attachment" accept="image/*,.pdf" multiple>
      </label>
      <label class="consent"><input type="checkbox" name="consent" required> <span>I agree to be contacted about my enquiry and I accept the <a href="/terms.html" target="_blank" rel="noopener">Terms &amp; Conditions</a>. My details will only be used to respond to me.*</span></label>
      <button class="btn btn-gold" type="submit">Send &amp; Get My Free Quote</button>
      <p class="muted note">Submissions are emailed straight to the clinic (${B.email}) with the patient's details and any attached photos or x-rays. First-time setup: the clinic clicks the one-time confirmation link FormSubmit emails on the very first submission. For very large x-ray files, patients can also send them by WhatsApp.</p>
    </form>`;
}

function buildBooking() {
  const title = `Book an Appointment | ${B.name} in ${CITY} — Free Consultation & Quote, Send Your X-rays or Smile Photos Online`;
  const desc = `Book your free consultation at Luxe Dentistry in ${CITY}. Request a quote from Dr. Jose Manuel Jimenez and upload your smile photos or x-rays with the secure booking form. English and Spanish spoken.`;
  const html = head(title, desc, "booking.html")
  + breadcrumbSchema([["Home","index.html"],["Book an Appointment","booking.html"]])
  + businessSchema()
  + header("contact")
  + `
<div class="page-head"><div class="wrap">
  <div class="crumb"><a href="/index.html">Home</a> &rsaquo; Book an Appointment</div>
  <h1>Book Your Appointment</h1>
  <p>Request a free consultation and personalized quote. You can upload photos of your smile or your x-rays so Dr. Jimenez can advise you before you travel.</p>
</div></div>

<section><div class="wrap layout">
  <div>
    <div class="steps">
      <div class="step"><span>1</span><div><strong>Send your details</strong><p class="muted">Tell us what you would like to improve and attach any photos or x-rays.</p></div></div>
      <div class="step"><span>2</span><div><strong>Get your quote</strong><p class="muted">Our team replies with a personalized plan, quote and available dates.</p></div></div>
      <div class="step"><span>3</span><div><strong>Visit &amp; smile</strong><p class="muted">We arrange border pickup and schedule your treatment around your trip.</p></div></div>
    </div>
    ${bookingForm()}
  </div>

  <aside class="sidebar">
    <div class="box">
      <h4>${B.name}</h4>
      <p class="contact-lines">
        <span>${I.pin} ${B.street}, ${B.city}, ${B.regionCode} ${B.postal}</span>
        <span>${I.phone} <a href="tel:${B.phoneHref}">${B.phone}</a></span>
        <span>${I.wa} <a href="https://wa.me/${B.whatsappHref}">${B.whatsapp}</a></span>
        <span>${I.mail} <a href="mailto:${B.email}">${B.email}</a></span>
      </p>
      <h4 style="margin-top:16px">Hours</h4>
      <p class="muted" style="font-size:.95rem">${B.hours.map((h)=>`${h[0]}: ${h[1]}`).join("<br>")}<br>Emergency line: <a href="tel:${clinic.emergencyHref}">${clinic.emergency}</a></p>
    </div>
    <div class="box review-box">${stars(5)}<p><strong>${B.rating} on Google</strong><br><span class="muted">${cap(B.reviewWord)} happy patients.</span> <a href="${B.gbp}" target="_blank" rel="noopener">Read reviews ${I.arrow}</a></p></div>
    <div class="box cta-box">
      <h4>Prefer to chat now?</h4>
      <p>Message our patient care team directly.</p>
      <a class="btn btn-gold" href="https://wa.me/${B.whatsappHref}" target="_blank" rel="noopener" style="width:100%">${I.wa} WhatsApp us</a>
    </div>
  </aside>
</div></section>
`
  + footer();
  write("booking.html", html);
}

/* ============================================================
   CONTACT
   ============================================================ */
function buildContact() {
  const title = `Contact & Directions | ${B.name} — Dental Clinic in ${CITY} | Free Consultation Near the Andrade Border Crossing`;
  const desc = `Contact Luxe Dentistry in ${CITY}. Address, phone, WhatsApp, hours and directions from Yuma and the Andrade border crossing. Book a free consultation with Dr. Jose Manuel Jimenez.`;
  const allServiceLinks = services.map((s)=>`<a href="/${s.slug}.html">${s.name}</a>`).join(" &middot; ");
  const allAreaLinks = areas.map((a)=>`<a href="/dentist-${a.slug}.html">${a.name}</a>`).join(" &middot; ");
  const html = head(title, desc, "contact.html")
  + breadcrumbSchema([["Home","index.html"],["Contact","contact.html"]])
  + businessSchema()
  + header("contact")
  + `
<div class="page-head"><div class="wrap">
  <div class="crumb"><a href="/index.html">Home</a> &rsaquo; Contact</div>
  <h1>Contact Luxe Dentistry, Los Algodones</h1>
  <p>Get in touch for a free consultation and quote, or ask us anything about your visit across the border.</p>
</div></div>

<section><div class="wrap layout">
  <article class="prose">
    <h2>How to reach us</h2>
    <p>The fastest way to get answers and a quote is to <a href="/booking.html">use our booking form</a>, where you can also send photos of your smile or your x-rays. Prefer to talk now? Message us on <a href="https://wa.me/${B.whatsappHref}">WhatsApp</a> or call <a href="tel:${B.phoneHref}">${B.phone}</a>.</p>
    <div class="contact-cards">
      <a class="ccard" href="tel:${B.phoneHref}">${I.phone}<span><strong>Call us</strong>${B.phone}</span></a>
      <a class="ccard" href="https://wa.me/${B.whatsappHref}" target="_blank" rel="noopener">${I.wa}<span><strong>WhatsApp</strong>${B.whatsapp}</span></a>
      <a class="ccard" href="mailto:${B.email}">${I.mail}<span><strong>Email</strong>${B.email}</span></a>
      <a class="ccard" href="/booking.html">${I.check}<span><strong>Book online</strong>Free quote &amp; upload x-rays</span></a>
    </div>

    <h2 style="margin-top:34px">Getting here</h2>
    <p>Luxe Dentistry is in the heart of Los Algodones, a short walk from the <strong>Andrade border crossing</strong> near Yuma, Arizona. Most visiting patients park on the US side and walk across into town. We offer complimentary border pickup with personalized signage, plus airport pickup from Yuma International.</p>
    <p>Popular routes: from <a href="/dentist-yuma-az.html">Yuma</a> (about 20 minutes), <a href="/dentist-el-centro-ca.html">El Centro</a> (under an hour), <a href="/dentist-san-diego-ca.html">San Diego</a> (about 2.5 hours) and <a href="/dentist-phoenix-az.html">Phoenix</a> (about 3 hours).</p>
    <div class="photo-grid photo-grid-4" style="margin-top:20px">
      <figure class="photo"><img src="/assets/img/clinic-building.jpg" alt="Luxe Dentistry clinic building exterior in Los Algodones" loading="lazy"></figure>
      <figure class="photo"><img src="/assets/img/clinic-parking.jpg" alt="Patient parking at Luxe Dentistry" loading="lazy"></figure>
      <figure class="photo"><img src="/assets/img/patient-03.jpg" alt="Luxe Dentistry reception" loading="lazy"></figure>
      <figure class="photo"><img src="/assets/img/dental-technology.jpg" alt="Dental technology at Luxe Dentistry" loading="lazy"></figure>
    </div>
  </article>

  <aside class="sidebar">
    <div class="box">
      <h4>${B.name}</h4>
      <p class="contact-lines">
        <span>${I.pin} ${B.street}<br>${B.city}, ${B.regionCode} ${B.postal}, ${B.country}</span>
        <span>${I.phone} <a href="tel:${B.phoneHref}">${B.phone}</a></span>
        <span>${I.wa} <a href="https://wa.me/${B.whatsappHref}">${B.whatsapp}</a></span>
        <span>${I.mail} <a href="mailto:${B.email}">${B.email}</a></span>
      </p>
      <h4 style="margin-top:16px">Hours</h4>
      <p class="muted" style="font-size:.95rem">${B.hours.map((h)=>`${h[0]}: ${h[1]}`).join("<br>")}<br>Emergency: <a href="tel:${clinic.emergencyHref}">${clinic.emergency}</a></p>
      <a class="btn btn-gold" href="/booking.html" style="width:100%;margin-top:8px">Book an Appointment</a>
    </div>
    <div class="box review-box">${stars(5)}<p><strong>${B.rating} on Google</strong><br><a href="${B.gbp}" target="_blank" rel="noopener">Read reviews ${I.arrow}</a></p></div>
  </aside>
</div></section>

<section style="padding-top:0"><div class="wrap">
  <div class="map-wrap">
    <iframe src="${B.mapEmbed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map to Luxe Dentistry in Los Algodones"></iframe>
    <div class="nap">
      <h3>${I.pin} Visit us</h3>
      <p>${B.street}<br>${B.city}, ${B.regionCode} ${B.postal}, ${B.country}</p>
      <p class="muted">Walk across from the Andrade crossing, then look for our building and exclusive patient parking.</p>
      <a class="btn btn-outline" href="${B.gbp}" target="_blank" rel="noopener">${stars(5)} View on Google</a>
    </div>
  </div>
</div></section>

<section class="section-alt" style="padding:40px 0"><div class="wrap center">
  <p style="margin-bottom:10px"><strong>Services:</strong> ${allServiceLinks}</p>
  <p style="margin:0"><strong>Areas served:</strong> ${allAreaLinks}</p>
</div></section>
`
  + footer();
  write("contact.html", html);
}

/* ============================================================
   TERMS & CONDITIONS
   ============================================================ */
function buildTerms() {
  const title = `Terms & Conditions and Privacy | ${B.name} — Dental Clinic in ${CITY} | Website Terms of Use, Quotes, Appointments & Patient Privacy`;
  const desc = `Terms and conditions and privacy notice for the Luxe Dentistry website in ${CITY}.`;
  const sections = [
    ["1. About these terms", `These terms govern your use of the Luxe Dentistry website and your enquiries to us. By using this website or submitting the booking form, you agree to these terms. Luxe Dentistry is a dental clinic operated by Dr. Jose Manuel Jimenez, DDS, at ${B.street}, ${B.city}, ${B.regionCode} ${B.postal}, ${B.country}.`],
    ["2. Information, not medical advice", "The content on this website is provided for general information only and is not a substitute for a professional dental examination, diagnosis or treatment. No dentist-patient relationship is created by reading this website or by contacting us. Always seek the advice of Dr. Jimenez or a qualified professional before making decisions about your dental care."],
    ["3. Treatment outcomes", "Every patient is different. Photographs, testimonials and case examples on this website show individual results and are not a promise or guarantee that you will achieve the same outcome. Your treatment plan and expected results are confirmed only after an in-person examination."],
    ["4. Quotes and estimates", "Any prices, quotes or estimates provided online, by phone, by WhatsApp or by email are indicative only and are subject to change following a clinical examination. Your final treatment plan and fees are confirmed in person before treatment begins. Free consultations do not commit you to any treatment."],
    ["5. Appointments and cancellations", "We will do our best to accommodate your preferred dates. Please let us know as early as possible if you need to change or cancel an appointment so we can offer the time to other patients. Any deposit terms for large treatment plans will be explained to you in advance and in writing."],
    ["6. Your information and uploads", `When you use the booking form you may share personal details and, optionally, photos or x-rays of your dental condition. We use this information only to respond to your enquiry, prepare your quote and provide care. We do not sell your information. Form submissions are delivered to the clinic by email (${B.email}). Please do not upload documents that are not yours to share.`],
    ["7. Communications", "By providing your phone number, WhatsApp number or email, you agree that we may contact you about your enquiry using those channels. Standard message and data rates from your provider may apply."],
    ["8. Intellectual property", "The Luxe Dentistry name, logo, text, photographs and design on this website are the property of the clinic or used with permission and may not be copied or reused without our written consent."],
    ["9. Third-party links", "This website may link to third-party sites such as Google, Facebook and WhatsApp. We are not responsible for the content or privacy practices of those services."],
    ["10. Limitation of liability", "To the fullest extent permitted by law, Luxe Dentistry is not liable for any loss arising from reliance on general information provided on this website. Nothing in these terms limits liability that cannot be limited under applicable law."],
    ["11. Governing law", "These terms are governed by the laws of Mexico. Any dispute relating to this website will be subject to the competent courts of Baja California, Mexico."],
    ["12. Changes and contact", `We may update these terms from time to time; the current version always appears on this page. Questions? Contact us at ${B.email} or ${B.phone}.`],
  ];
  const html = head(title, desc, "terms.html")
  + breadcrumbSchema([["Home","index.html"],["Terms & Conditions","terms.html"]])
  + header("terms")
  + `
<div class="page-head"><div class="wrap">
  <div class="crumb"><a href="/index.html">Home</a> &rsaquo; Terms &amp; Conditions</div>
  <h1>Terms &amp; Conditions</h1>
  <p>Please read these terms and our privacy notice, which apply to your use of this website and your enquiries to Luxe Dentistry.</p>
</div></div>
<section><div class="wrap" style="max-width:820px">
  <article class="prose">
    <p class="muted">Last updated: August 2026</p>
    ${sections.map((s)=>`<h2>${s[0]}</h2><p>${s[1]}</p>`).join("\n")}
    <div class="callout gold">
      <p style="margin:0">Have a question about these terms or your care? <a href="/contact.html">Contact us</a> or <a href="/booking.html">book a free consultation</a>.</p>
    </div>
  </article>
</div></section>
`
  + footer();
  write("terms.html", html);
}

/* ============================================================
   THANKS + sitemap + robots
   ============================================================ */
function buildThanks() {
  const html = head(`Thank You | ${B.name}`, "Thank you for contacting Luxe Dentistry. We will be in touch shortly.", "thanks.html")
  + header("")
  + `<section><div class="wrap center" style="padding:70px 0">
    <div class="eyebrow">Message received</div>
    <h1>Thank you</h1>
    <p class="section-intro">We have received your request and our team will get back to you shortly with your free quote. For a faster reply, message us on WhatsApp.</p>
    <div class="hero-actions" style="justify-content:center">
      <a class="btn btn-gold" href="https://wa.me/${B.whatsappHref}" target="_blank" rel="noopener">${I.wa} Message on WhatsApp</a>
      <a class="btn btn-outline" href="/index.html">Back to Home</a>
    </div>
  </div></section>`
  + footer();
  write("thanks.html", html);
}

function buildSitemap(pages) {
  const urls = pages.map((p)=>`  <url><loc>https://${B.domain}/${p}</loc></url>`).join("\n");
  write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`);
  write("robots.txt", `User-agent: *\nAllow: /\nSitemap: https://${B.domain}/sitemap.xml\n`);
}

/* ============================================================ RUN */
console.log("Building Luxe Dentistry site...");
buildHome();
buildServicesIndex();
buildAbout();
buildTeam();
buildTestimonials();
buildBooking();
buildContact();
buildTerms();
buildThanks();
services.forEach(buildService);
areas.forEach(buildArea);

const pages = ["index.html","services.html","about.html","team.html","testimonials.html","booking.html","contact.html","terms.html"]
  .concat(services.map((s)=>`${s.slug}.html`))
  .concat(areas.map((a)=>`dentist-${a.slug}.html`));
buildSitemap(pages);
console.log(`\nDone. ${pages.length} indexable pages + thanks.html generated.`);
