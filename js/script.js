document.addEventListener('DOMContentLoaded', () => {
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

});
