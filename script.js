document.addEventListener("DOMContentLoaded", function () {
    const languageButton = document.getElementById("languageSwitch");
    const logo = document.getElementById("logo");
    const aboutTitle = document.getElementById("aboutTitle");
    const introText = document.getElementById("introText");
    const portfolioText = document.getElementById("portfolioText");
    const socialsText = document.getElementById("socialsText");
    const drawText = document.getElementById("drawText");
    const contactText = document.getElementById("contactText");

    let english = false;

    languageButton.addEventListener("click", function () {
        english = !english;

        if (english) {
            document.documentElement.lang = "en";
            logo.textContent = "ZAGUSH";
            aboutTitle.textContent = "ABOUT ME";
            introText.innerHTML =
                "I create digital art, graffiti, traditional works and more." +
                "<br>" +
                "Explore more of my work on social media.";
            portfolioText.textContent = "PORTFOLIO";
            socialsText.textContent = "SOCIALS";
            drawText.textContent = "DRAW";
            contactText.textContent = "CONTACT";
            languageButton.textContent = "RU";
        } else {
            document.documentElement.lang = "ru";
            logo.textContent = "ЗАГУШ";
            aboutTitle.textContent = "ОБО МНЕ";
            introText.innerHTML =
                "Я создаю цифровое искусство, граффити, традиционные работы и многое другое." +
                "<br>" +
                "Больше моих работ можно посмотреть в социальных сетях.";
            portfolioText.textContent = "ПОРТФОЛИО";
            socialsText.textContent = "СОЦСЕТИ";
            drawText.textContent = "РИСОВАТЬ";
            contactText.textContent = "КОНТАКТЫ";
            languageButton.textContent = "EN";
        }
    });
});
