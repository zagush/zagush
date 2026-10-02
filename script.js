document.addEventListener("DOMContentLoaded", () => {

```
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
// LANGUAGE SWITCH
// =========================================

const languageSwitch =
    document.getElementById("languageSwitch");


if (!languageSwitch) {
    console.error("Language button not found.");
    return;
}


let currentLanguage = "ru";


function setLanguage(language) {

    currentLanguage = language;

    document.documentElement.lang = language;


    const elements =
        document.querySelectorAll("[data-i18n]");


    elements.forEach((element) => {

        const key = element.getAttribute("data-i18n");

        if (
            translations[language] &&
            translations[language][key]
        ) {
            element.textContent =
                translations[language][key];
        }

    });


    /*
     * The button shows the language
     * that you can switch TO.
     */

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
// BUTTON
// =========================================

languageSwitch.addEventListener("click", () => {

    if (currentLanguage === "ru") {

        setLanguage("en");

    } else {

        setLanguage("ru");

    }

});


// =========================================
// START
// =========================================

const savedLanguage =
    localStorage.getItem("zagush-language");


if (
    savedLanguage === "ru" ||
    savedLanguage === "en"
) {

    setLanguage(savedLanguage);

} else {

    setLanguage("ru");

}


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

});
