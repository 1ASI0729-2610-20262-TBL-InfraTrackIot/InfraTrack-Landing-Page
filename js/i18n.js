/**
 * InfraTrack — i18n aislado: Inicio
 */
(function () {
    const STRINGS = {
        es: {
            meta_title: "InfraTrack",
            meta_description: "InfraTrack - Plataforma IoT de monitoreo inteligente para maquinaria pesada y flotas del sector ferretero y construcción.",
            nav_inicio: "Inicio",
            nav_tecnologia: "Tecnología",
            nav_sectores: "Sectores",
            nav_nosotros: "Nosotros",
            nav_equipo: "Equipo",
            nav_planes: "Planes",
            nav_contact: "Contáctanos",
            hero_cta_contact: "Contáctanos",
            hero_cta_login: "Iniciar sesión",
            float_c1_h: "Combustible en tiempo real",
            float_c1_p: "Detecta caídas bruscas y evita pérdidas no autorizadas.",
            float_c2_h: "Trazabilidad GPS",
            float_c2_p: "Supervisa ubicación, rutas y tiempos de ralentí por unidad.",
            float_c3_h: "Activa tu monitoreo",
            float_c3_p: "Digitaliza combustible, GPS y mantenimiento en pocos pasos.",
            float_c3_cta: "Solicitar",
            foot_tag: "Monitoreo IoT inteligente para maquinaria pesada y flotas.",
            foot_copy: "© 2026 InfraTrack (UPC). Todos los derechos reservados.",
            hero_tagline: "Monitoreo IoT para flotas",
            hero_title: "Controla combustible, ubicación y mantenimiento en tiempo real",
            hero_desc: "Digitalizamos operaciones ferreteras y de construcción con telemetría confiable para reducir pérdidas, optimizar rutas y mejorar la rentabilidad.",
        },
        en: {
            meta_title: "InfraTrack",
            meta_description: "InfraTrack — Smart IoT monitoring platform for heavy machinery and fleets in hardware retail and construction.",
            nav_inicio: "Home",
            nav_tecnologia: "Technology",
            nav_sectores: "Sectors",
            nav_nosotros: "About",
            nav_equipo: "Team",
            nav_planes: "Plans",
            nav_contact: "Contact us",
            hero_cta_contact: "Contact us",
            hero_cta_login: "Sign in",
            float_c1_h: "Real-time fuel",
            float_c1_p: "Detect sudden drops and prevent unauthorized losses.",
            float_c2_h: "GPS traceability",
            float_c2_p: "Monitor location, routes, and idle time per unit.",
            float_c3_h: "Activate your monitoring",
            float_c3_p: "Digitize fuel, GPS, and maintenance in a few steps.",
            float_c3_cta: "Request",
            foot_tag: "Smart IoT monitoring for heavy machinery and fleets.",
            foot_copy: "© 2026 InfraTrack (UPC). All rights reserved.",
            hero_tagline: "IoT fleet monitoring",
            hero_title: "Control fuel, location, and maintenance in real time",
            hero_desc: "We digitize hardware and construction operations with reliable telemetry to reduce losses, optimize routes, and improve profitability.",
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
        apply,
        getHeroCopy(lang) {
            const L = STRINGS[lang] || STRINGS.es;
            return {
                tagline: L.hero_tagline,
                title: L.hero_title,
                desc: L.hero_desc,
            };
        },
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
})();