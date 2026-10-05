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
    // ИНТЕРАКТИВНЫЕ ТАЩИБЕЛЬНЫЕ СКВИШИ (DRAG & DROP + SQUISH)
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

    const dropPhrases = {
        ru: ["ШМЯК!", "БУХ!", "ПЛЮХ!", "КУДЫ?!", "ОПА!"],
        en: ["SPLAT!", "BONK!", "PLOP!", "WHEEE!", "BOOM!"]
    };

    const panicPhrases = ["(°Д°)!?", "(((;ﾟДﾟ)))", "ААА!", "NOOO!", "Σ(°ロ°)"];

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

    // Звук глухого плюха при падении на стол
    function playThud() {
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            const ctx = new AudioCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "triangle";
            const now = ctx.currentTime;
            osc.frequency.setValueAtTime(140, now);
            osc.frequency.exponentialRampToValueAtTime(40, now + 0.12);

            gain.gain.setValueAtTime(0.35, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.12);
        } catch (e) {}
    }

    function makeDraggableSquish(elementId, bubbleId, soundPitch) {
        const el = document.getElementById(elementId);
        const bubble = document.getElementById(bubbleId);
        if (!el) return;

        let isDragging = false;
        let hasMoved = false;
        let startX = 0, startY = 0;
        let initialLeft = 0, initialTop = 0;

        el.addEventListener("pointerdown", (e) => {
            isDragging = true;
            hasMoved = false;
            startX = e.clientX;
            startY = e.clientY;

            // Считываем точные экранные координаты, отвязывая от right/bottom
            const rect = el.getBoundingClientRect();
            initialLeft = rect.left + window.scrollX;
            initialTop = rect.top + window.scrollY;

            el.style.left = initialLeft + "px";
            el.style.top = initialTop + "px";
            el.style.right = "auto";
            el.style.bottom = "auto";

            el.setPointerCapture(e.pointerId);
            playSqueak(soundPitch);
        });

        el.addEventListener("pointermove", (e) => {
            if (!isDragging) return;

            const dx = e.clientX - startX;
            const dy = e.clientY - startY;

            // Если сдвинули больше 6 пикселей — переходим в режим таскания
            if (!hasMoved && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
                hasMoved = true;
                el.classList.add("is-dragging");
                
                // Включаем паническое облачко при переносе
                if (bubble) {
                    bubble.textContent = panicPhrases[Math.floor(Math.random() * panicPhrases.length)];
                    bubble.classList.add("show");
                }
            }

            if (hasMoved) {
                el.style.left = (initialLeft + dx) + "px";
                el.style.top = (initialTop + dy) + "px";
            }
        });

        function endDrag(e) {
            if (!isDragging) return;
            isDragging = false;

            try { el.releasePointerCapture(e.pointerId); } catch(err) {}
            el.classList.remove("is-dragging");

            if (hasMoved) {
                // ПРИЗЕМЛЕНИЕ: смачно плюхается на стол
                playThud();
                el.style.zIndex = "20"; // Сквиш лежит поверх предмета и не застревает
                el.classList.remove(...animTypes);
                void el.offsetWidth;
                el.classList.add("squash-pancake");

                if (bubble) {
                    const curLang = document.documentElement.lang === "en" ? "en" : "ru";
                    const list = dropPhrases[curLang] || dropPhrases.ru;
                    bubble.textContent = list[Math.floor(Math.random() * list.length)];
                    bubble.classList.add("show");
                    setTimeout(() => bubble.classList.remove("show"), 600);
                }
            } else {
                // ОБЫЧНЫЙ КЛИК (Жмяканье на месте)
                el.classList.remove(...animTypes);
                void el.offsetWidth;
                const randomAnim = animTypes[Math.floor(Math.random() * animTypes.length)];
                el.classList.add(randomAnim);

                if (bubble) {
                    const curLang = document.documentElement.lang === "en" ? "en" : "ru";
                    const list = squishPhrases[curLang] || squishPhrases.ru;
                    bubble.textContent = list[Math.floor(Math.random() * list.length)];
                    bubble.classList.add("show");
                    setTimeout(() => bubble.classList.remove("show"), 550);
                }
            }
        }

        el.addEventListener("pointerup", endDrag);
        el.addEventListener("pointercancel", endDrag);
    }

    makeDraggableSquish("skvish1", "bubble1", 1.0);
    makeDraggableSquish("skvish2", "bubble2", 1.45);
});
