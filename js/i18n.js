/**
 * InfraTrack — i18n aislado: Planes
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
            price_wm: "NUESTROS PLANES",
            price_kicker: "Inversión Inteligente",
            price_title: "Planes de Monitoreo",
            price_intro: "Planes diseñados para reducir pérdidas de combustible, mejorar mantenimiento y escalar con control total de flota.",
            plan1_name: "BASE OBRA",
            plan1_period: "/mes",
            plan1_desc: "Ideal para flotas pequeñas que inician digitalización operativa.",
            plan1_f1: "Hasta 5 unidades monitoreadas",
            plan1_f2: "Alertas básicas de combustible",
            plan1_f3: "Historial operativo de 90 días",
            plan1_f4: "API y exportación avanzada",
            plan1_f5: "Predicción de mantenimiento",
            plan1_f6: "Soporte prioritario",
            plan1_btn: "Seleccionar Base Obra",
            plan2_badge: "RECOMENDADO",
            plan2_name: "CONTROL PRO",
            plan2_desc: "Para gestores logísticos que necesitan visibilidad total y alertas críticas.",
            plan2_f1: "Hasta 25 unidades monitoreadas",
            plan2_f2: "Alertas WhatsApp, email y SMS",
            plan2_f3: "Historial y reportes anuales",
            plan2_f4: "Dashboard táctico avanzado",
            plan2_f5: "API para integración ERP",
            plan2_f6: "Equipo on-site dedicado",
            plan2_btn: "Comenzar ahora",
            plan3_name: "ESCALA TOTAL",
            plan3_price: "Personalizado",
            plan3_desc: "Para corporativos con múltiples obras y operación descentralizada a nivel nacional.",
            plan3_f1: "Unidades y nodos ilimitados",
            plan3_f2: "Integración total de datos",
            plan3_f3: "Soporte técnico 24/7 dedicado",
            plan3_f4: "Implementación y capacitación in-situ",
            plan3_f5: "SLA y tablero ejecutivo",
            plan3_f6: "Analítica estratégica para expansión",
            plan3_btn: "Contactar ventas",
            price_foot: "Todos los planes incluyen plataforma open source, trazabilidad en tiempo real y onboarding operativo",
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
            price_wm: "OUR PLANS",
            price_kicker: "Smart investment",
            price_title: "Monitoring plans",
            price_intro: "Plans designed to reduce fuel losses, improve maintenance, and scale with full fleet control.",
            plan1_name: "SITE BASE",
            plan1_period: "/mo",
            plan1_desc: "Ideal for small fleets starting operational digitization.",
            plan1_f1: "Up to 5 monitored units",
            plan1_f2: "Basic fuel alerts",
            plan1_f3: "90-day operational history",
            plan1_f4: "Advanced API and export",
            plan1_f5: "Maintenance prediction",
            plan1_f6: "Priority support",
            plan1_btn: "Choose Site Base",
            plan2_badge: "RECOMMENDED",
            plan2_name: "CONTROL PRO",
            plan2_desc: "For logistics managers who need full visibility and critical alerts.",
            plan2_f1: "Up to 25 monitored units",
            plan2_f2: "WhatsApp, email, and SMS alerts",
            plan2_f3: "Annual history and reports",
            plan2_f4: "Advanced tactical dashboard",
            plan2_f5: "API for ERP integration",
            plan2_f6: "Dedicated on-site team",
            plan2_btn: "Get started",
            plan3_name: "FULL SCALE",
            plan3_price: "Custom",
            plan3_desc: "For enterprises with multiple sites and decentralized national operations.",
            plan3_f1: "Unlimited units and nodes",
            plan3_f2: "Full data integration",
            plan3_f3: "Dedicated 24/7 technical support",
            plan3_f4: "On-site implementation and training",
            plan3_f5: "SLA and executive dashboard",
            plan3_f6: "Strategic analytics for expansion",
            plan3_btn: "Contact sales",
            price_foot: "All plans include open source platform, real-time traceability, and operational onboarding",
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