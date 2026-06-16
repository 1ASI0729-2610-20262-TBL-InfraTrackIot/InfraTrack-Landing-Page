/**
 * InfraTrack — i18n aislado: Nosotros
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
            about_stat: "nodos IoT<br>y pruebas de concepto",
            about_tag: "QUIÉNES SOMOS",
            about_title: "Soluciones tecnológicas para el control de maquinaria y combustible",
            about_p1: "<strong>InfraTrack</strong> es un equipo de estudiantes de Ingeniería de Software de la <strong>UPC</strong> que desarrolla soluciones open source para mejorar la trazabilidad y digitalizar la gestión de flotas en ferreterías y constructoras del Perú.",
            about_mission_l: "MISIÓN",
            about_mission_p: "Diseñar una plataforma inteligente que integre combustible, GPS y mantenimiento en tiempo real.",
            about_vision_l: "VISIÓN",
            about_vision_p: "Ser una referencia latinoamericana en soluciones IoT open source para logística industrial.",
            about_tag_t: "Transparencia",
            about_tag_r: "Responsabilidad",
            about_tag_i: "Innovación",
            about_tag_c: "Compromiso",
            about_b1: "Datos reales",
            about_b2: "Menos pérdidas",
            about_b3: "Obras remotas",
            about_team_n: "TechTitans",
            about_team_p: "Estudiantes UPC · Desarrollo de Software",
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
            about_stat: "IoT nodes<br>and proof of concepts",
            about_tag: "WHO WE ARE",
            about_title: "Technology solutions for machinery and fuel control",
            about_p1: "<strong>InfraTrack</strong> is a team of Software Engineering students at <strong>UPC</strong> developing open source solutions to improve traceability and digitize fleet management for hardware stores and construction companies in Peru.",
            about_mission_l: "MISSION",
            about_mission_p: "Design an intelligent platform that integrates fuel, GPS, and maintenance in real time.",
            about_vision_l: "VISION",
            about_vision_p: "Become a Latin American reference in open source IoT for industrial logistics.",
            about_tag_t: "Transparency",
            about_tag_r: "Accountability",
            about_tag_i: "Innovation",
            about_tag_c: "Commitment",
            about_b1: "Real data",
            about_b2: "Fewer losses",
            about_b3: "Remote sites",
            about_team_n: "TechTitans",
            about_team_p: "UPC students · Software development",
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