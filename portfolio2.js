// =========================
// Typing Animation
// =========================

const words = [
    "Web Developer"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {

    currentWord = words[i];

    const typingElement =
        document.getElementById("typing");

    if (isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, j - 1);

        j--;

    } else {

        typingElement.textContent =
            currentWord.substring(0, j + 1);

        j++;

    }

    let speed = isDeleting ? 80 : 150;

    if (!isDeleting && j === currentWord.length) {

        speed = 1200;
        isDeleting = true;

    } else if (isDeleting && j === 0) {

        isDeleting = false;
        i++;

        if (i === words.length) {
            i = 0;
        }

        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", () => {

    setTimeout(typeEffect, 1000);

});

// =========================
// Dark / Light Mode
// =========================

const themeToggle =
    document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon = themeToggle.querySelector("i");

    if(document.body.classList.contains("light-mode")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

});

// =========================
// Hamburger Menu
// =========================

const menuIcon =
    document.getElementById("menu-icon");

const navbar =
    document.getElementById("navbar");

menuIcon.addEventListener("click", () => {

    navbar.classList.toggle("active");

    if(navbar.classList.contains("active")){

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

    }else{

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }

});