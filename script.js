document.addEventListener("DOMContentLoaded", () => {
    // ========================================================
    // 1. БИЛИНГВАЛЬНЫЙ ПЕРЕВОД (RU / EN)
    // ========================================================
    const translations = {
        ru: {
            logo: "ЗАГУШ",
            introText: "Я создаю цифровое искусство, граффити, традиционные работы и многое другое.<br>Больше моих работ можно посмотреть в социальных сетях.",
            portfolioText: "ПОРТФОЛИО",
            socialsLabel: "СОЦСЕТИ",
            modalTitle: "МОИ СОЦСЕТИ",
            drawText: "РИСОВАТЬ",
            contactText: "КОНТАКТЫ",
            btnText: "EN"
        },
        en: {
            logo: "ZAGUSH",
            introText: "I create digital art, graffiti, traditional works and more.<br>Explore more of my work on social media.",
            portfolioText: "PORTFOLIO",
            socialsLabel: "SOCIALS",
            modalTitle: "MY SOCIALS",
            drawText: "DRAW",
            contactText: "CONTACT",
            btnText: "RU"
        }
    };

    const langBtn = document.getElementById("languageSwitch");

    function setLanguage(lang) {
        const t = translations[lang] || translations.ru;
        document.documentElement.lang = lang;

        const setTxt = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.textContent = val;
        };

        setTxt("logo", t.logo);
        setTxt("portfolioText", t.portfolioText);
        setTxt("socialsLabel", t.socialsLabel);
        setTxt("modalTitle", t.modalTitle);
        setTxt("drawText", t.drawText);
        setTxt("contactText", t.contactText);

        const intro = document.getElementById("introText");
        if (intro) intro.innerHTML = t.introText;

        if (langBtn) langBtn.textContent = t.btnText;

        try {
            localStorage.setItem("user_lang", lang);
        } catch (e) {}
    }

    let saved = "ru";
    try {
        saved = localStorage.getItem("user_lang") || "ru";
    } catch (e) {}
    setLanguage(saved);

    if (langBtn) {
        langBtn.addEventListener("click", () => {
            const current = document.documentElement.lang === "en" ? "en" : "ru";
            setLanguage(current === "ru" ? "en" : "ru");
        });
    }

    // ========================================================
    // 2. МОДАЛКА ТЕЛЕФОНА (СОЦСЕТИ)
    // ========================================================
    const phoneTrigger = document.getElementById("phoneTrigger");
    const phoneModal = document.getElementById("phoneModal");
    const modalBackdrop = document.getElementById("modalBackdrop");
    const modalClose = document.getElementById("modalClose");

    function openModal() {
        if (phoneModal) phoneModal.classList.add("active");
    }

    function closeModal() {
        if (phoneModal) phoneModal.classList.remove("active");
    }

    if (phoneTrigger) {
        phoneTrigger.addEventListener("click", openModal);
        phoneTrigger.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openModal();
            }
        });
    }

    if (modalClose) modalClose.addEventListener("click", closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && phoneModal && phoneModal.classList.contains("active")) {
            closeModal();
        }
    });

    // ========================================================
    // 3. ИНТЕРАКТИВНЫЕ СКВИШИ (БИЛИНГВАЛЬНЫЕ + КАОМОДЗИ)
    // ========================================================
    const squishPhrases = {
        ru: [
            "мяу :3", "(=^･ω･^=)", "тыгыдык!", "мур-мур", "шшш!",
            ":D", ":P", "(⁠≧⁠▽⁠≦⁠)", "приви!", "@zagush",
            "(⁠つ⁠✧⁠ω⁠✧⁠)⁠つ", "мяу мяу!", "не жмякай!", "кусь!",
            "ня :3", "(⁠◕⁠‿⁠◕⁠)", "ой!", "чпок!", "бульк!"
        ],
        en: [
            "meow :3", "(=^･ω･^=)", "zoomies!", "purr-purr", "hiss!",
            ":D", ":P", "(⁠≧⁠▽⁠≦⁠)", "heyy!", "@zagush",
            "(⁠つ⁠✧⁠ω⁠✧⁠)⁠つ", "meow meow!", "don't squish!", "nom!",
            "nya :3", "(⁠◕⁠‿⁠◕⁠)", "ouch!", "pop!", "boop!"
        ]
    };

    const animTypes = ["squash-pancake", "squash-sausage", "squash-diagonal", "squash-pop"];

    function playSqueak(pitchModifier = 1) {
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            const ctx = new AudioCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "sine";
            const now = ctx.currentTime;

            osc.frequency.setValueAtTime(260 * pitchModifier, now);
            osc.frequency.exponentialRampToValueAtTime(700 * pitchModifier, now + 0.08);

            gain.gain.setValueAtTime(0.22, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now);
            osc.stop(now + 0.1);
        } catch (e) {}
    }

    function setupSquish(elementId, bubbleId, soundPitch) {
        const el = document.getElementById(elementId);
        const bubble = document.getElementById(bubbleId);
        if (!el) return;

        el.addEventListener("pointerdown", () => {
            playSqueak(soundPitch);

            animTypes.forEach(a => el.classList.remove(a));
            void el.offsetWidth;
            const randomAnim = animTypes[Math.floor(Math.random() * animTypes.length)];
            el.classList.add(randomAnim);

            if (bubble) {
                // Выбираем фразы в зависимости от языка страницы
                const curLang = document.documentElement.lang === "en" ? "en" : "ru";
                const list = squishPhrases[curLang] || squishPhrases.ru;
                bubble.textContent = list[Math.floor(Math.random() * list.length)];
                
                bubble.classList.add("show");
                setTimeout(() => bubble.classList.remove("show"), 550);
            }
        });
    }

    setupSquish("skvish1", "bubble1", 1.0);  // Басовый чпок слева
    setupSquish("skvish2", "bubble2", 1.45); // Писклявый чпок справа
    setupSquish("skvish1", "bubble1", 1.0);  // Басовитый жмяк слева
    setupSquish("skvish2", "bubble2", 1.45); // Писклявый чпок справа
});
