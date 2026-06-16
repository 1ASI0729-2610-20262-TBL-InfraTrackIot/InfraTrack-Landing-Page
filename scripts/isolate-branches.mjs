#!/usr/bin/env node
/**
 * Aísla cada rama feature para contener SOLO el código de su sección.
 * Uso: node scripts/isolate-branches.mjs [section-id|all]
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT = path.resolve(import.meta.dirname, '..');

const SECTIONS = {
  home: {
    branch: 'feature/home',
    label: 'Inicio',
    navKey: 'nav_inicio',
    navHref: '#inicio',
    htmlMarkers: [
      ['<!-- Section 2: Hero Section -->', '<!-- Section: Sobre Nosotros'],
    ],
    cssRanges: [[270, 583], [1069, 1092]],
    i18nPrefixes: ['meta_', 'nav_', 'hero_', 'float_', 'foot_tag', 'foot_copy'],
    i18nExact: [],
    images: ['logo_infratrack-sinfondo.png', 'home-hero.jpeg'],
    script: 'home',
  },
  technology: {
    branch: 'feature/technology',
    label: 'Tecnología',
    navKey: 'nav_tecnologia',
    navHref: '#tecnologia',
    htmlMarkers: [
      ['<!-- Section 4: IoT Technology', '<!-- Section 5: Implementación Estratégica'],
    ],
    cssRanges: [[1252, 2173], [1926, 1928], [3875, 3902]],
    i18nPrefixes: ['meta_', 'nav_', 'tech_', 'ops_', 'video_', 'foot_tag', 'foot_copy'],
    i18nExact: [],
    images: ['logo_infratrack-sinfondo.png'],
    script: 'technology',
  },
  sectors: {
    branch: 'feature/sectors',
    label: 'Sectores',
    navKey: 'nav_sectores',
    navHref: '#sectores',
    htmlMarkers: [
      ['<!-- Section 5: Implementación Estratégica', '<!-- Section: Integrantes del Equipo'],
    ],
    cssRanges: [[2175, 2536], [3566, 3873]],
    i18nPrefixes: ['meta_', 'nav_', 'sec_', 'sector', 'stat', 'foot_tag', 'foot_copy'],
    i18nExact: [],
    images: ['logo_infratrack-sinfondo.png', 'card-1.jpeg', 'card-2.jpeg', 'card-3.jpeg', 'section-porcentajes.jpg'],
    script: 'sectors',
  },
  about: {
    branch: 'feature/about',
    label: 'Nosotros',
    navKey: 'nav_nosotros',
    navHref: '#nosotros',
    htmlMarkers: [
      ['<!-- Section: Sobre Nosotros', '<!-- Section 4: IoT Technology'],
    ],
    cssRanges: [[655, 1037], [1094, 1250]],
    i18nPrefixes: ['meta_', 'nav_', 'about_', 'foot_tag', 'foot_copy'],
    i18nExact: [],
    images: ['logo_infratrack-sinfondo.png', 'nosotros_1.png', 'nosotros_2.png'],
    script: 'about',
  },
  team: {
    branch: 'feature/team',
    label: 'Equipo',
    navKey: 'nav_equipo',
    navHref: '#equipo',
    htmlMarkers: [
      ['<!-- Section: Integrantes del Equipo', '<!-- Section 6: Subscription Plans'],
    ],
    cssRanges: [[2538, 2678], [1718, 1835], [3875, 3891]],
    i18nPrefixes: ['meta_', 'nav_', 'team_', 'foot_tag', 'foot_copy'],
    i18nExact: [],
    images: ['logo_infratrack-sinfondo.png', 'dhilsen.jpeg', 'Jefferson.jpeg', 'Aldair.jpeg'],
    script: 'team',
  },
  plans: {
    branch: 'feature/plans',
    label: 'Planes',
    navKey: 'nav_planes',
    navHref: '#planes',
    htmlMarkers: [
      ['<!-- Section 6: Subscription Plans', '<!-- Section 7: Contact'],
    ],
    cssRanges: [[2680, 2969]],
    i18nPrefixes: ['meta_', 'nav_', 'price_', 'plan', 'foot_tag', 'foot_copy'],
    i18nExact: [],
    images: ['logo_infratrack-sinfondo.png'],
    script: 'plans',
  },
  terms: {
    branch: 'feature/terms-and-conditions',
    label: 'Términos',
    navKey: 'foot_terms',
    navHref: 'terminos.html',
    htmlMarkers: [],
    cssRanges: [[3230, 3277]],
    i18nPrefixes: ['terms_'],
    i18nExact: ['meta_title', 'meta_description'],
    images: ['logo_infratrack-sinfondo.png'],
    script: 'terms',
    termsOnly: true,
  },
};

const SHARED_CSS_RANGES = [
  [1, 269],
  [585, 604],
  [3169, 3228],
  [3279, 3458],
];

function readFromDevelop(file) {
  return execSync(`git show develop:${file}`, { cwd: ROOT, encoding: 'utf8' });
}

function read(file) {
  return fs.readFileSync(path.join(ROOT, file), 'utf8');
}

function extractBetween(html, start, end) {
  const s = html.indexOf(start);
  if (s === -1) throw new Error(`Marcador no encontrado: ${start}`);
  const e = html.indexOf(end, s);
  if (e === -1) throw new Error(`Marcador fin no encontrado: ${end}`);
  return html.slice(s, e).trim();
}

function extractCssRanges(css, ranges) {
  const lines = css.split('\n');
  const chunks = [];
  for (const [start, end] of ranges) {
    chunks.push(lines.slice(start - 1, end).join('\n'));
  }
  return chunks.join('\n\n');
}

function buildNavbar(section) {
  return `    <nav class="navbar navbar-expand-lg navbar-new shadow-sm sticky-top">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center" href="#">
                <img src="Imagenes/logo_infratrack-sinfondo.png" alt="InfraTrack Logo" height="42" class="me-2">
                <span class="fw-bold fs-4">Infra<span class="text-orange">Track</span></span>
            </a>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <i class="bi bi-list fs-1 text-orange"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto me-lg-5">
                    <li class="nav-item"><a class="nav-link active fw-semibold" href="${section.navHref}" data-i18n="${section.navKey}">${section.label}</a></li>
                </ul>
                <div class="lang-switch me-lg-3 my-2 my-lg-0" role="group" aria-label="Idioma">
                    <button type="button" class="lang-switch-btn" data-set-lang="en" aria-pressed="false">EN</button>
                    <span class="lang-switch-dash" aria-hidden="true">-</span>
                    <button type="button" class="lang-switch-btn active" data-set-lang="es" aria-pressed="true">ES</button>
                </div>
            </div>
        </div>
    </nav>`;
}

function buildTopHeader() {
  return `    <div class="top-header-new d-none d-lg-block">
        <div class="container d-flex justify-content-between align-items-center h-100">
            <div class="contact-links">
                <span class="me-4"><i class="bi bi-telephone text-orange me-2"></i> +51 987 654 321</span>
                <span><i class="bi bi-envelope text-orange me-2"></i> contacto@infratrack.pe</span>
            </div>
            <div class="social-links-top">
                <a href="#"><i class="bi bi-facebook"></i></a>
                <a href="#"><i class="bi bi-instagram"></i></a>
                <a href="#"><i class="bi bi-linkedin"></i></a>
                <a href="#"><i class="bi bi-youtube"></i></a>
            </div>
        </div>
    </div>`;
}

function buildMinimalFooter() {
  return `    <footer class="footer-dark-new">
        <div class="container text-center py-4">
            <img src="Imagenes/logo_infratrack-sinfondo.png" alt="InfraTrack Logo" height="40" class="mb-2">
            <h4 class="fw-bold mb-1">Infra<span class="text-orange">Track</span></h4>
            <p class="small mb-2" data-i18n="foot_tag">Monitoreo IoT inteligente para maquinaria pesada y flotas.</p>
            <p class="mb-0 opacity-75 small" data-i18n="foot_copy">&copy; 2026 InfraTrack (UPC). Todos los derechos reservados.</p>
        </div>
    </footer>`;
}

function buildIndexHtml(section, fullHtml) {
  const headEnd = fullHtml.indexOf('</head>');
  const head = fullHtml.slice(0, headEnd + 7);

  let bodyContent = '';
  for (const [start, end] of section.htmlMarkers) {
    bodyContent += '\n\n    ' + extractBetween(fullHtml, start, end) + '\n';
  }

  return `${head}

<body>

${buildTopHeader()}

${buildNavbar(section)}
${bodyContent}
${buildMinimalFooter()}

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/i18n.js"></script>
    <script src="js/script.js"></script>
</body>

</html>
`;
}

function buildTermsIndex() {
  return `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="0; url=terminos.html">
    <title>InfraTrack — Términos y Condiciones</title>
    <link rel="icon" type="image/png" href="Imagenes/logo_infratrack-sinfondo.png">
</head>
<body>
    <p>Redirigiendo a <a href="terminos.html">Términos y Condiciones</a>…</p>
</body>
</html>`;
}

function filterI18n(fullI18n, section) {
  const matchKey = (key) => {
    if (section.i18nExact.includes(key)) return true;
    return section.i18nPrefixes.some((p) => key.startsWith(p));
  };

  const stringsMatch = fullI18n.match(/const STRINGS = (\{[\s\S]*?\n    \});/);
  if (!stringsMatch) throw new Error('No se pudo parsear STRINGS en i18n.js');
  const STRINGS = Function(`"use strict"; return (${stringsMatch[1]});`)();

  const esFiltered = {};
  const enFiltered = {};
  for (const k of Object.keys(STRINGS.es)) {
    if (matchKey(k)) {
      esFiltered[k] = STRINGS.es[k];
      enFiltered[k] = STRINGS.en[k] ?? STRINGS.es[k];
    }
  }

  const fmt = (obj) =>
    Object.entries(obj)
      .map(([k, v]) => `            ${k}: ${JSON.stringify(v)},`)
      .join('\n');
  const heroFn = section.script === 'home'
    ? `
        getHeroCopy(lang) {
            const L = STRINGS[lang] || STRINGS.es;
            return {
                tagline: L.hero_tagline,
                title: L.hero_title,
                desc: L.hero_desc,
            };
        },`
    : '';

  const i18nBody = `/**
 * InfraTrack — i18n aislado: ${section.label}
 */
(function () {
    const STRINGS = {
        es: {
${fmt(esFiltered)}
        },
        en: {
${fmt(enFiltered)}
        },
    };

    const STORAGE_KEY = 'infratrack_lang';

    function getLang() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'en' || saved === 'es') return saved;
        return 'es';
    }

    function setLang(lang) {
        if (lang !== 'en' && lang !== 'es') return;
        localStorage.setItem(STORAGE_KEY, lang);
        apply(lang);
    }

    function apply(lang) {
        const t = STRINGS[lang];
        if (!t) return;

        document.documentElement.lang = lang;
        const page = document.body?.getAttribute('data-i18n-page');
        const titleKey = page === 'terms' ? 'terms_meta_title' : 'meta_title';
        const descKey = page === 'terms' ? 'terms_meta_description' : 'meta_description';

        const titleEl = document.querySelector('title');
        if (titleEl && t[titleKey] !== undefined) titleEl.textContent = t[titleKey];
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && t[descKey] !== undefined) metaDesc.setAttribute('content', t[descKey]);

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (!key || t[key] === undefined) return;
            if (el.getAttribute('data-i18n-html') === 'true') el.innerHTML = t[key];
            else el.textContent = t[key];
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (key && t[key] !== undefined) el.setAttribute('placeholder', t[key]);
        });

        document.querySelectorAll('.lang-switch-btn').forEach((btn) => {
            const isEn = btn.getAttribute('data-set-lang') === 'en';
            const active = (lang === 'en' && isEn) || (lang === 'es' && !isEn);
            btn.classList.toggle('active', active);
            btn.setAttribute('aria-pressed', active ? 'true' : 'false');
        });

        window.dispatchEvent(new CustomEvent('infratrack:lang', { detail: { lang } }));
    }

    window.InfraTrackI18N = {
        STRINGS,
        getLang,
        setLang,
        apply,${heroFn}
    };

    document.addEventListener('DOMContentLoaded', () => {
        apply(getLang());
        document.querySelectorAll('.lang-switch-btn').forEach((btn) => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-set-lang');
                if (lang === 'en' || lang === 'es') setLang(lang);
            });
        });
    });
})();`;

  return i18nBody.replace('${heroFn}', heroFn);
}

function buildScript(section) {
  const base = `document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });

    const navbar = document.querySelector('.navbar-new');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    const genericObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('reveal-item') || entry.target.classList.contains('reveal-zoom')) {
                    const parent = entry.target.parentElement;
                    const items = parent.querySelectorAll('.reveal-item, .reveal-zoom');
                    const index = Array.from(items).indexOf(entry.target);
                    setTimeout(() => entry.target.classList.add('active'), index * 180);
                } else {
                    entry.target.classList.add('active');
                }
                genericObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal-card, .reveal-left, .reveal-right, .reveal-item, .reveal-zoom, .reveal-watermark').forEach(el => {
        genericObserver.observe(el);
    });
`;

  const parts = { home: '', technology: '', sectors: '', about: '', team: '', plans: '', terms: '' };

  parts.home = `
    let heroAnimGen = 0;
    const typeWriter = (selector, text, i, fnCallback, gen) => {
        const el = document.querySelector(selector);
        if (!el || gen !== heroAnimGen) return;
        if (i < text.length) {
            el.innerHTML = text.substring(0, i + 1);
            setTimeout(() => typeWriter(selector, text, i + 1, fnCallback, gen), 25);
        } else if (typeof fnCallback === 'function') {
            setTimeout(() => { if (gen === heroAnimGen) fnCallback(); }, 400);
        }
    };
    const resetHeroTyping = () => {
        ['#typing-tagline', '#typing-title', '#typing-desc'].forEach((sel) => {
            const el = document.querySelector(sel);
            if (el) el.innerHTML = '';
        });
        const btn = document.getElementById('hero-cta-login');
        if (btn) { btn.style.opacity = '0'; btn.style.transform = 'translateY(20px)'; }
    };
    const startHeroAnimation = () => {
        const I18N = window.InfraTrackI18N;
        if (!I18N) return;
        heroAnimGen += 1;
        const gen = heroAnimGen;
        resetHeroTyping();
        const copy = I18N.getHeroCopy(I18N.getLang());
        typeWriter('#typing-tagline', copy.tagline, 0, () => {
            typeWriter('#typing-title', copy.title, 0, () => {
                typeWriter('#typing-desc', copy.desc, 0, () => {
                    if (gen !== heroAnimGen) return;
                    const btn = document.getElementById('hero-cta-login');
                    if (btn) { btn.style.opacity = '1'; btn.style.transform = 'translateY(0)'; }
                }, gen);
            }, gen);
        }, gen);
    };
    setTimeout(startHeroAnimation, 500);
    window.addEventListener('infratrack:lang', () => startHeroAnimation());
`;

  parts.technology = `
    const initIoTSimulation = () => {
        const tempElement = document.getElementById('iot-temp');
        const humidityElement = document.getElementById('iot-humidity');
        const lightElement = document.getElementById('iot-light');
        if (!tempElement || !humidityElement || !lightElement) return;
        setInterval(() => {
            tempElement.textContent = (60 + Math.random() * 30).toFixed(1);
            humidityElement.textContent = (92 + Math.random() * 7).toFixed(1);
            lightElement.textContent = Math.floor(250 + Math.random() * 170);
        }, 2000);
    };
    initIoTSimulation();
`;

  parts.sectors = `
    const counters = document.querySelectorAll('.counter');
    const startCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / 100;
                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else counter.innerText = target;
            };
            updateCount();
        });
    };
    const statsSection = document.querySelector('.stats-counter-section');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) { startCounters(); statsObserver.unobserve(statsSection); }
        }, { threshold: 0.3 });
        statsObserver.observe(statsSection);
    }
`;

  parts.team = parts.technology; // video only below

  const videoBlock = `
    document.querySelectorAll('.video-poster').forEach(poster => {
        poster.addEventListener('click', () => {
            const url = poster.getAttribute('data-youtube');
            if (!url) return;
            let id = '';
            if (url.includes('v=')) id = url.split('v=')[1].split('&')[0];
            else if (url.includes('youtu.be/')) id = url.split('youtu.be/')[1].split('?')[0];
            if (!id) return;
            const embed = document.createElement('div');
            embed.className = 'video-embed-inline';
            embed.innerHTML = '<iframe src="https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
            poster.replaceWith(embed);
        });
        poster.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); poster.click(); }
        });
    });
`;

  let extra = parts[section.script] || '';
  if (section.script === 'technology' || section.script === 'team') extra += videoBlock;

  return base + extra + '\n});\n';
}

function pruneImages(keepList) {
  const imgDir = path.join(ROOT, 'Imagenes');
  if (!fs.existsSync(imgDir)) return;
  for (const file of fs.readdirSync(imgDir)) {
    if (!keepList.includes(file)) {
      fs.unlinkSync(path.join(imgDir, file));
    }
  }
}

function isolateSection(id, sources) {
  const section = SECTIONS[id];
  console.log(`\n🔧 Aislando: ${id} → ${section.branch}`);

  const fullHtml = sources.html;
  const fullCss = sources.css;
  const fullI18n = sources.i18n;

  const css = extractCssRanges(fullCss, [...SHARED_CSS_RANGES, ...section.cssRanges]);
  const script = buildScript(section);
  const i18n = filterI18n(fullI18n, section);

  if (section.termsOnly) {
    fs.writeFileSync(path.join(ROOT, 'index.html'), buildTermsIndex());
    // terminos.html se mantiene; CSS y i18n filtrados
  } else {
    fs.writeFileSync(path.join(ROOT, 'index.html'), buildIndexHtml(section, fullHtml));
  }

  fs.writeFileSync(path.join(ROOT, 'css/style.css'), css);
  fs.writeFileSync(path.join(ROOT, 'js/script.js'), script);
  fs.writeFileSync(path.join(ROOT, 'js/i18n.js'), i18n);
  pruneImages(section.images);

  console.log(`   ✓ Archivos aislados para sección "${section.label}"`);
}

function git(cmd) {
  execSync(cmd, { cwd: ROOT, stdio: 'inherit' });
}

function commitBranch(id, sources) {
  const section = SECTIONS[id];
  git(`git checkout ${section.branch}`);
  isolateSection(id, sources);
  git('git add -A');
  try {
    git(`git commit -m "refactor: aislar rama ${section.branch} — solo sección ${section.label}"`);
  } catch {
    console.log('   (sin cambios nuevos para commit)');
  }
}

const target = process.argv[2] || 'all';
const ids = target === 'all' ? Object.keys(SECTIONS) : [target];

const sources = {
  html: readFromDevelop('index.html'),
  css: readFromDevelop('css/style.css'),
  i18n: readFromDevelop('js/i18n.js'),
};

for (const id of ids) {
  if (!SECTIONS[id]) {
    console.error(`Sección desconocida: ${id}`);
    process.exit(1);
  }
  commitBranch(id, sources);
}

git('git checkout develop');
console.log('\n✅ Aislamiento completado.');
