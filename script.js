F// ==============================
// Zagush Website
// script.js
// ==============================

console.log("Zagush website loaded!");

// ------------------------------
// Smooth scrolling (backup)
// ------------------------------

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ------------------------------
// Active navigation
// ------------------------------

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ------------------------------
// Placeholder links
// ------------------------------

document.querySelectorAll('.card[href="#"]').forEach(card => {

    card.addEventListener("click", function(event) {

        event.preventDefault();

        alert("Coming soon!");

    });

});