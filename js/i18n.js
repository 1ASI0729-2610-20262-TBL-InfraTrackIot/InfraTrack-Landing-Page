/**
 * InfraTrack — i18n aislado: Términos
 */
(function () {
    const STRINGS = {
        es: {
            meta_title: "InfraTrack",
            meta_description: "InfraTrack - Plataforma IoT de monitoreo inteligente para maquinaria pesada y flotas del sector ferretero y construcción.",
            terms_meta_title: "Términos y Condiciones | InfraTrack",
            terms_meta_description: "Términos y Condiciones de uso del sitio web InfraTrack (proyecto académico UPC).",
            terms_nav_back: "Volver al inicio",
            terms_back_link: "Volver al sitio",
            terms_h1: "Términos y Condiciones",
            terms_updated: "Última actualización: mayo de 2026 · Proyecto académico — Universidad Peruana de Ciencias Aplicadas (UPC)",
            terms_s1_h: "1. Identificación",
            terms_s1_p: "El presente sitio web divulga el proyecto <strong>InfraTrack</strong>, desarrollado por el equipo <strong>TechTitans</strong> como parte de su formación en Ingeniería de Software en la UPC. Los datos de contacto publicados en la landing son referenciales para fines educativos y de demostración.",
            terms_s2_h: "2. Objeto",
            terms_s2_p: "Estas condiciones regulan el acceso y uso del sitio informativo. El contenido tiene carácter descriptivo sobre una solución IoT de monitoreo; no constituye por sí mismo una oferta comercial vinculante salvo que se formalice por otros medios acordados con los titulares del proyecto.",
            terms_s3_h: "3. Uso permitido",
            terms_s3_intro: "El usuario se compromete a:",
            terms_s3_li1: "Utilizar el sitio de forma lícita y respetuosa con la normativa vigente.",
            terms_s3_li2: "No intentar vulnerar la seguridad, la disponibilidad ni la integridad del sitio o de sistemas vinculados.",
            terms_s3_li3: "No reproducir masivamente los contenidos sin mención de autoría y fines académicos o informativos.",
            terms_s4_h: "4. Propiedad intelectual",
            terms_s4_p: "Marca, logotipos, textos, imágenes y diseño de la landing son obra del equipo o materiales utilizados con fines académicos. Queda prohibido el uso comercial no autorizado que implique confusión sobre el origen del proyecto.",
            terms_s5_h: "5. Limitación de responsabilidad",
            terms_s5_p: "La información se ofrece «tal cual», sin garantía de exhaustividad. InfraTrack no se responsabiliza por decisiones empresariales tomadas únicamente con base en el material de este sitio, ni por interrupciones temporales del servicio de alojamiento.",
            terms_s6_h: "6. Enlaces externos",
            terms_s6_p: "Los enlaces a aplicaciones o demos de terceros (por ejemplo, entornos de prueba en la nube) se ofrecen para conveniencia del visitante. No controlamos esos destinos; su uso queda sujeto a las políticas de cada plataforma.",
            terms_s7_h: "7. Datos personales y formularios",
            terms_s7_p: "Los formularios de la landing pueden ser demostrativos. Cualquier tratamiento real de datos personales deberá contar con bases legales y medidas técnicas adecuadas conforme a la normativa peruana de protección de datos aplicable en el momento del tratamiento.",
            terms_s8_h: "8. Modificaciones",
            terms_s8_p: "El equipo puede actualizar estos términos para reflejar cambios en el proyecto o requisitos académicos. La fecha de «última actualización» indicará la versión vigente.",
            terms_s9_h: "9. Legislación aplicable",
            terms_s9_p: "Para cualquier controversia relacionada con el uso de este sitio informativo, resultarán aplicables las leyes de la República del Perú, sometiéndose las partes a los tribunales competentes de Lima, salvo norma imperativa en contrario.",
            terms_s10_h: "10. Contacto",
            terms_s10_p: "Para consultas sobre estos términos o el proyecto, puede utilizarse el correo indicado en la sección de contacto de la página principal: <a href=\"mailto:contacto@infratrack.pe\">contacto@infratrack.pe</a>.",
            terms_footer_back: "← Volver al inicio",
            terms_footer_copy: "© 2026 InfraTrack (UPC). Proyecto académico.",
        },
        en: {
            meta_title: "InfraTrack",
            meta_description: "InfraTrack — Smart IoT monitoring platform for heavy machinery and fleets in hardware retail and construction.",
            terms_meta_title: "Terms and Conditions | InfraTrack",
            terms_meta_description: "Terms and Conditions of use of the InfraTrack website (UPC academic project).",
            terms_nav_back: "Back to home",
            terms_back_link: "Back to site",
            terms_h1: "Terms and Conditions",
            terms_updated: "Last updated: May 2026 · Academic project — Universidad Peruana de Ciencias Aplicadas (UPC), Peru",
            terms_s1_h: "1. Identification",
            terms_s1_p: "This website presents the <strong>InfraTrack</strong> project, developed by the <strong>TechTitans</strong> team as part of their Software Engineering studies at UPC. Contact details published on the landing page are indicative for educational and demonstration purposes.",
            terms_s2_h: "2. Purpose",
            terms_s2_p: "These terms govern access to and use of the informational website. Content is descriptive of an IoT monitoring solution; it does not by itself constitute a binding commercial offer unless formalized through other means agreed with the project owners.",
            terms_s3_h: "3. Permitted use",
            terms_s3_intro: "The user agrees to:",
            terms_s3_li1: "Use the site lawfully and in compliance with applicable regulations.",
            terms_s3_li2: "Not attempt to compromise the security, availability, or integrity of the site or related systems.",
            terms_s3_li3: "Not mass-reproduce content without attribution and academic or informational purpose.",
            terms_s4_h: "4. Intellectual property",
            terms_s4_p: "Brand, logos, text, images, and landing design are the team’s work or materials used for academic purposes. Unauthorized commercial use that creates confusion about the project’s origin is prohibited.",
            terms_s5_h: "5. Limitation of liability",
            terms_s5_p: "Information is provided “as is” without guarantee of completeness. InfraTrack is not liable for business decisions based solely on this site’s materials, nor for temporary interruptions of hosting services.",
            terms_s6_h: "6. External links",
            terms_s6_p: "Links to third-party applications or demos (e.g. cloud test environments) are provided for visitor convenience. We do not control those destinations; their use is subject to each platform’s policies.",
            terms_s7_h: "7. Personal data and forms",
            terms_s7_p: "Landing forms may be demonstrative. Any real processing of personal data must have a lawful basis and appropriate technical measures under Peruvian data protection law in force at the time of processing.",
            terms_s8_h: "8. Changes",
            terms_s8_p: "The team may update these terms to reflect project changes or academic requirements. The “last updated” date will indicate the current version.",
            terms_s9_h: "9. Applicable law",
            terms_s9_p: "For any dispute related to use of this informational site, the laws of the Republic of Peru shall apply, and the parties submit to the competent courts of Lima, unless mandatory law provides otherwise.",
            terms_s10_h: "10. Contact",
            terms_s10_p: "For questions about these terms or the project, you may use the email indicated on the homepage contact section: <a href=\"mailto:contacto@infratrack.pe\">contacto@infratrack.pe</a>.",
            terms_footer_back: "← Back to home",
            terms_footer_copy: "© 2026 InfraTrack (UPC). Academic project.",
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