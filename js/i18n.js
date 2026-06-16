/**
 * InfraTrack — i18n aislado: Sectores
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
            sec_wm: "ALCANCE GLOBAL",
            sec_kicker: "Alcance Global",
            sec_title: "Implementación Estratégica",
            sec_intro: "InfraTrack se adapta a operaciones reales: obras remotas, ferreterías industriales y gestores de flota que necesitan control total sin licencias costosas.",
            sector1_badge: "Control patrimonial",
            sector1_h: "Dueños de ferreterías y constructoras",
            sector1_p: "Enfoque financiero y estratégico para reducir pérdidas por combustible y mejorar el ROI del activo crítico.",
            sector1_link: "VER PLANES",
            sector2_badge: "Obras remotas",
            sector2_h: "Administradores logísticos",
            sector2_p: "Control táctico diario con datos de ubicación, uso y alertas para cumplir cronogramas sin gestión reactiva.",
            sector2_link: "VER DASHBOARD",
            sector3_badge: "Mejora continua",
            sector3_h: "Operación escalable y sostenible",
            sector3_p: "Plataforma open source para crecer con múltiples unidades y reducir ineficiencia energética y huella de carbono.",
            sector3_link: "AGENDAR ASESORÍA",
            stat1: "Nodos IoT en campo",
            stat2: "Flotas conectadas",
            stat3: "Control de consumo",
            stat4: "Telemetría continua",
            foot_tag: "Monitoreo IoT inteligente para maquinaria pesada y flotas.",
            foot_copy: "© 2026 InfraTrack (UPC). Todos los derechos reservados.",
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
            sec_wm: "GLOBAL REACH",
            sec_kicker: "Global reach",
            sec_title: "Strategic implementation",
            sec_intro: "InfraTrack adapts to real operations: remote sites, industrial hardware stores, and fleet managers who need full control without expensive licenses.",
            sector1_badge: "Asset control",
            sector1_h: "Hardware and construction owners",
            sector1_p: "Financial and strategic focus to reduce fuel losses and improve ROI on critical assets.",
            sector1_link: "VIEW PLANS",
            sector2_badge: "Remote sites",
            sector2_h: "Logistics managers",
            sector2_p: "Daily tactical control with location, usage, and alert data to meet schedules without reactive management.",
            sector2_link: "VIEW DASHBOARD",
            sector3_badge: "Continuous improvement",
            sector3_h: "Scalable, sustainable operations",
            sector3_p: "Open source platform to grow with multiple units and reduce energy inefficiency and carbon footprint.",
            sector3_link: "BOOK A CONSULTATION",
            stat1: "IoT field nodes",
            stat2: "Connected fleets",
            stat3: "Consumption control",
            stat4: "Continuous telemetry",
            foot_tag: "Smart IoT monitoring for heavy machinery and fleets.",
            foot_copy: "© 2026 InfraTrack (UPC). All rights reserved.",
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