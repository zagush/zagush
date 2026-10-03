document.addEventListener("DOMContentLoaded", function () {

```
const languageButton = document.getElementById("languageSwitch");

const logo = document.getElementById("logo");

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


const objects = document.querySelectorAll(".object");


objects.forEach(function (object) {

    object.addEventListener("mouseenter", function () {
        object.classList.add("is-hovered");
    });

    object.addEventListener("mouseleave", function () {
        object.classList.remove("is-hovered");
    });

});
```

});
