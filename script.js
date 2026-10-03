document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        ru: {
            logo: "ЗАГУШ",
            aboutTitle: "ОБО МНЕ",
            introText: "Я создаю цифровое искусство, граффити, традиционные работы и многое другое.<br>Больше моих работ можно посмотреть в социальных сетях.",
            portfolioText: "ПОРТФОЛИО",
            socialsLabel: "СОЦСЕТИ",
            modalTitle: "МОИ СОЦСЕТИ",
            drawText: "РИСОВАТЬ",
            contactText: "КОНТАКТЫ",
            btnText: "EN",
            btnAria: "Сменить язык на английский"
        },
        en: {
            logo: "ZAGUSH",
            aboutTitle: "ABOUT ME",
            introText: "I create digital art, graffiti, traditional works and more.<br>Explore more of my work on social media.",
            portfolioText: "PORTFOLIO",
            socialsLabel: "SOCIALS",
            modalTitle: "MY SOCIALS",
            drawText: "DRAW",
            contactText: "CONTACT",
            btnText: "RU",
            btnAria: "Switch language to Russian"
        }
    };

    const elements = {
        btn: document.getElementById("languageSwitch"),
        logo: document.getElementById("logo"),
        aboutTitle: document.getElementById("aboutTitle"),
        introText: document.getElementById("introText"),
        portfolioText: document.getElementById("portfolioText"),
        socialsLabel: document.getElementById("socialsLabel"),
        modalTitle: document.getElementById("modalTitle"),
        drawText: document.getElementById("drawText"),
        contactText: document.getElementById("contactText")
    };

    function applyLanguage(lang) {
        const data = translations[lang];
        if (!data) return;

        document.documentElement.lang = lang;
        elements.logo.textContent = data.logo;
        elements.aboutTitle.textContent = data.aboutTitle;
        elements.introText.innerHTML = data.introText;
        elements.portfolioText.textContent = data.portfolioText;
        elements.socialsLabel.textContent = data.socialsLabel;
        elements.modalTitle.textContent = data.modalTitle;
        elements.drawText.textContent = data.drawText;
        elements.contactText.textContent = data.contactText;
        elements.btn.textContent = data.btnText;
        elements.btn.setAttribute("aria-label", data.btnAria);

        try {
            localStorage.setItem("user_lang", lang);
        } catch (e) {}
    }

    let savedLang = "ru";
    try {
        savedLang = localStorage.getItem("user_lang") || "ru";
    } catch (e) {}
    applyLanguage(savedLang);

    elements.btn.addEventListener("click", () => {
        const currentLang = document.documentElement.lang === "en" ? "en" : "ru";
        applyLanguage(currentLang === "ru" ? "en" : "ru");
    });

    // Интерактив телефона
    const phoneTrigger = document.getElementById("phoneTrigger");
    const phoneModal = document.getElementById("phoneModal");
    const modalBackdrop = document.getElementById("modalBackdrop");
    const modalClose = document.getElementById("modalClose");

    function openPhone() {
        phoneModal.classList.add("active");
        phoneModal.setAttribute("aria-hidden", "false");
    }

    function closePhone() {
        phoneModal.classList.remove("active");
        phoneModal.setAttribute("aria-hidden", "true");
    }

    phoneTrigger.addEventListener("click", openPhone);
    phoneTrigger.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openPhone();
        }
    });

    modalClose.addEventListener("click", closePhone);
    modalBackdrop.addEventListener("click", closePhone);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && phoneModal.classList.contains("active")) {
            closePhone();
        }
    });
});
