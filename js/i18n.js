/**
 * InfraTrack — i18n aislado: Tecnología
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
            tech_wm: "MONITOREO 360",
            tech_kicker: "Monitoreo 360°",
            tech_title: "Tecnología Inteligente",
            tech_intro: "Integramos hardware IoT y software de analítica para medir combustible, ubicación GPS, horas de uso y alertas operativas en una sola plataforma web.",
            tech_f1_h: "Nivel de combustible",
            tech_f1_p: "Monitoreo continuo para detectar mermas y eventos sospechosos.",
            tech_f2_h: "Ubicación GPS",
            tech_f2_p: "Seguimiento satelital para control de rutas y productividad.",
            tech_f3_h: "Ralentí y uso",
            tech_f3_p: "Identificación de horas improductivas para optimizar costos.",
            tech_f4_h: "Alertas críticas",
            tech_f4_p: "Notificaciones automáticas para actuar antes de una falla operativa.",
            ops_kicker: "CENTRO DE OPERACIONES INFRATRACK",
            ops_title: "Control operativo de obra en tiempo real",
            ops_sub: "Vista simple con tres partes: indicadores de hoy, alertas y resumen final.",
            ops_s1: "Indicadores de hoy",
            ops_kpi_fuel: "Combustible",
            ops_kpi_fuel_m: "Porcentaje útil del tanque",
            ops_meta: "Meta",
            ops_kpi_gps_m: "Ubicación y ruta activas",
            ops_kpi_eng: "Motor",
            ops_kpi_eng_m: "Horas acumuladas",
            ops_serv: "Servicio",
            ops_kpi_save: "Ahorro",
            ops_kpi_save_m: "Mejora estimada del mes",
            ops_impact: "Impacto",
            ops_high: "Alto",
            ops_s2: "Alertas de hoy",
            ops_ev_title: "Eventos recientes",
            ops_ev1: "Unidad IT-07 en ralentí por 18 min.",
            ops_ev2: "Reabastecimiento validado: +120L.",
            ops_ev3: "Desvío de ruta detectado y corregido.",
            ops_st_title: "Estado de unidades",
            ops_st_op: "Operativos",
            ops_st_maint: "En mantenimiento",
            ops_st_insp: "En inspección",
            ops_sync: "Última sincronización: hace 2 min",
            ops_s3: "Resultado del día",
            ops_p1: "Alertas: 3",
            ops_p2: "Flota activa: 42",
            ops_p3: "Retorno: < 6 meses",
            ops_p4: "Mantenimiento: 6",
            tech_outro: "InfraTrack digitaliza inventarios móviles y operaciones descentralizadas con un enfoque de bajo costo, alto impacto y decisiones estratégicas basadas en evidencia real.",
            tech_demo_btn: "Solicitar Demo Operativa",
            foot_tag: "Monitoreo IoT inteligente para maquinaria pesada y flotas.",
            foot_copy: "© 2026 InfraTrack (UPC). Todos los derechos reservados.",
            video_player_title: "Video: Sobre InfraTrack",
            video_player_desc: "Conoce cómo InfraTrack optimiza flotas y maquinaria pesada.",
            video_caption_title: "Video: Sobre InfraTrack",
            video_caption_desc: "Mira nuestro video \"About the product\" for ver la plataforma en acción.",
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
            tech_wm: "360 MONITORING",
            tech_kicker: "360° monitoring",
            tech_title: "Smart technology",
            tech_intro: "We integrate IoT hardware and analytics software to measure fuel, GPS location, usage hours, and operational alerts in one web platform.",
            tech_f1_h: "Fuel level",
            tech_f1_p: "Continuous monitoring to detect shrinkage and suspicious events.",
            tech_f2_h: "GPS location",
            tech_f2_p: "Satellite tracking for route control and productivity.",
            tech_f3_h: "Idle time and usage",
            tech_f3_p: "Identify unproductive hours to optimize costs.",
            tech_f4_h: "Critical alerts",
            tech_f4_p: "Automatic notifications to act before an operational failure.",
            ops_kicker: "INFRATRACK OPERATIONS CENTER",
            ops_title: "Real-time jobsite operational control",
            ops_sub: "A simple view in three parts: today’s indicators, alerts, and end-of-day summary.",
            ops_s1: "Today’s indicators",
            ops_kpi_fuel: "Fuel",
            ops_kpi_fuel_m: "Useful tank percentage",
            ops_meta: "Target",
            ops_kpi_gps_m: "Active location and route",
            ops_kpi_eng: "Engine",
            ops_kpi_eng_m: "Cumulative hours",
            ops_serv: "Service",
            ops_kpi_save: "Savings",
            ops_kpi_save_m: "Estimated monthly improvement",
            ops_impact: "Impact",
            ops_high: "High",
            ops_s2: "Today’s alerts",
            ops_ev_title: "Recent events",
            ops_ev1: "Unit IT-07 idling for 18 min.",
            ops_ev2: "Validated refuel: +120L.",
            ops_ev3: "Route deviation detected and corrected.",
            ops_st_title: "Unit status",
            ops_st_op: "Operational",
            ops_st_maint: "In maintenance",
            ops_st_insp: "Under inspection",
            ops_sync: "Last sync: 2 min ago",
            ops_s3: "End of day result",
            ops_p1: "Alerts: 3",
            ops_p2: "Active fleet: 42",
            ops_p3: "Payback: < 6 months",
            ops_p4: "Maintenance: 6",
            tech_outro: "InfraTrack digitizes mobile inventories and decentralized operations with low cost, high impact, and evidence-based strategic decisions.",
            tech_demo_btn: "Request operational demo",
            foot_tag: "Smart IoT monitoring for heavy machinery and fleets.",
            foot_copy: "© 2026 InfraTrack (UPC). All rights reserved.",
            video_player_title: "Video: About InfraTrack",
            video_player_desc: "Learn how InfraTrack optimizes fleets and heavy machinery.",
            video_caption_title: "Video: About InfraTrack",
            video_caption_desc: "Watch our \"About the product\" video to see the platform in action.",
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