// =========================================
// ZAGUSH WEBSITE
// =========================================

console.log("ZAGUSH website loaded.");


// =========================================
// TRANSLATIONS
// =========================================

const translations = {

    ru: {
        "about-title": "ОБО МНЕ",

        "about-text":
            "Создаю иллюстрации, игры, пиксель-арт и цифровые работы.",

        "portfolio": "ПОРТФОЛИО",

        "socials": "СОЦСЕТИ",

        "draw": "РИСОВАТЬ",

        "contact": "КОНТАКТЫ"
    },

    en: {
        "about-title": "ABOUT",

        "about-text":
            "Creating illustrations, games, pixel art and digital works.",

        "portfolio": "PORTFOLIO",

        "socials": "SOCIALS",

        "draw": "DRAW",

        "contact": "CONTACT"
    }

};


// =========================================
// LANGUAGE
// =========================================

const languageSwitch = document.getElementById("languageSwitch");

let currentLanguage =
    localStorage.getItem("zagush-language") || "ru";


function setLanguage(language) {

    currentLanguage = language;

    document.documentElement.lang = language;

    const elements =
        document.querySelectorAll("[data-i18n]");

    elements.forEach((element) => {

        const key = element.dataset.i18n;

        if (translations[language][key]) {

            element.textContent =
                translations[language][key];

        }

    });


    // Button shows the language
    // that can be switched TO

    if (language === "ru") {
        languageSwitch.textContent = "EN";
        languageSwitch.setAttribute(
            "aria-label",
            "Switch to English"
        );
    } else {
        languageSwitch.textContent = "RU";
        languageSwitch.setAttribute(
            "aria-label",
            "Переключить на русский"
        );
    }


    localStorage.setItem(
        "zagush-language",
        language
    );
}


// =========================================
// LANGUAGE BUTTON
// =========================================

languageSwitch.addEventListener("click", () => {

    const nextLanguage =
        currentLanguage === "ru"
            ? "en"
            : "ru";

    setLanguage(nextLanguage);
});


// =========================================
// INITIAL LANGUAGE
// =========================================

setLanguage(currentLanguage);


// =========================================
// OBJECT INTERACTION
// =========================================

const objects =
    document.querySelectorAll(".object");

objects.forEach((object) => {

    object.addEventListener("mouseenter", () => {
        object.classList.add("is-hovered");
    });

    object.addEventListener("mouseleave", () => {
        object.classList.remove("is-hovered");
    });

});
