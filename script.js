document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        ru: {
            logo: "ЗАГУШ",
            aboutTitle: "ОБО МНЕ",
            introText: "Я создаю цифровое искусство, граффити, традиционные работы и многое другое.<br>Больше моих работ можно посмотреть в социальных сетях.",
            portfolioText: "ПОРТФОЛИО",
            socialsText: "СОЦСЕТИ",
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
            socialsText: "SOCIALS",
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
        socialsText: document.getElementById("socialsText"),
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
        elements.socialsText.textContent = data.socialsText;
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
        const newLang = currentLang === "ru" ? "en" : "ru";
        applyLanguage(newLang);
    });
});
