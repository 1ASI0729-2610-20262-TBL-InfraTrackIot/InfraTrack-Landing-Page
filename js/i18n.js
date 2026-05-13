/**
 * InfraTrack landing — textos ES / EN
 * Claves usadas con data-i18n en index.html
 */
(function () {
    const STRINGS = {
        es: {
            meta_title: 'InfraTrack',
            meta_description:
                'InfraTrack - Plataforma IoT de monitoreo inteligente para maquinaria pesada y flotas del sector ferretero y construcción.',
            nav_inicio: 'Inicio',
            nav_tecnologia: 'Tecnología',
            nav_sectores: 'Sectores',
            nav_nosotros: 'Nosotros',
            nav_equipo: 'Equipo',
            nav_planes: 'Planes',
            nav_contact: 'Contáctanos',
            hero_cta_contact: 'Contáctanos',
            hero_cta_login: 'Iniciar sesión',
            float_c1_h: 'Combustible en tiempo real',
            float_c1_p: 'Detecta caídas bruscas y evita pérdidas no autorizadas.',
            float_c2_h: 'Trazabilidad GPS',
            float_c2_p: 'Supervisa ubicación, rutas y tiempos de ralentí por unidad.',
            float_c3_h: 'Activa tu monitoreo',
            float_c3_p: 'Digitaliza combustible, GPS y mantenimiento en pocos pasos.',
            float_c3_cta: 'Solicitar',
            about_stat: 'nodos IoT<br>y pruebas de concepto',
            about_tag: 'QUIÉNES SOMOS',
            about_title: 'Soluciones tecnológicas para el control de maquinaria y combustible',
            about_p1:
                '<strong>InfraTrack</strong> es un equipo de estudiantes de Ingeniería de Software de la <strong>UPC</strong> que desarrolla soluciones open source para mejorar la trazabilidad y digitalizar la gestión de flotas en ferreterías y constructoras del Perú.',
            about_mission_l: 'MISIÓN',
            about_mission_p:
                'Diseñar una plataforma inteligente que integre combustible, GPS y mantenimiento en tiempo real.',
            about_vision_l: 'VISIÓN',
            about_vision_p: 'Ser una referencia latinoamericana en soluciones IoT open source para logística industrial.',
            about_tag_t: 'Transparencia',
            about_tag_r: 'Responsabilidad',
            about_tag_i: 'Innovación',
            about_tag_c: 'Compromiso',
            about_b1: 'Datos reales',
            about_b2: 'Menos pérdidas',
            about_b3: 'Obras remotas',
            about_team_n: 'TechTitans',
            about_team_p: 'Estudiantes UPC · Desarrollo de Software',
            tech_wm: 'MONITOREO 360',
            tech_kicker: 'Monitoreo 360°',
            tech_title: 'Tecnología Inteligente',
            tech_intro:
                'Integramos hardware IoT y software de analítica para medir combustible, ubicación GPS, horas de uso y alertas operativas en una sola plataforma web.',
            tech_f1_h: 'Nivel de combustible',
            tech_f1_p: 'Monitoreo continuo para detectar mermas y eventos sospechosos.',
            tech_f2_h: 'Ubicación GPS',
            tech_f2_p: 'Seguimiento satelital para control de rutas y productividad.',
            tech_f3_h: 'Ralentí y uso',
            tech_f3_p: 'Identificación de horas improductivas para optimizar costos.',
            tech_f4_h: 'Alertas críticas',
            tech_f4_p: 'Notificaciones automáticas para actuar antes de una falla operativa.',
            ops_kicker: 'CENTRO DE OPERACIONES INFRATRACK',
            ops_title: 'Control operativo de obra en tiempo real',
            ops_sub: 'Vista simple con tres partes: indicadores de hoy, alertas y resumen final.',
            ops_s1: 'Indicadores de hoy',
            ops_kpi_fuel: 'Combustible',
            ops_kpi_fuel_m: 'Porcentaje útil del tanque',
            ops_meta: 'Meta',
            ops_kpi_gps_m: 'Ubicación y ruta activas',
            ops_kpi_eng: 'Motor',
            ops_kpi_eng_m: 'Horas acumuladas',
            ops_serv: 'Servicio',
            ops_kpi_save: 'Ahorro',
            ops_kpi_save_m: 'Mejora estimada del mes',
            ops_impact: 'Impacto',
            ops_high: 'Alto',
            ops_s2: 'Alertas de hoy',
            ops_ev_title: 'Eventos recientes',
            ops_ev1: 'Unidad IT-07 en ralentí por 18 min.',
            ops_ev2: 'Reabastecimiento validado: +120L.',
            ops_ev3: 'Desvío de ruta detectado y corregido.',
            ops_st_title: 'Estado de unidades',
            ops_st_op: 'Operativos',
            ops_st_maint: 'En mantenimiento',
            ops_st_insp: 'En inspección',
            ops_sync: 'Última sincronización: hace 2 min',
            ops_s3: 'Resultado del día',
            ops_p1: 'Alertas: 3',
            ops_p2: 'Flota activa: 42',
            ops_p3: 'Retorno: < 6 meses',
            ops_p4: 'Mantenimiento: 6',
            tech_outro:
                'InfraTrack digitaliza inventarios móviles y operaciones descentralizadas con un enfoque de bajo costo, alto impacto y decisiones estratégicas basadas en evidencia real.',
            tech_demo_btn: 'Solicitar Demo Operativa',
            sec_wm: 'ALCANCE GLOBAL',
            sec_kicker: 'Alcance Global',
            sec_title: 'Implementación Estratégica',
            sec_intro:
                'InfraTrack se adapta a operaciones reales: obras remotas, ferreterías industriales y gestores de flota que necesitan control total sin licencias costosas.',
            sector1_badge: 'Control patrimonial',
            sector1_h: 'Dueños de ferreterías y constructoras',
            sector1_p:
                'Enfoque financiero y estratégico para reducir pérdidas por combustible y mejorar el ROI del activo crítico.',
            sector1_link: 'VER PLANES',
            sector2_badge: 'Obras remotas',
            sector2_h: 'Administradores logísticos',
            sector2_p:
                'Control táctico diario con datos de ubicación, uso y alertas para cumplir cronogramas sin gestión reactiva.',
            sector2_link: 'VER DASHBOARD',
            sector3_badge: 'Mejora continua',
            sector3_h: 'Operación escalable y sostenible',
            sector3_p:
                'Plataforma open source para crecer con múltiples unidades y reducir ineficiencia energética y huella de carbono.',
            sector3_link: 'AGENDAR ASESORÍA',
            stat1: 'Nodos IoT en campo',
            stat2: 'Flotas conectadas',
            stat3: 'Control de consumo',
            stat4: 'Telemetría continua',
            team_label: 'TECHTITANS',
            team_title: 'Integrantes del Equipo',
            team_sub:
                'Impulsamos la logística industrial mediante soluciones IoT precisas para el control de combustible y maquinaria.',
            price_wm: 'NUESTROS PLANES',
            price_kicker: 'Inversión Inteligente',
            price_title: 'Planes de Monitoreo',
            price_intro:
                'Planes diseñados para reducir pérdidas de combustible, mejorar mantenimiento y escalar con control total de flota.',
            plan1_name: 'BASE OBRA',
            plan1_period: '/mes',
            plan1_desc: 'Ideal para flotas pequeñas que inician digitalización operativa.',
            plan1_f1: 'Hasta 5 unidades monitoreadas',
            plan1_f2: 'Alertas básicas de combustible',
            plan1_f3: 'Historial operativo de 90 días',
            plan1_f4: 'API y exportación avanzada',
            plan1_f5: 'Predicción de mantenimiento',
            plan1_f6: 'Soporte prioritario',
            plan1_btn: 'Seleccionar Base Obra',
            plan2_badge: 'RECOMENDADO',
            plan2_name: 'CONTROL PRO',
            plan2_desc: 'Para gestores logísticos que necesitan visibilidad total y alertas críticas.',
            plan2_f1: 'Hasta 25 unidades monitoreadas',
            plan2_f2: 'Alertas WhatsApp, email y SMS',
            plan2_f3: 'Historial y reportes anuales',
            plan2_f4: 'Dashboard táctico avanzado',
            plan2_f5: 'API para integración ERP',
            plan2_f6: 'Equipo on-site dedicado',
            plan2_btn: 'Comenzar ahora',
            plan3_name: 'ESCALA TOTAL',
            plan3_price: 'Personalizado',
            plan3_desc:
                'Para corporativos con múltiples obras y operación descentralizada a nivel nacional.',
            plan3_f1: 'Unidades y nodos ilimitados',
            plan3_f2: 'Integración total de datos',
            plan3_f3: 'Soporte técnico 24/7 dedicado',
            plan3_f4: 'Implementación y capacitación in-situ',
            plan3_f5: 'SLA y tablero ejecutivo',
            plan3_f6: 'Analítica estratégica para expansión',
            plan3_btn: 'Contactar ventas',
            price_foot:
                'Todos los planes incluyen plataforma open source, trazabilidad en tiempo real y onboarding operativo',
            contact_kicker: 'Soporte Especializado',
            contact_title: 'Habla con Expertos',
            contact_intro:
                'Nuestro equipo te ayuda a implementar InfraTrack en tu operación real para reducir pérdidas, mejorar mantenimiento y controlar cada unidad con datos confiables.',
            contact_hq: 'Sede Central',
            contact_hq_p: 'Av. Javier Prado Este 1110 <br> Lima, Perú - Centro de Operaciones',
            contact_sup_h: 'Soporte Técnico',
            contact_sup_p: 'soporte@infratrack.pe <br> contacto@infratrack.pe',
            contact_call_h: 'Llámanos',
            contact_call_p: '+51 987 654 321 <br> Anexo: 1202',
            contact_hours_h: 'Horario de Atención',
            contact_hours_p: 'Lun - Vie: 09:00 - 18:00 <br> Sáb: 09:00 - 13:00',
            contact_social: 'Sigue nuestras redes sociales',
            form_title: 'Envíanos un mensaje',
            form_intro:
                'Completa el formulario y un asesor técnico se pondrá en contacto contigo en menos de 24 horas para evaluar tu operación.',
            form_name: 'Nombre',
            form_company: 'Empresa',
            form_phone: 'Teléfono',
            form_email: 'Email',
            form_subject: 'Asunto',
            form_message: 'Mensaje',
            form_send: 'ENVIAR MENSAJE',
            ph_name: 'Tu nombre',
            ph_company: 'Empresa / obra',
            ph_phone: '+51 ...',
            ph_email: 'correo@ejemplo.com',
            ph_subject: 'Control de combustible, GPS o mantenimiento',
            ph_message: 'Cuéntanos cuántas unidades quieres monitorear y tu reto principal...',
            foot_inicio: 'Inicio',
            foot_tec: 'Tecnología',
            foot_sec: 'Sectores',
            foot_nos: 'Nosotros',
            foot_plan: 'Planes',
            foot_cont: 'Contacto',
            foot_tag: 'Monitoreo IoT inteligente para maquinaria pesada y flotas.',
            foot_call: 'Llámanos: +51 987 654 321',
            foot_email_l: 'Email:',
            foot_sub_h: 'Recibe insights operativos',
            ph_subscribe: 'Tu correo electrónico',
            foot_copy: '© 2026 InfraTrack (UPC). Todos los derechos reservados.',
            hero_tagline: 'Monitoreo IoT para flotas',
            hero_title: 'Controla combustible, ubicación y mantenimiento en tiempo real',
            hero_desc:
                'Digitalizamos operaciones ferreteras y de construcción con telemetría confiable para reducir pérdidas, optimizar rutas y mejorar la rentabilidad.',
        },
        en: {
            meta_title: 'InfraTrack',
            meta_description:
                'InfraTrack — Smart IoT monitoring platform for heavy machinery and fleets in hardware retail and construction.',
            nav_inicio: 'Home',
            nav_tecnologia: 'Technology',
            nav_sectores: 'Sectors',
            nav_nosotros: 'About',
            nav_equipo: 'Team',
            nav_planes: 'Plans',
            nav_contact: 'Contact us',
            hero_cta_contact: 'Contact us',
            hero_cta_login: 'Sign in',
            float_c1_h: 'Real-time fuel',
            float_c1_p: 'Detect sudden drops and prevent unauthorized losses.',
            float_c2_h: 'GPS traceability',
            float_c2_p: 'Monitor location, routes, and idle time per unit.',
            float_c3_h: 'Activate your monitoring',
            float_c3_p: 'Digitize fuel, GPS, and maintenance in a few steps.',
            float_c3_cta: 'Request',
            about_stat: 'IoT nodes<br>and proof of concepts',
            about_tag: 'WHO WE ARE',
            about_title: 'Technology solutions for machinery and fuel control',
            about_p1:
                '<strong>InfraTrack</strong> is a team of Software Engineering students at <strong>UPC</strong> developing open source solutions to improve traceability and digitize fleet management for hardware stores and construction companies in Peru.',
            about_mission_l: 'MISSION',
            about_mission_p:
                'Design an intelligent platform that integrates fuel, GPS, and maintenance in real time.',
            about_vision_l: 'VISION',
            about_vision_p: 'Become a Latin American reference in open source IoT for industrial logistics.',
            about_tag_t: 'Transparency',
            about_tag_r: 'Accountability',
            about_tag_i: 'Innovation',
            about_tag_c: 'Commitment',
            about_b1: 'Real data',
            about_b2: 'Fewer losses',
            about_b3: 'Remote sites',
            about_team_n: 'TechTitans',
            about_team_p: 'UPC students · Software development',
            tech_wm: '360 MONITORING',
            tech_kicker: '360° monitoring',
            tech_title: 'Smart technology',
            tech_intro:
                'We integrate IoT hardware and analytics software to measure fuel, GPS location, usage hours, and operational alerts in one web platform.',
            tech_f1_h: 'Fuel level',
            tech_f1_p: 'Continuous monitoring to detect shrinkage and suspicious events.',
            tech_f2_h: 'GPS location',
            tech_f2_p: 'Satellite tracking for route control and productivity.',
            tech_f3_h: 'Idle time and usage',
            tech_f3_p: 'Identify unproductive hours to optimize costs.',
            tech_f4_h: 'Critical alerts',
            tech_f4_p: 'Automatic notifications to act before an operational failure.',
            ops_kicker: 'INFRATRACK OPERATIONS CENTER',
            ops_title: 'Real-time jobsite operational control',
            ops_sub: 'A simple view in three parts: today’s indicators, alerts, and end-of-day summary.',
            ops_s1: 'Today’s indicators',
            ops_kpi_fuel: 'Fuel',
            ops_kpi_fuel_m: 'Useful tank percentage',
            ops_meta: 'Target',
            ops_kpi_gps_m: 'Active location and route',
            ops_kpi_eng: 'Engine',
            ops_kpi_eng_m: 'Cumulative hours',
            ops_serv: 'Service',
            ops_kpi_save: 'Savings',
            ops_kpi_save_m: 'Estimated monthly improvement',
            ops_impact: 'Impact',
            ops_high: 'High',
            ops_s2: 'Today’s alerts',
            ops_ev_title: 'Recent events',
            ops_ev1: 'Unit IT-07 idling for 18 min.',
            ops_ev2: 'Validated refuel: +120L.',
            ops_ev3: 'Route deviation detected and corrected.',
            ops_st_title: 'Unit status',
            ops_st_op: 'Operational',
            ops_st_maint: 'In maintenance',
            ops_st_insp: 'Under inspection',
            ops_sync: 'Last sync: 2 min ago',
            ops_s3: 'End of day result',
            ops_p1: 'Alerts: 3',
            ops_p2: 'Active fleet: 42',
            ops_p3: 'Payback: < 6 months',
            ops_p4: 'Maintenance: 6',
            tech_outro:
                'InfraTrack digitizes mobile inventories and decentralized operations with low cost, high impact, and evidence-based strategic decisions.',
            tech_demo_btn: 'Request operational demo',
            sec_wm: 'GLOBAL REACH',
            sec_kicker: 'Global reach',
            sec_title: 'Strategic implementation',
            sec_intro:
                'InfraTrack adapts to real operations: remote sites, industrial hardware stores, and fleet managers who need full control without expensive licenses.',
            sector1_badge: 'Asset control',
            sector1_h: 'Hardware and construction owners',
            sector1_p:
                'Financial and strategic focus to reduce fuel losses and improve ROI on critical assets.',
            sector1_link: 'VIEW PLANS',
            sector2_badge: 'Remote sites',
            sector2_h: 'Logistics managers',
            sector2_p:
                'Daily tactical control with location, usage, and alert data to meet schedules without reactive management.',
            sector2_link: 'VIEW DASHBOARD',
            sector3_badge: 'Continuous improvement',
            sector3_h: 'Scalable, sustainable operations',
            sector3_p:
                'Open source platform to grow with multiple units and reduce energy inefficiency and carbon footprint.',
            sector3_link: 'BOOK A CONSULTATION',
            stat1: 'IoT field nodes',
            stat2: 'Connected fleets',
            stat3: 'Consumption control',
            stat4: 'Continuous telemetry',
            team_label: 'TECHTITANS',
            team_title: 'Team members',
            team_sub:
                'We drive industrial logistics with precise IoT solutions for fuel and machinery control.',
            price_wm: 'OUR PLANS',
            price_kicker: 'Smart investment',
            price_title: 'Monitoring plans',
            price_intro:
                'Plans designed to reduce fuel losses, improve maintenance, and scale with full fleet control.',
            plan1_name: 'SITE BASE',
            plan1_period: '/mo',
            plan1_desc: 'Ideal for small fleets starting operational digitization.',
            plan1_f1: 'Up to 5 monitored units',
            plan1_f2: 'Basic fuel alerts',
            plan1_f3: '90-day operational history',
            plan1_f4: 'Advanced API and export',
            plan1_f5: 'Maintenance prediction',
            plan1_f6: 'Priority support',
            plan1_btn: 'Choose Site Base',
            plan2_badge: 'RECOMMENDED',
            plan2_name: 'CONTROL PRO',
            plan2_desc: 'For logistics managers who need full visibility and critical alerts.',
            plan2_f1: 'Up to 25 monitored units',
            plan2_f2: 'WhatsApp, email, and SMS alerts',
            plan2_f3: 'Annual history and reports',
            plan2_f4: 'Advanced tactical dashboard',
            plan2_f5: 'API for ERP integration',
            plan2_f6: 'Dedicated on-site team',
            plan2_btn: 'Get started',
            plan3_name: 'FULL SCALE',
            plan3_price: 'Custom',
            plan3_desc: 'For enterprises with multiple sites and decentralized national operations.',
            plan3_f1: 'Unlimited units and nodes',
            plan3_f2: 'Full data integration',
            plan3_f3: 'Dedicated 24/7 technical support',
            plan3_f4: 'On-site implementation and training',
            plan3_f5: 'SLA and executive dashboard',
            plan3_f6: 'Strategic analytics for expansion',
            plan3_btn: 'Contact sales',
            price_foot:
                'All plans include open source platform, real-time traceability, and operational onboarding',
            contact_kicker: 'Specialized support',
            contact_title: 'Talk to experts',
            contact_intro:
                'Our team helps you deploy InfraTrack in your real operation to reduce losses, improve maintenance, and control every unit with reliable data.',
            contact_hq: 'Headquarters',
            contact_hq_p: 'Av. Javier Prado Este 1110 <br> Lima, Peru — Operations center',
            contact_sup_h: 'Technical support',
            contact_sup_p: 'soporte@infratrack.pe <br> contacto@infratrack.pe',
            contact_call_h: 'Call us',
            contact_call_p: '+51 987 654 321 <br> Ext: 1202',
            contact_hours_h: 'Business hours',
            contact_hours_p: 'Mon - Fri: 09:00 - 18:00 <br> Sat: 09:00 - 13:00',
            contact_social: 'Follow us on social media',
            form_title: 'Send us a message',
            form_intro:
                'Fill out the form and a technical advisor will contact you within 24 hours to assess your operation.',
            form_name: 'Name',
            form_company: 'Company',
            form_phone: 'Phone',
            form_email: 'Email',
            form_subject: 'Subject',
            form_message: 'Message',
            form_send: 'SEND MESSAGE',
            ph_name: 'Your name',
            ph_company: 'Company / site',
            ph_phone: '+51 ...',
            ph_email: 'you@example.com',
            ph_subject: 'Fuel control, GPS, or maintenance',
            ph_message: 'Tell us how many units you want to monitor and your main challenge...',
            foot_inicio: 'Home',
            foot_tec: 'Technology',
            foot_sec: 'Sectors',
            foot_nos: 'About',
            foot_plan: 'Plans',
            foot_cont: 'Contact',
            foot_tag: 'Smart IoT monitoring for heavy machinery and fleets.',
            foot_call: 'Call us: +51 987 654 321',
            foot_email_l: 'Email:',
            foot_sub_h: 'Get operational insights',
            ph_subscribe: 'Your email address',
            foot_copy: '© 2026 InfraTrack (UPC). All rights reserved.',
            hero_tagline: 'IoT fleet monitoring',
            hero_title: 'Control fuel, location, and maintenance in real time',
            hero_desc:
                'We digitize hardware and construction operations with reliable telemetry to reduce losses, optimize routes, and improve profitability.',
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
        const titleEl = document.querySelector('title');
        if (titleEl) titleEl.textContent = t.meta_title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', t.meta_description);

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (!key || t[key] === undefined) return;
            if (el.getAttribute('data-i18n-html') === 'true') {
                el.innerHTML = t[key];
            } else {
                el.textContent = t[key];
            }
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
