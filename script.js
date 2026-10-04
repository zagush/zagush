document.addEventListener("DOMContentLoaded", () => {
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

    // Модальное окно телефона
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
});
